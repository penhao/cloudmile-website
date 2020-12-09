import React from 'react';
import Layout from "../../../components/Layout";
import BusinessProductivityBanner from "../../../components/sections/business-productivity/BusinessProductivityBanner";
import WorkingStyle from "../../../components/sections/business-productivity/WorkingStyle";
import Customized from "../../../components/sections/business-productivity/Customized";
import TechnologiesManaged from "../../../components/sections/business-productivity/TechnologiesManaged";
import WhatCanCloudMileDo from "../../../components/sections/business-productivity/WhatCanCloudMileDo";
import ProductContact from "../../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";


const BusinessProductivity = () => {
    const {t, lang} = useTranslation();
    const currentRoute = getRoute('All Cloud Services', siteRoutes)[0];
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <BusinessProductivityBanner/>
            <WorkingStyle/>
            <Customized/>
            <TechnologiesManaged/>
            <WhatCanCloudMileDo/>
            <ProductContact title={t('business-productivity:Start Working Smarter Together')}
                            caption={t('business-productivity:Schedule a Demo')}
                            currentPage={'Business Productivity'}/>
        </Layout>
    );
};
export default BusinessProductivity;
