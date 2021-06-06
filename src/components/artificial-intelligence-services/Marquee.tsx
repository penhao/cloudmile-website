import React from 'react';
import useTranslation from "next-translate/useTranslation";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: '60px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '100px'
        }
    },
    marquee: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        paddingBottom: '10px',
        '& > span': {
            willChange: 'transform',
            transform: 'translateX(0)',
            fontSize: theme.typography.pxToRem(40),
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 'normal',
            whiteSpace: 'nowrap',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(60)
            }
        }
    },
    stroke: {
        '& > span': {
            color: theme.palette.common.white,
            animation: '$MarqueeEffect 20s linear infinite',
            '&::-webkit-text-stroke': {
                width: '10px',
                color: 'red'
            }
        }
    },
    fill: {
        '& > span': {
            color: theme.palette.secondary.main,
            animation: '$MarqueeEffect 24s linear infinite',
        }
    },
    "@keyframes MarqueeEffect": {
        '0%': {
            transform: 'translateX(0)'
        },
        '100%': {
            transform: 'translateX(-100%)'
        }
    }
}));
const Marquee = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <div className={classes.root}>
            <div className={clsx(classes.marquee, classes.stroke, 'marqueeStroke')}>
                <span>{t("ai-services:Empower your business to achieve more with machine learning")}&nbsp;&nbsp;</span>
                <span>{t("ai-services:Empower your business to achieve more with machine learning")}&nbsp;&nbsp;</span>
                <span>{t("ai-services:Empower your business to achieve more with machine learning")}&nbsp;&nbsp;</span>
                <span>{t("ai-services:Empower your business to achieve more with machine learning")}&nbsp;&nbsp;</span>
            </div>
            <div className={clsx(classes.marquee, classes.fill)}>
                <span>{t("ai-services:From cloud to data From data to business intelligence")}&nbsp;&nbsp;</span>
                <span>{t("ai-services:From cloud to data From data to business intelligence")}&nbsp;&nbsp;</span>
                <span>{t("ai-services:From cloud to data From data to business intelligence")}&nbsp;&nbsp;</span>
                <span>{t("ai-services:From cloud to data From data to business intelligence")}&nbsp;&nbsp;</span>
            </div>
        </div>
    );
};

export default Marquee;
