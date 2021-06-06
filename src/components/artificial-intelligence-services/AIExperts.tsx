import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import PhotoItem from "./PhotoItem";
import useTranslation from "next-translate/useTranslation";
import SectionDescWrapper from "../sections/SectionDescWrapper";

const AIExperts = () => {

    const { t } = useTranslation();

    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12} md={6} style={{ position: 'relative' }}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'} />
                                <SectionTitle>
                                    {t('ai-services:Customer Support from the Entire AI Experts')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>AI EXPERTS</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth={{ xs: 'none', sm: 'none', md: 1240 }} paddingX={false}>
                            <SectionDescWrapper>
                                <Grid container spacing={2} justify={mdUp ? "flex-end" : smUp ? 'flex-start' : 'center'}>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/data-engineer.png'}
                                            alt={t('ai-services:alt.A data engineer')}
                                            title={t('ai-services:Data Engineer')} />
                                    </Grid>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/data-scientist.png'}
                                            alt={t('ai-services:alt.A data scientist')}
                                            title={t('ai-services:Data Scientist')} />
                                    </Grid>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/ml-engineer.png'}
                                            alt={t('ai-services:alt.A ML engineer')}
                                            title={t('ai-services:ML Engineer')} />
                                    </Grid>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/developer.png'}
                                            alt={t('ai-services:alt.A Software Developer')}
                                            title={t('ai-services:Developer')} />
                                    </Grid>
                                    <Grid item>
                                        <PhotoItem imgUrl={'/ai-services/business-analyst.png'}
                                            alt={t('ai-services:alt.A Business Analyst')}
                                            title={t('ai-services:Business Analyst')} />
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

export default AIExperts;
