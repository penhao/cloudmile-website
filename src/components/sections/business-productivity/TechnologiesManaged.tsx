import React, {useEffect, useState} from 'react';
import Container from "../../containers/Container";
import SectionContainer from "../../containers/SectionContainer";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import GridItemFlexible from "../items/GridItemFlexible";
import GridItem480 from "../items/GridItem480";
import ShiftContainer from "../../containers/ShiftContainer";
import {Hidden, Theme} from "@material-ui/core";
import SectionDescWrapper from "../SectionDescWrapper";
import RatioContainer from "../../containers/RatioContainer";
import ParallaxEffect from "../../effects/ParallaxEffect";
import ResponseImage from "../../Images/ResponseImage";
import ImageClipEffect from "../../effects/ImageClipEffect";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconItem from "../IconItem";
import useTranslation from "next-translate/useTranslation";
import ColorGraphic from "../ColorGraphic";

const useStyles = makeStyles((theme: Theme) => ({
    gsuite: {
        width: '100%',
        maxWidth: '600px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '-150px'
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '20px'
        }
    },
    workplace: {
        width: '100%',
        maxWidth: '415px',
        marginTop: '40px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '-150px',
            marginTop: 0
        }
    },
    graphicDot: {
        position: 'absolute',
        left: '-150px',
        top: '-100px',
        zIndex: 1
    }
}));
const TechnologiesManaged = () => {

    const classes = useStyles();
    const {t, lang} = useTranslation();
    const [gsuiteList, setGSuiteList] = useState<any[] | null>(null);
    const [workspaceList, setWorkspaceList] = useState<any[] | null>(null);
    useEffect(() => {
        setGSuiteList([
            {
                icon: '/images/icons/product/email.svg',
                iconAlt: t('business-productivity:alt.The logo of @'),
                title: t('business-productivity:Email@example'),
                desc: t('business-productivity:Send professional emails from your business__')
            },
            {
                icon: '/images/icons/product/storage.svg',
                iconAlt: t('business-productivity:alt.A visual of a drawer shape with blue and orange colors'),
                title: t('business-productivity:All the storage you need'),
                desc: t('business-productivity:G Suite’s Basic edition includes 30GB of__')
            },
            {
                icon: '/images/icons/product/database-migration.svg',
                iconAlt: t('business-productivity:alt.A star in the sky with blue and orange colors'),
                title: t('business-productivity:Easy data migration'),
                desc: t('business-productivity:Use our migration tools and services to__')
            },
            {
                icon: '/images/icons/product/managing.svg',
                iconAlt: t('business-productivity:alt.A person icon with orange ball on head part'),
                title: t('business-productivity:Advanced admin controls'),
                desc: t('business-productivity:Add and remove users, set up__')
            }
        ]);
        setWorkspaceList([
            {
                icon: '/images/icons/product/groups.svg',
                iconAlt: t('business-productivity:alt.2 Blue and 1 Orange Person Icons Together'),
                title: t('business-productivity:Groups'),
                desc: t('business-productivity:Groups help you make decisions and__')
            },
            {
                icon: '/images/icons/product/news-feed.svg',
                iconAlt: t('business-productivity:alt.A visualization of a news feed with blue and orange colors'),
                title: t('business-productivity:News Feed'),
                desc: t('business-productivity:The News Feed surfaces relevant content to each person')
            },
            {
                icon: '/images/icons/product/chat.svg',
                iconAlt: t('business-productivity:alt.Two half pieces of a ball with blue and orange color'),
                title: t('business-productivity:Workplace Chat'),
                desc: t('business-productivity:Reach colleagues instantly with messaging and voice/video calls')
            },
            {
                icon: '/images/icons/product/app.svg',
                iconAlt: t('business-productivity:alt.Blue Triange with Orange circle combined'),
                title: t('business-productivity:Mobile & Desktop App'),
                desc: t('business-productivity:Keep in touch with your team anytime__')
            },
            {
                icon: '/images/icons/product/live-video.svg',
                iconAlt: t('business-productivity:alt.Video Camera Icon'),
                title: t('business-productivity:Live Video'),
                desc: t('business-productivity:Stream live video with your team or the entire organization')
            }
        ]);
    }, [lang]);

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4} alignItems={"center"}>
                    <Grid item xs={12} md={6}>
                        <ShiftContainer shiftX={{xs: -20, sm: -20, md: -20}} growX={{xs: 40, sm: 40, md: 180}}>
                            <RatioContainer ratio={{xs: (200 / 320), sm: (600 / 1100), md: (600 / 1100)}}>
                                <ImageClipEffect>
                                    <ParallaxEffect>
                                        <ResponseImage
                                            imageUrl={'/business-productivity/experts.jpg'}
                                            alt={t('business-productivity:alt.A group of experts are looking at a laptop')}/>
                                    </ParallaxEffect>
                                </ImageClipEffect>
                            </RatioContainer>

                            <Hidden xsDown>
                                <ColorGraphic type={"dot"}
                                              color={"secondary"}
                                              size={400}
                                              customClass={classes.graphicDot}/>
                            </Hidden>

                        </ShiftContainer>
                    </Grid>
                    <Grid item xs={12} md={6} style={{position: 'relative'}}>
                        <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'}/>
                            <SectionTitle>
                                {t('business-productivity:Technologies Managed by Experts')}
                            </SectionTitle>
                        </Container>
                        <SectionLabel position={'right'}>EXPERTS</SectionLabel>
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
                                                        <Grid item xs={12}>
                                                            <ResponseImage
                                                                imageUrl={'/business-productivity/img-google-workplace.jpg'}
                                                                alt={t('business-productivity:alt.G Suite Logo')}
                                                                customClass={classes.gsuite}/>
                                                        </Grid>
                                                        {
                                                            (gsuiteList && gsuiteList.length)
                                                                ?
                                                                gsuiteList.map((item: any, index: number) => {
                                                                    return (
                                                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                                                            <IconItem icon={item.icon}
                                                                                      iconAlt={item.iconAlt}
                                                                                      title={item.title}
                                                                                      desc={item.desc}/>
                                                                        </Grid>
                                                                    )
                                                                }) : null
                                                        }
                                                    </Grid>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Grid container spacing={4}>
                                                        <Grid item xs={12}>
                                                            <ResponseImage
                                                                imageUrl={'/business-productivity/img-workplace.png'}
                                                                alt={t('business-productivity:alt.Logo of Facebook Workplace')}
                                                                customClass={classes.workplace}/>
                                                        </Grid>
                                                        {
                                                            (workspaceList && workspaceList.length)
                                                                ?
                                                                workspaceList.map((item: any, index: number) => {
                                                                    return (
                                                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                                                            <IconItem icon={item.icon}
                                                                                      iconAlt={item.iconAlt}
                                                                                      title={item.title}
                                                                                      desc={item.desc}/>
                                                                        </Grid>
                                                                    )
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
            </Container>
        </SectionContainer>
    );
};
export default TechnologiesManaged;
