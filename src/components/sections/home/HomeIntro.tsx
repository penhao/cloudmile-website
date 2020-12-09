import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "../../containers/Container";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionDesc from "../SectionDesc";
import SectionDescWrapper from "../SectionDescWrapper";
import SectionContainer from "../../containers/SectionContainer";
import SectionLabel from "../SectionLabel";
import ResponseImage from "../../Images/ResponseImage";
import RatioContainer from "../../containers/RatioContainer";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageClipEffect from "../../effects/ImageClipEffect";
import ParallaxEffect from "../../effects/ParallaxEffect";
// import useMuiSpacing from "../../../api/useMuiSpacing";
import ShiftContainer from "../../containers/ShiftContainer";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles(() => ({
    chat: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px'
    }
}));
const HomeIntro = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    // const spacing = useMuiSpacing();

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <ShiftContainer shiftX={{xs: -20, sm: -20, md: -20}} growX={{xs: 40, sm: 40, md: 20}}>
                            <RatioContainer ratio={{xs: 200 / 320, sm: 330 / 940, md: 330 / 940}}
                                            maxWidth={{md: '75%'}}>
                                <ImageClipEffect>
                                    <ParallaxEffect>
                                        <ResponseImage imageUrl={'/home/modern-skyscraper.jpg'}
                                                       alt={t('home:alt.Modern Skyscraper')}/>
                                    </ParallaxEffect>
                                </ImageClipEffect>
                            </RatioContainer>
                        </ShiftContainer>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                    <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false}
                                               centerX={false}>
                                        <SectionTitleLabel color={'warning'}/>
                                        <SectionTitle>
                                            {t('home:Your Trusted Partner for Digital Transformation')}
                                        </SectionTitle>
                                    </Container>
                                </Box>
                                <SectionLabel>INTRO</SectionLabel>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Container maxWidth={{md: 600}}
                                           paddingX={false}
                                           centerX={false}>
                                    <SectionDescWrapper>
                                        <SectionDesc>
                                            {t('home:CloudMile is a cloud and AI company__')}
                                        </SectionDesc>
                                        <div className={classes.chat}>
                                            <ResponseImage imageUrl={'/home/cloud-and-machine.jpg'}
                                                           alt={t('home:alt.Cloud and Machine Learning Combination')}
                                                           maxWidth={{xs: 600, sm: 600, md: 600}}/>
                                        </div>
                                    </SectionDescWrapper>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default HomeIntro;
