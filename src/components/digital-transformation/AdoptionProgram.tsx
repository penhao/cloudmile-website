import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Hidden from "@material-ui/core/Hidden";
import ShiftContainer from "../containers/ShiftContainer";
import RatioContainer from "../containers/RatioContainer";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import ImageClipEffect from "../effects/ImageClipEffect";
import Typography from "@material-ui/core/Typography";
import AdoptionDescList from "./AdoptionDescList";
import useTranslation from "next-translate/useTranslation";
import ColorGraphic from "../sections/ColorGraphic";
import IconLaunch from "../icons/IconLaunch";
import { useLinkStyles } from "../links/LinkStyles";

const useStyles = makeStyles((theme: Theme) => ({
    coverWrapper: {
        width: 'calc(100% + 20px)'
    },
    listWrapper: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        overflowX: 'auto',
        [theme.breakpoints.up('md')]: {
            overflowX: 'hidden',
        }
    },
    listInner: {
        flex: '0 0 auto'
    },
    iconList: {
        '& li': {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            '& img': {
                width: '60px'
            }
        }
    },
    graphicDot: {
        position: 'absolute',
        right: '-200px',
        top: '-150px',
        zIndex: 1
    },
    iconWrapper: {}
}));
const AdoptionProgram = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2} direction={mdUp ? "row-reverse" : "row"} alignItems={"flex-end"}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.coverWrapper}>
                            <ShiftContainer shiftX={{ xs: -20, md: -320 }} growX={{ xs: 40, md: 320 }}>
                                <SectionDescWrapper>
                                    <RatioContainer ratio={{ xs: (200 / 320), sm: (355 / 940), md: (355 / 940) }}>
                                        <ImageClipEffect>
                                            <ParallaxEffect>
                                                <ResponseImage
                                                    imageUrl={'/digital-transformation/adoption-program.jpg'}
                                                    alt={t('digital-transformation:Two coworkers are discussing about a report')} />
                                            </ParallaxEffect>
                                        </ImageClipEffect>
                                    </RatioContainer>
                                </SectionDescWrapper>
                                <Hidden smDown>
                                    <ColorGraphic type={"dot"}
                                        size={430}
                                        color={"primary"}
                                        customClass={classes.graphicDot} />
                                </Hidden>
                            </ShiftContainer>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'} />
                                <SectionTitle>
                                    {t('digital-transformation:CloudMile Cloud Adoption Program')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>ADOPTION PROGRAM</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={smUp ? 4 : 2}>
                            <Hidden smDown>
                                <Grid item xs={12} md={6} />
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Container paddingX={false} centerX={false}
                                    maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                                    <ShiftContainer shiftX={{ md: -320 }} growX={{ md: true }}>
                                        <SectionDescWrapper>
                                            <Typography variant={"body1"} dangerouslySetInnerHTML={
                                                { __html: t('digital-transformation:Leverage the experience of our professional services__') }
                                            } />
                                            <AdoptionDescList />
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

export default AdoptionProgram;
