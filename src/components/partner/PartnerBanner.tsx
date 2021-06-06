import React from 'react';
import CompanyBanner from "../banner/CompanyBanner";
import useTranslation from "next-translate/useTranslation";

const PartnerBanner = () => {
    const { t } = useTranslation();
    return (
        <CompanyBanner imgUrl={'/partner/banner.jpg'}
            title={t('partner:Accelerate your Business with CloudMile')}
            caption={t('partner:CloudMile Business Partners')}
            alt={t('partner:alt.Two friends are hiking')} />
    );
};
export default PartnerBanner;
