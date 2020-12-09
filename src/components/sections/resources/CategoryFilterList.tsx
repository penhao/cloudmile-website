import React, {Fragment, useRef, useState} from 'react';
import Container from "../../containers/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import NavLink from "../../links/NavLink";
import Typography from "@material-ui/core/Typography";
import Swiper from 'react-id-swiper';
import {SwiperOptions} from "swiper";
import Button from "@material-ui/core/Button";
import IconArrow from "../../icons/IconArrow";
import {useLinkStyles} from "../../links/LinkStyles";
import clsx from "clsx";
import {isValueEmpty} from "../../../utils/Utils";

interface Props {
    title: string
    parentPage: string
    categoryData: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
    category: {
        marginBottom: '40px'
    },
    categoryList: {
        position: 'relative',
        width: '100%'
    },
    link: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 700,
        color: theme.palette.primary.main
    },
    title: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 700,
        marginBottom: '10px'
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
    }
}));

const CategoryFilterList = ({title, parentPage, categoryData = []}: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const swiperRef = useRef<any | null>(null);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
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
        <Container maxWidth={{md: 1280}} className={classes.category}>
            {
                (categoryData && categoryData.length)
                    ?
                    <Fragment>
                        <Typography variant={"body1"} color={"secondary"} className={classes.title}>
                            {title}
                        </Typography>
                        <div className={classes.categoryList}>
                            <Swiper {...params} ref={swiperRef}>
                                {
                                    categoryData.map((item: any, index: number) => {
                                        return (
                                            <div className={classes.sliderItem} key={index}>
                                                <NavLink hrefPath={`/resources/category/${parentPage}/[id]`}
                                                         asPath={`/resources/category/${parentPage}/${item.id}`}
                                                         fullWidth={true}
                                                         underline={false}
                                                         classNames={clsx(
                                                             classes.link, linkClasses.textLink
                                                         )}>
                                                    {`#${item.title}`}
                                                </NavLink>
                                            </div>
                                        )
                                    })
                                }
                            </Swiper>
                            <div className={classes.navigation}>
                                <Button disabled={isBeginning}
                                        onClick={handlePrev}
                                        className={classes.prevButton}>
                                    <IconArrow color={"black"} isForward={false}/>
                                </Button>
                                <Button disabled={isEnd}
                                        onClick={handleNext}
                                        className={classes.nextButton}>
                                    <IconArrow color={"black"} isForward={true}/>
                                </Button>
                            </div>
                        </div>
                    </Fragment>
                    :
                    null
            }
        </Container>
    );
};
export default CategoryFilterList;
