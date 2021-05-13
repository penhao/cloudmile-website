import React from "react";
import Container from "../containers/Container";
import { Grid, Hidden, useMediaQuery, useTheme, Typography, Theme } from "@material-ui/core";
import { useTranslation } from "next-translate";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import ShiftContainer from "../containers/ShiftContainer";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SectionContainer from "../containers/SectionContainer";
import RatioContainer from "../containers/RatioContainer";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import ImageClipEffect from "../effects/ImageClipEffect";

const useStyles = makeStyles((theme: Theme) => ({
    itemTitle: {
        fontWeight: 700,
        marginBottom: '15px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '20px'
        }
    },
    itemDesc: {}
}));
const IntroSection = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12}>
                        <Grid container spacing={4} direction={mdUp ? 'row-reverse' : 'row'}
                            alignItems={"center"}>
                            <Grid item xs={12} md={6}>
                                <ShiftContainer shiftX={{ xs: -20, sm: -10, md: -320 }} growX={{ xs: 40, sm: 30, md: 340 }}>
                                    <SectionDescWrapper>
                                        <RatioContainer ratio={{ xs: 200 / 320, sm: 300 / 460, md: 425 / 940 }}>
                                            <ImageClipEffect>
                                                <ParallaxEffect>
                                                    <ResponseImage imageUrl={'/google-workspace/office-cover.jpg'}
                                                        alt={""} />
                                                </ParallaxEffect>
                                            </ImageClipEffect>
                                        </RatioContainer>
                                    </SectionDescWrapper>
                                </ShiftContainer>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                    <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false}
                                        centerX={false}>
                                        <SectionTitleLabel color={'warning'} />
                                        <SectionTitle>
                                            {t('google-workspace:The office environment has evolved in an all-round')}
                                        </SectionTitle>
                                    </Container>
                                </Box>
                                <SectionLabel>Google Workspace</SectionLabel>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Hidden only={'sm'}>
                        <Grid item xs={12} md={6} />
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Container paddingX={false} centerX={false} maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                            <ShiftContainer shiftX={{ md: -320 }} growX={{ md: true }}>
                                <SectionDescWrapper>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant={"h5"} className={classes.itemTitle}>
                                                {t('google-workspace:Tools you Love, Easily Connected')}
                                            </Typography>
                                            <Typography variant={"body1"}>
                                                {t('google-workspace:An integrated workspace that’s simple to use')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant={"h5"} className={classes.itemTitle}>
                                                {t('google-workspace:Work Anytime, Anywhere without Limitations')}
                                            </Typography>
                                            <Typography variant={"body1"}>
                                                {t('google-workspace:Work from anywhere, on any device - even offline - with tools to help you integrate')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant={"h5"} className={classes.itemTitle}>
                                                {t('google-workspace:AI Technology for Your Daily Work')}
                                            </Typography>
                                            <Typography variant={"body1"}>
                                                {t('google-workspace:Address what’s important and let handle the rest')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SectionDescWrapper>
                            </ShiftContainer>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    )
};
export default IntroSection;