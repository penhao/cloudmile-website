import React from 'react';
import Layout from "../../../components/Layout";
import MultiCDNBanner from "../../../components/sections/multi-cdn-platform/MultiCDNBanner";
import MileCDN from "../../../components/sections/multi-cdn-platform/MileCDN";
import Performance from "../../../components/sections/multi-cdn-platform/Performance";
import ChinaAccess from "../../../components/sections/multi-cdn-platform/ChinaAccess";
import GoGlobal from "../../../components/sections/multi-cdn-platform/GoGlobal";
import useTranslation from "next-translate/useTranslation";
import ProductContact from "../../../components/sections/ProductContact";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";


const MultiCDNPlatform = () => {
    const {t, lang} = useTranslation();
    const currentRoute = getRoute('Multi-CDN Platform', siteRoutes)[0];
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <MultiCDNBanner/>
            <MileCDN/>
            <Performance/>
            <ChinaAccess/>
            <GoGlobal/>
            <ProductContact title={t('multi-cdn-platform:Effectively Deliver Your Site Content Today')}
                            caption={t('multi-cdn-platform:Schedule a Demo')}
                            currentPage={'Multi-CDN Platform'}/>
        </Layout>
    );
};

export default MultiCDNPlatform;
