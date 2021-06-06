import React from 'react';
import CompanyBanner from "../banner/CompanyBanner";
import useTranslation from "next-translate/useTranslation";

const CareerBanner = () => {
    const { t } = useTranslation();
    return (
        <CompanyBanner imgUrl={'/career/banner.jpg'}
            title={t('career:Make a difference by being exactly who you are')}
            caption={t('career:CloudMile Career')}
            alt={t('career:alt.4 Colleagues are discussing together')} />
    );
};
export default CareerBanner;
