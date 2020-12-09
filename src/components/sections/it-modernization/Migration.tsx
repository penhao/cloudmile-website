import React, {useEffect, useState} from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import GridItem480 from "../items/GridItem480";
import GridItemFlexible from "../items/GridItemFlexible";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import {Hidden} from "@material-ui/core";
import ShiftContainer from "../../containers/ShiftContainer";
import SectionDescWrapper from "../SectionDescWrapper";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import ImageClipEffect from "../../effects/ImageClipEffect";
import useTranslation from "next-translate/useTranslation";
import IconItem from "../IconItem";
import SectionDesc from "../SectionDesc";

const Migration = () => {
    const {t, lang} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/vm-migration.svg',
                iconAlt: '',
                title: t('it-modernization:Virtual Machine (VM) Migration'),
                desc: t('it-modernization:We use the ‘lift & shift’ strategy to__')
            },
            {
                icon: '/images/icons/product/data-warehouse-migration.svg',
                iconAlt: '',
                title: t('it-modernization:Data Warehouse Migration'),
                desc: t('it-modernization:We also help you complete a successful__')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2}>
                    {/* Cover */}
                    <Hidden smDown>
                        <GridItem480 grow={true}/>
                    </Hidden>
                    <Hidden xsDown>
                        <GridItemFlexible grow={true}>
                            <SectionDescWrapper>
                                <ShiftContainer growX={{xs: 0, sm: 20, md: 20}}>
                                    <RatioContainer ratio={{xs: (200 / 320), sm: (560 / 1100), md: (560 / 1100)}}>
                                        <ImageClipEffect>
                                            <ParallaxEffect>
                                                <ResponseImage imageUrl={'/it-modernization/cloud-migration.jpg'}
                                                               alt={t('it-modernization:alt.A Staff giving presentation to his colleagues')}/>
                                            </ParallaxEffect>
                                        </ImageClipEffect>
                                    </RatioContainer>
                                </ShiftContainer>
                            </SectionDescWrapper>
                        </GridItemFlexible>
                    </Hidden>
                </Grid>
                <Grid container spacing={smUp ? 4 : 2}>
                    {/* Title & Desc */}
                    <GridItem480 grow={true}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 440, md: 440}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('it-modernization:Cloud Migration')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>MIGRATION</SectionLabel>
                    </GridItem480>
                    <GridItemFlexible grow={true}>
                        <SectionDescWrapper>
                            <Container maxWidth={{xs: 'none', sm: 'none', md: 760}}
                                       paddingX={false} centerX={false}>
                                <SectionDesc>
                                    {t('it-modernization:Reduce the cost and risks associated with__')}
                                </SectionDesc>
                            </Container>
                        </SectionDescWrapper>
                    </GridItemFlexible>
                    {/* List */}
                    <Hidden only={'sm'}>
                        <GridItem480 grow={true}/>
                    </Hidden>
                    {
                        (list && list.length)
                            ?
                            <GridItemFlexible grow={true} overflow={"visible"}>
                                <SectionDescWrapper>
                                    <Container maxWidth={{xs: 'none', sm: 'none', md: 760}}
                                               paddingX={false} centerX={false}>
                                        <ShiftContainer shiftX={{md: -160}} growX={{md: true}}>
                                            <Grid container spacing={4}>
                                                {
                                                    list.map((item: any, index: number) => {
                                                        return (
                                                            <Grid item xs={12} md={6} key={index}>
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
            </Container>
        </SectionContainer>
    );
};

export default Migration;
