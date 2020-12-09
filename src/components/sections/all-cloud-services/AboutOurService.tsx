import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import Box from "@material-ui/core/Box";
import SectionLabel from "../SectionLabel";
import {Hidden, Theme} from "@material-ui/core";
import ShiftContainer from "../../containers/ShiftContainer";
import ImageClipEffect from "../../effects/ImageClipEffect";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTranslation from "next-translate/useTranslation";
import FAQExpansion from "./FAQExpansion";
import SectionDescWrapper from "../SectionDescWrapper";
import ColorGraphic from "../ColorGraphic";

const useStyles = makeStyles((theme: Theme) => ({
    coverWrapper: {
        marginBottom: '40px',
        [theme.breakpoints.up('md')]: {
            marginBottom: '40px'
        }
    },
    graphicDot: {
        position: 'absolute',
        top: '-150px',
        right: '-250px',
        zIndex: 1
    }
}));
const AboutOurService = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <div className={classes.coverWrapper}>
                <Container maxWidth={{xs: 'none', sm: 'none', md: '86%'}} paddingX={false} centerX={false}>
                    <RatioContainer ratio={{xs: (200 / 320), sm: (420 / 1100), md: (756 / 1920)}}
                                    maxHeight={{xs: 'none', sm: 350, md: 420}}>
                        <ImageClipEffect>
                            <ParallaxEffect>
                                <ResponseImage imageUrl={'/all-cloud-services/about-our-service.jpg'}
                                               alt={t('all-cloud-services:alt.Discussing Over A Financial Report')}/>
                            </ParallaxEffect>
                        </ImageClipEffect>
                    </RatioContainer>
                    <Hidden xsDown>
                        <ColorGraphic type={"dot"} color={"secondary"}
                                      size={500} customClass={classes.graphicDot}/>
                    </Hidden>
                </Container>
            </div>
            <Container>
                <ShiftContainer shiftY={{xs: 40, sm: -124, md: -124}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false}
                                           centerX={false}>
                                    <SectionTitleLabel color={'warning'}/>
                                    <SectionTitle>
                                        {t('all-cloud-services:About Our Service')}
                                    </SectionTitle>
                                </Container>
                            </Box>
                            <SectionLabel>SERVICE</SectionLabel>
                        </Grid>
                        <Grid item xs={12}>
                            <Container maxWidth={{xs: 'none', sm: 'none', md: 1240}} centerX={false}>
                                <Grid container spacing={smUp ? 4 : 2}>
                                    <Hidden smDown>
                                        <Grid item xs={12} md={6}/>
                                    </Hidden>
                                    <Grid item xs={12} md={6}>
                                        <SectionDescWrapper>
                                            <ShiftContainer shiftX={{md: -320}} shiftY={{xs: -30, sm: -20, md: -20}}
                                                            growX={{md: true}}>
                                                <FAQExpansion/>
                                            </ShiftContainer>
                                        </SectionDescWrapper>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </ShiftContainer>
            </Container>
        </SectionContainer>
    );
};

export default AboutOurService;
