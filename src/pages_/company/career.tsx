import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import CareerBanner from "../../components/career/CareerBanner";
import CEO from "../../components/career/CEO";
import CloudMilers from "../../components/career/CloudMilers";
import JoinCloudMile from "../../components/career/JoinCloudMile";
import ExploreOpportunities from "../../components/career/ExploreOpportunities";
import ApplyJobs from "../../components/career/ApplyJobs";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from 'next/router';
import { getMetadada } from '../../@share/routes/Metadata';
import { getBreadcrumb } from '../../@share/routes/Routes';
import Container from '../../components/containers/Container';
import Breadcrumbs from "../../components/Breadcrumb";
const Career = () => {
    const { t, lang } = useTranslation();
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
    }, [lang]);
    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <CareerBanner />
            <Container>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <CEO />
            <CloudMilers />
            <JoinCloudMile />
            <ExploreOpportunities />
            <ApplyJobs />
        </Layout>
    );
};

export default Career;
