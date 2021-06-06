import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import useTranslation from "next-translate/useTranslation";
import Box from "@material-ui/core/Box";
import SectionLabel from "../sections/SectionLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import ShiftContainer from "../containers/ShiftContainer";
import { Hidden } from "@material-ui/core";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import ImageClipEffect from "../effects/ImageClipEffect";
import RatioContainer from "../containers/RatioContainer";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import Jobs from "./Jobs";

const ExploreOpportunities = () => {
    const { t } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Container maxWidth={{ xs: 'none', sm: 'none', md: '86%' }} paddingX={false} centerX={false}>
                <RatioContainer ratio={{ xs: (200 / 320), sm: (420 / 1100), md: (545 / 1420) }}
                    maxHeight={{ xs: 'none', sm: 'none', md: 420 }}>
                    <ImageClipEffect>
                        <ParallaxEffect>
                            <ResponseImage imageUrl={'/career/explore-opportunities-by-location.jpg'}
                                alt={t('career:alt.Discussing Over A Financial Report')} />
                        </ParallaxEffect>
                    </ImageClipEffect>
                </RatioContainer>
            </Container>

            <ShiftContainer shiftY={{ sm: -64, md: -64 }}>
                <Container maxWidth={{ xs: 'none', sm: 'none', md: 1920 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                    <SectionTitleLabel color={'warning'} />
                                    <SectionTitle>
                                        {t('career:Explore opportunities by location')}
                                    </SectionTitle>
                                </Container>
                            </Box>
                            <SectionLabel>EXPLORE</SectionLabel>
                        </Grid>
                        <Grid item xs={12}>
                            <Container maxWidth={{ xs: 'none', sm: 'none', md: 1240 }} paddingX={false}>
                                <Grid container spacing={smUp ? 4 : 2}>
                                    <Hidden smDown>
                                        <Grid item xs={12} md={6} />
                                    </Hidden>
                                    <Grid item xs={12} md={6}>
                                        <SectionDescWrapper>
                                            <ShiftContainer shiftX={{ md: -320 }} growX={{ md: true }}>
                                                <Jobs />
                                            </ShiftContainer>
                                        </SectionDescWrapper>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>

                    </Grid>
                </Container>
            </ShiftContainer>
        </SectionContainer>
    );
};
export default ExploreOpportunities;
