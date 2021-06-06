import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import Banner from "../../components/team/Banner";
import Intro from "../../components/team/Intro";
import ExploreYourSuccess from "../../components/team/ExploreYourSuccess";
import OurTeam from "../../components/team/OurTeam";
import Milestones from "../../components/team/Milestones";
import Investors from "../../components/team/Investors";
import CompanyCTA from "../../components/sections/CompanyCTA";
import NewsLetter from "../../components/sections/NewsLetter";
import useTranslation from "next-translate/useTranslation";

import { useRouter } from 'next/router';
import { getMetadada } from '../../@share/routes/Metadata';
import { getBreadcrumb } from '../../@share/routes/Routes';
import Container from '../../components/containers/Container';
import Breadcrumbs from "../../components/Breadcrumb";

const Team = () => {
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
            <Container>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <Intro />
            <ExploreYourSuccess />
            <OurTeam />
            <Milestones />
            <Investors />
            <CompanyCTA href={'/company/career/'}
                title={t('team:Find right opportunities for you')}
                caption={t('team:Explore Careers')} />
            <NewsLetter title={t('team:Want to know more about our exclusive__')}
                caption={t('team:Join the CloudMile Newsletter')} />
        </Layout>
    );
};

export default Team;
