import React, {useEffect, useState} from 'react';
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionDescWrapper from "../SectionDescWrapper";
import SectionContainer from "../../containers/SectionContainer";
import Box from "@material-ui/core/Box";
import SectionLabel from "../SectionLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import {Hidden, Theme} from "@material-ui/core";
import GridItem480 from "../items/GridItem480";
import GridItemFlexible from "../items/GridItemFlexible";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ImageClipEffect from "../../effects/ImageClipEffect";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import ShiftContainer from "../../containers/ShiftContainer";
import IconItem from "../IconItem";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    coverWrapper: {
        width: 'calc(100% + 40px)',
        marginLeft: '-20px',
        [theme.breakpoints.up('md')]: {
            marginLeft: '-40px',
        }
    }
}));
const DataExperts = () => {
    const classes = useStyles();
    const {t, lang} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/machine-learning.svg',
                iconAlt: t('data-driven-business:alt.1 orange and 2 blue data cluster balls'),
                title: t('data-driven-business:Machine Learning (ML)'),
                desc: t('data-driven-business:Utilize the power of Machine learning to__')
            },
            {
                icon: '/images/icons/product/ai-transformation-program.svg',
                iconAlt: t('data-driven-business:alt.A blue rectangle contains 2 orange circles and one triangle'),
                title: t('data-driven-business:Intelligent Applications'),
                desc: t('data-driven-business:With the help of CloudMile\'s knowledge in__')
            },
            {
                icon: '/images/icons/product/data-integration.svg',
                iconAlt: t('data-driven-business:alt.A visual of a drawer shape with blue and orange colors'),
                title: t('data-driven-business:Data Integration'),
                desc: t('data-driven-business:Unleash your data\'s full potential with our__')
            },
            {
                icon: '/images/icons/product/data-application.svg',
                iconAlt: t('data-driven-business:alt.A visual of a drawer shape with blue and orange colors also including an orange line'),
                title: t('data-driven-business:Data Applications'),
                desc: t('data-driven-business:Design and utilize dashboards in a way that__')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4}>
                    {/* Title & Cover:md*/}
                    <Hidden mdUp>
                        <Grid item xs={12} md={6}>
                            <div className={classes.coverWrapper}>
                                <RatioContainer ratio={{xs: (200 / 320), sm: (330 / 640), md: (1130 / 598)}}>
                                    <ParallaxEffect>
                                        <ResponseImage imageUrl={'/data-driven-business/data-experts.jpg'}
                                                       alt={t('data-driven-business:alt.Three specialist are smiling')}/>
                                    </ParallaxEffect>
                                </RatioContainer>
                            </div>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <ShiftContainer shiftY={{sm: -90}}>
                            <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                    <SectionTitleLabel color={'warning'}/>
                                    <SectionTitle>
                                        {t('data-driven-business:Data Driven Solutions powered by Data Experts')}
                                    </SectionTitle>
                                </Container>
                            </Box>
                            <SectionLabel>DATA EXPERTS</SectionLabel>
                        </ShiftContainer>
                    </Grid>
                    <Grid item xs={12}>
                        <ShiftContainer shiftY={{md: -85}}>
                            <Container maxWidth={{xs: 'none', sm: 'none', md: 1240}} paddingX={false}>
                                <Grid container spacing={smUp ? 4 : 2} alignItems={"center"}>
                                    <Hidden smDown>
                                        <GridItem480 grow={true}>
                                            <div className={classes.coverWrapper}>
                                                <RatioContainer
                                                    ratio={{xs: (200 / 320), sm: (330 / 640), md: (1130 / 598)}}>
                                                    <ImageClipEffect>
                                                        <ParallaxEffect>
                                                            <ResponseImage
                                                                imageUrl={'/data-driven-business/data-experts.jpg'}
                                                                alt={''}/>
                                                        </ParallaxEffect>
                                                    </ImageClipEffect>
                                                </RatioContainer>
                                            </div>
                                        </GridItem480>
                                    </Hidden>
                                    {
                                        (list && list.length)
                                            ?
                                            <GridItemFlexible grow={true} overflow={"visible"}>
                                                <SectionDescWrapper>
                                                    <Container maxWidth={{xs: 'none', sm: 'none', md: 760}}
                                                               paddingX={false} centerX={false}>
                                                        <Grid container spacing={4}>
                                                            {
                                                                list.map((item: any, index: number) => {
                                                                    return (
                                                                        <Grid item xs={12} sm={6} key={index}>
                                                                            <IconItem icon={item.icon}
                                                                                      iconAlt={item.iconAlt}
                                                                                      title={item.title}
                                                                                      desc={item.desc}/>
                                                                        </Grid>
                                                                    )
                                                                })
                                                            }
                                                        </Grid>
                                                    </Container>
                                                </SectionDescWrapper>
                                            </GridItemFlexible>
                                            :
                                            null
                                    }
                                </Grid>
                            </Container>
                        </ShiftContainer>
                    </Grid>

                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default DataExperts;
