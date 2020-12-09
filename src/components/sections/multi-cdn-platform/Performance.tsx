import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Grid from "@material-ui/core/Grid";
import SectionContainer from "../../containers/SectionContainer";
import Box from "@material-ui/core/Box";
import Container from "../../containers/Container";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import GridItemFlexible from "../items/GridItemFlexible";
import GridItem480 from "../items/GridItem480";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import IconItem from "../IconItem";
import ResponseImage from "../../Images/ResponseImage";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import useTranslation from "next-translate/useTranslation";
import ShiftContainer from "../../containers/ShiftContainer";
import ColorGraphic from "../ColorGraphic";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme: Theme) => ({
    protection: {
        backgroundColor: theme.palette.grey["200"]
    },
    wrapper1: {
        paddingBottom: '20px',
        [theme.breakpoints.up('md')]: {
            paddingTop: '20px',
            paddingBottom: '40px'
        }
    },
    wrapper2: {
        paddingTop: '20px',
        paddingBottom: '20px',
        [theme.breakpoints.up('md')]: {
            paddingTop: '40px',
            paddingBottom: '40px'
        }
    },
    itemWrapper: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '100px'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0
        }
    },
    monitoringCover: {
        [theme.breakpoints.up('md')]: {
            width: '90%'
        }
    },
    graphicDot1: {
        position: 'absolute',
        right: '-150px',
        bottom: 0
    },
    graphicDot2: {
        position: 'absolute',
        right: '-70px',
        bottom: '-50px'
    },
    graphicDot3: {
        position: 'absolute',
        left: '-125px',
        top: '-30px'
    }
}));
const Performance = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Grid container spacing={smUp ? 4 : 2}>
                {/**/}
                <Grid item xs={12}>
                    <Container>
                        <Grid container spacing={smUp ? 4 : 2}>
                            <Grid item xs={12} md={6}>
                                <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                    <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                        <SectionTitleLabel color={'warning'}/>
                                        <SectionTitle>
                                            {t('multi-cdn-platform:24/7 Performance Monitoring and Protection for Your Website')}
                                        </SectionTitle>
                                        <Hidden xsDown>
                                            <ColorGraphic type={"dot"}
                                                          color={"secondary"}
                                                          size={360}
                                                          customClass={classes.graphicDot1}/>
                                        </Hidden>
                                    </Container>
                                </Box>
                                <SectionLabel>DAILY TASKS EFFECTIVELY</SectionLabel>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                {/**/}
                <Grid item xs={12}>
                    <Container maxWidth={{xs: 'none', sm: 500, md: 1280}} className={classes.wrapper1}>
                        <Grid container spacing={smUp ? 4 : 2} alignItems={"center"}>
                            <GridItemFlexible overflow={"visible"}>
                                <Box display={'flex'} justifyContent={mdUp ? 'flex-end' : 'flex-start'}>
                                    <Container maxWidth={{xs: 'none', sm: 'none', md: 675}}
                                               paddingX={false} centerX={false}
                                               className={classes.monitoringCover}>

                                        <Hidden xsDown>
                                            <ColorGraphic type={"dot"}
                                                          color={"warning"}
                                                          size={175}
                                                          customClass={classes.graphicDot2}/>
                                        </Hidden>
                                        <ResponseImage imageUrl={'/china-access/performance-monitoring.jpg'}
                                                       alt={t('multi-cdn-platform:alt.Website Reporting Dashboard')}/>

                                    </Container>
                                </Box>
                            </GridItemFlexible>
                            <GridItem480>
                                <div className={classes.itemWrapper}>
                                    <IconItem title={t('multi-cdn-platform:Performance Monitoring')}
                                              desc={t('multi-cdn-platform:Global user connectivity data is collected with__')}
                                              color={"initial"}/>
                                </div>
                            </GridItem480>
                        </Grid>
                    </Container>
                </Grid>
                {/**/}
                <Grid item xs={12} className={classes.protection}>
                    <Container maxWidth={{xs: 'none', sm: 500, md: 1280}} className={classes.wrapper2}>
                        <Grid container spacing={smUp ? 4 : 2} direction={mdUp ? "row-reverse" : "row"}
                              alignItems={"center"}>
                            <Grid item xs={12} md={6}>
                                <Container maxWidth={{xs: 'none', sm: 'none', md: 600}} paddingX={false} centerX={false}>
                                    <Hidden xsDown>
                                        <ColorGraphic type={"dot"}
                                                      color={"secondary"}
                                                      size={235}
                                                      customClass={classes.graphicDot3}/>
                                    </Hidden>
                                    <ResponseImage imageUrl={'/china-access/xss-sql-generic-pic.jpg'}
                                                   alt={t('multi-cdn-platform:alt.Protection of SQL, XSS and Generic with MileCDN')}/>
                                </Container>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box display={'flex'} justifyContent={'center'} className={classes.itemWrapper}>
                                    <IconItem title={t('multi-cdn-platform:Protection')}
                                              desc={t('multi-cdn-platform:All traffic is protected with__')}
                                              color={"initial"}
                                              maxWidth={{xs: 'none', sm: 'none', md: 440}}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12}>
                    {/**/}
                    <ShiftContainer shiftY={{xs: -20, sm: -20, md: -20}}>
                        <RatioContainer
                            ratio={{xs: (200 / 320), sm: (250 / 640), md: (550 / 1920)}}>
                            <ParallaxEffect>
                                <ResponseImage imageUrl={'/china-access/shanghai.jpg'}
                                               alt={t('multi-cdn-platform:alt.Shanghai City View')}/>
                            </ParallaxEffect>
                        </RatioContainer>
                    </ShiftContainer>
                </Grid>
            </Grid>
        </SectionContainer>
    );
};
export default Performance;
