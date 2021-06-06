import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import { Grid, Theme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionDesc from "../sections/SectionDesc";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import GridItem480 from "../sections/items/GridItem480";
import GridItemFlexible from "../sections/items/GridItemFlexible";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ImageClipEffect from "../effects/ImageClipEffect";
import RatioContainer from "../containers/RatioContainer";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import Hidden from "@material-ui/core/Hidden";
import ColorGraphic from "../sections/ColorGraphic";
import ShiftContainer from "../containers/ShiftContainer";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: '20px'
    },
    desc: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '160px'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '180px'
        }
    },
    colorDashline: {
        position: 'absolute',
        bottom: '-100px',
        left: '-440px',
        zIndex: 1
    }
}));
const BecomePartner = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Container maxWidth={{ md: 1280 }}>
                <Grid container spacing={4} direction={mdUp ? "row-reverse" : "row"}>
                    <Hidden mdUp>
                        <Grid item xs={12}>
                            <ShiftContainer shiftX={{ xs: -20, sm: -20 }} growX={{ xs: 40, sm: 40 }}>
                                <RatioContainer ratio={{ xs: 200 / 320, sm: 300 / 640, md: 958 / 598 }}>
                                    <ImageClipEffect>
                                        <ParallaxEffect>
                                            <ResponseImage imageUrl={'/partner/become-a-partner.jpg'}
                                                alt={t('partner:alt.A hand sign of becoming partner')} />
                                        </ParallaxEffect>
                                    </ImageClipEffect>
                                </RatioContainer>
                            </ShiftContainer>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{ sm: 600, md: 600 }} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'} />
                            <SectionTitle>
                                {t('partner:Become a Partner')}
                            </SectionTitle>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SectionDescWrapper>
                            <SectionDesc>
                                {t('partner:The CloudMile Partner Network offers a wide__')}
                            </SectionDesc>
                        </SectionDescWrapper>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={12} />
                    </Hidden>
                    <Grid item xs={12}>
                        <SectionDescWrapper>
                            <Grid container spacing={4}>
                                <GridItemFlexible grow={true}>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12}>
                                            <Typography variant={"h5"} color={"primary"} className={classes.title}>
                                                {t('partner:Solution Partners')}
                                            </Typography>
                                            <Typography variant={"body1"} className={classes.desc}>
                                                {t('partner:As an essential part of the CloudMile Partner__')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant={"h5"} color={"primary"} className={classes.title}>
                                                {t('partner:Channel Partners')}
                                            </Typography>
                                            <Typography variant={"body1"} className={classes.desc}>
                                                {t('partner:Sell subscriptions to CloudMile by joining__')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </GridItemFlexible>
                                <Hidden smDown>
                                    <GridItem480 grow={true}>
                                        <ShiftContainer shiftX={{ md: 0 }} shiftY={{ md: -230 }} growX={{ md: 20 }}>
                                            <RatioContainer ratio={{ xs: 200 / 320, sm: 300 / 640, md: 958 / 598 }}>
                                                <ImageClipEffect>
                                                    <ParallaxEffect>
                                                        <ResponseImage imageUrl={'/partner/become-a-partner.jpg'}
                                                            alt={''} />
                                                    </ParallaxEffect>
                                                </ImageClipEffect>
                                            </RatioContainer>
                                            <ColorGraphic type={"dashline"} size={230} lineSizeRate={800 / 230}
                                                color={"warning"} customClass={classes.colorDashline} />
                                        </ShiftContainer>
                                    </GridItem480>
                                </Hidden>
                            </Grid>
                        </SectionDescWrapper>
                    </Grid>
                </Grid>

            </Container>
        </SectionContainer>
    );
};
export default BecomePartner;
