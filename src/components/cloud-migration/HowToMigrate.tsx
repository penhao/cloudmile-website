import React, { useEffect, useState } from 'react';
import SectionContainer from "../containers/SectionContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useTranslation from "next-translate/useTranslation";
import Grid from "@material-ui/core/Grid";
import { Hidden, Theme } from "@material-ui/core";
import GridItem480 from "../sections/items/GridItem480";
import GridItemFlexible from "../sections/items/GridItemFlexible";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import ShiftContainer from "../containers/ShiftContainer";
import RatioContainer from "../containers/RatioContainer";
import ImageClipEffect from "../effects/ImageClipEffect";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import Box from "@material-ui/core/Box";
import Container from "../containers/Container";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import SectionDesc from "../sections/SectionDesc";
import IconItem from "../sections/IconItem";
import Typography from "@material-ui/core/Typography";
import MigrateStepList from "./MigrateStepList";
import IconLaunch from "../icons/IconLaunch";
import IconItemWithList from "../sections/IconItemWithList";
import ColorGraphic from "../sections/ColorGraphic";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => ({
    graphic: {
        position: 'absolute',
        bottom: '-20px',
        left: '-280px',
        [theme.breakpoints.up('md')]: {
            top: '80px',
            left: '-420px',
        }
    }
}));
const HowToMigrate = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/icon-new-company.svg',
                iconAlt: '',
                title: t('cloud-migration:Lift and shift'),
                list: [
                    {
                        title: t('cloud-migration:Migrate for Compute Engine'),
                        desc: t('cloud-migration:Migrate the on-premise or VM in other cloud to Google Cloud Engine'),
                    },
                    {
                        title: t('cloud-migration:Google Cloud VMware Engine'),
                        desc: t('cloud-migration:Migrate your VM to Google Cloud Platform'),
                    }
                ]
            },
            {
                icon: '/images/icons/product/icon-smes.svg',
                iconAlt: '',
                title: t('cloud-migration:Improve and Move'),
                list: [
                    {
                        title: t('cloud-migration:Migrate for Anthos'),
                        desc: t('cloud-migration:Migrate your application to Anthos GKE or container in GKE'),
                    },
                ]
            },
            {
                icon: '/images/icons/product/icon-enterprises.svg',
                iconAlt: '',
                title: t('cloud-migration:Rip and replace'),
                list: [
                    {
                        title: t('cloud-migration:Transfer Appliance'),
                        desc: t('cloud-migration:Transfer data from TBs up to 1 PB to Google Cloud Storage'),
                    },
                    {
                        title: t('cloud-migration:Transfer Service'),
                        desc: t('cloud-migration:Transfer your online and on-premise data to Google Cloud Storage'),
                    },
                    {
                        title: t('cloud-migration:BigQuery Data Transfer'),
                        desc: t('cloud-migration:Transfer from SaaS data sources to BigQuery'),
                    }
                ]
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2} direction={mdUp ? "row-reverse" : "row"} alignItems={"center"}>
                    <Grid item xs={12} md={6} />
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'} />
                                <SectionTitle>
                                    {t('cloud-migration:How to migrate?')}
                                </SectionTitle>
                                <Hidden smDown>
                                    <ColorGraphic type={"dot"}
                                        size={640}
                                        color={"secondary"}
                                        customClass={classes.graphic} />
                                </Hidden>
                            </Container>
                        </Box>
                        <SectionLabel>Cloud Migration</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={smUp ? 4 : 2}>
                            <Hidden smDown>
                                <Grid item xs={12} md={6} />
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Container paddingX={false} centerX={false}
                                    maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                                    <ShiftContainer shiftX={{ md: -160 }} growX={{ md: true }}>
                                        <SectionDescWrapper>
                                            <Typography variant={"body1"} dangerouslySetInnerHTML={
                                                { __html: t('cloud-migration:There are three ways to migrate to cloud__') }
                                            } />
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Container>
                            </Grid>
                            <Hidden smDown>
                                <Grid item xs={12} md={6} />
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Container paddingX={false} centerX={false}
                                    maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                                    <ShiftContainer shiftX={{ md: -320 }} growX={{ md: true }}>
                                        <SectionDescWrapper>
                                            <Grid container spacing={4}>
                                                {
                                                    (list && list.length) ?
                                                        list.map((item: any, index: number) => {

                                                            return (
                                                                <Grid item xs={12} md={4} key={index}>
                                                                    <IconItemWithList
                                                                        icon={item.icon}
                                                                        iconAlt={item.iconAlt}
                                                                        title={item.title}
                                                                        list={item.list}
                                                                        color={"primary"}
                                                                    />
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

export default HowToMigrate;
