import React, { useEffect, useRef, useState } from 'react';
import Layout from "../../../components/Layout";
import EventDetailHead from "../../../components/sections/event/detail/EventDetailHead";
import EventDetailArticle from "../../../components/sections/event/detail/EventDetailArticle";
import EventDetailContact from "../../../components/sections/event/detail/EventDetailContact";
import { GetServerSidePropsContext } from "next";
import { useMediaQuery } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import { SalesforcePostParams } from "../../../components/useUrlParams";
import { fetchEventArticle } from "../../../services/ApiServices";
import { useRouter } from "next/router";
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Container from '../../../components/containers/Container';
import Breadcrumbs from "../../../components/Breadcrumb";
import { useTranslation } from 'next-translate';

const EventDetail = ({ postData }) => {
    const router = useRouter();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const contactRef = useRef<HTMLDivElement>(null);
    const [salesforceData, setSalesforceData] = useState<SalesforcePostParams | null>(null);
    const [breadcrumbData, setBreadcrumbData] = useState([]);
    const handleScroll = () => {
        if (contactRef.current) {
            window.scrollTo({
                behavior: "smooth",
                top: contactRef.current.offsetTop
            });
        }
    };
    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb("/resources/event");
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
        setBreadcrumbData(breadcrumbs);
        //
        setSalesforceData({
            utmSource: postData.utm_source,
            utmMedium: postData.utm_medium,
            utmCampaign: postData.utm_campaign,
            leadSource: postData.lead_source,
            campaignId: postData.salesforce_id,
            country: postData.country,
            redirectUrl: ''
        });
    }, [postData]);
    return (
        <Layout metadata={{
            href: "/resources/event",
            title: postData.seo_title,
            desc: postData.seo_description,
            keywords: postData.seo_keyword,
            shareImage: postData.image_social,
            customBreadcrumbNode: {
                breadcrumbName: postData.title,
                path: router.asPath
            }
        }}>
            <Container maxWidth={{ md: 1280 }}>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <EventDetailHead title={postData.title}
                subTitle={postData.sub_title}
                startDate={postData.event_start_date}
                endDate={postData.event_over_date}
                categoryData={postData.tags} />

            <EventDetailArticle imgUrl={smUp ? postData.image_pc : postData.image_mobile}
                contents={postData.event_body}
                scrollHandler={handleScroll} />
            <div ref={contactRef}>
                <EventDetailContact title={postData.form_title} salesforceData={salesforceData} />
            </div>
        </Layout>
    );
};

export const getServerSideProps = async ({ locale, query, res }: GetServerSidePropsContext) => {
    const postData = await fetchEventArticle(locale, query.slug[0]);
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
export default EventDetail;
