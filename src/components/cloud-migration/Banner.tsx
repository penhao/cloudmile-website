import React from 'react';
import PageBannerInfo from "../banner/PageBannerInfo";
import PageBanner from "../banner/PageBanner";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        width: '100%',
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '40px'
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '40px'
        }
    }
}));
const Banner = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <PageBanner imgUrl={'/cloud-migration/banner.jpg'} alt={""}>
            <PageBannerInfo title={t('cloud-migration:Cloud Migration')}
                caption={t('cloud-migration:Reinvent the foundation of your business')}
                color={'white'} />
        </PageBanner>
    );
};
export default Banner;
