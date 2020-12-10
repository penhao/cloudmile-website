import React, {useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import BlogPostList from "../../../components/sections/blog/BlogPostList";
import BlogBanner from "../../../components/sections/blog/BlogBanner";
import CategoryFilterList from "../../../components/sections/resources/CategoryFilterList";
import IdleNewsletterModal from "../../../components/modal/IdleNewsletterModal";
import useTranslation from "next-translate/useTranslation";
import {fetchTagList, fetchBlogList} from "../../../services/ApiServices";
import {GetServerSidePropsContext} from "next";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";

const Blog = ({fetchCategory, fetchPost}) => {

    const currentRoute = getRoute('Blog', siteRoutes)[0];
    const {t, lang} = useTranslation();
    const [categoryData, setCategoryData] = useState(null);
    const [postData, setPostData] = useState<any[]>([]);
    const [startCount, setStartCount] = useState(1);
    const [disabledMore, setDisabledMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const getPostData = async (startCount: number) => {
        return await fetchBlogList(lang, startCount + 1, 10);
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
            <BlogBanner title={t('blog:Technical Insights')}
                        caption={t('blog:From Insights To Impact')}
                        parentPage={'blog'}/>
            <CategoryFilterList parentPage={'blog'}
                                title={t('blog:Insights')}
                                categoryData={categoryData}/>
            <BlogPostList parentPage={'blog'}
                          coverUrl={'/blog/city.jpg'}
                          postData={postData}
                          isLoading={isLoading}
                          disabledMore={disabledMore}
                          moreHandler={handleMoreClick}/>
            <IdleNewsletterModal
                title={t('blog:Want To Know More About Our Exclusive Offers, Global Digital Trends, and More?')}
                caption={t('blog:Sign Up For Newsletter')}
                salesforceData={null}/>
        </Layout>
    );
};
export const getServerSideProps = async ({locale}: GetServerSidePropsContext) => {
    const fetchCategory = await fetchTagList(locale, 1);
    const fetchPost = await fetchBlogList(locale, 1, 10);
    return {
        props: {
            fetchCategory,
            fetchPost
        }
    }
};
export default Blog;