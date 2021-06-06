import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ColorGraphic from "../sections/ColorGraphic";
import Hidden from "@material-ui/core/Hidden";
import RatioContainer from "../containers/RatioContainer";
import BackgroundImage from "../Images/BackgroundImage";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    banner: {
        position: 'relative',
        width: '640px',
        height: '230px',
        left: '50%',
        marginLeft: '-320px',
        marginBottom: '40px',
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up('sm')]: {
            width: '1200px',
            height: '350px',
            marginLeft: '-600px',
            marginBottom: '40px',
        },
        [theme.breakpoints.up('md')]: {
            width: '1920px',
            height: '460px',
            left: '50%',
            marginLeft: '-960px',
            marginBottom: '60px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            left: 0,
            marginLeft: 0
        }
    },
    bannerInner: {
        position: 'relative',
        width: '100vw',
        height: '100%',
        maxWidth: '1280px',
        margin: '0 auto'
    },
    productContainer: {
        position: 'relative'
    },
    product: {
        position: 'absolute',
        width: '480px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-47%)',
        [theme.breakpoints.up('sm')]: {
            width: '730px',
            transform: 'translate(-45%,-46%)'
        },
        [theme.breakpoints.up('md')]: {
            width: '1000px',
            transform: 'translate(-40%,-50%)'
        }
    },
    title: {
        color: theme.palette.common.white
    },
    caption: {
        color: theme.palette.common.white,
        marginBottom: '10px'
    },
    infoContainer: {
        height: '100%'
    },
    graphicMask: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        border: '1px solid green',
        overflow: 'hidden'
    },
    dashline: {
        position: 'absolute',
        left: '50%',
        bottom: '-150px',
        transform: 'translateX(-50%) rotate(180deg) scale(0.4)',
        transformOrigin: 'center center',
        opacity: 0.2,
        [theme.breakpoints.up('sm')]: {
            bottom: '-180px',
            transform: 'translateX(-50%) rotate(180deg) scale(0.7)',
            transformOrigin: 'center center',
        },
        [theme.breakpoints.up('md')]: {
            bottom: '-180px',
            transform: 'translateX(-50%) rotate(180deg) scale(1)',
            transformOrigin: 'center center',
        }
    }
}));
const Banner = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <div className={classes.banner}>
            <div className={classes.graphicMask}>
                <ColorGraphic type={"dashline"} size={265} lineSizeRate={1000 / 265}
                    color={"black"} customClass={classes.dashline} />
            </div>
            <div className={classes.bannerInner}>
                <Grid container spacing={4} alignItems={"center"} className={classes.infoContainer}>
                    <Grid item xs={4} sm={6} className={classes.productContainer}>
                        <div className={classes.product}>
                            <RatioContainer ratio={{ xs: 520 / 1000, sm: 520 / 1000, md: 520 / 1000 }}>
                                <BackgroundImage imgUrl={'/images/md/milelync/banner@2x.png'} detectRetina={false} />
                            </RatioContainer>
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={6}>
                        <Typography variant={'h5'} className={classes.caption}>
                            {t('cloud-management-platform:Making Cloud Management Smart and Simple')}
                        </Typography>
                        <Typography variant={'h1'} className={classes.title}>
                            {t('cloud-management-platform:MileLync')}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Banner;
