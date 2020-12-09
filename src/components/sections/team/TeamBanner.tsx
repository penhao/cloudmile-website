import React from 'react';
import CompanyBanner from "../../banner/CompanyBanner";
import useTranslation from "next-translate/useTranslation";

const TeamBanner = () => {
    const {t} = useTranslation();
    return (
        <CompanyBanner imgUrl={'/team/banner.jpg'}
                       title={t('team:Explore your Success with CloudMile')}
                       caption={t('team:CloudMile Team')}
                       alt={t('team:alt.6 coworkers are discussing in a meeting room')}/>
    );
};
export default TeamBanner;
