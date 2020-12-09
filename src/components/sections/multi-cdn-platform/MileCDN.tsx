import React, {useEffect, useState} from 'react';
import Container from "../../containers/Container";
import SectionContainer from "../../containers/SectionContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Grid from "@material-ui/core/Grid";
import {Hidden} from "@material-ui/core";
import ShiftContainer from "../../containers/ShiftContainer";
import SectionDescWrapper from "../SectionDescWrapper";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import IconItem from "../IconItem";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import ImageClipEffect from "../../effects/ImageClipEffect";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles(() => ({
    logo: {
        width: '200px',
        marginBottom: '30px'
    }
}));
const MileCDN = () => {
    const classes = useStyles();
    const {t, lang} = useTranslation();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/cdn.svg',
                iconAlt: '',
                title: t('multi-cdn-platform:Multi-CDN'),
                desc: t('multi-cdn-platform:One-stop Multi-CDN platform with__')
            },
            {
                icon: '/images/icons/product/ai-load.svg',
                iconAlt: '',
                title: t('multi-cdn-platform:AI Allocation'),
                desc: t('multi-cdn-platform:Enhance your website performance with__')
            },
            {
                icon: '/images/icons/product/security.svg',
                iconAlt: '',
                title: t('multi-cdn-platform:Enhanced Security'),
                desc: t('multi-cdn-platform:Keep your website and network protected at__')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <RatioContainer ratio={{xs: (200 / 320), sm: (550 / 1920), md: (550 / 1920)}}>
                        <ImageClipEffect>
                            <ParallaxEffect>
                                <ResponseImage imageUrl={'/china-access/highway.jpg'}
                                               alt={t('multi-cdn-platform:alt.A view of an interchange highway')}/>
                            </ParallaxEffect>
                        </ImageClipEffect>
                    </RatioContainer>
                </Grid>
                <Grid item xs={12}>
                    <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                    <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false}
                                               centerX={false}>
                                        <img src="/images/logos/milecdn-logo-black.svg" alt=""
                                             className={classes.logo}/>
                                        <Typography variant={"body1"}>
                                            {t('multi-cdn-platform:MileCDN is a one-stop management platform that__')}
                                        </Typography>
                                    </Container>
                                </Box>
                            </Grid>
                            <Hidden smDown>
                                <Grid item xs={12} md={6}/>
                            </Hidden>
                            <Hidden smDown>
                                <Grid item xs={12} md={6}/>
                            </Hidden>
                            {
                                (list && list.length)
                                    ?
                                    <Grid item xs={12} md={6}>
                                        <SectionDescWrapper>
                                            <ShiftContainer shiftX={{md: -320}} growX={{md: true}}>
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
                                            </ShiftContainer>
                                        </SectionDescWrapper>
                                    </Grid>
                                    :
                                    null
                            }
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </SectionContainer>
    );
};

export default MileCDN;
