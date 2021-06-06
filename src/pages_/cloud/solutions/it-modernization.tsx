import React, { useEffect, useState } from 'react';
import Layout from "../../../components/Layout";
import Migration from "../../../components/it-modernization/Migration";
import Modernization from "../../../components/it-modernization/Modernization";
import Infrastructure from "../../../components/it-modernization/Infrastructure";
import WhyCloudMile from "../../../components/it-modernization/WhyCloudMile";
import SectionCases from "../../../components/sections/home/SectionCases";
import Banner from "../../../components/it-modernization/Banner";
import ProductContact from "../../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import { fetchHomeSliderList } from "../../../services/ApiServices";
import { useRouter } from 'next/router';
import { getMetadada } from '../../../@share/routes/Metadata';
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Container from '../../../components/containers/Container';
import Breadcrumbs from "../../../components/Breadcrumb";

const ITModernization = () => {
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
            <Migration />
            <Modernization />
            <Infrastructure />
            <WhyCloudMile />
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                label={t('case-study:Clients Case Study')}
                sliderData={sliderData.case} />
            <ProductContact title={t('it-modernization:Unlock Value at every stage of your modernization journey')}
                caption={t('it-modernization:Want To Know More?')}
                currentPage={'IT modernization'} />
        </Layout>
    );
};
export default ITModernization;
