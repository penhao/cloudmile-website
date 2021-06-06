import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        position: 'relative',
        width: '100%',
        marginTop: '40px',
        overflow: 'hidden',
        overflowX: 'auto',
        [theme.breakpoints.up('md')]: {
            overflowX: 'hidden',
            marginTop: '60px'
        }
    },
    inner: {
        width: '100%',
        minWidth: '880px'
    },
    title: {
        marginBottom: '16px'
    },
    captionList: {
        listStyle: 'disc outside !important',
        paddingLeft: '22px',
        height: '105px',
        marginBottom: '26px'
    },
    list: {
        '& li': {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginBottom: '20px',
            '&:last-child': {
                marginBottom: 0
            },
            '& img': {
                width: '60px',
                marginRight: '16px'
            }
        }
    },
    item: {
        width: '280px'
    },
    arrow: {
        width: '100%',
        marginBottom: '26px'
    }
}));
const TransformationDescList = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <Grid container spacing={4} wrap={"nowrap"}>
                    <Grid item xs={4}>
                        <div className={classes.item}>
                            <Typography variant={"h4"} color={"primary"} dangerouslySetInnerHTML={
                                {__html: t('digital-transformation:Machine Learning Discovery')}
                            } className={classes.title}/>
                            <ul className={classes.captionList}>
                                <li>
                                    <Typography variant={"body1"}>
                                        {t('digital-transformation:ML use case generation')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant={"body1"}>
                                        {t('digital-transformation:Data exploration & qualification')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant={"body1"}>
                                        {t('digital-transformation:Feasibility study report with risk evaluation')}
                                    </Typography>
                                </li>
                            </ul>
                            <img src="/images/icons/product/arrow.svg" className={classes.arrow}/>
                            <ul className={classes.list}>
                                <li>
                                    <img src="/images/icons/product/identify.svg"/>
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Identify business problem')}
                                    </Typography>
                                </li>
                                <li>
                                    <img src="/images/icons/product/develop.svg"/>
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Develop hypothesis')}
                                    </Typography>
                                </li>
                                <li>
                                    <img src="/images/icons/product/explore-data.svg"/>
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Acquire & Explore data')}
                                    </Typography>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.item}>
                            <Typography variant={"h4"} color={"primary"} dangerouslySetInnerHTML={
                                {__html: t('digital-transformation:MVM Development')}
                            } className={classes.title}/>
                            <ul className={classes.captionList}>
                                <li>
                                    <Typography variant={"body1"}>
                                        {t('digital-transformation:Feature engineering')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant={"body1"}>
                                        {t('digital-transformation:Algorithm comparison & selection')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant={"body1"}>
                                        {t('digital-transformation:Model deployment')}
                                    </Typography>
                                </li>
                            </ul>
                            <img src="/images/icons/product/arrow.svg" className={classes.arrow}/>
                            <ul className={classes.list}>
                                <li>
                                    <img src="/images/icons/product/bulid.svg"/>
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Build a model')}
                                    </Typography>
                                </li>
                                <li>
                                    <img src="/images/icons/product/train-the-model.svg"/>
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Train the model')}
                                    </Typography>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.item}>
                            <Typography variant={"h4"} color={"primary"} dangerouslySetInnerHTML={
                                {__html: t('digital-transformation:On Production')}
                            } className={classes.title}/>
                            <ul className={classes.captionList}>
                                <li>
                                    <Typography variant={"body1"}>
                                        {t('digital-transformation:GCP architecture design')}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant={"body1"}>
                                        {t('digital-transformation:Consultancy on model tuning & optimization')}
                                    </Typography>
                                </li>
                            </ul>
                            <img src="/images/icons/product/arrow.svg" className={classes.arrow}/>
                            <ul className={classes.list}>
                                <li>
                                    <img src="/images/icons/product/scale.svg"/>
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Apply and scale')}
                                    </Typography>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
export default TransformationDescList;