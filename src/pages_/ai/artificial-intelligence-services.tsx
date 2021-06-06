import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import Services from "../../components/artificial-intelligence-services/Services";
import Journey from "../../components/artificial-intelligence-services/Journey";
import TransformationProgram from "../../components/artificial-intelligence-services/TransformationProgram";
import PoweredEngines from "../../components/artificial-intelligence-services/PoweredEngines";
import AIExperts from "../../components/artificial-intelligence-services/AIExperts";
import SectionCases from "../../components/sections/home/SectionCases";
import ProductContact from "../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import Banner from "../../components/artificial-intelligence-services/Banner";
import Marquee from "../../components/artificial-intelligence-services/Marquee";
import { fetchHomeSliderList } from "../../services/ApiServices";
import { useRouter } from 'next/router';
import { getMetadada } from '../../@share/routes/Metadata';
import { getBreadcrumb } from '../../@share/routes/Routes';
import Container from '../../components/containers/Container';
import Breadcrumbs from "../../components/Breadcrumb";
const ArtificialIntelligenceServices = () => {
    const { t, lang } = useTranslation();
    const [sliderData, setSliderData] = useState({ case: [] });

    const router = useRouter();
    const metadata = getMetadada(router.asPath);
    const [breadcrumbData, setBreadcrumbData] = useState([]);

    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb(router.asPath);
        breadcrumbs = breadcrumbs.map((breadcrumb) => {
            return {
                ...breadcrumb,
                breadcrumbName: t(`common:${breadcrumb.breadcrumbName}`),
            };
        })
        setBreadcrumbData(breadcrumbs)
        //
        const fetchData = async () => {
            return fetchHomeSliderList(lang);
        };
        fetchData().then((response: any) => {
            if (response.status) {
                setSliderData({ case: response.data.case });
            }
        });
    }, []);
    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <Banner />
            <Container>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <Marquee />
            <Services />
            <Journey />
            <TransformationProgram />
            <PoweredEngines />
            <AIExperts />
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                label={t('case-study:Clients Case Study')}
                sliderData={sliderData.case} />
            <ProductContact title={t('ai-services:Unlock Value at every stage of your modernization journey')}
                caption={t('ai-services:Contact us')}
                currentPage={'AI Services'} />
        </Layout>
    );
};
export default ArtificialIntelligenceServices;
