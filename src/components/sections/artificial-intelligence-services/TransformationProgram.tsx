import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import PhotoItem from "./PhotoItem";
import useTranslation from "next-translate/useTranslation";
import SectionDescWrapper from "../SectionDescWrapper";

const TransformationProgram = () => {

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
                                <SectionTitleLabel color={'warning'}>
                                    {t('ai-services:CloudMile AI Transformation Program')}
                                </SectionTitleLabel>
                                <SectionTitle>
                                    {t('ai-services:How We Work')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>PROGRAM</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth={{md: 1240}} paddingX={false}>
                            <SectionDescWrapper>
                                <Grid container spacing={2}
                                      justify={mdUp ? "flex-end" : smUp ? 'flex-start' : 'center'}>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/discover-and-identify-problem.png'}
                                                   alt={t('ai-services:alt.Mapping out business objectives on a table')}
                                                   title={t('ai-services:Discover and Identify Problem')}/>
                                    </Grid>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/data-verification-data-cleaning.png'}
                                                   alt={t('ai-services:alt.The Visualization of Data flow')}
                                                   title={t('ai-services:Data Verification & Data Cleaning')}/>
                                    </Grid>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/machine-learning-model-development.png'}
                                                   alt={t('ai-services:alt.Someone watching the screen')}
                                                   title={t('ai-services:Machine Learning Model Development')}/>
                                    </Grid>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/mvm.png'}
                                                   alt={t('ai-services:alt.AI Model Tree')}
                                                   title={t('ai-services:MVM (Minimum Viable Model)')}/>
                                    </Grid>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/mvp.png'}
                                                   alt={t('ai-services:alt.The power of AI appears')}
                                                   title={t('ai-services:MVP (Minimum Viable Product)')}/>
                                    </Grid>
                                </Grid>
                            </SectionDescWrapper>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default TransformationProgram;
