import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import GridItem480 from "../items/GridItem480";
import GridItemFlexible from "../items/GridItemFlexible";
import SectionLabel from "../SectionLabel";
import {Hidden, Theme} from "@material-ui/core";
import ShiftContainer from "../../containers/ShiftContainer";
import SectionDescWrapper from "../SectionDescWrapper";
import useTranslation from "next-translate/useTranslation";
import IconItem from "../IconItem";
import CloudMileLogo from "./CloudMileLogo";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => ({
    logo: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        [theme.breakpoints.up('sm')]: {
            transform: 'translate(-30%, -50%)'
        },
        [theme.breakpoints.up('md')]: {
            transform: 'translate(-35%, -60%)'
        }
    }
}));
const Journey = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12} md={6} style={{position: 'relative'}}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('ai-services:Accelerate AI journey with__')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>AI JOURNEY</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 'none', sm: 'none', md: 1240}} paddingX={false}>
                            <Grid container spacing={smUp ? 4 : 2}>
                                <Hidden smDown>
                                    <GridItem480/>
                                </Hidden>
                                <GridItemFlexible overflow={'visible'}>
                                    <ShiftContainer shiftX={{md: -160}} growX={{md: 160}}>
                                        <SectionDescWrapper>
                                            <Hidden xsDown>
                                                <CloudMileLogo customClass={classes.logo}/>
                                            </Hidden>
                                            <Grid container spacing={smUp ? 4 : 2}>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={smUp ? 4 : 2}>
                                                        <Grid item xs={12} md={4}>
                                                            <IconItem
                                                                title={t('ai-services:Seamless AI integration with your enterprise')}
                                                                desc={t('ai-services:Our pre-trained AI Services provide__')}
                                                                color={"primary"}/>
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <IconItem
                                                                title={t('ai-services:Expertise across various industries')}
                                                                desc={t('ai-services:CloudMile specializes in helping customers in__')}
                                                                color={"primary"}/>
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <IconItem
                                                                title={t('ai-services:Unlocking business opportunities')}
                                                                desc={t('ai-services:From data discovery to data insight__')}
                                                                color={"primary"}/>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </GridItemFlexible>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default Journey;
