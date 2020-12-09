import React from 'react';
import Layout from "../../components/Layout";
import PartnerBanner from "../../components/sections/partner/PartnerBanner";
import WhyPartnerWith from "../../components/sections/partner/WhyPartnerWith";
import PartnerNetworks from "../../components/sections/partner/PartnerNetworks";
import BecomePartner from "../../components/sections/partner/BecomePartner";
import CompanyCTA from "../../components/sections/CompanyCTA";
import useTranslation from "next-translate/useTranslation";
import { siteRoutes} from "../../../public/config.json";
import {getRoute} from "../../utils/Utils";

const Partner = () => {
    const {t, lang} = useTranslation();
    const currentRoute = getRoute('Partner', siteRoutes)[0];
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <PartnerBanner/>
            <WhyPartnerWith/>
            <PartnerNetworks/>
            <BecomePartner/>
            <CompanyCTA href={'/contact'}
                        title={t('partner:Find right opportunities for you')}
                        caption={t('partner:Explore Partnerships')}
                        gutterBottom={false}/>
        </Layout>
    );
};

export default Partner;
