import React, {Fragment, useEffect, useState} from 'react';
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
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import ImageClipEffect from "../../effects/ImageClipEffect";
import IconItem from "../IconItem";
import useTranslation from "next-translate/useTranslation";
import ColorGraphic from "../ColorGraphic";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    graphicDot: {
        position: 'absolute',
        right: '-175px',
        top: '-150px',
        zIndex: 1
    }
}));
const WhatCanCloudMileDo = () => {
    const classes = useStyles();
    const {t, lang} = useTranslation();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/domain.svg',
                iconAlt: t('business-productivity:alt.Two W letters merged'),
                title: '',
                desc: t('business-productivity:Domain Creating or Verifying')
            },
            {
                icon: '/images/icons/product/domain-setting.svg',
                iconAlt: t('business-productivity:alt.Two W letters merged with a half circle beneath'),
                title: '',
                desc: t('business-productivity:Domain and Console Setting (Effective in 72 Hours)')
            },
            {
                icon: '/images/icons/product/user-account-setting.svg',
                iconAlt: t('business-productivity:alt.A person icon with orange ball on the right below'),
                title: '',
                desc: t('business-productivity:User Account Setting')
            },
            {
                icon: '/images/icons/product/database-migration.svg',
                iconAlt: t('business-productivity:alt.A star in the sky with blue and orange colors'),
                title: '',
                desc: t('business-productivity:Data Migration(User Account and Email)')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 'none', sm: 'none', md: '86%'}} paddingX={false} centerX={false}>
                            <ShiftContainer shiftX={{xs: -20, sm: -20, md: -20}} growX={{xs: 40, sm: 40, md: 20}}>

                                <RatioContainer ratio={{xs: (200 / 320), sm: (365 / 1100), md: (365 / 1100)}}>
                                    <ImageClipEffect>
                                        <ParallaxEffect>
                                            <ResponseImage imageUrl={'/business-productivity/cloudmile-do.jpg'}
                                                           alt={t('business-productivity:alt.A staff pressing on a laptop\'s keyboard')}/>
                                        </ParallaxEffect>
                                    </ImageClipEffect>
                                </RatioContainer>
                                <Hidden xsDown>
                                    <ColorGraphic type={"dot"}
                                                  color={"primary"}
                                                  size={350}
                                                  customClass={classes.graphicDot}/>
                                </Hidden>
                            </ShiftContainer>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <ShiftContainer shiftY={{sm: -115, md: -115}}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6} style={{position: 'relative'}}>
                                    <Box width="100%" display={'flex'}
                                         justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                        <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false}
                                                   centerX={false}>
                                            <SectionTitleLabel color={'warning'}>
                                                {t('business-productivity:Faster and more convenient deployment')}
                                            </SectionTitleLabel>
                                            <SectionTitle>
                                                {t('business-productivity:What Can CloudMile Do For You?')}
                                            </SectionTitle>
                                        </Container>
                                    </Box>
                                    <SectionLabel>CLOUDMILE</SectionLabel>
                                </Grid>

                                <Grid item xs={12}>
                                    <Container maxWidth={{xs: 'none', sm: 'none', md: 1240}} paddingX={false}>
                                        <Grid container spacing={4}>
                                            <Hidden smDown>
                                                <GridItem480/>
                                            </Hidden>
                                            <GridItemFlexible overflow={'visible'}>
                                                <ShiftContainer shiftX={{md: -160}} growX={{md: true}}>
                                                    <SectionDescWrapper>
                                                        <Grid container spacing={4}>
                                                            <Grid item xs={12}>
                                                                <Grid container spacing={4}>
                                                                    {
                                                                        (list && list.length)
                                                                            ?
                                                                            list.map((item: any, index: number) => {

                                                                                return (index == 2)
                                                                                    ?
                                                                                    <Fragment key={index}>
                                                                                        <Hidden smDown>
                                                                                            <Grid item xs={12} sm={6}
                                                                                                  md={4}/>
                                                                                        </Hidden>
                                                                                        <Grid item xs={12} sm={6}
                                                                                              md={4}>
                                                                                            <IconItem icon={item.icon}
                                                                                                      iconAlt={item.iconAlt}
                                                                                                      desc={item.desc}
                                                                                                      descColor={"secondary"}/>
                                                                                        </Grid>
                                                                                    </Fragment>
                                                                                    :
                                                                                    <Grid item xs={12} sm={6} md={4}
                                                                                          key={index}>
                                                                                        <IconItem icon={item.icon}
                                                                                                  iconAlt={item.iconAlt}
                                                                                                  desc={item.desc}
                                                                                                  descColor={"secondary"}/>
                                                                                    </Grid>
                                                                            }) : null
                                                                    }
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </SectionDescWrapper>
                                                </ShiftContainer>
                                            </GridItemFlexible>
                                        </Grid>
                                    </Container>
                                </Grid>
                            </Grid>
                        </ShiftContainer>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default WhatCanCloudMileDo;
