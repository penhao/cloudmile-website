import React, {useEffect, useState} from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import GridItem480 from "../items/GridItem480";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import GridItemFlexible from "../items/GridItemFlexible";
import ShiftContainer from "../../containers/ShiftContainer";
import SectionDescWrapper from "../SectionDescWrapper";
import {Hidden} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ImageClipEffect from "../../effects/ImageClipEffect";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import SectionDesc from "../SectionDesc";
import IconItem from "../IconItem";
import useTranslation from "next-translate/useTranslation";
import ColorGraphic from "../ColorGraphic";

const useStyles = makeStyles(() => ({
    graphicDot: {
        position: 'absolute',
        top: '-100px',
        right: '-120px',
        zIndex: 1
    }
}));
const Modernization = () => {
    const classes = useStyles();
    const {t, lang} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/legacy-modernization.svg',
                iconAlt: '',
                title: t('it-modernization:Legacy Modernization'),
                desc: t('it-modernization:Offer an industrialized approach to modernize__')
            },
            {
                icon: '/images/icons/product/cloud-native.svg',
                iconAlt: '',
                title: t('it-modernization:Cloud Native / Serverless'),
                desc: t('it-modernization:Partner closely with your IT team__')
            },
            {
                icon: '/images/icons/product/api-facade.svg',
                iconAlt: '',
                title: t('it-modernization:API Facade'),
                desc: t('it-modernization:Build cloud native APIs by bridging legacy systems__')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container>
                {/* Cover */}
                <Grid container spacing={smUp ? 4 : 2}>
                    <GridItem480 grow={true}>
                        <ShiftContainer shiftX={{xs: -20, sm: -20, md: -20}} growX={{xs: 40, sm: 20, md: 20}}>
                            <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                <Container maxWidth={{xs: 'none', sm: 440, md: 'none'}} paddingX={false}
                                           centerX={false}>
                                    <RatioContainer ratio={{xs: (200 / 320), sm: (982 / 780), md: (982 / 780)}}>
                                        <ImageClipEffect>
                                            <ParallaxEffect>
                                                <ResponseImage
                                                    imageUrl={'/it-modernization/application-modernization.jpg'}
                                                    alt={t('it-modernization:alt.Sample of workflow strategy written over a wall')}/>
                                            </ParallaxEffect>
                                        </ImageClipEffect>
                                    </RatioContainer>
                                </Container>
                            </Box>
                            <Hidden xsDown>
                                <ColorGraphic type={"dot"} size={300} color={"secondary"}
                                              customClass={classes.graphicDot}/>
                            </Hidden>
                        </ShiftContainer>
                    </GridItem480>
                </Grid>
                <ShiftContainer shiftY={{xs: 20, sm: -100, md: -100}}>
                    <Grid container spacing={smUp ? 4 : 2}>
                        {/*1*/}
                        <GridItem480 grow={true}>
                            <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                <Container maxWidth={{xs: 'none', sm: 440, md: 440}} paddingX={false} centerX={false}>
                                    <SectionTitleLabel color={'warning'}/>
                                    <SectionTitle>
                                        {t('it-modernization:Application Modernization')}
                                    </SectionTitle>
                                </Container>
                            </Box>
                            <SectionLabel>MODERNIZATION</SectionLabel>
                        </GridItem480>
                        <GridItemFlexible grow={true}>
                            <SectionDescWrapper>
                                <Container maxWidth={{xs: 'none', sm: 'none', md: 760}}
                                           paddingX={false} centerX={false}>
                                    <SectionDesc>
                                        {t('it-modernization:Legacy applications, also known as monolithic applications__')}
                                    </SectionDesc>
                                </Container>
                            </SectionDescWrapper>
                        </GridItemFlexible>
                        {/*2*/}
                        <Hidden only={'sm'}>
                            <GridItem480 grow={true}/>
                        </Hidden>
                        {
                            (list && list.length)
                                ?
                                <GridItemFlexible grow={true} overflow={"visible"}>
                                    <SectionDescWrapper>
                                        <Container maxWidth={{xs: 'none', sm: 'none', md: 760}} paddingX={false}
                                                   centerX={false}>
                                            <ShiftContainer shiftX={{md: -160}} growX={{md: true}}>
                                                <Grid container spacing={4}>
                                                    {
                                                        list.map((item: any, index: number) => {
                                                            return (
                                                                <Grid item xs={12} sm={6} md={4} key={index}>
                                                                    <IconItem icon={item.icon}
                                                                              iconAlt={item.iconAlt}
                                                                              title={item.title}
                                                                              desc={item.desc}
                                                                              color={'initial'}/>
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </ShiftContainer>
                                        </Container>
                                    </SectionDescWrapper>
                                </GridItemFlexible>
                                :
                                null
                        }
                    </Grid>
                </ShiftContainer>
            </Container>
        </SectionContainer>
    );
};

export default Modernization;
