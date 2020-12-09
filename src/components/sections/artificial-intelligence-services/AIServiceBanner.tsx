import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import PageBanner from "../../banner/PageBanner";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useTranslation from "next-translate/useTranslation";

interface StyleProps {
    lang: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        width: '640px',
        height: '230px',
        left: '50%',
        marginLeft: '-320px',
        marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            width: '1200px',
            height: '350px',
            marginLeft: '-600px',
        },
        [theme.breakpoints.up('md')]: {
            width: '1920px',
            height: '460px',
            left: '50%',
            marginLeft: '-960px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            left: 0,
            marginLeft: 0
        },
    },
    infoInner: {
        display: 'inline-block',
        position: 'relative',
        width: 'auto',
        left: '50%',
        transform: ({lang}: StyleProps) => (lang === 'zh-hant') ? 'translate(-50%,-40%)' : 'translate(-50%,-10%)',
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            top: '50%',
            transform: ({lang}: StyleProps) => (lang === 'zh-hant') ? 'translate(-32%,-92%)' : 'translate(-50%,-50%)'
        },
        [theme.breakpoints.up('md')]: {
            transform: ({lang}: StyleProps) => (lang === 'zh-hant') ? 'translate(-38%, -80%)' : 'translate(-60%,-84%)'
        }
    },
    caption: {
        [theme.breakpoints.only('sm')]: {
            position: ({lang}: StyleProps) => (lang === 'zh-hant') ? 'relative' : 'absolute',
            fontSize: theme.typography.pxToRem(18),
            lineHeight: 1.33,
            left: ({lang}: StyleProps) => (lang === 'zh-hant') ? 0 : '74px',
            top: ({lang}: StyleProps) => (lang === 'zh-hant') ? '10px' : '20px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(24),
            lineHeight: 1.25,
            left: ({lang}: StyleProps) => (lang === 'zh-hant') ? 0 : '114px',
            top: ({lang}: StyleProps) => (lang === 'zh-hant') ? '40px' : '40px',
        }
    },
    title: {
        lineHeight: 1,
        fontWeight: 700,
        [theme.breakpoints.up('sm')]: {
            lineHeight: ({lang}: StyleProps) => (lang === 'zh-hant') ? 1.1 : 0.8,
        },
        '& span': {
            '& span': {
                // fontSize: theme.typography.pxToRem(68)
            }
        }
    }
}));
const AIServiceBanner = () => {
    const {t, lang} = useTranslation();
    const classes = useStyles({lang});
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <div className={classes.root}>
            <PageBanner imgUrl={'/ai-services/banner.png'} alt={''}>
                <div className={classes.infoInner}>
                    <Typography variant={'h1'}
                                className={classes.title}>
                        <span dangerouslySetInnerHTML={{__html: t('ai-services:AI Services')}}/>
                    </Typography>
                    <Typography variant={'h5'}
                                noWrap={smUp}
                                className={classes.caption}>
                        {t('ai-services:Accelerate AI journey with CloudMile')}
                    </Typography>
                </div>
            </PageBanner>
        </div>
    );
};
export default AIServiceBanner;
