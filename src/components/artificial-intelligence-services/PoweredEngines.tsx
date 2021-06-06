import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import useTranslation from "next-translate/useTranslation";
import PoweredEnginesSlider from "./PoweredEnginesSlider";
import ShiftContainer from "../containers/ShiftContainer";

const PoweredEngines = () => {
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
                                <SectionTitleLabel color={'warning'}>
                                    {t('ai-services:CloudMile AI for industries')}
                                </SectionTitleLabel>
                                <SectionTitle>
                                    {t('ai-services:Build New Business Model with AI-powered Engines')}
                                </SectionTitle>
                            </Container>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth={{ xs: 'none', sm: 'none', md: 1240 }} paddingX={false}>
                            <ShiftContainer shiftX={{ xs: -20, sm: -20, md: -20 }} growX={{ xs: 40, sm: 40, md: 40 }}>
                                <PoweredEnginesSlider />
                            </ShiftContainer>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default PoweredEngines;
