import React from 'react';
import Grid from "@material-ui/core/Grid";
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import RatioContainer from "../../containers/RatioContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NavLink from "../../links/NavLink";
import IconLaunch from "../../icons/IconLaunch";
import Hidden from "@material-ui/core/Hidden";
import useTranslation from "next-translate/useTranslation";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import ImageClipEffect from "../../effects/ImageClipEffect";
import ShiftContainer from "../../containers/ShiftContainer";
import Box from "@material-ui/core/Box";
import SectionDescWrapper from "../SectionDescWrapper";
import ColorGraphic from "../ColorGraphic";
import JourneyList from "./JourneyList";
import {useLinkStyles} from "../../links/LinkStyles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        width: '100%',
        marginBottom: '100px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '120px'
        }
    },
    shiftContainer: {
        marginTop: '-80px'
    },
    cover: {
        position: 'relative',
        width: 'calc(100% + 40px)',
        marginLeft: '-20px'
    },
    launchCoverWrapper: {
        width: '100vw',
        marginLeft: '-20px',
        [theme.breakpoints.up('md')]: {
            width: 'calc(100% + 180px)'
        }
    },
    launchText: {
        position: 'relative',
        fontWeight: 400,
        lineHeight: 'normal',
        marginBottom: '20px',
        zIndex: 1,
        whiteSpace: 'normal'
    },
    graphicDot: {
        position: 'absolute',
        right: '-134px',
        bottom: '-60px',
        zIndex: 1
    },
    graphicDashline: {
        position: 'absolute',
        right: '50%',
        bottom: '-50px',
        transform: 'rotate(180deg)',
        zIndex: 1,
        [theme.breakpoints.up('md')]: {
            right: '65%',
        }
    }
}));

const HomeJourneyMap = () => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const {t, lang} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const shiftTop = (lang === 'en') ? -86 : -65;

    const getTitle = () => {
        return (
            <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                <SectionTitleLabel color={'warning'}/>
                <SectionTitle>
                    {t('home:CloudMile\'s Digital Transformation Journey Map')}
                </SectionTitle>
            </Container>
        )
    };
    return (
        <SectionContainer>

            <div className={classes.wrapper}>
                <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Hidden smUp>
                                <div className={classes.cover}>
                                    <RatioContainer ratio={{xs: (200 / 320), sm: (900 / 980), md: (900 / 980)}}>
                                        <ImageClipEffect>
                                            <ParallaxEffect>
                                                <ResponseImage
                                                    imageUrl={'/home/digital-transformation-journey-map.jpg'}
                                                    alt={t('home:alt.A Team discussing digital transformation journey map')}/>
                                            </ParallaxEffect>
                                        </ImageClipEffect>
                                    </RatioContainer>
                                </div>
                            </Hidden>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {getTitle()}
                        </Grid>
                        <Grid item xs={12}>
                            <ShiftContainer shiftY={{sm: shiftTop, md: shiftTop}}>
                                <Grid container spacing={4} direction={smUp ? 'row-reverse' : 'row'}
                                      alignItems={"center"}>
                                    <Hidden xsDown>
                                        <Grid item xs={12} md={6}>
                                            <div className={classes.cover}>
                                                <RatioContainer
                                                    ratio={{xs: (200 / 320), sm: (900 / 980), md: (900 / 980)}}>
                                                    <ImageClipEffect>
                                                        <ParallaxEffect>
                                                            <ResponseImage
                                                                imageUrl={'/home/digital-transformation-journey-map.jpg'}
                                                                alt={t('home:alt.A Team discussing digital transformation journey map')}/>
                                                        </ParallaxEffect>
                                                    </ImageClipEffect>
                                                </RatioContainer>
                                            </div>
                                        </Grid>
                                    </Hidden>
                                    <Grid item xs={12} md={6}>
                                        <SectionDescWrapper>
                                            <Box display={'flex'} justifyContent={mdUp ? 'flex-end' : 'flex-start'}>
                                                <Container maxWidth={{md: 600}} paddingX={false} centerX={false}>
                                                    <JourneyList/>
                                                </Container>
                                            </Box>
                                        </SectionDescWrapper>
                                    </Grid>
                                </Grid>
                            </ShiftContainer>
                        </Grid>
                    </Grid>
                </Container>
            </div>


            {/* Launch */}
            <Container>
                <Grid container spacing={4} alignItems={"center"}>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.launchCoverWrapper}>
                            <RatioContainer ratio={{xs: (270 / 564), sm: (530 / 1100), md: (530 / 1100)}}>
                                <ParallaxEffect>
                                    <ResponseImage
                                        imageUrl={'/home/sticky-notes.jpg'}
                                        alt={t('home:alt.Mapping business strategy out with sticky notes')}/>
                                </ParallaxEffect>
                            </RatioContainer>
                            <Hidden xsDown>
                                <ColorGraphic type={"dashline"} size={140} lineSizeRate={6} color={"primary"}
                                              customClass={classes.graphicDashline}/>
                            </Hidden>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Container maxWidth={{sm: 600, md: 280}} paddingX={false} centerX={false}>
                            <NavLink hrefPath={'/cloud/solutions/digital-transformation'}
                                     classNames={linkClasses.iconLink}>
                                <Typography variant={"h3"} component={'div'}
                                            className={clsx(classes.launchText)}>
                                    {t('home:How we complete your digital transformation journey')}
                                </Typography>
                                <div className={linkClasses.iconMask}>
                                    <IconLaunch/>
                                </div>
                            </NavLink>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default HomeJourneyMap;
