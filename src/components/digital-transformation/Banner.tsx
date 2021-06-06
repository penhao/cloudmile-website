import React from 'react';
import PageBanner from "../banner/PageBanner";
import PageBannerInfo from "../banner/PageBannerInfo";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import Breadcrumbs from "../Breadcrumb";
import Container from "../containers/Container";
import { useRouter } from 'next/router';
import { getBreadcrumb } from "../../@share/routes/Routes";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        width: '100%',
        // marginBottom: '60px',
        // [theme.breakpoints.up('sm')]: {
        //     marginBottom: '80px'
        // },
        // [theme.breakpoints.up('md')]: {
        //     marginBottom: '120px'
        // }
    }
}));
const Banner = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <div className={classes.wrapper}>
            <PageBanner imgUrl={'/digital-transformation/banner.jpg'}
                alt={t('digital-transformation:alt.The Connection of Internet')}>
                <PageBannerInfo title={t('digital-transformation:Digital Transformation')}
                    caption={t('digital-transformation:Embrace the Digital World with__')}
                    color={'white'} />
            </PageBanner>
        </div>
    );
};
export default Banner;
