import React, { useEffect, useRef } from 'react';
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import SectionDesc from "../sections/SectionDesc";
import SectionContainer from "../containers/SectionContainer";
import { Theme, useMediaQuery } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import GridItem480 from "../sections/items/GridItem480";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { SwiperOptions } from "swiper";
import RatioContainer from "../containers/RatioContainer";
import Swiper from "react-id-swiper";
import BackgroundImage from "../Images/BackgroundImage";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    product: {
        position: 'relative',
        width: '122%',
        left: '50%',
        transform: 'translate(-50%,0)',
        [theme.breakpoints.up('md')]: {
            width: '760px',
            left: 0,
            transform: 'translate(0)',
            marginLeft: '-70px'
        }
    },
    productContainer: {
        [theme.breakpoints.up('md')]: {}
    },
    infoContainer: {
        [theme.breakpoints.up('md')]: {}
    },
    sliderContainer: {
        position: 'absolute',
        width: '75%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-52%)',
        backgroundColor: theme.palette.common.white
    },
    sliderInfo: {
        position: 'relative',
        '& .swiper-container': {
            paddingTop: '40px',
        },
        '& .swiper-pagination': {
            position: 'absolute',
            width: 'calc(100% - 160px)',
            left: 0,
            top: 0,
            '& .swiper-pagination-bullet': {
                display: 'inline-block',
                width: '20px',
                height: '20px',
                borderRadius: '99em',
                backgroundColor: '#d3d3d3',
                marginRight: '20px',
                '&:last-child': {
                    marginRight: 0
                }
            },
            '& .swiper-pagination-bullet-active': {
                backgroundColor: theme.palette.secondary.main
            }
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '40px'
        }
    },
    infoTitle: {
        marginBottom: '20px',
        [theme.breakpoints.up('md')]: {
            marginBottom: '20px'
        }
    },
    fake: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(100,0,0,0.3)'
    }
}));
const DailyTasks = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const gallerySwiperRef = useRef(null);
    const thumbnailSwiperRef = useRef(null);
    const coverParams: SwiperOptions = {
        slidesPerView: 1,
        loop: false
    };
    const descParams: SwiperOptions = {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    };
    useEffect(() => {
        const gallerySwiper = gallerySwiperRef.current.swiper;
        const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
        if (gallerySwiper.controller && thumbnailSwiper.controller) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, []);
    return (
        <SectionContainer>
            <Container maxWidth={{ md: 1280 }}>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'} />
                            <SectionTitle>
                                {t('cloud-management-platform:Handle Your Daily Tasks Effectively')}
                            </SectionTitle>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={smUp ? 4 : 2} alignItems={"center"}>
                            <Grid item xs={12} md={6}>
                                <div className={classes.product}>
                                    <img src="/images/md/milelync/laptop.png" alt="" />
                                    <div className={classes.sliderContainer}>
                                        <RatioContainer ratio={{ xs: 360 / 570, sm: 360 / 570, md: 360 / 570 }}>
                                            <Swiper {...coverParams} ref={gallerySwiperRef}>
                                                <div>
                                                    <RatioContainer
                                                        ratio={{ xs: 360 / 570, sm: 360 / 570, md: 360 / 570 }}>
                                                        <BackgroundImage imgUrl={'/milelync/gcp-Dashboard-en.jpg'}
                                                            detectRetina={true}
                                                            backgroundSize={"contain"}
                                                            backgroundPosition={'top left'} />
                                                    </RatioContainer>
                                                </div>
                                                <div>
                                                    <RatioContainer
                                                        ratio={{ xs: 360 / 574, sm: 360 / 574, md: 360 / 574 }}>
                                                        <BackgroundImage imgUrl={'/milelync/support-center-en.jpg'}
                                                            detectRetina={true}
                                                            backgroundSize={"contain"}
                                                            backgroundPosition={'top left'} />
                                                    </RatioContainer>
                                                </div>
                                                <div>
                                                    <RatioContainer
                                                        ratio={{ xs: 360 / 574, sm: 360 / 574, md: 360 / 574 }}>
                                                        <BackgroundImage imgUrl={'/milelync/manage-groups-en.jpg'}
                                                            detectRetina={true}
                                                            backgroundSize={"contain"}
                                                            backgroundPosition={'top left'} />
                                                    </RatioContainer>
                                                </div>
                                            </Swiper>
                                        </RatioContainer>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className={classes.sliderInfo}>
                                    <Swiper {...descParams} ref={thumbnailSwiperRef}>
                                        <div>
                                            <Typography variant={"h5"} color={"primary"} className={classes.infoTitle}>
                                                {t('cloud-management-platform:Better Visibility Into Cloud Spending')}
                                            </Typography>
                                            <Typography variant={"body1"}>
                                                {t('cloud-management-platform:MileLync tidies your billing history in a consolidated__')}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant={"h5"} color={"primary"} className={classes.infoTitle}>
                                                {t('cloud-management-platform:Instant Self-Service Support Center')}
                                            </Typography>
                                            <Typography variant={"body1"}>
                                                {t('cloud-management-platform:MileLync provides a direct communication channel__')}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant={"h5"} color={"primary"} className={classes.infoTitle}>
                                                {t('cloud-management-platform:Flexible Account Management')}
                                            </Typography>
                                            <Typography variant={"body1"}>
                                                {t('cloud-management-platform:The account management capability of MileLync__')}
                                            </Typography>
                                        </div>
                                    </Swiper>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default DailyTasks;
