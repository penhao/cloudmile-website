import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import BusinessProductivityBanner from "../../../components/sections/business-productivity/BusinessProductivityBanner";
import WorkingStyle from "../../../components/sections/business-productivity/WorkingStyle";
import Customized from "../../../components/sections/business-productivity/Customized";
import TechnologiesManaged from "../../../components/sections/business-productivity/TechnologiesManaged";
import WhatCanCloudMileDo from "../../../components/sections/business-productivity/WhatCanCloudMileDo";
import ProductContact from "../../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import { getMetadada } from '../../../@share/routes/Metadata';


const BusinessProductivity = () => {
    const { t, lang } = useTranslation();
    const metadata = getMetadada("/cloud/solutions/google-workspace");

    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <BusinessProductivityBanner />
            <WorkingStyle />
            <Customized />
            <TechnologiesManaged />
            <WhatCanCloudMileDo />
            <ProductContact title={t('business-productivity:Start Working Smarter Together')}
                caption={t('business-productivity:Schedule a Demo')}
                currentPage={'Business Productivity'} />
        </Layout>
    );
};
export default BusinessProductivity;
