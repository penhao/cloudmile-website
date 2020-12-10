import React, {useEffect, useRef, useState} from 'react';
import useTranslation from "next-translate/useTranslation";
import Layout from "../components/Layout";
import HomeIntro from "../components/sections/home/HomeIntro";
import HomeFoundation from "../components/sections/home/HomeFoundation";
import HomeAITechnology from "../components/sections/home/HomeAITechnology";
import HomeJourneyMap from "../components/sections/home/HomeJourneyMap";
import {fetchHomeSliderList} from "../services/ApiServices";
import HomeBannerSlider from "../components/sections/home/HomeBannerSlider";
import SectionBlog from "../components/sections/home/SectionBlog";
import SectionCases from "../components/sections/home/SectionCases";
import SectionEvents from "../components/sections/home/SectionEvents";
import NewsLetter from "../components/sections/NewsLetter";
import HomeBanner from "../components/sections/home/HomeBanner";
import {siteRoutes} from "../../public/config.json";
import {getRoute} from "../utils/Utils";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter();
    const {t, lang} = useTranslation();
    const contactRef = useRef<HTMLDivElement>(null);
    const currentRoute = getRoute('Home', siteRoutes)[0];
    const [sliderData, setSliderData] = useState({
        banners: [], blog: [], case: [], event: [], news: []
    });
    const scrollToHash = () => {
        const hashId = window.location.hash;
        if (hashId === '#newsletter') {
            window.scrollTo({
                behavior: "smooth",
                top: contactRef.current.offsetTop
            });
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            return await fetchHomeSliderList(lang);
        };
        fetchData()
            .then((response: any) => {
                if (response && response.status) {
                    setSliderData(response.data);
                }
            });
        const scrollTimeout = window.setTimeout(() => {
            scrollToHash();
            window.clearTimeout(scrollTimeout);
        }, 2000);
    }, [router, lang]);

    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <HomeBanner/>
            <HomeBannerSlider sliderData={sliderData.banners}/>
            <HomeIntro/>
            <HomeFoundation/>
            <HomeAITechnology/>
            <HomeJourneyMap/>
            <SectionCases title={t('case-study:No Matter What Your Business Is, We Know What You Need')}
                          label={t('case-study:Clients Case Study')}
                          sliderData={sliderData.case}/>
            <SectionBlog sliderData={sliderData.blog}/>
            <SectionEvents sliderData={sliderData.event}/>
            <div ref={contactRef}>
                <NewsLetter
                    title={t('home:Want to know more about our exclusive offers__')}
                    caption={t('home:Join the CloudMile Newsletter')}/>
            </div>
        </Layout>
    );
};

export default Index;
