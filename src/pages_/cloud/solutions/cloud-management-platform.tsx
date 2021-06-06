import React, { useState, useEffect } from 'react';
import Layout from "../../../components/Layout";
import useTranslation from "next-translate/useTranslation";
import Banner from "../../../components/milelync/Banner";
import Intro from "../../../components/milelync/Intro";
import DailyTasks from "../../../components/milelync/DailyTasks";
import ProductContact from "../../../components/sections/ProductContact";
import { useRouter } from 'next/router';
import { getMetadada } from '../../../@share/routes/Metadata';
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Container from '../../../components/containers/Container';
import Breadcrumbs from "../../../components/Breadcrumb";
const CloudManagementPlatform = () => {
    const { t, lang } = useTranslation();
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
    }, [lang]);
    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <Banner />
            <Container maxWidth={{ md: 1280 }}>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <Intro />
            <DailyTasks />
            {/*<MileLyncPlan/>*/}
            <ProductContact
                title={t('cloud-management-platform:Start Working Smarter Together')}
                caption={t('cloud-management-platform:Schedule a Demo')}
                currentPage={'MileLync'} />
        </Layout>
    );
};
export default CloudManagementPlatform;
