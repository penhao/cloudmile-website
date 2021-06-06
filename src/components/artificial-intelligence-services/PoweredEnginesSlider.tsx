import React, { useEffect, useRef, useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Slider from "react-slick";
import ResponseImage from "../Images/ResponseImage";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import Hidden from "@material-ui/core/Hidden";
import TipItem, { ITipItem } from "./TipItem";


interface IList {
    title: string
    imgUrl: string
    imgAlt: string
    tips: ITipItem[];
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative'
    },
    item: {
        position: 'relative',
    },
    cover: {
        position: 'relative',
        '& .tip_0_0': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(850%, -400%)'
        },
        '& .tip_0_1': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(1610%, 700%)'
        },
        '& .tip_1_0': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-110%, 400%)'
        },
        '& .tip_1_1': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(900%, 700%)'
        },
        '& .tip_2_0': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-310%, 100%)'
        },
        '& .tip_2_1': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(1350%,0)'
        },
        '& .tip_3_0': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-900%, 350%)'
        },
        '& .tip_3_1': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(250%, -50%)'
        },
        '& .tip_4_0': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(450%, 550%)'
        },
        '& .tip_4_1': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(1450%, -250%)'
        },
        '& .tip_5_0': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(1030%, -230%)'
        }
    },
    sliderWrapper: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            marginTop: '-62px'
        }
    },
    thumbnailWrapper: {
        padding: '0 20px',
        backgroundColor: 'rgba(10, 27, 46, 0.7)',
        [theme.breakpoints.up('md')]: {
            visibility: 'hidden'
        }
    },
    thumbnail: {
        padding: '18px 20px',
        fontWeight: 700,
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.common.white,
        cursor: 'pointer'
    },
    thumbnailActive: {
        color: theme.palette.secondary.main
    },
    navWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 'auto',
        height: 'calc(100% - 4px)',
        left: 0,
        top: 0,
        padding: '0 20px',
        backgroundColor: 'rgba(10, 27, 46, 0.7)',
        '& ul': {
            position: 'relative',
            '&::before': {
                position: "absolute",
                content: '""',
                width: '1px',
                height: '100%',
                left: 0,
                top: 0,
                backgroundColor: 'rgb(169, 169, 169)'
            },
            '& li': {
                position: 'relative'
            }
        }
    },
    nav: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: 700,
        lineHeight: 2.08,
        padding: '0 20px',
        color: theme.palette.common.white,
        cursor: 'pointer'
    },
    navActive: {
        color: theme.palette.secondary.main,
        '&::before': {
            display: 'block',
            position: 'absolute',
            content: '""',
            width: '3px',
            height: '100%',
            left: '-1px',
            top: 0,
            backgroundColor: theme.palette.secondary.main
        }
    },
    tipsXS: {
        position: 'relative',
        '& > p': {
            fontSize: theme.typography.pxToRem(16),
            padding: '10px 20px',
            color: theme.palette.common.white,
            backgroundColor: theme.palette.secondary.main,
            marginBottom: '3px',
            '&:last-child': {
                marginBottom: 0
            }
        }
    }
}));
const PoweredEnginesSlider = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const [id, setId] = useState(0);
    const [list, setList] = useState<IList[] | null>(null);
    const [slider, setSlider] = useState();
    const [thumbnail, setThumbnail] = useState();
    const sliderEl = useRef<any>(null);
    const thumbnailEl = useRef<any>(null);
    useEffect(() => {
        setSlider(sliderEl.current);
        setThumbnail(thumbnailEl.current);
        setList([
            {
                title: t('ai-services:Financial Industry'),
                imgUrl: '/ai-services/ai-powered-engines/financial-industry.jpg',
                imgAlt: t("ai-services:alt.A manager pointing at line graph"),
                tips: [
                    {
                        tip: t('ai-services:Insurance Risk Score Prediction'),
                        positionX: 'center',
                        positionY: 'bottom'
                    },
                    {
                        tip: t('ai-services:Anti-Money Laundering'),
                        positionX: 'center',
                        positionY: 'top'
                    }
                ]
            },
            {
                title: t('ai-services:Manufacturing'),
                imgUrl: '/ai-services/ai-powered-engines/manufacturing.jpg',
                imgAlt: '',
                tips: [
                    {
                        tip: t('ai-services:Textile Pattern Recommendation'),
                        positionX: 'center',
                        positionY: 'bottom'
                    },
                    {
                        tip: t('ai-services:Defect Analysis'),
                        positionX: 'center',
                        positionY: 'bottom'
                    }
                ]
            },
            {
                title: t('ai-services:Retail / E-commerce'),
                imgUrl: '/ai-services/ai-powered-engines/retail.jpg',
                imgAlt: '',
                tips: [
                    {
                        tip: t('ai-services:Product Recommendation'),
                        positionX: 'center',
                        positionY: 'bottom'
                    },
                    {
                        tip: t('ai-services:Visual Search'),
                        positionX: 'center',
                        positionY: 'top'
                    }
                ]
            },
            {
                title: t('ai-services:Media'),
                imgUrl: '/ai-services/ai-powered-engines/business-media.jpg',
                imgAlt: '',
                tips: [
                    {
                        tip: t('ai-services:Object Detection'),
                        positionX: 'left',
                        positionY: 'bottom'
                    },
                    {
                        tip: t('ai-services:News Article Recommendation'),
                        positionX: 'center',
                        positionY: 'bottom'
                    }
                ]
            },
            {
                title: t('ai-services:Medical'),
                imgUrl: '/ai-services/ai-powered-engines/medical.jpg',
                imgAlt: '',
                tips: [
                    {
                        tip: t('ai-services:Health Condition Analysis'),
                        positionX: 'center',
                        positionY: 'bottom'
                    },
                    {
                        tip: t('ai-services:Cancer Nodule Detection'),
                        positionX: 'center',
                        positionY: 'top'
                    }
                ]
            },
            {
                title: t('ai-services:Transportation'),
                imgUrl: '/ai-services/ai-powered-engines/transportation.jpg',
                imgAlt: '',
                tips: [
                    {
                        tip: t('ai-services:Demand Forecast'),
                        positionX: 'center',
                        positionY: 'bottom'
                    }
                ]
            }
        ]);
    }, [lang]);
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_current: number, next: number) => {
            setId(next);
        }
    };
    const thumbnailSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={classes.root}>
            <div className={classes.thumbnailWrapper}>
                <Slider {...thumbnailSettings} asNavFor={slider} ref={thumbnailEl}>
                    {
                        (list && list.length)
                            ?
                            list.map((item: any, index: number) => {
                                return (
                                    <div onClick={() => {
                                        if (slider === undefined) return;
                                        // @ts-ignore
                                        slider.slickGoTo(index);
                                    }}
                                        key={index}>
                                        <Typography variant={"body1"}
                                            component={'div'}
                                            className={clsx(
                                                classes.thumbnail,
                                                (index === id) ? classes.thumbnailActive : null
                                            )}>
                                            {item.title}
                                        </Typography>
                                    </div>
                                );
                            })
                            :
                            null
                    }
                </Slider>
            </div>
            <div className={classes.sliderWrapper}>
                <Slider {...sliderSettings} asNavFor={thumbnail} ref={sliderEl}>
                    {
                        (list && list.length)
                            ?
                            list.map((item: any, index: number) => {
                                return (
                                    <div key={index} className={classes.item}>
                                        <div className={classes.cover}>
                                            <ResponseImage imageUrl={item.imgUrl}
                                                alt={item.imgAlt} />
                                            <Hidden smDown>
                                                {
                                                    (item.tips.length)
                                                        ?
                                                        item.tips.map((item: ITipItem, tipIndex: number) => {
                                                            return (
                                                                <TipItem tip={item.tip}
                                                                    positionX={item.positionX}
                                                                    positionY={item.positionY}
                                                                    key={tipIndex}
                                                                    customClass={`tip_${index}_${tipIndex}`} />
                                                            )
                                                        })
                                                        :
                                                        null
                                                }
                                            </Hidden>
                                        </div>
                                        <Hidden mdUp>
                                            <div className={classes.tipsXS}>
                                                {
                                                    (item.tips.length)
                                                        ?
                                                        item.tips.map((item: ITipItem, index: number) => {
                                                            return (
                                                                <Typography variant={"body1"} align={"center"}
                                                                    key={index}>
                                                                    {item.tip}
                                                                </Typography>
                                                            )
                                                        })
                                                        :
                                                        null
                                                }
                                            </div>
                                        </Hidden>
                                    </div>
                                );
                            })
                            :
                            null
                    }
                </Slider>
                <Hidden smDown>
                    <div className={classes.navWrapper}>
                        <ul>
                            {
                                (list && list.length)
                                    ?
                                    list.map((item: any, index: number) => {
                                        return (
                                            <li key={index}>
                                                <div
                                                    onClick={() => {
                                                        if (slider === undefined) return;
                                                        // @ts-ignore
                                                        slider.slickGoTo(index);
                                                    }}
                                                    className={clsx(
                                                        classes.nav,
                                                        (index === id) ? classes.navActive : null
                                                    )}>
                                                    {item.title}
                                                </div>
                                            </li>
                                        );
                                    })
                                    :
                                    null
                            }
                        </ul>
                    </div>
                </Hidden>
            </div>
        </div>
    );
};
export default PoweredEnginesSlider;
