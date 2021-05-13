import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import Services from "../../components/sections/artificial-intelligence-services/Services";
import Journey from "../../components/sections/artificial-intelligence-services/Journey";
import TransformationProgram from "../../components/sections/artificial-intelligence-services/TransformationProgram";
import PoweredEngines from "../../components/sections/artificial-intelligence-services/PoweredEngines";
import AIExperts from "../../components/sections/artificial-intelligence-services/AIExperts";
import SectionCases from "../../components/sections/home/SectionCases";
import ProductContact from "../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import AIServiceBanner from "../../components/sections/artificial-intelligence-services/AIServiceBanner";
import Marquee from "../../components/sections/artificial-intelligence-services/Marquee";
import { fetchHomeSliderList } from "../../services/ApiServices";
import { siteRoutes } from "../../../public/config.json";
import { getRoute } from "../../utils/Utils";

const ArtificialIntelligenceServices = () => {
    const { t, lang } = useTranslation();
    const [sliderData, setSliderData] = useState({ case: [] });
    const currentRoute = getRoute('AI Services', siteRoutes)[0];
    useEffect(() => {
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
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <AIServiceBanner />
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
