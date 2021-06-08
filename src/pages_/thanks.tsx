import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Container from "../components/containers/Container";
import RatioContainer from "../components/containers/RatioContainer";
import BackgroundImage from "../components/Images/BackgroundImage";
import Typography from "@material-ui/core/Typography";
import NavLink from "../components/links/NavLink";
import IconLaunch from "../components/icons/IconLaunch";
import useTranslation from "next-translate/useTranslation";
import { useLinkStyles } from "../components/links/LinkStyles";
import { useRouter } from "next/router";
import { isValueEmpty } from "../utils/Utils";
import { getMetadada } from '../@share/routes/Metadata';

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        padding: '60px 0',
        [theme.breakpoints.up('sm')]: {
            padding: '90px 0',
        }
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        padding: '20px'
    },
    title: {
        fontSize: theme.typography.pxToRem(36),
        fontWeight: 700,
        lineHeight: 1.17,
        color: theme.palette.common.white,
        marginBottom: '15px'
    },
    desc: {
        fontSize: theme.typography.pxToRem(20),
        color: theme.palette.common.white,
        fontWeight: 700,
    },
    cta: {
        textAlign: 'center',
        marginTop: '40px'
    },
    label: {
        fontSize: theme.typography.pxToRem(20),
        color: theme.palette.common.black,
        fontWeight: 700,
        marginBottom: '10px'
    },
    downloadLink: {
        textAlign: 'center',
        '& img': {
            display: 'inline-block',
            width: '20px'
        }
    }
}));
const ThanksPage = () => {
    const classes = useStyles();
    const router = useRouter();
    const { t, lang } = useTranslation();
    const metadata = getMetadada("/");
    const linkClasses = useLinkStyles();
    const getDownloadUrl = () => {
        if (router.query.hasOwnProperty('url') && !isValueEmpty(router.query.url.toString())) {
            return router.query.url.toString();
        }
        return null;
    };
    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <section className={classes.wrapper}>
                <Container maxWidth={{ xs: 405, sm: 405, md: 405 }}>
                    <RatioContainer ratio={{ xs: 384 / 405, sm: 384 / 405, md: 384 / 405 }}>
                        <BackgroundImage imgUrl={'/images/redirect/redirect-bg.png'} detectRetina={false} />
                        <div className={classes.info}>
                            <Typography component={'div'} align={"center"} className={classes.title}>
                                {
                                    (getDownloadUrl() == null)
                                        ? t('common:THANK YOU FOR YOUR INQUIRY')
                                        : t('common:THANK YOU')
                                }
                            </Typography>
                            <Typography variant={"body1"} align={"center"} className={classes.desc}>
                                {
                                    (getDownloadUrl() == null)
                                        ? t('common:we will contact you within 3 working days')
                                        : t('common:Please click the button below to download the file')
                                }
                            </Typography>
                        </div>
                    </RatioContainer>
                    <div className={classes.cta}>
                        {
                            (getDownloadUrl() == null)
                                ?
                                <NavLink hrefPath={'/'} classNames={linkClasses.iconLink}>
                                    <Typography variant={"body1"} component={'div'} align={"center"}
                                        className={classes.label}>
                                        {t('common:Back to home')}
                                    </Typography>
                                    <IconLaunch />
                                </NavLink>
                                :
                                <NavLink hrefPath={getDownloadUrl()} isLaunch={true} classNames={classes.downloadLink}>
                                    <Typography variant={"body1"} component={'div'} align={"center"}
                                        className={classes.label}>
                                        {t('common:Download file')}
                                    </Typography>
                                    <img src="/images/icons/icon_download.svg" alt="" />
                                </NavLink>
                        }
                    </div>
                </Container>
            </section>
        </Layout>
    );
};
export default ThanksPage;
