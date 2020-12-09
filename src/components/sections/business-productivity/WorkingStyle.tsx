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
import SectionDescWrapper from "../SectionDescWrapper";
import {Hidden} from "@material-ui/core";
import ImageClipEffect from "../../effects/ImageClipEffect";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import IconItem from "../IconItem";
import useTranslation from "next-translate/useTranslation";

const WorkingStyle = () => {
    const {t, lang} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/interacting.svg',
                iconAlt: t('business-productivity:alt.Blue and Orange Balls are connected via a line'),
                title: t('business-productivity:Interacting'),
                desc: t('business-productivity:Easily get in touch wherever colleagues are')
            },
            {
                icon: '/images/icons/product/bulid.svg',
                iconAlt: t('business-productivity:alt.A number of orange dots within a blue rectangle'),
                title: t('business-productivity:Building'),
                desc: t('business-productivity:Provide all the necessary tools helping you__')
            },
            {
                icon: '/images/icons/product/accessing.svg',
                iconAlt: t('business-productivity:alt.A Blue stripe containing an orange ball'),
                title: t('business-productivity:Accessing'),
                desc: t('business-productivity:Instantly store and retrieve files with__')
            },
            {
                icon: '/images/icons/product/managing.svg',
                iconAlt: t('business-productivity:alt.A person icon with orange ball on head part'),
                title: t('business-productivity:Managing'),
                desc: t('business-productivity:Control users, devices and data safely, and easily')
            }
        ]);
    }, [lang]);

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4}>

                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('business-productivity:What’s the new working style in the digital world?')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>NEW WORKING STYLE</SectionLabel>
                    </Grid>

                    <Grid item xs={12}>
                        <ShiftContainer shiftY={{md: (lang === 'zh-hant') ? -90 : -100}}>
                            <Container maxWidth={{xs: 'none', sm: 'none', md: 1240}} paddingX={false}>
                                <Grid container spacing={smUp ? 4 : 2} alignItems={"center"}>
                                    <Hidden smDown>
                                        <GridItem480>
                                            <ShiftContainer shiftX={{md: -160}} growX={{md: true}}>
                                                <RatioContainer
                                                    ratio={{xs: (200 / 320), sm: (960 / 730), md: (960 / 730)}}>
                                                    <ImageClipEffect>
                                                        <ParallaxEffect>
                                                            <ResponseImage
                                                                imageUrl={'/business-productivity/new-working-style.jpg'}
                                                                alt={t('business-productivity:alt.display distortion')}/>
                                                        </ParallaxEffect>
                                                    </ImageClipEffect>
                                                </RatioContainer>
                                            </ShiftContainer>
                                        </GridItem480>
                                    </Hidden>
                                    {
                                        (list && list.length)
                                            ?
                                            <GridItemFlexible grow={false} overflow={"visible"}>
                                                <SectionDescWrapper>
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
export default WorkingStyle;
