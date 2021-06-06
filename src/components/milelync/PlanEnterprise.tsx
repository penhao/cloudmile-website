import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import usePlanItemStyles from "./PlanItemStyles";
import useTranslation from "next-translate/useTranslation";

const PlanEnterprise = () => {
    const classes = usePlanItemStyles();
    const {t} = useTranslation();
    return (
        <div className={classes.item}>
            <div className={classes.itemHead}>
                <Typography variant={"h5"} color={"primary"} align={"center"} className={classes.title}>
                    {t('cloud-management-platform:Enterprise')}
                </Typography>
                <div className={classes.price}>
                    <Typography variant={"h5"} color={"secondary"}>
                        {t('cloud-management-platform:ASK FOR QUOTE')}
                    </Typography>
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.desc}>
                    <Typography variant={"body1"} align={"center"} className={classes.descTitle}>
                        {t('cloud-management-platform:Everything in Business')}
                    </Typography>
                    <Typography variant={"body1"} align={"center"} color={"secondary"}>
                        {t('cloud-management-platform:Free assessment semi-annually and authority of opening P1 tickets with 24x7')}
                    </Typography>
                </div>
                <div className={classes.desc}>
                    <Typography variant={"body1"} align={"center"} className={classes.descTitle}>
                        {t('cloud-management-platform:GCP cloud architect support and consultation')}
                    </Typography>
                    <Typography variant={"body1"} align={"center"} color={"secondary"}>
                        {t('cloud-management-platform:Free GCP semi-annually Architecture Review')}
                        <br/>
                        <span>{t('cloud-management-platform:Specific Use Cases')}</span>
                    </Typography>
                </div>
            </div>
            <div className={classes.itemBottom}>
                <div className={clsx(classes.desc)}>
                    <Typography variant={"body1"} align={"center"} className={classes.descTitle}>
                        {t('cloud-management-platform:Support service response time')}
                    </Typography>
                    <ul className={classes.list}>
                        <li>P1 &lt; 1 hrs ({t('cloud-management-platform:business hours')})</li>
                        <li>P2 &lt; 4 hrs ({t('cloud-management-platform:business hours')})</li>
                        <li>P3 &lt; 4 hrs ({t('cloud-management-platform:business hours')})</li>
                        <li>P4 &lt; 8 hrs ({t('cloud-management-platform:business hours')})</li>
                    </ul>
                </div>
                <div className={classes.desc}>
                    <Typography variant={"body1"} align={"center"} className={classes.descTitle}>
                        {t('cloud-management-platform:Support contact')}
                    </Typography>
                    <Typography variant={"body1"} align={"center"} color={"secondary"}>
                        8 X 5；24 X 7 (P1)
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default PlanEnterprise;
