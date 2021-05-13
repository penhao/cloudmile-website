import React, { useState } from "react";
import Container from "../containers/Container";
import { Grid, Hidden, useMediaQuery, useTheme, Typography, Theme } from "@material-ui/core";
import { useTranslation } from "next-translate";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import ShiftContainer from "../containers/ShiftContainer";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SectionContainer from "../containers/SectionContainer";
import { v4 as uuidv4 } from "uuid";
import useRemoteList, { IListItem } from "./useRemoteList";
import ColorGraphic from "../sections/ColorGraphic";


const useStyles = makeStyles((theme: Theme) => ({
    itemList: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '-20px 0',
        [theme.breakpoints.up('sm')]: {
            margin: '-30px 0',
        },
        [theme.breakpoints.up('md')]: {
            margin: '-50px 0',
        }
    },
    itemListTitle: {
        height: 'auto',
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '40px',
        },
        [theme.breakpoints.up('md')]: {
            height: '140px',
            marginBottom: 0
        }
    },
    item: {
        textAlign: 'center',
        padding: '20px 0',
        [theme.breakpoints.up('sm')]: {
            padding: '30px 0',
        },
        [theme.breakpoints.up('md')]: {
            padding: '50px 0',
        }
    },
    itemIcon: {
        display: 'inline-block',
        width: 'auto',
        height: '60px',
        marginBottom: '10px'
    },
    itemDesc: {
        lineHeight: 1.25,
        letterSpacing: '0.6px',
        fontWeight: 'bold'
    },
    gridItem: {
        alignSelf: 'stretch',
        [theme.breakpoints.up('md')]: {
            flex: '0 0 29%'
        }
    },
    gridItemWide: {
        position: 'relative',
        alignSelf: 'stretch',
        [theme.breakpoints.up('md')]: {
            flex: '1 1 42%'
        },
        '&::before': {
            [theme.breakpoints.up('md')]: {
                display: 'block',
                content: '""',
                position: 'absolute',
                width: '1px',
                height: 'calc(100% - 40px)',
                left: 0,
                top: '20px',
                backgroundColor: theme.palette.secondary.main
            }
        },
        '&::after': {
            [theme.breakpoints.up('md')]: {
                display: 'block',
                content: '""',
                position: 'absolute',
                width: '1px',
                height: 'calc(100% - 40px)',
                right: 0,
                top: '20px',
                backgroundColor: theme.palette.secondary.main,
            }
        },
    },
    graphic: {
        position: 'absolute',
        top: '60px',
        left: '-540px'
    }
}));
const RemoteSection = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [communicateList, toolList, storeList] = useRemoteList();

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 6 : 2}>
                    <Grid item xs={12}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                                    <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false}
                                        centerX={false}>
                                        <SectionTitleLabel color={'warning'} />
                                        <SectionTitle>
                                            {t('google-workspace:Create a Remote Working Business with Comprehensive Collaboration')}
                                        </SectionTitle>
                                        <Hidden xsDown>
                                            <ColorGraphic type={"dot"}
                                                color={"secondary"}
                                                size={650}
                                                customClass={classes.graphic} />
                                        </Hidden>
                                    </Container>
                                </Box>
                                <SectionLabel>Google Workspace</SectionLabel>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Hidden only={'sm'}>
                        <Grid item xs={12} md={6} />
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Container paddingX={false} centerX={false} maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                            <ShiftContainer shiftX={{ md: -480 }} growX={{ md: true }}>
                                <SectionDescWrapper>
                                    <Grid container spacing={mdUp ? 4 : 6}>
                                        <Grid item xs={12} md className={classes.gridItem}>
                                            <Typography variant={"h5"} align={mdUp ? "center" : "left"}
                                                dangerouslySetInnerHTML={{
                                                    __html: t('google-workspace:Communicate with team in global')
                                                }} className={classes.itemListTitle} />
                                            <Grid container className={classes.itemList}>
                                                {
                                                    communicateList.map((item: IListItem) => {
                                                        return (
                                                            <Grid item xs={6} sm={4} md={6} key={uuidv4()}>
                                                                <div className={classes.item}>
                                                                    <img src={item.imgUrl} alt=""
                                                                        className={classes.itemIcon} />
                                                                    <Typography variant={"body1"} component={'div'}
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: item.desc
                                                                        }} className={classes.itemDesc} />
                                                                </div>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md className={classes.gridItemWide}>
                                            <Typography variant={"h5"} align={mdUp ? "center" : "left"}
                                                dangerouslySetInnerHTML={{
                                                    __html: t('google-workspace:All the tools you need in office')
                                                }} className={classes.itemListTitle} />
                                            <Grid container className={classes.itemList}>
                                                {
                                                    toolList.map((item: IListItem) => {
                                                        return (
                                                            <Grid item xs={6} sm={4} key={uuidv4()}>
                                                                <div className={classes.item}>
                                                                    <img src={item.imgUrl} alt=""
                                                                        className={classes.itemIcon} />
                                                                    <Typography variant={"body1"} component={'div'}
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: item.desc
                                                                        }} className={classes.itemDesc} />
                                                                </div>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md className={classes.gridItem}>
                                            <Typography variant={"h5"} align={mdUp ? "center" : "left"}
                                                dangerouslySetInnerHTML={{
                                                    __html: t('google-workspace:Store Data Safely and Efficiently')
                                                }} className={classes.itemListTitle} />
                                            <Grid container className={classes.itemList}>
                                                {
                                                    storeList.map((item: IListItem) => {
                                                        return (
                                                            <Grid item xs={6} sm={4} md={6} key={uuidv4()}>
                                                                <div className={classes.item}>
                                                                    <img src={item.imgUrl} alt=""
                                                                        className={classes.itemIcon} />
                                                                    <Typography variant={"body1"} component={'div'}
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: item.desc
                                                                        }} className={classes.itemDesc} />
                                                                </div>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </SectionDescWrapper>
                            </ShiftContainer>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    )
};
export default RemoteSection;