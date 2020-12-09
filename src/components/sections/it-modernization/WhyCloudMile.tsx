import React from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import GridItem480 from "../items/GridItem480";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import GridItemFlexible from "../items/GridItemFlexible";
import SectionDescWrapper from "../SectionDescWrapper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Hidden, Theme} from "@material-ui/core";
import ImageClipEffect from "../../effects/ImageClipEffect";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import ShiftContainer from "../../containers/ShiftContainer";
import useTranslation from "next-translate/useTranslation";
import ColorGraphic from "../ColorGraphic";


const useStyles = makeStyles((theme: Theme) => ({
    valueItem: {
        position: 'relative',
        marginBottom: '20px',
    },
    value: {
        fontSize: '60px',
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: 'normal',
        color: theme.palette.error.main,
        [theme.breakpoints.up('sm')]: {
            fontSize: '60px',
        }
    },
    valueLabel: {
        fontWeight: 600,
        lineHeight: 1.25
    },
    labelTop: {
        position: 'absolute',
        top: '-12px'
    },
    graphicDot: {
        position: 'absolute',
        top: '-175px',
        left: '-175px',
        zIndex: 1
    },
    itemContainer: {
        [theme.breakpoints.up('md')]: {
            marginTop: '20px'
        }
    }
}));
const WhyCloudMile = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4} alignItems={"flex-end"}>
                    <GridItemFlexible grow={true} overflow={"visible"}>
                        <ShiftContainer shiftX={{xs: -20, sm: -20, md: -20}} growX={{xs: 40, sm: 40, md: 20}}>
                            <RatioContainer ratio={{xs: (200 / 320), sm: (520 / 1100), md: (520 / 1100)}}>
                                <ImageClipEffect>
                                    <ParallaxEffect>
                                        <ResponseImage imageUrl={'/it-modernization/why-cloudmile.jpg'}
                                                       alt={t('it-modernization:alt.A Staff showing his analysis to his co-worker')}/>
                                    </ParallaxEffect>
                                </ImageClipEffect>
                            </RatioContainer>
                            <Hidden xsDown>
                                <ColorGraphic type={"dot"} color={"primary"} size={350}
                                              customClass={classes.graphicDot}/>
                            </Hidden>
                        </ShiftContainer>
                    </GridItemFlexible>
                    <GridItem480 grow={true}>
                        <Container maxWidth={{xs: 'none', sm: 440, md: 440}} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'}/>
                            <SectionTitle>
                                {t('it-modernization:Why CloudMile')}
                            </SectionTitle>
                        </Container>
                    </GridItem480>

                    <Grid item xs={12}>
                        <SectionDescWrapper>
                            <Container maxWidth={{xs: 'none', sm: 'none', md: 920}} paddingX={false} className={classes.itemContainer}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.valueItem}>
                                            <Typography variant={"body1"} component={'span'}
                                                        className={clsx(classes.valueLabel, classes.labelTop)}>
                                                {t('it-modernization:Over')}
                                            </Typography>
                                            <Typography variant={'h3'} className={classes.value}>70</Typography>
                                            <Typography variant={"body1"} component={'span'}
                                                        className={classes.valueLabel}>
                                                {t('it-modernization:Certifications')}
                                            </Typography>
                                        </div>
                                        <Typography variant={"body1"}>
                                            {t('it-modernization:Within three years, we’ve earned more than__')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.valueItem}>
                                            <Typography variant={'h3'} className={classes.value}>3</Typography>
                                            <Typography variant={"body1"} component={'span'}
                                                        className={classes.valueLabel}>
                                                {t('it-modernization:Specialization')}
                                            </Typography>
                                        </div>
                                        <Typography variant={"body1"}>
                                            {t('it-modernization:We became the premier Google Cloud partner that__')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <div className={classes.valueItem}>
                                            <Typography variant={'h3'} className={classes.value}>330</Typography>
                                            <Typography variant={"body1"} component={'span'}
                                                        className={classes.valueLabel}>
                                                {t('it-modernization:Customers')}
                                            </Typography>
                                        </div>
                                        <Typography variant={"body1"}>
                                            {t('it-modernization:Served 10+ practical industries experiences and__')}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </SectionDescWrapper>
                    </Grid>
                </Grid>


            </Container>
        </SectionContainer>
    );
};
export default WhyCloudMile;
