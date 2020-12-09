import React, {Fragment, useRef} from 'react';
import Swiper, {ReactIdSwiperChildren} from 'react-id-swiper';
import {SwiperOptions} from "swiper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconArrow from "../icons/IconArrow";
import clsx from "clsx";
import {useButtonStyles} from "../buttons/ButtonStyles";

interface Props {
    sliderTotal: number;
    itemDistance?: number;
    paginationDistance?: boolean;
    children: ReactIdSwiperChildren;
}

interface StyleProps {
    paginationDistance: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    slider: {
        position: 'relative',
        '& .swiper-container': {
            paddingTop: '60px',
        }
    },
    prevButton: {
        position: 'absolute',
        right: '60px',
        top: 0
    },
    nextButton: {
        position: 'absolute',
        right: 0,
        top: 0
    }
}));
const AutoWidthSlider = ({sliderTotal = 0, itemDistance = 0, paginationDistance = false, children}: Props) => {
    const classes = useStyles({paginationDistance});
    const buttonClasses = useButtonStyles();
    const swiperRef = useRef<any | null>(null);
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
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
        breakpoints: {
            640: {
                slidesPerView: 'auto',
                spaceBetween: 40
            }
        }
    };
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
                                    classes.prevButton
                                )}>
                            <IconArrow color={"black"} isForward={false}/>
                        </Button>
                        <Button onClick={handleNext}
                                className={clsx(
                                    buttonClasses.sliderButton,
                                    classes.nextButton
                                )}>
                            <IconArrow color={"black"} isForward={true}/>
                        </Button>
                    </Fragment>
                    :
                    null
            }
        </div>
    );
};

export default AutoWidthSlider;
