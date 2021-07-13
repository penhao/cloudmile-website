import React, { useEffect, useRef, useState } from 'react';
import Layout from "../../../components/Layout";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import useTranslation from "next-translate/useTranslation";
import ScrollProgress from "../../../components/sections/resources/ScrollProgress";
import BlogDetailBanner from "../../../components/blog-detail/BlogDetailBanner";
import BlogDetailHead from "../../../components/blog-detail/BlogDetailHead";
import Download from "../../../components/sections/Download";
import RelatedPost from "../../../components/sections/resources/RelatedPost";
import NewsLetter from "../../../components/sections/NewsLetter";
import BlogDetailArticle from "../../../components/blog/BlogDetailArticle";
import IdleNewsletterModal from "../../../components/modal/IdleNewsletterModal";
import { fetchBlogArticle } from "../../../services/ApiServices";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import { isValueEmpty } from "../../../utils/Utils";
import { SalesforcePostParams } from "../../../components/useUrlParams";
import { useRouter } from "next/router";
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Container from '../../../components/containers/Container';
import Breadcrumbs from "../../../components/Breadcrumb";

const BlogDetail = ({ postData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const contactRef = useRef<HTMLDivElement>(null);
    const [salesforceData, setSalesforceData] = useState<SalesforcePostParams | null>(null);
    const [breadcrumbData, setBreadcrumbData] = useState([]);
    const handleScroll = () => {
        window.scrollTo({ behavior: "smooth", top: contactRef.current.offsetTop });
    };

    console.log(postData)

    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb("/resources/blog");
        breadcrumbs = breadcrumbs.map((breadcrumb) => {
            return {
                ...breadcrumb,
                breadcrumbName: t(`common:${breadcrumb.breadcrumbName}`),
            };
        })
        breadcrumbs.push({
            path: router.asPath,
            breadcrumbName: postData.title
        })
        setBreadcrumbData(breadcrumbs)
        //
        setSalesforceData({
            utmSource: postData.utm_source,
            utmMedium: postData.utm_medium,
            utmCampaign: postData.utm_campaign,
            leadSource: postData.lead_source,
            campaignId: postData.salesforce_id,
            redirectUrl: postData.download_url,
            country: postData.country
        });
    }, [postData]);


    return (
        <Layout metadata={{
            href: "/resources/blog",
            title: postData.seo_title,
            desc: postData.seo_description,
            keywords: postData.seo_keyword,
            shareImage: postData.image_social,
            customBreadcrumbNode: {
                breadcrumbName: postData.title,
                path: router.asPath
            }
        }}>
            <ScrollProgress />
            <BlogDetailBanner imgUrl={smUp ? postData.image_pc : postData.image_mobile} />
            <Container maxWidth={{ md: 1280 }}>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <BlogDetailHead title={postData.title}
                date={postData.start_date}
                tagData={postData.tags}
                parentPage={'blog'} />
            <BlogDetailArticle contents={postData.content} scrollHandler={handleScroll} />
            {
                (!isValueEmpty(postData.download_title))
                    ?
                    <Download parentPage={'blog'}
                        title={postData.download_title}
                        salesforceData={salesforceData} />
                    :
                    null
            }
            {/* 推薦文章沒有start_date */}
            <RelatedPost parentPage={'blog'}
                postData={postData.related_article}
                title={t('blog:Related Articles').toUpperCase()} />
            <div ref={contactRef}>
                <NewsLetter
                    title={t('blog:Want To Know More About Our Exclusive Offers, Global Digital Trends, and More?')}
                    caption={t('blog:Join the CloudMile Newsletter')}
                    salesforceData={salesforceData} />
            </div>
            <IdleNewsletterModal
                title={t('blog:Want To Know More About Our Exclusive Offers, Global Digital Trends, and More?')}
                caption={t('blog:Sign Up For Newsletter')}
                salesforceData={salesforceData} />
        </Layout>

    );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, query, res }: GetServerSidePropsContext) => {
    const postData = await fetchBlogArticle(locale, query.slug[0]);
    if (postData?.error || postData?.error === 'article not found') {
        const redirectUrl = `${(locale === 'zh') ? '/zh' : ''}/404`;
        res.setHeader("location", redirectUrl);
        res.statusCode = 302;
        res.end();
    }
    return {
        props: {
            postData: postData.data[0]
        }
    }
};
export default BlogDetail;
