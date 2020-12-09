import React from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Grid from "@material-ui/core/Grid";
import Container from "../../containers/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import GridItem480 from "../items/GridItem480";
import GridItemFlexible from "../items/GridItemFlexible";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTranslation from "next-translate/useTranslation";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import ImageClipEffect from "../../effects/ImageClipEffect";
import AIServiceIconItem from "./AIServiceIconItem";
import ShiftContainer from "../../containers/ShiftContainer";

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: '20px'
    }
}));
const Services = () => {

    const classes = useStyles();
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Container maxWidth={{md: 1920}}>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('ai-services:CloudMile AI Services')}
                                </SectionTitle>
                            </Container>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth={{md: 1240}} paddingX={false}>
                            <Grid container spacing={4} alignItems={"center"}>
                                <GridItem480 grow={true}>
                                    <ShiftContainer shiftX={{xs: -20, sm: -20, md: -340}} growX={{xs: 40, sm: 40, md: 340}}>
                                        <RatioContainer ratio={{xs: (200 / 320), sm: (350 / 640), md: (915 / 780)}}>
                                            <ImageClipEffect>
                                                <ParallaxEffect>
                                                    <ResponseImage
                                                        imageUrl={'/ai-services/ai-services.jpg'}
                                                        alt={''}/>
                                                </ParallaxEffect>
                                            </ImageClipEffect>
                                        </RatioContainer>
                                    </ShiftContainer>
                                </GridItem480>
                                <GridItemFlexible grow={true}>
                                    <Container maxWidth={{xs: 'none', sm: 760, md: 760}} paddingX={false} centerX={false}>
                                        <Grid container spacing={smUp ? 4 : 2}>
                                            <Grid item xs={12}>
                                                <Typography variant={"h3"} className={classes.title}>
                                                    {t('ai-services:Infrastructure')}
                                                </Typography>
                                                <Grid container spacing={smUp ? 4 : 2}>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/infrastructure.svg'}
                                                            title={t("ai-services:Infrastructure Modernization")}/>
                                                    </Grid>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/solution.svg'}
                                                            title={t("ai-services:Solution Architect")}/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant={"h3"} className={classes.title}>
                                                    {t('ai-services:Data')}
                                                </Typography>
                                                <Grid container spacing={smUp ? 4 : 2}>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/etl-pipeline.svg'}
                                                            title={t("ai-services:ETL Pipeline")}/>
                                                    </Grid>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/dmp.svg'}
                                                            title={t("ai-services:Data Management Platform")}/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant={"h3"} className={classes.title}>
                                                    {t('ai-services:AI Transformation')}
                                                </Typography>
                                                <Grid container spacing={smUp ? 4 : 2}>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/cost-optimization.svg'}
                                                            title={t("ai-services:Cost Optimization")}/>
                                                    </Grid>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/revenue-stream.svg'}
                                                            title={t("ai-services:New Revenue Stream")}/>
                                                    </Grid>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/customer-satisfaction.svg'}
                                                            title={t("ai-services:Customer Satisfaction")}/>
                                                    </Grid>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/ai-driven-business-operation.svg'}
                                                            title={t("ai-services:AI-Driven Business Operation")}/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant={"h3"} className={classes.title}>
                                                    {t('ai-services:Managed Service')}
                                                </Typography>
                                                <Grid container spacing={smUp ? 4 : 2}>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/ml-monitor.svg'}
                                                            title={t("ai-services:ML Monitoring")}/>
                                                    </Grid>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/platform-as-a-service.svg'}
                                                            title={t("ai-services:Platform-as-a-service")}/>
                                                    </Grid>
                                                    <Grid item xs={6} sm={4} md={3}>
                                                        <AIServiceIconItem
                                                            icon={'/images/icons/product/api-as-a-service.svg'}
                                                            title={t("ai-services:API-as-a-service")}/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </GridItemFlexible>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default Services;
