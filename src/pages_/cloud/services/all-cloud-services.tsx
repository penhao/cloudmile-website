import React, {useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import MachineLearning from "../../../components/sections/all-cloud-services/MachineLearning";
import CloudServices from "../../../components/sections/all-cloud-services/CloudServices";
import DataAndSearch from "../../../components/sections/all-cloud-services/DataAndSearch";
import ApplicationServices from "../../../components/sections/all-cloud-services/ApplicationServices";
import SupportServices from "../../../components/sections/all-cloud-services/SupportServices";
import AboutOurService from "../../../components/sections/all-cloud-services/AboutOurService";
import SectionCases from "../../../components/sections/home/SectionCases";
import AllCloudServicesBanner from "../../../components/sections/all-cloud-services/AllCloudServicesBanner";
import ProductContact from "../../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import {fetchHomeSliderList} from "../../../services/ApiServices";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";


const AllCloudServices = () => {
    const {t, lang} = useTranslation();
    const [sliderData, setSliderData] = useState({case: []});
    const currentRoute = getRoute('All Cloud Services', siteRoutes)[0];
    useEffect(() => {
        const fetchData = async () => {
            return fetchHomeSliderList(lang);
        };
        fetchData().then((response: any) => {
            if (response.status) {
                setSliderData({case: response.data.case});
            }
        });
    }, []);
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <AllCloudServicesBanner/>
            <MachineLearning/>
            <CloudServices/>
            <DataAndSearch/>
            <ApplicationServices/>
            <SupportServices/>
            <AboutOurService/>
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                          label={t('case-study:Clients Case Study')}
                          sliderData={sliderData.case}/>
            <ProductContact title={t('all-cloud-services:Unlock Value at every stage of your modernization journey')}
                            caption={t('all-cloud-services:Schedule a Demo')}
                            currentPage={'All Cloud Services'}/>
        </Layout>
    );
};
export default AllCloudServices;
