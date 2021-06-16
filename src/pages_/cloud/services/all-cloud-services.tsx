import React, { useEffect, useState } from 'react';
import Layout from "../../../components/Layout";
import MachineLearning from "../../../components/all-cloud-services/MachineLearning";
import CloudServices from "../../../components/all-cloud-services/CloudServices";
import DataAndSearch from "../../../components/all-cloud-services/DataAndSearch";
import ApplicationServices from "../../../components/all-cloud-services/ApplicationServices";
import SupportServices from "../../../components/all-cloud-services/SupportServices";
import AboutOurService from "../../../components/all-cloud-services/AboutOurService";
import SectionCases from "../../../components/sections/home/SectionCases";
import Banner from "../../../components/all-cloud-services/Banner";
import ProductContact from "../../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import { fetchHomeSliderList } from "../../../services/ApiServices";
import { useRouter } from 'next/router';
import { getMetadada } from '../../../@share/routes/Metadata';
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Container from '../../../components/containers/Container';
import Breadcrumbs from "../../../components/Breadcrumb";

const AllCloudServices = () => {
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
            <MachineLearning />
            <CloudServices />
            <DataAndSearch />
            <ApplicationServices />
            <SupportServices />
            <AboutOurService />
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                label={t('case-study:Clients Case Study')}
                sliderData={sliderData.case} />
            <ProductContact title={t('all-cloud-services:Unlock Value at every stage of your modernization journey')}
                caption={t('all-cloud-services:Schedule a Demo')}
                currentPage={'All Cloud Services'} />
        </Layout>
    );
};
export default AllCloudServices;
