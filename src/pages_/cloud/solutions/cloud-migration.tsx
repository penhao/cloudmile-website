import React, {useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import useTranslation from "next-translate/useTranslation";
import {getRoute} from "../../../utils/Utils";
import {siteRoutes} from "../../../../public/config.json";
import CloudMigrationBanner from "../../../components/sections/cloud-migration/CloudMigrationBanner";
import CloudMigrationIntro from "../../../components/sections/cloud-migration/CloudMigrationIntro";
import TransformationProgram from "../../../components/sections/digital-transformation/TransformationProgram";
import ForwardWithCloudMile from "../../../components/sections/cloud-migration/ForwardWithCloudMile";
import WhyMigrate from "../../../components/sections/cloud-migration/WhyMigrate";
import {fetchHomeSliderList} from "../../../services/ApiServices";
import SectionCases from "../../../components/sections/home/SectionCases";
import ProductContact from "../../../components/sections/ProductContact";
import HowToMigrate from "../../../components/sections/cloud-migration/HowToMigrate";
const CloudMigration = () => {
    const {t, lang} = useTranslation();
    const currentRoute = getRoute('Cloud Migration', siteRoutes)[0];
    const [sliderData, setSliderData] = useState({case: []});
    useEffect(() => {
        const fetchData = async () => {
            return fetchHomeSliderList(lang);
        };
        fetchData().then((response: any) => {
            if (response.status) {
                setSliderData({case: response.data.case});
            }
        });
    }, [lang]);
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <CloudMigrationBanner/>
            <CloudMigrationIntro/>
            <WhyMigrate/>
            <ForwardWithCloudMile/>
            <HowToMigrate/>
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                          label={t('case-study:Clients Case Study')}
                          sliderData={sliderData.case}/>
            <ProductContact title={t('cloud-migration:Reinvent the Foundation of your Business')}
                            caption={t('cloud-migration:Want to know more?')}
                            currentPage={'Cloud Migration'}/>
        </Layout>
    );
};

export default CloudMigration;
