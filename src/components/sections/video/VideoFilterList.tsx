import React, {Fragment, useEffect, useRef, useState} from 'react';
import Container from "../../containers/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Swiper from 'react-id-swiper';
import {SwiperOptions} from "swiper";
import Button from "@material-ui/core/Button";
import IconArrow from "../../icons/IconArrow";
import clsx from "clsx";
import {removeParam} from "../../../utils/Utils";
import NavLink from "../../links/NavLink";


interface Props {
    parentPage?: string;
    activeId: number;
    categoryData: any[];
    clickHandler?: (id: number) => void
}

const useStyles = makeStyles((theme: Theme) => ({
    category: {
        marginTop: '60px'
    },
    categoryList: {
        position: 'relative',
        width: '100%'
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
        top: '-38px'
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

const VideoFilterList = ({parentPage, categoryData = [], activeId, clickHandler}: Props) => {
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
        <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}} className={classes.category}>
            {
                (categoryData && categoryData.length)
                    ?
                    <div className={classes.categoryList}>
                        <Swiper {...params} ref={swiperRef}>
                            {
                                categoryData.map((item: any, index: number) => {
                                    return (
                                        <div className={classes.sliderItem} key={index}>
                                            {
                                                (parentPage === 'video')
                                                    ?
                                                    <Button variant={"contained"} color={"primary"}
                                                            onClick={() => clickHandler(Number(item.id))}
                                                            className={clsx(
                                                                classes.button,
                                                                (Number(item.id) === activeId) ? 'active' : null
                                                            )}>
                                                        {`${item.title}`}
                                                    </Button>
                                                    :
                                                    <NavLink hrefPath={`/resources/video${urlParams}`} textWrap={false}>
                                                        <Button variant={"contained"} color={"primary"}
                                                                className={classes.button}>
                                                            {item.title}
                                                        </Button>
                                                    </NavLink>
                                            }
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
        </Container>
    );
};
export default VideoFilterList;
