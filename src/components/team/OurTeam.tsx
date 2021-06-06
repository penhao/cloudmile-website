import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import { Grid, Theme } from "@material-ui/core";
import RatioContainer from "../containers/RatioContainer";
import Container from "../containers/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import Hidden from "@material-ui/core/Hidden";
import useTranslation from "next-translate/useTranslation";
import ColorGraphic from "../sections/ColorGraphic";

const useStyles = makeStyles((theme: Theme) => ({
    ourTeam: {
        fontWeight: 400,
        [theme.breakpoints.up('sm')]: {
            marginTop: '20px'
        }
    },
    jobTitle: {
        fontWeight: 600
    },
    name: {
        marginBottom: '15px'
    },
    desc: {
        position: 'relative',
        zIndex: 1
    },
    coverWrapper: {
        position: 'relative'
    },
    coverDashline: {
        position: 'absolute',
        top: '-80px',
        left: '-350px',
        transform: 'scaleX(-1)',
        zIndex: 1
    },
    colorDot1: {
        position: 'absolute',
        left: '-80px',
        top: '-80px'
    },
    colorDot2: {
        position: 'absolute',
        right: 0,
        bottom: '60px'
    },
    colorDot3: {
        position: 'absolute',
        left: 0,
        bottom: '60px'
    },
    colorDot4: {
        position: 'absolute',
        right: '-80px',
        bottom: '-80px'
    }
}));
const OurTeam = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <SectionContainer>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <RatioContainer ratio={{ xs: 200 / 320, sm: 300 / 640, md: 384 / 1280 }}>
                        <ParallaxEffect>
                            <ResponseImage imageUrl={'/team/cloudmile-team.jpg'}
                                alt={t('team:alt.CloudMile\'s Senior Management Team')} />
                        </ParallaxEffect>
                    </RatioContainer>
                    <Hidden xsDown>
                        <ColorGraphic type={"dashline"}
                            size={200}
                            lineSizeRate={3}
                            color={"primary"}
                            customClass={classes.coverDashline} />
                    </Hidden>
                </Grid>
                <Grid item xs={12}>
                    <Container maxWidth={{ md: 1280 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Typography variant={"h3"} className={classes.ourTeam}>
                                    {t('team:Our Team')}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item xs={12} md={8}>
                                    <Grid container spacing={smUp ? 4 : 2} direction={smUp ? "row-reverse" : "row"}
                                        alignItems={"flex-start"}>
                                        <Grid item xs={12} sm={6}>
                                            <RatioContainer
                                                ratio={{ xs: 315 / 280, sm: 315 / 280, md: 315 / 280 }}
                                                overflow={"visible"}
                                            >
                                                <ResponseImage imageUrl={'/team/spencer-liu.jpg'}
                                                    alt={t('team:alt.Brief summary about Spencer Liu')} />
                                                <Hidden xsDown>
                                                    <ColorGraphic type={"dot"}
                                                        size={160}
                                                        color={"secondary"}
                                                        customClass={classes.colorDot1} />
                                                </Hidden>
                                            </RatioContainer>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            {/* <Typography variant={"body1"}
                                                        color={"secondary"}
                                                        component={'div'}
                                                        className={classes.jobTitle}>
                                                Founder and CEO
                                            </Typography>*/}
                                            <Typography variant={"h5"}
                                                color={"primary"}
                                                className={classes.name}>
                                                {t('team:Spencer Liu')}
                                            </Typography>
                                            <Typography variant={"body1"} className={classes.desc}>
                                                {t('team:Spencer Liu is one of the few__')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

            </Grid>
        </SectionContainer>
    );
};

export default OurTeam;
