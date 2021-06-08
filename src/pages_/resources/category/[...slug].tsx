import React, { useEffect, useState } from 'react';
import Layout from "../../../components/Layout";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CategoryHead from "../../../components/sections/resources/CategoryHead";
import { GetServerSidePropsContext } from "next";
import { fetchListByTag, fetchTagList } from "../../../services/ApiServices";
import CategoryFilterList from "../../../components/sections/resources/CategoryFilterList";
import PostList from "../../../components/sections/resources/PostList";
import MoreButton from "../../../components/buttons/MoreButton";
import Container from "../../../components/containers/Container";
import SectionContainer from "../../../components/containers/SectionContainer";
import { getMetadada } from '../../../@share/routes/Metadata';

const CategoryPage = ({ categoryData, postData }) => {

    const { t, lang } = useTranslation();
    const router = useRouter();
    const [pageName, setPageName] = useState('');
    const [categoryId, setCategoryId] = useState(-1);
    const [redirectData, setRedirectData] = useState({ title: 'Home', url: '/' });
    const [searchData, setSearchData] = useState([]);
    const [startCount, setStartCount] = useState(1);
    const [disabledMore, setDisabledMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const metadata = getMetadada("/");
    // console.log(postData);

    const getRedirectData = () => {
        switch (router.query.slug[0]) {
            case 'blog':
                return {
                    title: t('category:Technical Insights'),
                    url: '/resources/blog'
                };
            case 'event':
                return {
                    title: t('category:Event'),
                    url: '/resources/event'
                };
            case 'case-study':
                return {
                    title: t('category:Case Study'),
                    url: '/resources/case-study'
                };
            case 'media-center':
                return {
                    title: t('category:Media Center'),
                    url: '/resources/media-center'
                };
        }
    };
    const getPageId = () => {
        switch (router.query.slug[0]) {
            case 'blog':
                return 1;
            case 'event':
                return 2;
            case 'case-study':
                return 3;
            case 'media-center':
                return 5;
        }
    };
    const handleMoreClick = async (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsLoading(true);
        const updateData = await fetchListByTag(lang, getPageId(), categoryId, startCount + 1, 10);
        if (updateData.status) {
            const listTotal = searchData.length + updateData.data.length;
            setStartCount(listTotal);
            setDisabledMore(updateData.total <= listTotal);
            setSearchData([...searchData, ...updateData.data]);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        setPageName(router.query.slug[0]);
        setCategoryId(Number(router.query.slug[1]));
        setRedirectData(getRedirectData());
        setSearchData(postData.data);
        setStartCount(postData.data.length);
        setDisabledMore(postData.total <= postData.data.length);
    }, [router]);

    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <CategoryHead title={postData.tag_title}
                total={postData.total}
                redirect={redirectData} />
            <CategoryFilterList title={t('category:Insights')}
                parentPage={pageName}
                categoryData={categoryData} />
            <SectionContainer>
                <Container maxWidth={{ sm: 680, md: 680 }} paddingX={false}>
                    <PostList currentPage={pageName} list={searchData} />
                    {
                        (!disabledMore)
                            ?
                            <MoreButton disabled={isLoading} clickHandler={handleMoreClick} />
                            :
                            null
                    }
                </Container>
            </SectionContainer>
        </Layout>
    );
};

export const getServerSideProps = async ({ locale, query, res }: GetServerSidePropsContext) => {
    // 1:blog 2:event 3:case study 5: 新聞管理
    let pageId = null;
    // 1:blog 2:event 3: 新聞管理 5:客戶案例
    let categoryId = null;
    const searchId = Number(query.slug[1]);
    switch (query.slug[0]) {
        case 'blog':
            pageId = 1;
            categoryId = 1;
            break;
        case 'event':
            pageId = 2;
            categoryId = 2;
            break;
        case 'case-study':
            pageId = 3;
            categoryId = 5;
            break;
        case 'media-center':
            pageId = 5;
            categoryId = 3;
            break;
    }
    const categoryData = await fetchTagList(locale, categoryId);
    const postData = await fetchListByTag(locale, pageId, searchId, 1, 5);
    if (postData?.error || postData?.error === 'article not found') {
        const redirectUrl = `${(locale === 'zh') ? '/zh' : ''}/404`;
        res.setHeader("location", redirectUrl);
        res.statusCode = 302;
        res.end();
    }
    return {
        props: {
            categoryData: categoryData.data,
            postData
        }
    }
};
export default CategoryPage;
