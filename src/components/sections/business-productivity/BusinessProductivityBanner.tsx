import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import PageBanner from "../../banner/PageBanner";
import PageBannerInfo from "../../banner/PageBannerInfo";
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
        paddingLeft: '20px',
        paddingRight: '20px',
        marginTop: '20px'
    }
}));
const BusinessProductivityBanner = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <div className={classes.wrapper}>
            <PageBanner imgUrl={'/business-productivity/banner.jpg'}
                        alt={t('business-productivity:alt.Surface of a sea')}>
                <PageBannerInfo title={t('business-productivity:Business Productivity')}
                                caption={t('business-productivity:That’s the Working Style in Digital World')}
                                desc={t('business-productivity:We create a new working environment which can__')}
                                color={'white'}/>
            </PageBanner>
            <Hidden smUp>
                <Typography variant={'body1'} align={'center'}
                            className={classes.desc}>
                    {t('business-productivity:We create a new working environment which can__')}
                </Typography>
            </Hidden>
        </div>
    );
};

export default BusinessProductivityBanner;
