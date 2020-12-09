import React from 'react';
import {Theme, useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import PlanEssential from "./PlanEssential";
import PlanDevelopment from "./PlanDevelopment";
import PlanBusiness from "./PlanBusiness";
import PlanEnterprise from "./PlanEnterprise";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    plaList: {
        width: 'calc(100% + 20px)',
        overflow: 'hidden',
        overflowX: 'auto',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        }
    },
    itemContainer: {
        width: '100%',
        minWidth: '1200px',
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {
            minWidth: 0,
            overflow: 'hidden'
        }
    },
    info: {
        marginTop: '20px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '40px',
        },
        '& span': {
            fontWeight: 'bold'
        }
    }
}));
const MileLyncPlan = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <SectionContainer>
            <Container maxWidth={{md: 1280}}>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'}/>
                            <SectionTitle>
                                {t('cloud-management-platform:Choose Your Plan')}
                            </SectionTitle>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.plaList}>
                            <div className={classes.itemContainer}>
                                <Grid container spacing={smUp ? 4 : 2}>
                                    <Grid item xs={3}>
                                        <PlanEssential/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <PlanDevelopment/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <PlanBusiness/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <PlanEnterprise/>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <Typography variant={"body1"} className={classes.info}>
                            <span>{`P1 ${t('cloud-management-platform:Critical')}`}</span>: {t('cloud-management-platform:ImpactService Unusable in Production')}<br/>
                            <span>{`P2 ${t('cloud-management-platform:High Impact')}`}</span>: {t('cloud-management-platform:Service Use Severely Impaired')}<br/>
                            <span>{`P3 ${t('cloud-management-platform:Medium Impact')}`}</span>: {t('cloud-management-platform:Service Use Partially Impaired')}<br/>
                            <span>{`P4 ${t('cloud-management-platform:Low Impact')}`}</span>: {t('cloud-management-platform:Service Fully Usable')}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default MileLyncPlan;
