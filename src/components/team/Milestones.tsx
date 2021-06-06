import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import { Grid, Theme } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import RatioContainer from "../containers/RatioContainer";
import ResponseImage from "../Images/ResponseImage";
import ParallaxEffect from "../effects/ParallaxEffect";
import ImageClipEffect from "../effects/ImageClipEffect";
import useTranslation from "next-translate/useTranslation";
import ColorGraphic from "../sections/ColorGraphic";
import { Controller, Scene } from "react-scrollmagic";

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        '&::before': {
            position: 'absolute',
            display: 'block',
            content: '""',
            width: '6px',
            height: '6px',
            left: '-3px',
            top: '38px',
            borderRadius: '99em',
            backgroundColor: theme.palette.secondary.main,
            opacity: 0,
            [theme.breakpoints.up('sm')]: {
                top: '52px'
            }
        },
        '&::after': {
            position: 'absolute',
            display: 'block',
            content: '""',
            width: '6px',
            height: 0,
            left: '-3px',
            top: '48px',
            borderRadius: '99em',
            backgroundColor: theme.palette.primary.main,
            opacity: 0,
            [theme.breakpoints.up('sm')]: {
                top: '62px'
            }
        }
    },
    itemActive: {
        '&::before': {
            opacity: 1,
            transition: theme.transitions.create(['opacity'], {
                easing: theme.transitions.easing.easeOut,
                duration: '0.7s'
            })
        },
        '&::after': {
            opacity: 1,
            height: 'calc(100% - 14px)',
            transition: theme.transitions.create(['opacity', 'height'], {
                easing: theme.transitions.easing.easeOut,
                duration: '1s'
            })
        }
    },
    list: {
        paddingLeft: '20px',
        '& li': {
            position: 'relative',
            '&:nth-child(odd)': {
                [theme.breakpoints.up('md')]: {
                    transform: 'translate(-100%)',
                    '& $item': {
                        textAlign: 'right',
                        '&::before, &::after': {
                            left: 'auto',
                            right: '-3px',
                        }
                    }
                }
            },
            '&:last-child': {
                '& $item': {
                    '&::after': {
                        content: 'none'
                    }
                }
            },
            '& h4': {
                position: 'relative',
                fontSize: theme.typography.pxToRem(32),
                lineHeight: 1.17,
                fontWeight: 700,
                zIndex: 2,
                [theme.breakpoints.up('sm')]: {
                    fontSize: theme.typography.pxToRem(60)
                }
            },
            '& p': {
                position: 'relative',
                zIndex: 2
            }
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 0
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '130px'
        }
    },
    list202011: {
        [theme.breakpoints.up('md')]: {
            paddingBottom: '140px !important'
        }
    },
    list202004: {
        [theme.breakpoints.up('md')]: {
            paddingBottom: '140px !important'
        }
    },
    cover201911: {
        position: 'absolute',
        width: '440px',
        top: '-110px',
        left: '-460px'
    },
    cover201804: {
        position: 'absolute',
        width: '440px',
        bottom: '25px',
        left: '180px'
    },
    cover201803: {
        position: 'absolute',
        width: '460px',
        top: '50%',
        right: '180px',
        transform: 'translateY(-50%)'
    },
    cover201612: {
        position: 'absolute',
        width: '460px',
        top: '0',
        left: '-460px'
    },
    colorDot201911: {
        position: 'absolute',
        top: '20px',
        left: '-320px',
        zIndex: 1
    },
    colorDot201804: {
        position: 'absolute',
        top: '-200px',
        right: '-100px',
        zIndex: 1
    },
    colorDot201612: {
        position: 'absolute',
        top: '-90px',
        left: '-90px',
        zIndex: 1
    }
}));
const Milestones = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <SectionContainer>
            <Container maxWidth={{ md: 1280 }}>
                <Grid container spacing={4}>
                    <Hidden smDown>
                        <Grid item xs={12} md={6} />
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Container maxWidth={{ sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                    <SectionTitleLabel color={'warning'} />
                                    <SectionTitle>
                                        {t('team:Key Milestones')}
                                    </SectionTitle>
                                </Container>
                            </Grid>
                            <Grid item xs={12}>
                                <SectionDescWrapper>
                                    <Grid container spacing={4} component={'ul'} className={classes.list}>
                                        {/* 2020.11 */}
                                        <Grid item xs={12} component={'li'} className={classes.list202011}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2020.11
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:CEO Spencer Liu was elected as the fifth director of__')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        {/* 2020.10 */}
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2020.10
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Selected as top 10 Taiwan startup companies that__')
                                                            }} />
                                                        </Typography>
                                                        <Hidden smDown>
                                                            <Container maxWidth={{ sm: 440, md: 440 }} paddingX={false} centerX={false} className={classes.cover201911}>
                                                                <RatioContainer ratio={{
                                                                    xs: 200 / 320,
                                                                    sm: 260 / 440,
                                                                    md: 260 / 440
                                                                }}>
                                                                    <ImageClipEffect>
                                                                        <ParallaxEffect>
                                                                            <ResponseImage imageUrl={'/team/img-consultant.jpg'} alt={''} />
                                                                        </ParallaxEffect>
                                                                    </ImageClipEffect>
                                                                </RatioContainer>
                                                            </Container>
                                                        </Hidden>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        {/* 2020.08 */}
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2020.08
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Adsvantage product launch')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        {/* 2020.05 */}
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2020.05
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Hong Kong office expansion')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        {/* 2020.04 */}
                                        <Grid item xs={12} component={'li'} className={classes.list202004}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2020.04
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Chairman of DTA Chen Jen-ran officially joined as the company’s advisor')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        {/* 2019.11 */}
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2019.11
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Raised US$6 million in a pre-series B round')
                                                            }} />
                                                        </Typography>
                                                        <Hidden smDown>
                                                            <Container maxWidth={{ sm: 440, md: 440 }} paddingX={false} centerX={false} className={classes.cover201911}>
                                                                <RatioContainer ratio={{
                                                                    xs: 200 / 320,
                                                                    sm: 260 / 440,
                                                                    md: 260 / 440
                                                                }}>
                                                                    <ImageClipEffect>
                                                                        <ParallaxEffect>
                                                                            <ResponseImage
                                                                                imageUrl={'/team/cloudmile2019.jpg'}
                                                                                alt={t('team:alt.CloudMile\'s Key Milestones since 2016')} />
                                                                        </ParallaxEffect>
                                                                    </ImageClipEffect>
                                                                </RatioContainer>

                                                                <ColorGraphic type={"dot"} size={430} color={"primary"}
                                                                    customClass={classes.colorDot201911} />
                                                            </Container>
                                                        </Hidden>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        {/* 2018.10 */}
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false} triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2018.10
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Raised another A-Round Funding__')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2018.09
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Recognized with Google Cloud Machine__')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2018.06
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Partnered with Google Maps Platform__')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        {/* 2018.04 */}
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2018.04
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Recognized with Google Cloud Infrastructure__')
                                                            }} />
                                                        </Typography>
                                                        <Hidden smDown>
                                                            <Container maxWidth={{ sm: 440, md: 440 }}
                                                                paddingX={false} centerX={false}
                                                                className={classes.cover201804}>

                                                                <RatioContainer ratio={{
                                                                    xs: 200 / 320,
                                                                    sm: 260 / 440,
                                                                    md: 260 / 440
                                                                }}>
                                                                    <ImageClipEffect>
                                                                        <ParallaxEffect>
                                                                            <ResponseImage
                                                                                imageUrl={'/team/google-cloud.jpg'}
                                                                                alt={t('team:alt.CloudMile\'s Key Milestones since 2016')} />
                                                                        </ParallaxEffect>
                                                                    </ImageClipEffect>
                                                                </RatioContainer>
                                                                <ColorGraphic type={"dot"} size={300} color={"warning"}
                                                                    customClass={classes.colorDot201804} />
                                                            </Container>
                                                        </Hidden>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        {/* 2018.03 */}
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2018.03
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Selected as the “Coolest 10 Startups”')
                                                            }} />
                                                        </Typography>
                                                        <Hidden smDown>
                                                            <Container maxWidth={{ sm: 440, md: 440 }}
                                                                paddingX={false} centerX={false}
                                                                className={classes.cover201803}>

                                                                <RatioContainer ratio={{
                                                                    xs: 200 / 320,
                                                                    sm: 260 / 440,
                                                                    md: 260 / 440
                                                                }}>
                                                                    <ImageClipEffect>
                                                                        <ParallaxEffect>
                                                                            <ResponseImage
                                                                                imageUrl={'/team/established-sg-office.jpg'}
                                                                                alt={t('team:alt.CloudMile\'s Key Milestones since 2016')} />
                                                                        </ParallaxEffect>
                                                                    </ImageClipEffect>
                                                                </RatioContainer>

                                                            </Container>
                                                        </Hidden>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2017.12
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Established SG office')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2017.08
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Established HK office')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2017.04
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Series A Fundraising with__')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2017.01
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Established CloudMile in Taiwan')
                                                            }} />
                                                        </Typography>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                        {/*  2016.12 */}
                                        <Grid item xs={12} component={'li'}>
                                            <Controller>
                                                <Scene classToggle={classes.itemActive} reverse={false}
                                                    indicators={false}
                                                    triggerHook={1}>
                                                    <div className={classes.item}>
                                                        <Typography variant={"h4"} color={"error"}>
                                                            2016.12
                                                        </Typography>
                                                        <Typography variant={"body1"}>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: t('team:Preparatory Work')
                                                            }} />
                                                        </Typography>
                                                        <Hidden smDown>
                                                            <Container maxWidth={{ sm: 440, md: 440 }}
                                                                paddingX={false} centerX={false}
                                                                className={classes.cover201612}>

                                                                <RatioContainer ratio={{
                                                                    xs: 200 / 320,
                                                                    sm: 260 / 440,
                                                                    md: 260 / 440
                                                                }}>
                                                                    <ImageClipEffect>
                                                                        <ParallaxEffect>
                                                                            <ResponseImage imageUrl={'/team/ai4biz.jpg'}
                                                                                alt={''} />
                                                                        </ParallaxEffect>
                                                                    </ImageClipEffect>
                                                                </RatioContainer>
                                                                <ColorGraphic type={"dot"} size={180}
                                                                    color={"secondary"}
                                                                    customClass={classes.colorDot201612} />
                                                            </Container>
                                                        </Hidden>
                                                    </div>
                                                </Scene>
                                            </Controller>
                                        </Grid>
                                    </Grid>
                                </SectionDescWrapper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default Milestones;
