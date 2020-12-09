import React from 'react';
import Layout from "../../../components/Layout";
import useTranslation from "next-translate/useTranslation";
import MileLyncBanner from "../../../components/sections/milelync/MileLyncBanner";
import MileLyncIntro from "../../../components/sections/milelync/MileLyncIntro";
import MileLyncDailyTasks from "../../../components/sections/milelync/MileLyncDailyTasks";
import MileLyncPlan from "../../../components/sections/milelync/MileLyncPlan";
import ProductContact from "../../../components/sections/ProductContact";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";

const CloudManagementPlatform = () => {
    const {t, lang} = useTranslation();
    const currentRoute = getRoute('Cloud Management Platform', siteRoutes)[0];
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <MileLyncBanner/>
            <MileLyncIntro/>
            <MileLyncDailyTasks/>
            <MileLyncPlan/>
            <ProductContact
                title={t('cloud-management-platform:Start Working Smarter Together')}
                caption={t('cloud-management-platform:Schedule a Demo')}
                currentPage={'MileLync'}/>
        </Layout>
    );
};
export default CloudManagementPlatform;
