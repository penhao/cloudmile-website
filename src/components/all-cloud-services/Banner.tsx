import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import PageBanner from "../banner/PageBanner";
import PageBannerInfo from "../banner/PageBannerInfo";
import useTranslation from "next-translate/useTranslation";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        width: '100%',
        marginBottom: '60px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '80px'
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '120px'
        }
    },
    desc: {
        marginTop: '20px',
        padding: '0 20px'
    }
}));
const Banner = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <>
            <PageBanner imgUrl={'/all-cloud-services/banner.jpg'}
                alt={t('all-cloud-services:alt.Close View of Network')}>
                <PageBannerInfo title={t('all-cloud-services:All Cloud Services')}
                    caption={t('all-cloud-services:Unleash The Power of Digital Transformation via Cloud')}
                    desc={t('all-cloud-services:Free yourself from the overwhelming tasks of__')}
                    color={'white'} />
            </PageBanner>
            <Hidden smUp>
                <Typography variant={'body1'} align={'center'} className={classes.desc}>
                    {t('all-cloud-services:Free yourself from the overwhelming tasks of__')}
                </Typography>
            </Hidden>
        </>
    );
};
export default Banner;
