import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import PartnerBanner from "../../components/partner/PartnerBanner";
import WhyPartnerWith from "../../components/partner/WhyPartnerWith";
import PartnerNetworks from "../../components/partner/PartnerNetworks";
import BecomePartner from "../../components/partner/BecomePartner";
import CompanyCTA from "../../components/sections/CompanyCTA";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from 'next/router';
import { getMetadada } from '../../@share/routes/Metadata';
import { getBreadcrumb } from '../../@share/routes/Routes';
import Container from '../../components/containers/Container';
import Breadcrumbs from "../../components/Breadcrumb";

const Partner = () => {
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
            <PartnerBanner />
            <Container>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <WhyPartnerWith />
            <PartnerNetworks />
            <BecomePartner />
            <CompanyCTA href={'/contact'}
                title={t('partner:Find right opportunities for you')}
                caption={t('partner:Explore Partnerships')}
                gutterBottom={false} />
        </Layout>
    );
};

export default Partner;
