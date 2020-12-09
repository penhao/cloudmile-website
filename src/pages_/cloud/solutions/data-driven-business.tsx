import React, {useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import Intro from "../../../components/sections/data-driven-business/Intro";
import DataExperts from "../../../components/sections/data-driven-business/DataExperts";
import SectionCases from "../../../components/sections/home/SectionCases";
import DataDrivenBusinessBanner from "../../../components/sections/data-driven-business/DataDrivenBusinessBanner";
import useTranslation from "next-translate/useTranslation";
import ProductContact from "../../../components/sections/ProductContact";
import {fetchHomeSliderList} from "../../../services/ApiServices";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";


const DataDrivenBusiness = () => {
    const {t, lang} = useTranslation();
    const [sliderData, setSliderData] = useState({case: []});
    const currentRoute = getRoute('Data Driven Business', siteRoutes)[0];
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
            <DataDrivenBusinessBanner/>
            <Intro/>
            <DataExperts/>
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                          label={t('case-study:Clients Case Study')}
                          sliderData={sliderData.case}/>
            <ProductContact title={t('data-driven-business:Unlock Value at every stage of your modernization journey')}
                            caption={t('data-driven-business:Want To Know More?')}
                            currentPage={'Data driven business'}/>
        </Layout>
    );
};

export default DataDrivenBusiness;
