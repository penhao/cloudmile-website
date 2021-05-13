import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import IconArrow from "../icons/IconArrow";
import useTheme from "@material-ui/core/styles/useTheme";
import EventListItem from "../sections/event/EventListItem";
import { useTranslation } from "next-translate";

interface IProps {
    data: any[]
}
const useStyles = makeStyles((theme: Theme) => ({
    sliderOuter: {
        width: '100%',
        marginTop: '-20px',
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {
            marginTop: '-40px',
        },
        '& .slick-slider': {
            lineHeight: 0,
        },
        '& .slick-track': {
            display: "flex !important"
        },
        '& .slick-slide': {
            height: 'inherit !important',
            '& > div': {
                height: '100%'
            }
        },
        '& > div': {
            display: 'block',
            width: 'calc(100% + 40px)',
            marginLeft: '-20px'
        }
    },
    prev: {
        right: '80px'
    },
    next: {
        right: '20px'
    },
    control: {
        position: 'absolute',
        width: '60px',
        minWidth: 'auto',
        height: '60px',
        top: '-60px',
        padding: 0,
        borderRadius: 0
    },
    sliderItem: {
        height: '100%',
        padding: '0 20px'
    }
}));

const SeminarSlider = ({ data }: IProps) => {
    const classes = useStyles();
    const { lang } = useTranslation();
    const theme = useTheme();
    const PrevArrow = (props: any) => {
        const { onClick } = props;
        const classes = useStyles();
        return (
            <Button onClick={onClick} className={clsx(classes.control, classes.prev)}>
                <IconArrow color={"black"} isForward={false} />
            </Button>
        );
    };
    const NextArrow = (props: any) => {
        const { onClick } = props;
        const classes = useStyles();
        return (
            <Button onClick={onClick} className={clsx(classes.control, classes.next)}>
                <IconArrow color={"black"} isForward={true} />
            </Button>
        );
    };
    const settings = {
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: theme.breakpoints.values.sm - 1,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: theme.breakpoints.values.md - 1,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };
    return (
        <div className={classes.sliderOuter}>
            <Slider {...settings}>
                {
                    data.map((item: any) => {
                        return (
                            <div key={uuidv4()} className={classes.sliderItem}>
                                <EventListItem itemData={item} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
};
export default SeminarSlider;