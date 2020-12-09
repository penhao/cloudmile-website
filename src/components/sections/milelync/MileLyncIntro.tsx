import React from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import {Hidden, Theme} from "@material-ui/core";
import GridItem480 from "../items/GridItem480";
import GridItemFlexible from "../items/GridItemFlexible";
import SectionDescWrapper from "../SectionDescWrapper";
import ShiftContainer from "../../containers/ShiftContainer";
import RatioContainer from "../../containers/RatioContainer";
import ImageClipEffect from "../../effects/ImageClipEffect";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import SectionDesc from "../SectionDesc";
import IconItem from "../IconItem";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import {makeStyles} from "@material-ui/styles";
import ColorGraphic from "../ColorGraphic";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    logo: {
        width: '100%',
        maxWidth: '265px',
        marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '40px',
            maxWidth: '440px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '-320px',
        }
    },
    desc: {
        paddingTop: 0
    },
    graphic: {
        position: 'absolute',
        right: '-200px',
        top: 0
    }
}));
const MileLyncIntro = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <SectionContainer>
            <Container maxWidth={{md: 1280}}>
                <Grid container spacing={smUp ? 4 : 2}>
                    {/* Cover */}
                    <Hidden smDown>
                        <GridItem480 grow={true}/>
                    </Hidden>
                    <GridItemFlexible grow={true} overflow={'visible'}>
                        <img src="/images/logos/logo-milelync.svg" alt="" className={classes.logo}/>
                        <SectionDescWrapper>
                            <Container maxWidth={{md: 760}} paddingX={false} centerX={false}>
                                <SectionDesc customClass={classes.desc}>
                                    {t('cloud-management-platform:a cloud management platform to consolidate__')}
                                </SectionDesc>
                                <Hidden smDown>
                                    <ColorGraphic type={"dot"} color={'primary'} size={400}
                                                  customClass={classes.graphic}/>
                                </Hidden>
                            </Container>
                        </SectionDescWrapper>
                    </GridItemFlexible>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default MileLyncIntro;
