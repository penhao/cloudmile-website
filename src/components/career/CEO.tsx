import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import { Theme, useMediaQuery } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import IconQuote from "../icons/IconQuote";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ResponseImage from "../Images/ResponseImage";
import ShiftContainer from "../containers/ShiftContainer";
import ColorGraphic from "../sections/ColorGraphic";
import Hidden from "@material-ui/core/Hidden";
import RatioContainer from "../containers/RatioContainer";
import ParallaxEffect from "../effects/ParallaxEffect";
import ImageClipEffect from "../effects/ImageClipEffect";

const useStyles = makeStyles((theme: Theme) => ({
    desc: {
        fontStyle: 'italic',
        fontWeight: 600
    },
    author: {
        marginTop: '40px'
    },
    graphicDot: {
        position: 'absolute',
        zIndex: 2,
        [theme.breakpoints.up('sm')]: {
            left: '-260px',
            top: '-120px'
        },
        [theme.breakpoints.up('md')]: {
            left: '-260px',
            top: '-40px'
        }
    }
}));
const CEO = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    return (
        <SectionContainer>
            <Container maxWidth={{ xs: 'none', sm: 960, md: 960 }}>
                <Grid container spacing={mdUp ? 4 : 2}>
                    <Grid item xs={12} sm={6}>
                        <ShiftContainer shiftX={{ xs: -20 }} growX={{ xs: 40 }}>
                            <RatioContainer ratio={{ xs: 415 / 440, sm: 415 / 440, md: 415 / 440 }}>
                                <ImageClipEffect>
                                    <ParallaxEffect>
                                        <ResponseImage imageUrl={'/career/spencer-liu.jpg'}
                                            alt={t('career:alt.Spencer Liu\'s Statement')} />
                                    </ParallaxEffect>
                                </ImageClipEffect>
                            </RatioContainer>
                            <Hidden xsDown>
                                <ColorGraphic type={"dot"}
                                    size={350}
                                    color={"primary"}
                                    customClass={classes.graphicDot} />
                            </Hidden>
                        </ShiftContainer>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <IconQuote lang={lang} />
                        <Typography variant={"h4"} className={classes.desc}>
                            {t('career:The reason why I started__')}
                        </Typography>
                        <Typography variant={"body1"} align={"right"} className={classes.author}>
                            {t('career:Spencer Liu, CloudMile CEO')}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default CEO;
