import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import RatioContainer from "../../containers/RatioContainer";
import ResponseImage from "../../Images/ResponseImage";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        width: '640px',
        height: '230px',
        left: '50%',
        marginLeft: '-320px',
        marginBottom: '60px',
        [theme.breakpoints.up('sm')]: {
            width: '1200px',
            height: '350px',
            marginLeft: '-600px',
            marginBottom: '80px',
        },
        [theme.breakpoints.up('md')]: {
            width: '1920px',
            height: '460px',
            left: '50%',
            marginLeft: '-960px',
            marginBottom: '120px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            left: 0,
            marginLeft: 0
        }
    },
    bgColor: {
        position: 'absolute',
        width: '100vw',
        height: '100%',
        left: '50%',
        top: 0,
        transform: 'translateX(-50%)',
        backgroundColor: theme.palette.common.black,
        '&::before': {
            display: 'block',
            content: '""',
            position: 'absolute',
            width: '60%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundColor: theme.palette.secondary.main
        }
    },
    info: {
        position: 'absolute',
        width: '100vw',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 1,
        padding: '20px',
        '& h1,h5': {
            color: theme.palette.common.white
        },
        '& h1': {
            marginBottom: '10px'
        },
        '& h5': {
            [theme.breakpoints.only('xs')]: {
                fontSize: theme.typography.pxToRem(18)
            },
            [theme.breakpoints.only('sm')]: {
                fontSize: theme.typography.pxToRem(18)
            }
        }
    },
    infoInner: {
        display: 'flex',
        alignItems: 'center',
        '& > div': {
            position: 'relative',
            '&:nth-child(1)': {
                width: '50%',
                paddingRight: '10px',
                [theme.breakpoints.up('md')]: {
                    paddingRight: '20px'
                }
            },
            '&:nth-child(2)': {
                width: '50%',
                minWidth: '200px',
                paddingLeft: '10px',
                [theme.breakpoints.up('md')]: {
                    paddingLeft: '20px'
                }
            }
        }
    },
    logo: {
        width: '70px',
        marginBottom: '5px',
        [theme.breakpoints.up('sm')]: {
            width: '100px',
            marginBottom: '10px'
        }
    },
    product: {
        position: 'absolute',
        flex: '0 0 286px',
        width: '286px',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.up('sm')]: {
            flex: '0 0 500px',
            width: '500px',
            right: '-10px',
            transform: 'translateY(-45%)'
        },
        [theme.breakpoints.up('md')]: {
            flex: '0 0 800px',
            width: '800px',
            right: '-40px',
            transform: 'translateY(-42%)'
        }
    }
}));
const MultiCDNBanner = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <div className={classes.root}>
            <div className={classes.bgColor}/>
            <div className={classes.info}>
                <div className={classes.infoInner}>
                    <div>
                        <div className={classes.product}>
                            <RatioContainer ratio={{xs: 456 / 793, sm: 456 / 793, md: 456 / 793}}>
                                <ResponseImage imageUrl={'/china-access/milecdn-banner.png'}
                                               alt={t('multi-cdn-platform:alt.MileCDN Dashboard')}/>
                            </RatioContainer>
                        </div>
                    </div>
                    <div>
                        <img src="/images/logos/milecdn-logo-white.svg" alt="" className={classes.logo}/>
                        <Typography variant={"h1"}>
                            <span dangerouslySetInnerHTML={{
                                __html:t('multi-cdn-platform:Multi-CDN Platform')
                            }}/>
                        </Typography>
                        <Typography variant={"h5"}>
                            <span dangerouslySetInnerHTML={{
                                __html:t('multi-cdn-platform:Boost your website performance via MileCDN')
                            }}/>
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiCDNBanner;
