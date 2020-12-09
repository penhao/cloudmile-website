import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme, createStyles} from "@material-ui/core";
import WelcomeText from "./WelcomeText";
import BackgroundImage from "../../Images/BackgroundImage";
import RatioContainer from "../../containers/RatioContainer";
import useTranslation from "next-translate/useTranslation";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.main,
        '& svg': {
            display: 'block'
        }
    },
    inner: {
        position: 'absolute',
        width: '12000%',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.easeOut,
            duration: '0.9s'
        }),
        '&.active': {
            width: '100%'
        }
    },
    rect: {
        display: 'block',
        width: '100%',
        height: '50vh',
        backgroundColor: theme.palette.primary.main
    }
}));
const HomeBanner = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const [textActive, setTextActive] = useState(false);
    useEffect(() => {
        const timer = window.setTimeout(() => {
            setTextActive(true);
        }, 500);
        return () => {
            window.clearTimeout(timer);
        };
    }, []);
    return (
        <div className={classes.root}>
            <RatioContainer ratio={{xs: 1, sm: 1, md: 1}}
                            maxHeight={{xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 60px)', md: 'calc(100vh - 60px)'}}>
                <BackgroundImage imgUrl={'/home/cloud.jpg'}
                                 alt={t('home:alt.Making Digital Transformation Possible')}
                                 detectRetina={true}/>
            </RatioContainer>
            <div className={clsx(classes.inner, (textActive ? 'active' : null))}>
                <span className={classes.rect}/>
                <WelcomeText/>
                <span className={classes.rect}/>
            </div>
        </div>
    );
};
export default HomeBanner;
