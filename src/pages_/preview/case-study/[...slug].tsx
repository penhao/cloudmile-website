import React, {Fragment, useEffect, useRef, useState} from 'react';
import Layout from "../../../components/Layout";
import CaseDetailHead from "../../../components/sections/case-study/detail/CaseDetailHead";
import CaseDetailArticle from "../../../components/sections/case-study/detail/CaseDetailArticle";
import NewsLetter from "../../../components/sections/NewsLetter";
import IdleNewsletterModal from "../../../components/modal/IdleNewsletterModal";
import CaseDetailBanner from "../../../components/sections/case-study/detail/CaseDetailBanner";
import CaseDetailRelatedPost from "../../../components/sections/case-study/detail/CaseDetailRelatedPost";
import useTranslation from "next-translate/useTranslation";
import {useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import {GetServerSidePropsContext} from "next";
import {SalesforcePostParams} from "../../../components/useUrlParams";
import {fetchPreviewCaseArticle} from "../../../services/ApiServices";
import {useRouter} from "next/router";

const CaseStudyDetail = ({postData}) => {

    const {t} = useTranslation();
    const router = useRouter();
    const contactRef = useRef<HTMLDivElement>(null);
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [salesforceData, setSalesforceData] = useState<SalesforcePostParams | null>(null);

    const handleScroll = () => {
        if (contactRef.current) {
            window.scrollTo({
                behavior: "smooth",
                top: contactRef.current.offsetTop
            });
        }
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
    }, []);
    return (
        <Layout metadata={{
            title: `[Preview]${postData.seo_title}`,
            desc: postData.seo_description,
            keywords: postData.seo_keyword,
            href: router.asPath,
            shareImg: postData.image_social,
            isPostHref: true
        }}>
            <CaseDetailBanner imgUrl={smUp ? postData.image_pc : postData.image_mobile}
                              videoUrl={postData.video_youtbue}/>
            <CaseDetailHead authorImg={postData.image_other}
                            desc={postData.recomm_text}
                            jobTitle={postData.recomm_job}
                            author={postData.recomm_user}
                            categoryData={postData.tags}/>
            <CaseDetailArticle contents={postData.content}
                               clientLogo={postData.image_logo}
                               clientName={postData.customer_title}
                               clientIntro={postData.customer_intro}
                               scrollHandler={handleScroll}/>
            <CaseDetailRelatedPost postData={postData.related_article}/>
            <div ref={contactRef}>
                <NewsLetter
                    title={t('case-study:Want To Know More About Our Exclusive Offers, Global Digital Trends, and More?')}
                    caption={t('case-study:Join the CloudMile Newsletter')}
                    salesforceData={salesforceData}/>
            </div>
            <IdleNewsletterModal
                title={t('case-study:Want To Know More About Our Exclusive Offers, Global Digital Trends, and More?')}
                caption={t('case-study:Join the CloudMile Newsletter')}
                salesforceData={salesforceData}/>
        </Layout>
    );
};

export const getServerSideProps = async ({locale, query, res}: GetServerSidePropsContext) => {
    const postData = await fetchPreviewCaseArticle(locale, query.slug[0]);
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
export default CaseStudyDetail;
