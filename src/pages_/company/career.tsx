import React from 'react';
import Layout from "../../components/Layout";
import CareerBanner from "../../components/sections/career/CareerBanner";
import CEO from "../../components/sections/career/CEO";
import CloudMilers from "../../components/sections/career/CloudMilers";
import JoinCloudMile from "../../components/sections/career/JoinCloudMile";
import ExploreOpportunities from "../../components/sections/career/ExploreOpportunities";
import ApplyJobs from "../../components/sections/career/ApplyJobs";
import useTranslation from "next-translate/useTranslation";
import {siteRoutes} from "../../../public/config.json";
import {getRoute} from "../../utils/Utils";

const Career = () => {
    const {lang} = useTranslation();
    const currentRoute = getRoute('Career', siteRoutes)[0];
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <CareerBanner/>
            <CEO/>
            <CloudMilers/>
            <JoinCloudMile/>
            <ExploreOpportunities/>
            <ApplyJobs/>
        </Layout>
    );
};

export default Career;
