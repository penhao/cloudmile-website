import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import IconItem from "../sections/IconItem";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useTranslation from "next-translate/useTranslation";
import ShiftContainer from "../containers/ShiftContainer";
import RatioContainer from "../containers/RatioContainer";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import ImageClipEffect from "../effects/ImageClipEffect";
import ColorGraphic from "../sections/ColorGraphic";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Hidden from "@material-ui/core/Hidden";


const useStyles = makeStyles(() => ({
    colorDot2: {
        position: 'absolute',
        right: '-150px',
        top: '-150px',
        zIndex: 2
    },
    colorDot3: {
        position: 'absolute',
        left: '-90px',
        bottom: '-70px',
        zIndex: 2
    },
    colorDot4: {
        position: 'absolute',
        right: '-220px',
        bottom: '-50px',
        zIndex: 2
    }
}));
const JoinCloudMile = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Container maxWidth={{ md: 1280 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <SectionTitleLabel color={'warning'} />
                        <SectionTitle>
                            {t('career:Why Join CloudMile')}
                        </SectionTitle>
                    </Grid>
                    <Grid item xs={12}>
                        <ShiftContainer shiftY={{ md: -86 }}>
                            <Grid container spacing={4}>
                                {/* 1 */}
                                <Grid item xs={12}>
                                    <Grid container spacing={mdUp ? 4 : 2} alignItems={mdUp ? "center" : "flex-start"}>
                                        <Grid item xs={12} sm={6}>
                                            <ShiftContainer shiftX={{ xs: -20, sm: -20, md: -20 }} growX={{ xs: 40, sm: 20, md: 20 }}>
                                                <RatioContainer ratio={{ xs: 200 / 300, sm: 430 / 620, md: 430 / 620 }}>
                                                    <ImageClipEffect>
                                                        <ParallaxEffect>
                                                            <ResponseImage
                                                                imageUrl={'/career/launch-your-international-career.jpg'}
                                                                alt={t('career:alt.A group of people agreeing on collaboration')} />
                                                        </ParallaxEffect>
                                                    </ImageClipEffect>
                                                </RatioContainer>
                                            </ShiftContainer>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <IconItem title={t('career:Launch your International Career')}
                                                desc={t('career:By developing connections and actively__')}
                                                color={"primary"}
                                                maxWidth={{ md: 440 }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container
                                        spacing={mdUp ? 4 : 2}
                                        alignItems={mdUp ? "center" : "flex-start"}
                                        direction={smUp ? "row-reverse" : "row"}>
                                        <Grid item xs={12} sm={6}>
                                            <ShiftContainer shiftX={{ xs: -20, sm: 0, md: -160 }} growX={{ xs: 40, sm: 20, md: 20 }}>
                                                <RatioContainer ratio={{ xs: 200 / 300, sm: 430 / 620, md: 430 / 620 }}>
                                                    <ImageClipEffect>
                                                        <ParallaxEffect>
                                                            <ResponseImage
                                                                imageUrl={'/career/achieve-success-with-global-partners.jpg'}
                                                                alt={t('career:alt.A group of Colleagues are discussing by drawing on a glass window')} />
                                                        </ParallaxEffect>
                                                    </ImageClipEffect>
                                                </RatioContainer>
                                                <Hidden smDown>
                                                    <ColorGraphic type={"dot"} size={300} color={"warning"}
                                                        customClass={classes.colorDot2} />
                                                </Hidden>
                                            </ShiftContainer>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box width="100%" display={'flex'}
                                                justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                                <IconItem title={t('career:Achieve Success with Global Partners')}
                                                    desc={t('career:We’ve partnered with global industry-leading strategic and__')}
                                                    color={"primary"}
                                                    maxWidth={{ md: 440 }} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container
                                        spacing={mdUp ? 4 : 2}
                                        alignItems={mdUp ? "center" : "flex-start"}>
                                        <Grid item xs={12} sm={6}>
                                            <ShiftContainer shiftX={{ xs: -20, sm: -20, md: -20 }} growX={{ xs: 40, sm: 20, md: 20 }}>
                                                <RatioContainer ratio={{ xs: 200 / 300, sm: 430 / 620, md: 430 / 620 }}>
                                                    <ImageClipEffect>
                                                        <ParallaxEffect>
                                                            <ResponseImage imageUrl={'/career/party-harder.jpg'}
                                                                alt={t('career:alt.A group of coworkers are drinking and eating together')} />
                                                        </ParallaxEffect>
                                                    </ImageClipEffect>
                                                </RatioContainer>
                                                <Hidden smDown>
                                                    <ColorGraphic type={"dot"} size={190} color={"primary"}
                                                        customClass={classes.colorDot3} />
                                                </Hidden>
                                            </ShiftContainer>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <IconItem title={t('career:Work & Learn Hard Together, but Party Harder')}
                                                desc={t('career:We welcome and nurture people who love to__')}
                                                color={"primary"}
                                                maxWidth={{ md: 440 }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={mdUp ? 4 : 2} alignItems={mdUp ? "center" : "flex-start"} direction={smUp ? "row-reverse" : "row"}>
                                        <Grid item xs={12} sm={6}>
                                            <ShiftContainer shiftX={{ xs: -20, sm: 0, md: -160 }} growX={{ xs: 40, sm: 20, md: 180 }}>
                                                <RatioContainer ratio={{ xs: 200 / 300, sm: 430 / 620, md: 430 / 620 }}>
                                                    <ImageClipEffect>
                                                        <ParallaxEffect>
                                                            <ResponseImage
                                                                imageUrl={'/career/stratup-culture-environment.jpg'}
                                                                alt={t('career:alt.A group of five coworkers are having free time to chat at office')} />
                                                        </ParallaxEffect>
                                                    </ImageClipEffect>
                                                </RatioContainer>
                                                <Hidden smDown>
                                                    <ColorGraphic type={"dot"} size={440} color={"secondary"}
                                                        customClass={classes.colorDot4} />
                                                </Hidden>
                                            </ShiftContainer>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box width="100%" display={'flex'}
                                                justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                                <IconItem title={t('career:Startup Culture & Environment')}
                                                    desc={t('career:Whether it’s a meeting room, a balcony, or even__')}
                                                    color={"primary"}
                                                    maxWidth={{ md: 440 }} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </ShiftContainer>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default JoinCloudMile;
