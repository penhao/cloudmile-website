import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
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
        marginTop: '16px',
        marginBottom: '26px'
    }
}));
const AdoptionDescList = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <Grid container spacing={4} wrap={"nowrap"}>
                    <Grid item xs={4}>
                        <div className={classes.item}>
                            <Typography variant={"h4"} color={"primary"} dangerouslySetInnerHTML={
                                { __html: t('digital-transformation:Strategy, Assessment, Roadmap') }
                            } />
                            <img src="/images/icons/product/arrow.svg" className={classes.arrow} />
                            <ul className={classes.list}>
                                <li>
                                    <img src="/images/icons/product/cloud-discovery.svg" />
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Cloud Discovery')}
                                    </Typography>
                                </li>
                                <li>
                                    <img src="/images/icons/product/cloud-maturity-assessment.svg" />
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Cloud Maturity Assessment')}
                                    </Typography>
                                </li>
                                <li>
                                    <img src="/images/icons/product/action-planning.svg" />
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Action Planning')}
                                    </Typography>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.item}>
                            <Typography variant={"h4"} color={"primary"} dangerouslySetInnerHTML={
                                { __html: t('digital-transformation:Cloud Migration & Digital Transformation') }
                            } />
                            <img src="/images/icons/product/arrow.svg" className={classes.arrow} />
                            <ul className={classes.list}>
                                <li>
                                    <img src="/images/icons/product/solution.svg" />
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Solution & Architecture')}
                                    </Typography>
                                </li>
                                <li>
                                    <img src="/images/icons/product/vm-migration.svg" />
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Migration Planning')}
                                    </Typography>
                                </li>
                                <li>
                                    <img src="/images/icons/product/api-facade.svg" />
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Data & Cloud Migration')}
                                    </Typography>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.item}>
                            <Typography variant={"h4"} color={"primary"} dangerouslySetInnerHTML={
                                { __html: t('digital-transformation:Continuous Improvement & Optimization') }
                            } />
                            <img src="/images/icons/product/arrow.svg" className={classes.arrow} />
                            <ul className={classes.list}>
                                <li>
                                    <img src="/images/icons/product/operation-readiness-efficiency.svg" />
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Operation Readiness & Efficiency')}
                                    </Typography>
                                </li>
                                <li>
                                    <img src="/images/icons/product/continuous-Integration.svg" />
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Continuous Integration & Continuous Delivery')}
                                    </Typography>
                                </li>
                                <li>
                                    <img src="/images/icons/product/site-reliability-engineering.svg" />
                                    <Typography variant={"body1"} color={"secondary"}>
                                        {t('digital-transformation:Site Reliability Engineering')}
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
export default AdoptionDescList;