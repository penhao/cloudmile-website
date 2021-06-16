import React, { Fragment, useEffect, useState } from 'react';
import Layout from "../../../components/Layout";
import EventListBanner from "../../../components/sections/event/EventListBanner";
import EventList from "../../../components/sections/event/EventList";
import useTranslation from "next-translate/useTranslation";
import EventTopicItem from "../../../components/sections/event/EventTopicItem";
import { fetchEventList, fetchTagList } from "../../../services/ApiServices";
import { GetServerSidePropsContext } from "next";
import CategoryFilterList from "../../../components/sections/resources/CategoryFilterList";

import { useRouter } from 'next/router';
import { getMetadada } from '../../../@share/routes/Metadata';
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Container from '../../../components/containers/Container';
import Breadcrumbs from "../../../components/Breadcrumb";


const Event = ({ fetchCategory, fetchPost }) => {

    const { t, lang } = useTranslation();
    const [categoryData, setCategoryData] = useState([null]);
    const [postData, setPostData] = useState<any[]>([]);
    const [startCount, setStartCount] = useState(1);
    const [disabledMore, setDisabledMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const metadata = getMetadada(router.route);
    const [breadcrumbData, setBreadcrumbData] = useState([]);

    const getPostData = async (limit: number) => {
        return await fetchEventList(lang, startCount + 1, limit);
    };
    const handleMoreClick = async (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsLoading(true);
        getPostData(8).then((response) => {
            if (response.status && response.data.length) {
                const listTotal = postData.length + response.data.length;
                setStartCount(listTotal);
                setDisabledMore(listTotal >= response.total);
                setPostData([...postData, ...response.data]);
            }
            setIsLoading(false);
        });
    };
    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb(router.route);
        breadcrumbs = breadcrumbs.map((breadcrumb) => {
            return {
                ...breadcrumb,
                breadcrumbName: t(`common:${breadcrumb.breadcrumbName}`),
            };
        })
        setBreadcrumbData(breadcrumbs)
        //
        if (fetchCategory.status) {
            setCategoryData(fetchCategory.data);
        }
        if (fetchPost.status) {
            setPostData(fetchPost.data);
            setStartCount(fetchPost.data.length);
            setDisabledMore(fetchPost.data.length >= fetchPost.total);
        }

    }, [lang]);

    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <EventListBanner />
            {
                postData.length
                    ?
                    <Fragment>
                        <EventTopicItem itemData={postData[0]} />
                        <Container maxWidth={{ md: 1280 }}>
                            <Breadcrumbs breadcrumbData={breadcrumbData} />
                        </Container>
                        {
                            categoryData?.length
                                ?
                                <CategoryFilterList parentPage={'event'}
                                    title={t('event:Insights')}
                                    categoryData={categoryData} />
                                :
                                null
                        }
                        <EventList postData={postData}
                            isLoading={isLoading}
                            disabledMore={disabledMore}
                            moreHandler={handleMoreClick} />
                    </Fragment>
                    : null
            }
        </Layout>
    );
};
export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
    const fetchCategory = await fetchTagList(locale, 2);
    const fetchPost = await fetchEventList(locale, 1, 9);
    return {
        props: {
            fetchCategory,
            fetchPost
        }
    }
};
export default Event;
