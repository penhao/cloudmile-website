import React, {useEffect, useState} from 'react';
import Container from "../../containers/Container";
import SectionContainer from "../../containers/SectionContainer";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import GridItemFlexible from "../items/GridItemFlexible";
import GridItem480 from "../items/GridItem480";
import ShiftContainer from "../../containers/ShiftContainer";
import {Hidden} from "@material-ui/core";
import SectionDescWrapper from "../SectionDescWrapper";
import IconItem from "../IconItem";
import ImageClipEffect from "../../effects/ImageClipEffect";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import useTranslation from "next-translate/useTranslation";

const Customized = () => {
    const {t,lang} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/new-company.svg',
                iconAlt: t('business-productivity:alt.Blue Ball'),
                title: t('business-productivity:New Company'),
                desc: t('business-productivity:Gain access to customized email inbox__')
            },
            {
                icon: '/images/icons/product/smes.svg',
                iconAlt: t('business-productivity:alt.Blue and Orange Ball Merged'),
                title: t('business-productivity:SMEs'),
                desc: t('business-productivity:For companies with hundreds or thousands of__')
            },
            {
                icon: '/images/icons/product/enterprises.svg',
                iconAlt: t('business-productivity:alt.2 Blue and 1 Orange Balls aligned'),
                title: t('business-productivity:Enterprises'),
                desc: t('business-productivity:Thanks to CloudMile’s cloud-native development expertise__')
            }
        ]);
    }, [lang]);

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4} alignItems={"flex-end"} direction={mdUp ? 'row-reverse' : 'row'}>

                    <Grid item xs={12} md={6}>
                        <SectionDescWrapper>
                            <ShiftContainer shiftX={{xs: -20, sm: 0, md: -160}} growX={{xs: 40, sm: 20, md: 180}}>
                                <RatioContainer ratio={{xs: (200 / 320), sm: (690 / 1100), md: (690 / 1100)}}>
                                    <ImageClipEffect>
                                        <ParallaxEffect>
                                            <ResponseImage
                                                imageUrl={'/business-productivity/customized.jpg'}
                                                alt={t('business-productivity:alt.A staff giving presentaton to his coworkers')}/>
                                        </ParallaxEffect>
                                    </ImageClipEffect>
                                </RatioContainer>
                            </ShiftContainer>
                        </SectionDescWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('business-productivity:Our Customized Productivity Service for you')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>CUSTOMIZED</SectionLabel>
                    </Grid>


                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 'none', sm: 'none', md: 1240}} paddingX={false}>
                            <Grid container spacing={smUp ? 4 : 2}>
                                <Hidden smDown>
                                    <GridItem480/>
                                </Hidden>
                                {
                                    (list && list.length)
                                        ?
                                        <GridItemFlexible overflow={'visible'}>
                                            <ShiftContainer shiftX={{md: -160}} growX={{md: true}}>
                                                <SectionDescWrapper>
                                                    <Grid container spacing={4}>
                                                        {
                                                            list.map((item: any, index: number) => {
                                                                return (
                                                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                                                        <IconItem icon={item.icon}
                                                                                  iconAlt={item.iconAlt}
                                                                                  title={item.title}
                                                                                  desc={item.desc}/>
                                                                    </Grid>
                                                                )
                                                            })
                                                        }
                                                    </Grid>
                                                </SectionDescWrapper>
                                            </ShiftContainer>
                                        </GridItemFlexible>
                                        :
                                        null
                                }
                            </Grid>
                        </Container>
                    </Grid>

                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default Customized;
