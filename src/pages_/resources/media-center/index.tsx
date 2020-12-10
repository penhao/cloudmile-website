import React, {useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import BlogPostList from "../../../components/sections/blog/BlogPostList";
import BlogBanner from "../../../components/sections/blog/BlogBanner";
import CategoryFilterList from "../../../components/sections/resources/CategoryFilterList";
import IdleNewsletterModal from "../../../components/modal/IdleNewsletterModal";
import useTranslation from "next-translate/useTranslation";
import {fetchTagList, fetchMediaCenterList, fetchBlogList} from "../../../services/ApiServices";
import {GetServerSidePropsContext} from "next";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";

const MediaCenter = ({fetchCategory, fetchPost}) => {
    const currentRoute = getRoute('Media Center', siteRoutes)[0];
    const {t, lang} = useTranslation();
    const [categoryData, setCategoryData] = useState(null);
    const [postData, setPostData] = useState<any[]>([]);
    const [startCount, setStartCount] = useState(1);
    const [disabledMore, setDisabledMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const getPostData = async (startCount: number) => {
        return await fetchMediaCenterList(lang, startCount + 1, 10);
    };
    const handleMoreClick = async (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsLoading(true);
        getPostData(startCount).then((response: any) => {
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
        if (fetchCategory.status) {
            setCategoryData(fetchCategory.data);
        }
        if (fetchPost.status) {
            setPostData(fetchPost.data);
            setStartCount(fetchPost.data.length);
            setDisabledMore(fetchPost.total <= fetchPost.data.length);
        }
    }, [lang]);
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <BlogBanner title={t('media-center:Media Center')}
                        caption={t('media-center:Stay up-to-date with CloudMile News')}
                        parentPage={'media-center'}/>
            <CategoryFilterList parentPage={'media-center'}
                                title={t('media-center:Insights')}
                                categoryData={categoryData}/>
            <BlogPostList parentPage={'media-center'}
                          coverUrl={'/media-center/media-center-toning.jpg'}
                          postData={postData}
                          isLoading={isLoading}
                          disabledMore={disabledMore}
                          moreHandler={handleMoreClick}/>
            <IdleNewsletterModal
                title={t('media-center:Want To Know More About Our Exclusive Offers, Global Digital Trends, and More?')}
                caption={t('media-center:Sign Up For Newsletter')}
                salesforceData={null}/>
        </Layout>
    );
};
export const getServerSideProps = async ({locale}: GetServerSidePropsContext) => {
    const fetchCategory = await fetchTagList(locale, 3);
    const fetchPost = await fetchMediaCenterList(locale, 1, 10);
    return {
        props: {
            fetchCategory,
            fetchPost
        }
    }
};
export default MediaCenter;