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
import Hidden from "@material-ui/core/Hidden";
import ShiftContainer from "../containers/ShiftContainer";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";
import IconLaunch from "../icons/IconLaunch";
import MigrateStepList from "./MigrateStepList";
import GridItem480 from "../sections/items/GridItem480";
import GridItemFlexible from "../sections/items/GridItemFlexible";
import SectionDesc from "../sections/SectionDesc";
import IconItem from "../sections/IconItem";
import AdoptionDescList from "../digital-transformation/AdoptionDescList";
import RatioContainer from "../containers/RatioContainer";
import ImageClipEffect from "../effects/ImageClipEffect";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import ColorGraphic from "../sections/ColorGraphic";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";


const ForwardWithCloudMile = () => {
    const { t } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2} alignItems={"flex-end"}>
                    {/*<Grid item xs={12} md={6}/>*/}
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'} />
                                <SectionTitle>
                                    {t('cloud-migration:It\'s time to move forward with CloudMile')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>Cloud Migration</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={smUp ? 4 : 2}>
                            <Hidden smDown>
                                <Grid item xs={12} md={6} />
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Container paddingX={false} centerX={false}
                                    maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                                    <ShiftContainer shiftX={{ md: -160 }} growX={{ md: true }}>
                                        <SectionDescWrapper>
                                            <Typography variant={"body1"} dangerouslySetInnerHTML={
                                                { __html: t('cloud-migration:Leverage the experience of our professional services__') }
                                            } />
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                    <ShiftContainer shiftX={{ md: -320 }} growX={{ md: true }}>
                                        <SectionDescWrapper>
                                            <MigrateStepList />
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Container>
                            </Grid>
                            <Hidden mdUp>
                                <Grid item xs={12}>
                                    <Box display={'flex'} justifyContent={'flex-end'}>
                                        <IconLaunch active={true} />
                                    </Box>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default ForwardWithCloudMile;
