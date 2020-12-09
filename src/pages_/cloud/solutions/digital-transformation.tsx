import React, {useEffect, useRef, useState} from 'react';
import Layout from "../../../components/Layout";
import DigitalTransformationBanner from "../../../components/sections/digital-transformation/DigitalTransformationBanner";
import Intro from "../../../components/sections/digital-transformation/Intro";
import Strategy from "../../../components/sections/digital-transformation/Strategy";
import TransformationDriven from "../../../components/sections/digital-transformation/TransformationDriven";
import AdoptionProgram from "../../../components/sections/digital-transformation/AdoptionProgram";
import TransformationProgram from "../../../components/sections/digital-transformation/TransformationProgram";
import ProductContact from "../../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import SectionCases from "../../../components/sections/home/SectionCases";
import {fetchHomeSliderList} from "../../../services/ApiServices";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";

const DigitalTransformation = () => {
    const {t, lang} = useTranslation();
    const currentRoute = getRoute('Digital Transformation', siteRoutes)[0];
    const adoptionEl = useRef<HTMLDivElement>(null);
    const transformationEl = useRef<HTMLDivElement>(null);
    const scrollHandler = (target: string) => {
        if (target === 'AdoptionProgram' && adoptionEl.current) {
            window.scrollTo({
                behavior: "smooth",
                top: adoptionEl.current.offsetTop
            });
        }
        if (target === 'TransformationProgram' && transformationEl.current) {
            window.scrollTo({
                behavior: "smooth",
                top: transformationEl.current.offsetTop
            });
        }
    };
    const [sliderData, setSliderData] = useState({case: []});
    useEffect(() => {
        const fetchData = async () => {
            return fetchHomeSliderList(lang);
        };
        fetchData().then((response: any) => {
            if (response.status) {
                setSliderData({case: response.data.case});
            }
        });
    }, [lang]);
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <DigitalTransformationBanner/>
            <Intro/>
            <Strategy clickHandler={scrollHandler}/>
            <TransformationDriven clickHandler={scrollHandler}/>
            <div ref={adoptionEl}>
                <AdoptionProgram/>
            </div>
            <div ref={transformationEl}>
                <TransformationProgram/>
            </div>
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                          label={t('case-study:Clients Case Study')}
                          sliderData={sliderData.case}/>
            <ProductContact title={t('digital-transformation:Embrace the Digital World with CloudMile')}
                            caption={t('digital-transformation:Want To Know More?')}
                            currentPage={'Digital Transformation'}/>
        </Layout>
    );
};
export default DigitalTransformation;
