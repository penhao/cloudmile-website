import React from 'react';
import useTranslation from "next-translate/useTranslation";
import Layout from "../components/Layout";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Container from "../components/containers/Container";
import RatioContainer from "../components/containers/RatioContainer";
import BackgroundImage from "../components/Images/BackgroundImage";
import Typography from "@material-ui/core/Typography";
import NavLink from "../components/links/NavLink";
import IconLaunch from "../components/icons/IconLaunch";
import {useLinkStyles} from "../components/links/LinkStyles";
import {getRoute} from "../utils/Utils";
import {siteRoutes} from "../../public/config.json";

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
        fontSize: theme.typography.pxToRem(60),
        fontWeight: 700,
        lineHeight: 1.17,
        color: theme.palette.common.white,
        marginBottom: '15px',
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.pxToRem(90)
        }
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
    }
}));
const Page404 = () => {
    const {t, lang} = useTranslation();
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const currentRoute = getRoute('Home', siteRoutes)[0];
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <section className={classes.wrapper}>
                <Container maxWidth={{xs: 405, sm: 405, md: 405}}>
                    <RatioContainer ratio={{xs: 384 / 405, sm: 384 / 405, md: 384 / 405}}>
                        <BackgroundImage imgUrl={'/images/redirect/redirect-bg.png'} detectRetina={false}/>
                        <div className={classes.info}>
                            <Typography variant={"h1"} component={'div'} align={"center"} className={classes.title}>
                                404
                            </Typography>
                            <Typography variant={"body1"} align={"center"} className={classes.desc}>
                                {t('common:Page not found')}
                            </Typography>
                        </div>
                    </RatioContainer>
                    <div className={classes.cta}>
                        <NavLink hrefPath={'/'} classNames={linkClasses.iconLink}>
                            <Typography variant={"body1"} component={'div'} align={"center"}
                                        className={classes.label}>
                                {t('common:Back to home')}
                            </Typography>
                            <IconLaunch/>
                        </NavLink>
                    </div>
                </Container>
            </section>
        </Layout>
    );
};
export default Page404;
