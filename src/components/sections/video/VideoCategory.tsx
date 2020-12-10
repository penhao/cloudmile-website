import React, {useEffect, useRef, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Swiper from 'react-id-swiper';
import {SwiperOptions} from "swiper";
import Button from "@material-ui/core/Button";
import IconArrow from "../../icons/IconArrow";
import {isValueEmpty, removeParam} from "../../../utils/Utils";
import NavLink from "../../links/NavLink";
import Link from "next/link";

interface Props {
    parentPage?: string;
    categoryData: any[];
    clickHandler?: (id: number) => void
}

const useStyles = makeStyles((theme: Theme) => ({
    category: {
        paddingTop: '10px'
    },
    categoryList: {
        position: 'relative',
        width: 'calc(100% + 20px)'
    },
    button: {
        padding: '4px 15px',
        fontSize: theme.typography.pxToRem(12),
        fontWeight: 700,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        borderRadius: '99em',
        boxShadow: 'none !important',
        '&.active': {
            backgroundColor: theme.palette.secondary.main
        }
    },
    navigation: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '-10px',
        top: '-38px',
        paddingRight: '20px'
    },
    prevButton: {
        width: '50px',
        minWidth: 'auto',
        padding: '5px 10px',
        borderRadius: 0,
        '& .MuiButton-label': {
            width: '30px'
        },
        '&.Mui-disabled': {
            display: 'none'
        }
    },
    nextButton: {
        width: '50px',
        minWidth: 'auto',
        padding: '5px 10px',
        borderRadius: 0,
        '& .MuiButton-label': {
            width: '30px'
        },
        '&.Mui-disabled': {
            display: 'none'
        }
    },
    sliderItem: {
        width: 'auto',
        // paddingRight: '20px'
    },
}));

const VideoCategory = ({parentPage, categoryData = [], clickHandler}: Props) => {
    const classes = useStyles();
    const swiperRef = useRef<any | null>(null);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [urlParams, setUrlParams] = useState('');
    useEffect(() => {
        setUrlParams(removeParam('category', window.location.search));
    }, []);
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
    const handleProgress = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            setIsBeginning(swiperRef.current.swiper.isBeginning);
            setIsEnd(swiperRef.current.swiper.isEnd);
        }
    };
    const params: SwiperOptions = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        allowTouchMove: false,
        spaceBetween: 20,
        on: {
            init: handleProgress,
            progress: handleProgress
        }
    };
    return (
        <div className={classes.category}>
            {
                (categoryData && categoryData.length)
                    ?
                    <div className={classes.categoryList}>
                        <Swiper {...params} ref={swiperRef}>
                            {
                                categoryData.map((item: any, index: number) => {
                                    const params = (!isValueEmpty(urlParams))
                                        ? `${urlParams}&category=${item.id}`
                                        : `?category=${item.id}`;
                                    return (
                                        <div className={classes.sliderItem} key={index}>
                                            <Link href={`/resources/video${params}`} passHref>
                                                <a>
                                                    <Button variant={"contained"} color={"primary"}
                                                            className={classes.button}>
                                                        {item.title}
                                                    </Button>
                                                </a>
                                            </Link>
                                        </div>
                                    );
                                })
                            }
                        </Swiper>
                        <div className={classes.navigation}>
                            <Button disabled={isBeginning}
                                    onClick={handlePrev}
                                    className={classes.prevButton}>
                                <IconArrow color={"white"} isForward={false}/>
                            </Button>
                            <Button disabled={isEnd}
                                    onClick={handleNext}
                                    className={classes.nextButton}>
                                <IconArrow color={"white"} isForward={true}/>
                            </Button>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    );
};
export default VideoCategory;
