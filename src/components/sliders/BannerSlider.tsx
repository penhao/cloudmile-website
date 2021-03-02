import React, {Fragment, useEffect, useRef} from 'react';
import Swiper, {ReactIdSwiperChildren} from 'react-id-swiper';
import {SwiperOptions} from "swiper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconArrow from "../icons/IconArrow";
import clsx from "clsx";
import {useButtonStyles} from "../buttons/ButtonStyles";
import useTranslation from "next-translate/useTranslation";

interface Props {
    sliderTotal: number;
    itemDistance?: number;
    paginationDistance?: boolean;
    children: ReactIdSwiperChildren;
}
interface StyleProps {
    sliderTotal: number;
    paginationDistance: boolean;
}
const useStyles = makeStyles((theme: Theme) => ({
    slider: {
        position: 'relative',
        '& .swiper-container': {
            paddingBottom: '60px',
            [theme.breakpoints.up('sm')]: {
                paddingBottom: '80px',
            }
        },
        '& .swiper-pagination': {
            opacity: ({sliderTotal}: StyleProps) => (sliderTotal > 1) ? 1 : 0,
            position: 'absolute',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            width: 'calc(100% - 120px)',
            height: '60px',
            left: 0,
            bottom: 0,
            padding: '0 15px',
            marginLeft: ({paginationDistance}: StyleProps) => (paginationDistance) ? 0 : '-20px',
            [theme.breakpoints.up('sm')]: {
                width: 'calc(100% - 160px)',
                height: '80px',
                padding: '0 10px'
            },
            '& .swiper-pagination-bullet': {
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '99em',
                backgroundColor: '#d3d3d3',
                margin: '5px',
                [theme.breakpoints.up('sm')]: {
                    width: '12px',
                    height: '12px',
                    margin: '10px'
                }
            },
            '& .swiper-pagination-bullet-active': {
                backgroundColor: theme.palette.secondary.main
            }
        }
    },
    prevButton: {
        position: 'absolute',
        right: '60px',
        bottom: 0,
        [theme.breakpoints.up('sm')]: {
            right: '80px',
        }
    },
    nextButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        [theme.breakpoints.up('sm')]: {}
    }
}));
const BannerSlider = ({sliderTotal = 0, itemDistance = 0, paginationDistance = false, children}: Props) => {
    const classes = useStyles({sliderTotal, paginationDistance});
    const {lang} = useTranslation();
    const buttonClasses = useButtonStyles();
    const swiperRef = useRef(null);
    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const params: SwiperOptions = {
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        spaceBetween: itemDistance
    };
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, [children, lang]);
    return (
        <div className={classes.slider}>
            <Swiper {...params} ref={swiperRef}>
                {children}
            </Swiper>
            {
                sliderTotal > 1
                    ?
                    <Fragment>
                        <Button onClick={handlePrev}
                                className={clsx(
                                    buttonClasses.sliderButton,
                                    buttonClasses.blackButton,
                                    classes.prevButton
                                )}>
                            <IconArrow color={"white"} isForward={false}/>
                        </Button>
                        <Button onClick={handleNext}
                                className={clsx(
                                    buttonClasses.sliderButton,
                                    buttonClasses.blackButton,
                                    classes.nextButton
                                )}>
                            <IconArrow color={"white"} isForward={true}/>
                        </Button>
                    </Fragment>
                    :
                    null
            }
        </div>
    );
};

export default BannerSlider;
