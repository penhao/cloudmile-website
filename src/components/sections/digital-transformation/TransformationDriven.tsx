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
import SectionDesc from "../SectionDesc";
import SectionDescWrapper from "../SectionDescWrapper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import ShiftContainer from "../../containers/ShiftContainer";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import ImageClipEffect from "../../effects/ImageClipEffect";
import IconListItem from "./IconListItem";
import NavLink from "../../links/NavLink";
import IconLaunch from "../../icons/IconLaunch";
import useTranslation from "next-translate/useTranslation";
import ColorGraphic from "../ColorGraphic";
import {useLinkStyles} from "../../links/LinkStyles";
import clsx from "clsx";

interface IProps {
    clickHandler: (target: string) => void
}

const useStyles = makeStyles((theme: Theme) => ({
    contentWrapper: {
        [theme.breakpoints.up('md')]: {
            marginTop: '-100px'
        }
    },
    button: {
        border: 'none',
        backgroundColor: 'transparent',
        borderRadius: 0,
        padding: 0,
        cursor: 'pointer'
    },
    graphicLine: {
        position: 'absolute',
        right: '-1500px',
        top: 0
    },
    graphicDot: {
        position: 'absolute',
        left: '-680px',
        top: 0
    }
}));
const TransformationDriven = ({clickHandler}: IProps) => {
    const classes = useStyles();
    const {t} = useTranslation();
    const linkClasses = useLinkStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('digital-transformation:Transformation driven by CloudMile Digital Technologies')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>TRANSFORMATION DRIVEN</SectionLabel>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{xs: 'none', sm: 'none', md: 600}} paddingX={false} centerX={false}>
                            <SectionDescWrapper>
                                <SectionDesc>
                                    {t('digital-transformation:We create a complete Digital transformation__')}
                                </SectionDesc>
                            </SectionDescWrapper>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 'none', sm: 'none', md: 1240}} paddingX={false}
                                   className={classes.contentWrapper}>
                            <Grid container spacing={smUp ? 4 : 2} alignItems={"center"}>
                                {/* 1 */}
                                <Hidden smDown>
                                    <Grid item xs={12} md={6}>
                                        <ShiftContainer shiftX={{md: -160}}>
                                            <RatioContainer ratio={{xs: (200 / 320), sm: (758 / 598), md: (758 / 598)}}>
                                                <ImageClipEffect>
                                                    <ParallaxEffect>
                                                        <ResponseImage
                                                            imageUrl={'/digital-transformation/img-cloudmile-digital-technologies.jpg'}
                                                            alt={''}/>
                                                    </ParallaxEffect>
                                                </ImageClipEffect>
                                            </RatioContainer>
                                        </ShiftContainer>
                                    </Grid>
                                </Hidden>
                                <Grid item xs={12} md={6}>
                                    <ShiftContainer shiftX={{md: -160}}>
                                        <SectionDescWrapper>
                                            <IconListItem icon={'/images/icons/product/cloud-factory.svg'}
                                                          iconAlt={''}
                                                          title={t('digital-transformation:Cloud Factory')}
                                                          desc={t('digital-transformation:Our cloud factory program consists of__')}
                                                          list={[
                                                              t('digital-transformation:Strategy'),
                                                              t('digital-transformation:Assess & Plan'),
                                                              t('digital-transformation:Design & Build'),
                                                              t('digital-transformation:Migrate & Test'),
                                                              t('digital-transformation:Operate & Optimize')
                                                          ]}
                                                          link={
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
                                                          }/>
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Grid>

                                {/* 2 */}
                                <Hidden smDown>
                                    <Grid item xs={12} md={6}/>
                                </Hidden>
                                <Grid item xs={12} md={6}>
                                    <ShiftContainer shiftX={{md: -480}}>
                                        <SectionDescWrapper>
                                            <IconListItem icon={'/images/icons/product/cloud-professional-service.svg'}
                                                          iconAlt={''}
                                                          title={t('digital-transformation:Cloud Professional Service')}
                                                          desc={t('digital-transformation:We are the #1 choice of business and technology__')}
                                                          list={[
                                                              t('digital-transformation:Security & Compliance'),
                                                              t('digital-transformation:Hybrid & Multi-Cloud'),
                                                              t('digital-transformation:Operation & SRE'),
                                                              t('digital-transformation:Cloud Migration'),
                                                              t('digital-transformation:Infrastructure')
                                                          ]}
                                                          link={
                                                              <NavLink hrefPath={'/cloud/services/all-cloud-services'}
                                                                       classNames={linkClasses.iconLink}>
                                                                  <IconLaunch/>
                                                              </NavLink>
                                                          }/>
                                            <Hidden smDown>
                                                <ColorGraphic type={"line"}
                                                              size={280}
                                                              lineSizeRate={5}
                                                              color={"secondary"}
                                                              customClass={classes.graphicLine}/>
                                            </Hidden>
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Grid>

                                {/* 3 */}
                                <Hidden smDown>
                                    <Grid item xs={12} md={6}>
                                        <ShiftContainer shiftX={{md: -160}}>
                                            <RatioContainer ratio={{xs: (200 / 320), sm: (672 / 605), md: (672 / 605)}}>
                                                <ImageClipEffect>
                                                    <ParallaxEffect>
                                                        <ResponseImage
                                                            imageUrl={'/digital-transformation/img-ai-factory.jpg'}
                                                            alt={''}/>
                                                    </ParallaxEffect>
                                                </ImageClipEffect>
                                            </RatioContainer>
                                        </ShiftContainer>
                                    </Grid>
                                </Hidden>
                                <Grid item xs={12} md={6}>
                                    <ShiftContainer shiftX={{md: -160}}>
                                        <SectionDescWrapper>
                                            <IconListItem icon={'/images/icons/product/ai-factory.svg'}
                                                          iconAlt={''}
                                                          title={t('digital-transformation:AI Factory')}
                                                          desc={t('digital-transformation:CloudMile’s AI factory is similar to__')}
                                                          list={[
                                                              t('digital-transformation:Strategy'),
                                                              t('digital-transformation:Assess & Plan'),
                                                              t('digital-transformation:Design & Build'),
                                                              t('digital-transformation:Apply & Test'),
                                                              t('digital-transformation:Scale & Optimize')
                                                          ]}
                                                          link={
                                                              <NavLink hrefPath={'/ai/artificial-intelligence-services'}
                                                                       classNames={linkClasses.iconLink}>
                                                                  <IconLaunch/>
                                                              </NavLink>
                                                          }/>
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Grid>

                                {/* 4 */}
                                <Hidden smDown>
                                    <Grid item xs={12} md={6}/>
                                </Hidden>
                                <Grid item xs={12} md={6}>
                                    <ShiftContainer shiftX={{md: -480}}>
                                        <SectionDescWrapper>
                                            <IconListItem
                                                icon={'/images/icons/product/data-ml-professional-service.svg'}
                                                iconAlt={''}
                                                title={t('digital-transformation:Data & ML Professional Service')}
                                                desc={t('digital-transformation:Together, we will guide you through the__')}
                                                list={[
                                                    t('digital-transformation:IOT Solution'),
                                                    t('digital-transformation:Data Warehouse'),
                                                    t('digital-transformation:ML Delivery'),
                                                    t('digital-transformation:Data Arch Design'),
                                                    t('digital-transformation:ML Discovery')
                                                ]}
                                                link={
                                                    <NavLink hrefPath={'/ai/artificial-intelligence-services'}
                                                             classNames={linkClasses.iconLink}>
                                                        <IconLaunch/>
                                                    </NavLink>
                                                }/>
                                            <Hidden smDown>
                                                <ColorGraphic type={"dot"}
                                                              size={630}
                                                              color={"warning"}
                                                              customClass={classes.graphicDot}/>
                                            </Hidden>
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default TransformationDriven;
