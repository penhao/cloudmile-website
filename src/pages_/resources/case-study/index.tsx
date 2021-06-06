import React, { useEffect, useState } from 'react';
import Layout from "../../../components/Layout";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import SectionContainer from "../../../components/containers/SectionContainer";
import CategoryFilterList from "../../../components/sections/resources/CategoryFilterList";
import Container from "../../../components/containers/Container";
import Grid from "@material-ui/core/Grid";
import GridItem480 from "../../../components/sections/items/GridItem480";
import GridItemFlexible from "../../../components/sections/items/GridItemFlexible";
import SectionTitleLabel from "../../../components/sections/SectionTitleLabel";
import SectionTitle from "../../../components/sections/SectionTitle";
import SectionDescWrapper from "../../../components/sections/SectionDescWrapper";
import SectionDesc from "../../../components/sections/SectionDesc";
import CaseStudyBanner from "../../../components/sections/case-study/CaseBanner";
import { GetServerSidePropsContext } from "next";
import {
    fetchCaseList,
    fetchHomeSliderList,
    fetchTagList
} from "../../../services/ApiServices";
import CaseStudyList from "../../../components/sections/case-study/CaseStudyList";
import useTranslation from "next-translate/useTranslation";
import SectionCases from "../../../components/sections/home/SectionCases";

import { useRouter } from 'next/router';
import { getMetadada } from '../../../@share/routes/Metadata';
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Breadcrumbs from "../../../components/Breadcrumb";

const useStyles = makeStyles((theme: Theme) => ({
    introTitle: {
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(60)
        }
    },
    descContainer: {
        [theme.breakpoints.up('md')]: {
            paddingTop: '40px'
        }
    }
}));
const CaseStudy = ({ fetchCategory, fetchPost, fetchSlider }) => {

    const classes = useStyles();
    const { t, lang } = useTranslation();
    const [categoryData, setCategoryData] = useState<any[]>([]);
    const [postData, setPostData] = useState<any[]>([]);
    const [sliderData, setSliderData] = useState<any[]>([]);
    const [videoData, setVideoData] = useState<any>({});
    const [startCount, setStartCount] = useState(1);
    const [disabledMore, setDisabledMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const metadata = getMetadada(router.asPath);
    const [breadcrumbData, setBreadcrumbData] = useState([]);

    const getPostData = async (startCount: number) => {
        return await fetchCaseList(lang, startCount + 1, 8);
    };
    const handleMoreClick = async (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsLoading(true);
        getPostData(startCount).then((response) => {
            if (response.status) {
                const listTotal = postData.length + response.data.length;
                setStartCount(listTotal);
                setDisabledMore(response.total <= listTotal);
                setPostData([...postData, ...response.data]);
            }
            setIsLoading(false);
        });
    };
    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb(router.asPath);
        breadcrumbs = breadcrumbs.map((breadcrumb) => {
            return {
                ...breadcrumb,
                breadcrumbName: t(`common:${breadcrumb.breadcrumbName}`),
            };
        })
        setBreadcrumbData(breadcrumbs)
        //
        if (fetchSlider.status) {
            setSliderData(fetchSlider.data.case);
        }
        if (fetchCategory.status) {
            setCategoryData(fetchCategory.data);
        }
        if (fetchPost.status) {
            setVideoData(fetchPost.home);
            setPostData(fetchPost.data);
            setStartCount(fetchPost.data.length);
            setDisabledMore(fetchPost.total <= fetchPost.data.length);
        }
    }, [lang]);
    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <CaseStudyBanner imgUrl={videoData.image} videoUrl={videoData.video} />
            <Container>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <SectionContainer>
                <Container maxWidth={{ md: 1280 }}>
                    <Grid container spacing={4}>
                        <GridItem480 grow={true}>
                            <Container maxWidth={{ xs: 'none', sm: 440, md: 440 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}>
                                    {t('case-study:Explore Success Stories')}
                                </SectionTitleLabel>
                                <SectionTitle variant={"h1"} className={classes.introTitle}>
                                    {t('case-study:Case Study')}
                                </SectionTitle>
                            </Container>
                        </GridItem480>
                        <GridItemFlexible grow={true}>
                            <SectionDescWrapper>
                                <SectionDesc customClass={classes.descContainer}>
                                    <span
                                        dangerouslySetInnerHTML={{ __html: t('case-study:Explore success stories to learn how CloudMile__') }} />
                                </SectionDesc>
                            </SectionDescWrapper>
                        </GridItemFlexible>
                    </Grid>
                </Container>
            </SectionContainer>
            <SectionCases sliderData={sliderData}
                onlySlider={true} />
            <CategoryFilterList title={t('case-study:Cases Tags')}
                parentPage={'case-study'}
                categoryData={categoryData} />
            <CaseStudyList parentPage={'case-study'}
                postData={postData}
                isLoading={isLoading}
                disabledMore={disabledMore}
                moreHandler={handleMoreClick} />
        </Layout>
    );
};

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
    const fetchCategory = await fetchTagList(locale, 5);
    const fetchSlider = await fetchHomeSliderList(locale);
    const fetchPost = await fetchCaseList(locale, 1, 8);
    return {
        props: {
            fetchCategory,
            fetchPost,
            fetchSlider
        }
    }
};
export default CaseStudy;
