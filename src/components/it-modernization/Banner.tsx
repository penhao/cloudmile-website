import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import PageBanner from "../banner/PageBanner";
import PageBannerInfo from "../banner/PageBannerInfo";
import useTranslation from "next-translate/useTranslation";
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        marginBottom: '50px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '10px'
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '10px'
        }
    }
}));

const Banner = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <PageBanner imgUrl={'/it-modernization/banner.jpg'}
            alt={t('it-modernization:alt.Cloudy Sky')}>
            <PageBannerInfo title={t('it-modernization:IT Modernization')}
                caption={t('it-modernization:Build Your Next-Level Cloud Foundation')}
                color={'black'} />
        </PageBanner>
    );
};

export default Banner;
