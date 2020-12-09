import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import PageBanner from "../../banner/PageBanner";
import PageBannerInfo from "../../banner/PageBannerInfo";
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
const DataDrivenBusinessBanner = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <div className={classes.wrapper}>
            <PageBanner imgUrl={'/data-driven-business/banner.jpg'}
                        alt={t('case-study:alt.bird\'s eye view of a metropolis city')}>
                <PageBannerInfo title={t('data-driven-business:Data Driven Business')}
                                caption={t('data-driven-business:Accelerate the Power of Data')}
                                color={'white'}/>
            </PageBanner>
        </div>
    );
};

export default DataDrivenBusinessBanner;
