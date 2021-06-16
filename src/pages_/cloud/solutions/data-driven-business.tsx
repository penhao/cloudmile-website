import React, { useEffect, useState } from 'react';
import Layout from "../../../components/Layout";
import Intro from "../../../components/data-driven-business/Intro";
import DataExperts from "../../../components/data-driven-business/DataExperts";
import SectionCases from "../../../components/sections/home/SectionCases";
import Banner from "../../../components/data-driven-business/Banner";
import useTranslation from "next-translate/useTranslation";
import ProductContact from "../../../components/sections/ProductContact";
import { fetchHomeSliderList } from "../../../services/ApiServices";
import { useRouter } from 'next/router';
import { getMetadada } from '../../../@share/routes/Metadata';
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Container from '../../../components/containers/Container';
import Breadcrumbs from "../../../components/Breadcrumb";

const DataDrivenBusiness = () => {
    const { t, lang } = useTranslation();
    const [sliderData, setSliderData] = useState({ case: [] });
    const router = useRouter();
    const metadata = getMetadada(router.route);
    const [breadcrumbData, setBreadcrumbData] = useState([]);
    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb(router.route);
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
            <DataExperts />
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                label={t('case-study:Clients Case Study')}
                sliderData={sliderData.case} />
            <ProductContact title={t('data-driven-business:Unlock Value at every stage of your modernization journey')}
                caption={t('data-driven-business:Want To Know More?')}
                currentPage={'Data driven business'} />
        </Layout>
    );
};

export default DataDrivenBusiness;
