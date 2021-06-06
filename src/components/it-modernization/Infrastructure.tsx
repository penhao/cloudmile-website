import React, { useEffect, useState } from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import GridItem480 from "../sections/items/GridItem480";
import GridItemFlexible from "../sections/items/GridItemFlexible";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import ShiftContainer from "../containers/ShiftContainer";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import SectionDesc from "../sections/SectionDesc";
import IconItem from "../sections/IconItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ImageClipEffect from "../effects/ImageClipEffect";
import RatioContainer from "../containers/RatioContainer";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import useTranslation from "next-translate/useTranslation";
import ColorGraphic from "../sections/ColorGraphic";

const useStyles = makeStyles(() => ({
    graphicDashline: {
        position: 'absolute',
        top: '-65px',
        left: '50%',
        zIndex: 1
    }
}));
const Infrastructure = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/multi-cloud.svg',
                iconAlt: '',
                title: t('it-modernization:Multi-Cloud Infrastructure'),
                desc: t('it-modernization:Rather than bend your business processes to__')
            },
            {
                icon: '/images/icons/product/hybrid-cloud.svg',
                iconAlt: '',
                title: t('it-modernization:Hybrid Cloud Infrastructure'),
                desc: t('it-modernization:The fault tolerance and accessibility of__')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container>
                {/* Cover */}
                <Grid container spacing={smUp ? 4 : 2}>
                    <Hidden smDown>
                        <GridItem480 grow={true} />
                    </Hidden>
                    <GridItemFlexible grow={true} overflow={'visible'}>
                        <SectionDescWrapper>
                            <ShiftContainer shiftX={{ xs: -20, sm: 0, md: 0 }} growX={{ xs: 40, sm: 20, md: 20 }}>

                                <RatioContainer ratio={{ xs: (200 / 320), sm: (550 / 1260), md: (550 / 1260) }}>
                                    <ImageClipEffect>
                                        <ParallaxEffect>
                                            <ResponseImage imageUrl={'/it-modernization/hybrid-cloud.jpg'}
                                                alt={t('it-modernization:alt.A Staff giving presentation to his team with sticky notes')} />
                                        </ParallaxEffect>
                                    </ImageClipEffect>
                                </RatioContainer>
                                <Hidden xsDown>
                                    <ColorGraphic type={"dashline"}
                                        color={"primary"}
                                        size={130}
                                        lineSizeRate={5}
                                        customClass={classes.graphicDashline} />
                                </Hidden>
                            </ShiftContainer>
                        </SectionDescWrapper>
                    </GridItemFlexible>
                </Grid>

                <ShiftContainer shiftY={{ xs: 20 }}>
                    <Grid container spacing={smUp ? 4 : 2}>
                        {/*1*/}
                        <GridItem480 grow={true}>
                            <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                <Container maxWidth={{ xs: 'none', sm: 440, md: 440 }} paddingX={false} centerX={false}>
                                    <SectionTitleLabel color={'warning'} />
                                    <SectionTitle>
                                        {t('it-modernization:Hybrid Cloud / Multi-Cloud')}
                                    </SectionTitle>
                                </Container>
                            </Box>
                            <SectionLabel>INFRASTRUCTURE</SectionLabel>
                        </GridItem480>
                        <GridItemFlexible grow={true}>
                            <SectionDescWrapper>
                                <Container maxWidth={{ xs: 'none', sm: 'none', md: 760 }} paddingX={false} centerX={false}>
                                    <SectionDesc>
                                        {t('it-modernization:CloudMile provides a seamless integration into__')}
                                    </SectionDesc>
                                </Container>
                            </SectionDescWrapper>
                        </GridItemFlexible>
                        {/*2*/}
                        <Hidden only={'sm'}>
                            <GridItem480 grow={true} />
                        </Hidden>
                        {
                            (list && list.length)
                                ?
                                <GridItemFlexible grow={true} overflow={"visible"}>
                                    <SectionDescWrapper>
                                        <Container maxWidth={{ xs: 'none', sm: 'none', md: 760 }} paddingX={false} centerX={false}>
                                            <ShiftContainer shiftX={{ md: -160 }} growX={{ md: true }}>
                                                <Grid container spacing={4}>
                                                    {
                                                        list.map((item: any, index: number) => {
                                                            return (
                                                                <Grid item xs={12} sm={6} key={index}>
                                                                    <IconItem icon={item.icon}
                                                                        iconAlt={item.iconAlt}
                                                                        title={item.title}
                                                                        desc={item.desc}
                                                                        color={'initial'} />
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
export default Infrastructure;
