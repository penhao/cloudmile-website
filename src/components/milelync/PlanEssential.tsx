import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import usePlanItemStyles from "./PlanItemStyles";
import useTranslation from "next-translate/useTranslation";

const PlanEssential = () => {
    const classes = usePlanItemStyles();
    const {t} = useTranslation();
    return (
        <div className={classes.item}>
            <div className={classes.itemHead}>
                <Typography variant={"h5"} color={"primary"} align={"center"} className={classes.title}>
                    {t('cloud-management-platform:Essential')}
                </Typography>
                <div className={classes.price}>
                    <Typography variant={"h5"} color={"secondary"}>
                        {t('cloud-management-platform:Free')}
                    </Typography>
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.desc}>
                    <Typography variant={"body1"} align={"center"} className={classes.descTitle}>
                        {t('cloud-management-platform:Billing ServiceHelp create tickets on Official Support Center')}
                    </Typography>
                    <Typography variant={"body1"} align={"center"} color={"secondary"}>
                        {t('cloud-management-platform:(6 tickets/quarter)')}
                    </Typography>
                </div>
            </div>
            <div className={classes.itemBottom}>
                <div className={classes.desc}>
                    <Typography variant={"body1"} align={"center"} className={classes.descTitle}>
                        {t('cloud-management-platform:Support service response time')}
                    </Typography>

                    <ul className={classes.list}>
                        <li>P2 &lt; 16 hrs ({t('cloud-management-platform:business hours')})</li>
                        <li>P3 &lt; 32 hrs ({t('cloud-management-platform:business hours')})</li>
                        <li>P4 &lt; 32 hrs ({t('cloud-management-platform:business hours')})</li>
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

export default PlanEssential;
