import React, {useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import Migration from "../../../components/sections/it-modernization/Migration";
import Modernization from "../../../components/sections/it-modernization/Modernization";
import Infrastructure from "../../../components/sections/it-modernization/Infrastructure";
import WhyCloudMile from "../../../components/sections/it-modernization/WhyCloudMile";
import SectionCases from "../../../components/sections/home/SectionCases";
import ITModernizationBanner from "../../../components/sections/it-modernization/ITModernizationBanner";
import ProductContact from "../../../components/sections/ProductContact";
import useTranslation from "next-translate/useTranslation";
import {fetchHomeSliderList} from "../../../services/ApiServices";
import {siteRoutes} from "../../../../public/config.json";
import {getRoute} from "../../../utils/Utils";

const ITModernization = () => {
    const {t, lang} = useTranslation();
    const [sliderData, setSliderData] = useState({case: []});
    const currentRoute = getRoute('IT Modernization', siteRoutes)[0];
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
            <ITModernizationBanner/>
            <Migration/>
            <Modernization/>
            <Infrastructure/>
            <WhyCloudMile/>
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                          label={t('case-study:Clients Case Study')}
                          sliderData={sliderData.case}/>
            <ProductContact title={t('it-modernization:Unlock Value at every stage of your modernization journey')}
                            caption={t('it-modernization:Want To Know More?')}
                            currentPage={'IT modernization'}/>
        </Layout>
    );
};
export default ITModernization;
