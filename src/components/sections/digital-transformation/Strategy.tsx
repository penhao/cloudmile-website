import React from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import RatioContainer from "../../containers/RatioContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import ImageClipEffect from "../../effects/ImageClipEffect";
import ShiftContainer from "../../containers/ShiftContainer";
import IconItem from "../IconItem";
import Hidden from "@material-ui/core/Hidden";
import SectionDescWrapper from "../SectionDescWrapper";
import useTranslation from "next-translate/useTranslation";
import IconLaunch from "../../icons/IconLaunch";
import ColorGraphic from "../ColorGraphic";
import {useLinkStyles} from "../../links/LinkStyles";
import clsx from "clsx";

interface IProps {
    clickHandler: (target: string) => void
}

const useStyles = makeStyles((theme: Theme) => ({
    coverWrapper: {
        width: 'calc(100% + 40px)',
        marginLeft: '-20px',
        [theme.breakpoints.up('md')]: {
            width: 'calc(100% + 180px)',
            marginLeft: '-160px',
        }
    },
    chart: {
        width: '100%',
        maxWidth: '350px',
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            width: '350px'
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '20px',
            marginBottom: '20px',
        }
    },
    digitalStrategy: {
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            transform: 'translate(-220px,-250px)'
        }
    },
    transformationProgram: {
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            transform: 'translate(-77px,10px)'
        }
    },
    adoptionProgram: {
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            transform: 'translate(-120px,-320px)'
        }
    },
    button: {
        marginTop: '20px',
        border: 'none',
        backgroundColor: 'transparent',
        borderRadius: 0,
        padding: 0,
        cursor: 'pointer'
    },
    graphic: {
        position: 'absolute',
        bottom: '-20px',
        left: '-280px',
        [theme.breakpoints.up('md')]:{
            bottom: 0,
            left: '-180px',
        }
    }
}));
const Strategy = ({clickHandler}: IProps) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Container>
                <Grid container
                      spacing={smUp ? 4 : 2}
                      alignItems={mdUp ? 'flex-end' : 'flex-start'}
                      direction={mdUp ? "row-reverse" : "row"}>
                    <Grid item xs={12} md={6}>
                        <SectionDescWrapper>
                            <ShiftContainer shiftX={{xs: -20, sm: 0, md: -160}} growX={{xs: 40, sm: 20, md: 180}}>
                                <RatioContainer ratio={{xs: (200 / 320), sm: (497 / 1098), md: (497 / 1098)}}>
                                    <ImageClipEffect>
                                        <ParallaxEffect>
                                            <ResponseImage imageUrl={'/digital-transformation/strategy.jpg'}
                                                           alt={t('digital-transformation:alt.4 colleagues are discussing over a project')}/>
                                        </ParallaxEffect>
                                    </ImageClipEffect>
                                </RatioContainer>
                            </ShiftContainer>
                        </SectionDescWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('digital-transformation:CloudMile Digital Transformation Strategy')}
                                </SectionTitle>
                                <Hidden xsDown>
                                    <ColorGraphic type={"dot"}
                                                  size={360}
                                                  color={"primary"}
                                                  customClass={classes.graphic}/>
                                </Hidden>
                            </Container>
                        </Box>
                        <SectionLabel>STRATEGY</SectionLabel>
                    </Grid>

                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 'none', sm: 'none', md: 1240}} paddingX={false}>
                            <Grid container spacing={smUp ? 4 : 2}>
                                <Hidden smDown>
                                    <Grid item xs={12} md={6}/>
                                </Hidden>
                                <Grid item xs={12} md={6}>
                                    <SectionDescWrapper>
                                        <ShiftContainer shiftX={{md: -180}} growX={{md: true}}>
                                            <div className={classes.chart}>
                                                <ResponseImage imageUrl={'/digital-transformation/chart.png'}
                                                               alt={t('digital-transformation:alt.3 Pillars of CloudMile\'s Digital Transformation Strategy')}/>
                                            </div>
                                            <Grid container component={'ul'} spacing={4}>
                                                <Grid item xs={12} sm={6} md={4} component={'li'}>
                                                    <div className={classes.digitalStrategy}>
                                                        <IconItem icon={'/images/icons/product/business-strategy.svg'}
                                                                  iconAlt={''}
                                                                  title={t('digital-transformation:Digital Strategy')}
                                                                  desc={t('digital-transformation:Understand the company strategy and__')}/>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={4} component={'li'}>
                                                    <div className={classes.transformationProgram}>
                                                        <IconItem
                                                            icon={'/images/icons/product/ai-transformation-program.svg'}
                                                            iconAlt={''}
                                                            title={t('digital-transformation:AI Transformation Program')}
                                                            desc={t('digital-transformation:Identify business pain points that__')}/>
                                                        <button
                                                            onClick={() => {
                                                                clickHandler('TransformationProgram');
                                                            }}
                                                            className={clsx(
                                                                classes.button,
                                                                linkClasses.iconLink
                                                            )}>
                                                            <IconLaunch/>
                                                        </button>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={4} component={'li'}>
                                                    <div className={classes.adoptionProgram}>
                                                        <IconItem icon={'/images/icons/product/cloud-native.svg'}
                                                                  iconAlt={''}
                                                                  title={t('digital-transformation:Cloud Adoption Program')}
                                                                  desc={t('digital-transformation:Inspect existing technology capability and__')}/>
                                                        <button
                                                            onClick={() => {
                                                                clickHandler('AdoptionProgram');
                                                            }}
                                                            className={clsx(
                                                                classes.button,
                                                                linkClasses.iconLink
                                                            )}>
                                                            <IconLaunch/>
                                                        </button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </ShiftContainer>
                                    </SectionDescWrapper>
                                </Grid>
                            </Grid>

                        </Container>
                    </Grid>

                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default Strategy;
