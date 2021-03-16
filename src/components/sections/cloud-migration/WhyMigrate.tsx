import React, {useEffect, useState} from 'react';
import SectionContainer from "../../containers/SectionContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useTranslation from "next-translate/useTranslation";
import Grid from "@material-ui/core/Grid";
import {Hidden} from "@material-ui/core";
import SectionDescWrapper from "../SectionDescWrapper";
import ShiftContainer from "../../containers/ShiftContainer";
import RatioContainer from "../../containers/RatioContainer";
import ImageClipEffect from "../../effects/ImageClipEffect";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import Box from "@material-ui/core/Box";
import Container from "../../containers/Container";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import SectionDesc from "../SectionDesc";
import IconItem from "../IconItem";
import Typography from "@material-ui/core/Typography";
import MigrateStepList from "./MigrateStepList";
import IconLaunch from "../../icons/IconLaunch";
import ColorGraphic from "../ColorGraphic";

const WhyMigrate = () => {
    const {t, lang} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/icon-improveagility.svg',
                iconAlt: '',
                title: t('cloud-migration:Improve Agility'),
                desc: t('cloud-migration:Our cloud experts will help you design__')
            },
            {
                icon: '/images/icons/product/icon-reducecosts.svg',
                iconAlt: '',
                title: t('cloud-migration:Reduce Costs'),
                desc: t('cloud-migration:Identify cost-optimization opportunities using__')
            },
            {
                icon: '/images/icons/product/icon-maximizebusiness.svg',
                iconAlt: '',
                title: t('cloud-migration:Maximize Business'),
                desc: t('cloud-migration:Innovate at scale through improved infrastructure__')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2} direction={mdUp ? "row-reverse" : "row"} alignItems={"center"}>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{xs: 'none', sm: 'none', md: 600}} paddingX={false} centerX={false}>
                            <ShiftContainer shiftX={{xs: -20, md: -160}} growX={{xs: 40, sm: 20, md: 180}}>
                                <SectionDescWrapper>
                                    <RatioContainer ratio={{xs: (200 / 320), sm: (436 / 780), md: (436 / 780)}}>
                                        <ImageClipEffect>
                                            <ParallaxEffect>
                                                <ResponseImage
                                                    imageUrl={'/cloud-migration/img-digital-transformation-strategy.jpg'}
                                                    alt={t('')}/>
                                            </ParallaxEffect>
                                        </ImageClipEffect>
                                    </RatioContainer>
                                </SectionDescWrapper>
                            </ShiftContainer>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 640, md: 640}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('cloud-migration:Why migrate to the cloud?')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>Cloud Migration</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={smUp ? 4 : 2}>
                            <Hidden smDown>
                                <Grid item xs={12} md={6}/>
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Container paddingX={false} centerX={false}
                                           maxWidth={{xs: 'none', sm: 'none', md: 600}}>
                                    <ShiftContainer shiftX={{md: -160}} growX={{md: true}}>
                                        <SectionDescWrapper>
                                            <Typography variant={"body1"} dangerouslySetInnerHTML={
                                                {__html: t('cloud-migration:IDC conducted in-depth interviews on__')}
                                            }/>
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Container>
                            </Grid>
                            <Hidden smDown>
                                <Grid item xs={12} md={6}/>
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Container paddingX={false} centerX={false}
                                           maxWidth={{xs: 'none', sm: 'none', md: 600}}>
                                    <ShiftContainer shiftX={{md: -320}} growX={{md: true}}>
                                        <SectionDescWrapper>
                                            <Grid container spacing={4}>
                                                {
                                                    (list && list.length) ?
                                                        list.map((item: any, index: number) => {

                                                            return (
                                                                <Grid item xs={12} md={4} key={index}>
                                                                    <IconItem icon={item.icon}
                                                                              iconAlt={item.iconAlt}
                                                                              title={item.title}
                                                                              desc={item.desc}
                                                                              color={"primary"}/>
                                                                </Grid>
                                                            )
                                                        })
                                                        : null
                                                }
                                            </Grid>
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </SectionContainer>
    );
};

export default WhyMigrate;