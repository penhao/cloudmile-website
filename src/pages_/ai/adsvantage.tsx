import React, { useRef, useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { siteRoutes } from "../../../public/config.json";
import { getRoute } from "../../utils/Utils";
import useTranslation from "next-translate/useTranslation";
import Banner from "../../components/adsvantage/Banner";
import { ThemeProvider } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import SvantageTheme from "../../mui/SvantageTheme";
import DemoSection from "../../components/adsvantage/DemoSection";
import AIWriterSection from "../../components/adsvantage/AIWriterSection";
import AlertSection from "../../components/adsvantage/AlertSection";
import DashboardSection from "../../components/adsvantage/DashboardSection";
import ToolsSection from "../../components/adsvantage/ToolsSection";
import RecommendSection from "../../components/adsvantage/RecommendSection";
import PriceSection from "../../components/adsvantage/PriceSection";
import RelatedSection from "../../components/adsvantage/RelatedSection";
import ContactSection from "../../components/adsvantage/ContactSection";
import { GetServerSidePropsContext } from "next";
import { fetchListByTag, fetchTagList } from "../../services/ApiServices";
import SectionThumb from '../../components/adsvantage/SectionThumb';
import TrackVisibility from 'react-on-screen';
import VisibilitySensor from 'react-visibility-sensor';


const ADSvantagePage = ({ categoryData, postData }) => {

    const { t, lang } = useTranslation();
    const currentRoute = getRoute('ADsvantage', siteRoutes)[0];
    const demoRef = useRef<HTMLDivElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const [scrollTarget, setScrollTarget] = useState<string | null>(null)
    const handleScrollChange = (target: string | null) => {
        setScrollTarget(target);
    }
    const handleScroll = (target: string) => {
        if (target === 'demo' && demoRef.current) {
            window.scrollTo({
                behavior: "smooth",
                top: demoRef.current.offsetTop
            });
        }
        if (target === 'price' && priceRef.current) {
            window.scrollTo({
                behavior: "smooth",
                top: priceRef.current.offsetTop
            });
        }
        if (target === 'contact' && contactRef.current) {
            window.scrollTo({
                behavior: "smooth",
                top: contactRef.current.offsetTop
            });
        }
    }


    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <ThemeProvider theme={SvantageTheme}>
                <Banner />
                {/* Demo */}
                <div ref={demoRef}>
                    <DemoSection scrollChangeHadler={handleScrollChange} />
                </div>
                {/* AI Writer */}
                <AIWriterSection />
                <AlertSection />
                <DashboardSection />
                <ToolsSection />
                <RecommendSection />
                {/* Price */}
                <div ref={priceRef}>
                    <PriceSection scrollChangeHadler={handleScrollChange} />
                </div>
                <RelatedSection data={postData.data} />
                {/* Contact */}
                <div ref={contactRef}>
                    <ContactSection scrollChangeHadler={handleScrollChange} />
                </div>
                <Hidden smDown>
                    <SectionThumb scrollTarget={scrollTarget} scrollHandler={handleScroll} />
                </Hidden>
            </ThemeProvider>
        </Layout>
    )
};
export const getServerSideProps = async ({ locale, res }: GetServerSidePropsContext) => {
    const categoryData = await fetchTagList(locale, 1);
    const currentTag = categoryData.data.find(category => {
        return category.title.toLowerCase() === '科技新知';
        // return category.title.toLowerCase() === 'adsvantage';
    });
    let resultData = { data: [] };
    if (currentTag !== undefined) {
        const postData = await fetchListByTag(locale, 1, +currentTag.id, 1, 4, 'desc');
        if (postData?.error || postData?.error === 'article not found') {
            const redirectUrl = `${(locale === 'zh') ? '/zh' : ''}/404`;
            res.setHeader("location", redirectUrl);
            res.statusCode = 302;
            res.end();
        }
        resultData = postData;
    }
    return {
        props: {
            categoryData,
            postData: resultData
        }
    }
};
export default ADSvantagePage;