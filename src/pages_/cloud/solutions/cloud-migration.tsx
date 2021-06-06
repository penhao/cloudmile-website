import React, { useEffect, useState } from 'react';
import Layout from "../../../components/Layout";
import useTranslation from "next-translate/useTranslation";
import Banner from "../../../components/cloud-migration/Banner";
import Intro from "../../../components/cloud-migration/Intro";
import ForwardWithCloudMile from "../../../components/cloud-migration/ForwardWithCloudMile";
import WhyMigrate from "../../../components/cloud-migration/WhyMigrate";
import { fetchHomeSliderList } from "../../../services/ApiServices";
import SectionCases from "../../../components/sections/home/SectionCases";
import ProductContact from "../../../components/sections/ProductContact";
import HowToMigrate from "../../../components/cloud-migration/HowToMigrate";
import { useRouter } from 'next/router';
import { getMetadada } from '../../../@share/routes/Metadata';
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Container from '../../../components/containers/Container';
import Breadcrumbs from "../../../components/Breadcrumb";


const CloudMigration = () => {
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
            <WhyMigrate />
            <ForwardWithCloudMile />
            <HowToMigrate />
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                label={t('case-study:Clients Case Study')}
                sliderData={sliderData.case} />
            <ProductContact title={t('cloud-migration:Reinvent the Foundation of your Business')}
                caption={t('cloud-migration:Want to know more?')}
                currentPage={'Cloud Migration'} />
        </Layout>
    );
};

export default CloudMigration;
