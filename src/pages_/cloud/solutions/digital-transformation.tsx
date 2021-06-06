import React, { useEffect, useRef, useState } from 'react';
import Layout from "../../../components/Layout";
import Banner from "../../../components/digital-transformation/Banner";
import Intro from "../../../components/digital-transformation/Intro";
import Strategy from "../../../components/digital-transformation/Strategy";
import TransformationDriven from "../../../components/digital-transformation/TransformationDriven";
import AdoptionProgram from "../../../components/digital-transformation/AdoptionProgram";
import TransformationProgram from "../../../components/digital-transformation/TransformationProgram";
import ProductContact from "../../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import SectionCases from "../../../components/sections/home/SectionCases";
import { fetchHomeSliderList } from "../../../services/ApiServices";
import Breadcrumbs from "../../../components/Breadcrumb";
import { getMetadada } from "../../../@share/routes/Metadata";
import { getBreadcrumb } from "../../../@share/routes/Routes";
import { useRouter } from 'next/router';
import Container from "../../../components/containers/Container";

const DigitalTransformation = () => {
    const { t, lang } = useTranslation();
    const adoptionEl = useRef<HTMLDivElement>(null);
    const transformationEl = useRef<HTMLDivElement>(null);
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
    }, [lang]);

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
            <Intro />
            <Strategy clickHandler={scrollHandler} />
            <TransformationDriven clickHandler={scrollHandler} />
            <div ref={adoptionEl}>
                <AdoptionProgram />
            </div>
            <div ref={transformationEl}>
                <TransformationProgram />
            </div>
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                label={t('case-study:Clients Case Study')}
                sliderData={sliderData.case} />
            <ProductContact title={t('digital-transformation:Embrace the Digital World with CloudMile')}
                caption={t('digital-transformation:Want To Know More?')}
                currentPage={'Digital Transformation'} />
        </Layout>
    );
};
export default DigitalTransformation;
