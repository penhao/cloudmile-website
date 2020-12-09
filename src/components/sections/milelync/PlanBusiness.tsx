import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import usePlanItemStyles from "./PlanItemStyles";
import useTranslation from "next-translate/useTranslation";

const PlanBusiness = () => {
    const classes = usePlanItemStyles();
    const {t} = useTranslation();
    return (
        <div className={classes.item}>
            <div className={classes.itemHead}>
                <Typography variant={"h5"} color={"primary"} align={"center"} className={classes.title}>
                    {t('cloud-management-platform:Business')}
                </Typography>
                <div className={classes.price}>
                    <Typography variant={"body1"} className={classes.originalPrice}>600USD</Typography>
                    <Typography variant={"h5"} color={"secondary"}>$300</Typography>
                    <Typography variant={"body1"} color={"secondary"} className={classes.priceUnit}>
                        {t('cloud-management-platform:USD/Month')}
                    </Typography>
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.desc}>
                    <Typography variant={"body1"} align={"center"} className={classes.descTitle}>
                        {t('cloud-management-platform:Everything in Development')}
                    </Typography>
                    <Typography variant={"body1"} align={"center"} color={"secondary"}>
                        {t('cloud-management-platform:Free assessment annually')}
                    </Typography>
                </div>
                <div className={classes.desc}>
                    <Typography variant={"body1"} align={"center"} className={classes.descTitle}>
                        {t('cloud-management-platform:GCP cloud architect support and consultation')}
                    </Typography>
                    <Typography variant={"body1"} align={"center"} color={"secondary"}>
                        {t('cloud-management-platform:Free GCP annually Architecture Review')}
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
                        <li>P2 &lt; 8&nbsp;&nbsp; hrs ({t('cloud-management-platform:business hours')})</li>
                        <li>P3 &lt; 12 hrs ({t('cloud-management-platform:business hours')})</li>
                        <li>P4 &lt; 12 hrs ({t('cloud-management-platform:business hours')})</li>
                        <li className={classes.emptyList}>&nbsp;</li>
                    </ul>
                </div>
                <div className={classes.desc}>
                    <Typography variant={"body1"} align={"center"} className={classes.descTitle}>
                        {t('cloud-management-platform:Support contact')}
                    </Typography>
                    <Typography variant={"body1"} align={"center"} color={"secondary"}>
                        8 X 5
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default PlanBusiness;
