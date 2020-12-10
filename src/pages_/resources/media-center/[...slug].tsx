import React, {useEffect, useRef, useState} from 'react';
import Layout from "../../../components/Layout";
import {GetServerSidePropsContext} from "next";
import useTranslation from "next-translate/useTranslation";
import ScrollProgress from "../../../components/sections/resources/ScrollProgress";
import BlogDetailBanner from "../../../components/sections/blog/BlogDetailBanner";
import BlogDetailHead from "../../../components/sections/blog/BlogDetailHead";
import Download from "../../../components/sections/Download";
import RelatedPost from "../../../components/sections/resources/RelatedPost";
import NewsLetter from "../../../components/sections/NewsLetter";
import BlogDetailArticle from "../../../components/sections/blog/BlogDetailArticle";
import IdleNewsletterModal from "../../../components/modal/IdleNewsletterModal";
import {fetchMediaCenterArticle} from "../../../services/ApiServices";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import {isValueEmpty} from "../../../utils/Utils";
import {SalesforcePostParams} from "../../../components/useUrlParams";
import {useRouter} from "next/router";

const MediaCenterDetail = ({postData}) => {

    const {t} = useTranslation();
    const router = useRouter();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const contactRef = useRef<HTMLDivElement>(null);
    const [salesforceData, setSalesforceData] = useState<SalesforcePostParams | null>(null);
    const handleScroll = () => {
        window.scrollTo({behavior: "smooth", top: contactRef.current.offsetTop});
    };
    useEffect(() => {
        setSalesforceData({
            utmSource: postData.utm_source,
            utmMedium: postData.utm_medium,
            utmCampaign: postData.utm_campaign,
            leadSource: postData.lead_source,
            campaignId: postData.salesforce_id,
            redirectUrl: postData.download_url
        });
    }, [postData]);

    return (
        <Layout metadata={{
            title: postData.seo_title,
            desc: postData.seo_description,
            keywords: postData.seo_keyword,
            href: router.asPath,
            shareImg: postData.image_social,
            isPostHref: true
        }}>
            <ScrollProgress/>
            <BlogDetailBanner imgUrl={smUp ? postData.image_pc : postData.image_mobile}/>
            <BlogDetailHead title={postData.title}
                            date={postData.created_at}
                            tagData={postData.tags}
                            parentPage={'media-center'}/>
            <BlogDetailArticle contents={postData.content} scrollHandler={handleScroll}/>
            {
                (!isValueEmpty(postData.download_title))
                    ?
                    <Download parentPage={'media-center'}
                              title={postData.download_title}
                              salesforceData={salesforceData}/>
                    :
                    null
            }
            <RelatedPost parentPage={'media-center'}
                         postData={postData.related_article}
                         title={t('media-center:Related Articles').toUpperCase()}/>
            <div ref={contactRef}>
                <NewsLetter
                    title={t('media-center:Want To Know More About Our Exclusive Offers, Global Digital Trends, and More?')}
                    caption={t('media-center:Join the CloudMile Newsletter')}
                    salesforceData={salesforceData}/>
            </div>
            <IdleNewsletterModal
                title={t('media-center:Want To Know More About Our Exclusive Offers, Global Digital Trends, and More?')}
                caption={t('media-center:Sign Up For Newsletter')}
                salesforceData={salesforceData}/>
        </Layout>

    );
};

export const getServerSideProps = async ({locale, query, res}: GetServerSidePropsContext) => {
    const postData = await fetchMediaCenterArticle(locale, query.slug[0]);
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
export default MediaCenterDetail;
