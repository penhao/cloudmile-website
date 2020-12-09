import React, {Fragment, useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import EventListBanner from "../../../components/sections/event/EventListBanner";
import EventList from "../../../components/sections/event/EventList";
import useTranslation from "next-translate/useTranslation";
import EventTopicItem from "../../../components/sections/event/EventTopicItem";
import {fetchEventList, fetchTagList} from "../../../services/ApiServices";
import {GetServerSidePropsContext} from "next";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";
import CategoryFilterList from "../../../components/sections/resources/CategoryFilterList";

const Event = ({fetchCategory, fetchPost}) => {
    const currentRoute = getRoute('Event', siteRoutes)[0];
    const {t, lang} = useTranslation();
    const [categoryData, setCategoryData] = useState([null]);
    const [postData, setPostData] = useState<any[]>([]);
    const [startCount, setStartCount] = useState(1);
    const [disabledMore, setDisabledMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const getPostData = async (limit: number) => {
        return await fetchEventList(lang, startCount, limit);
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
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <EventListBanner/>
            {
                postData.length
                    ?
                    <Fragment>
                        <EventTopicItem itemData={postData[0]}/>
                        {
                            categoryData?.length
                                ?
                                <CategoryFilterList parentPage={'event'}
                                                    title={t('event:Insights')}
                                                    categoryData={categoryData}/>
                                :
                                null
                        }
                        <EventList postData={postData}
                                   isLoading={isLoading}
                                   disabledMore={disabledMore}
                                   moreHandler={handleMoreClick}/>
                    </Fragment>
                    : null
            }
        </Layout>
    );
};
export const getServerSideProps = async ({locale}: GetServerSidePropsContext) => {
    const lang = (locale === 'zh-hant') ? 'tw' : locale;
    const fetchCategory = await fetchTagList(lang, 2);
    const fetchPost = await fetchEventList(lang, 1, 9);
    return {
        props: {
            fetchCategory,
            fetchPost
        }
    }
};
export default Event;
