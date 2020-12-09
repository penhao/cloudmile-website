import React from 'react';
import Layout from "../../components/Layout";
import TeamBanner from "../../components/sections/team/TeamBanner";
import Intro from "../../components/sections/team/Intro";
import ExploreYourSuccess from "../../components/sections/team/ExploreYourSuccess";
import OurTeam from "../../components/sections/team/OurTeam";
import Milestones from "../../components/sections/team/Milestones";
import Investors from "../../components/sections/team/Investors";
import CompanyCTA from "../../components/sections/CompanyCTA";
import NewsLetter from "../../components/sections/NewsLetter";
import useTranslation from "next-translate/useTranslation";
import {siteRoutes} from "../../../public/config.json";
import {getRoute} from "../../utils/Utils";

const Team = () => {
    const {t, lang} = useTranslation();
    const currentRoute = getRoute('Team', siteRoutes)[0];
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <TeamBanner/>
            <Intro/>
            <ExploreYourSuccess/>
            <OurTeam/>
            <Milestones/>
            <Investors/>
            <CompanyCTA href={'/company/career/'}
                        title={t('team:Find right opportunities for you')}
                        caption={t('team:Explore Careers')}/>
            <NewsLetter title={t('team:Want to know more about our exclusive__')}
                        caption={t('team:Join the CloudMile Newsletter')}/>
        </Layout>
    );
};

export default Team;
