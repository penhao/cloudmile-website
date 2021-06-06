import React from 'react';
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import BackgroundImage from "../Images/BackgroundImage";
import Typography from "@material-ui/core/Typography";
import { Controller, Scene } from "react-scrollmagic";

interface ICompanyBanner {
    title: string
    caption: string
    imgUrl: string
    alt?: string
    customClass?: string
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        width: '640px',
        left: '50%',
        marginLeft: '-320px',
        // marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            width: '1200px',
            marginLeft: '-600px',
            // marginBottom: '40px',
        },
        [theme.breakpoints.up('md')]: {
            width: '1920px',
            left: '50%',
            marginLeft: '-960px',
            // marginBottom: '100px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            left: 0,
            marginLeft: 0
        },
    },
    cover: {
        width: '100%',
        height: '230px',
        [theme.breakpoints.up('sm')]: {
            height: '350px'
        },
        [theme.breakpoints.up('md')]: {
            height: '460px'
        }
    },
    info: {
        position: 'relative',
        width: '100vw',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '0 20px',
        '& h4': {
            marginBottom: '12px'
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            left: 0,
            transform: 'translateX(0)',
            padding: 0
        }
    },
    title: {
        lineHeight: 1.3,
        '& > span': {
            '& > span': {
                position: 'relative',
                display: 'inline',
                '&::after': {
                    display: 'block',
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 0,
                    height: '100%',
                    backgroundColor: theme.palette.warning.main,
                    transition: theme.transitions.create(['width'], {
                        easing: theme.transitions.easing.easeOut,
                        duration: '1s'
                    })
                },
                '& > span': {
                    position: 'relative',
                    display: 'inline',
                    zIndex: 1
                }
            }
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '60px'
        }
    },
    active: {
        '& $title': {
            '& > span': {
                '& > span': {
                    '&::after': {
                        width: '100%'
                    },
                    '&:nth-child(1)': {
                        '&::after': {
                            transitionDelay: '0.5s'
                        }
                    },
                    '&:nth-child(2)': {
                        '&::after': {
                            transitionDelay: '1.2s'
                        }
                    }
                }
            }
        }
    }
}));
const CompanyBanner = ({ title, caption, imgUrl, alt = '', customClass }: ICompanyBanner) => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.root, customClass)}>
            <Grid container spacing={4} alignItems={"center"}>
                <Grid item xs={12} md={6}>
                    <div className={classes.cover}>
                        <BackgroundImage imgUrl={imgUrl} alt={alt} detectRetina={true} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller>
                        <Scene classToggle={classes.active} reverse={false} indicators={false} triggerHook={0.5}>
                            <div className={classes.info}>
                                <Container maxWidth={{ md: 600 }} paddingX={false} centerX={false}>
                                    <Typography variant={"h4"}>
                                        {caption}
                                    </Typography>
                                    <Typography variant={"h1"} className={classes.title}>
                                        <span dangerouslySetInnerHTML={{
                                            __html: title
                                        }} />
                                    </Typography>
                                </Container>
                            </div>
                        </Scene>
                    </Controller>
                </Grid>
            </Grid>
        </div>
    );
};
export default CompanyBanner;
