import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import {Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconArrow from "../icons/IconArrow";
import Slider from "react-slick";

interface IProps {
    changePoint: number;
    children?: React.ReactNode;
    changeHandler?: Function | null;
}
const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        width: 'calc(100% + 20px)',
        '& .slick-slider': {
            paddingTop: '40px',
            lineHeight: 0
        },
        [theme.breakpoints.up('md')]: {}
    },
    prev: {
        top: '-20px',
        right: '71px'
    },
    next: {
        top: '-20px',
        right: '11px'
    },
    control: {
        position: 'absolute',
        width: '60px',
        minWidth: 'auto',
        height: '60px',
        padding: 0,
        borderRadius: 0
    }
}));
const VariableWidthSlider = ({changePoint, children, changeHandler = null}: IProps) => {
    const classes = useStyles();
    const PrevArrow = (props: any) => {
        const {onClick} = props;
        return (
            <Button onClick={onClick} className={clsx(classes.control, classes.prev)}>
                <IconArrow color={"black"} isForward={false}/>
            </Button>
        );
    };
    const NextArrow = (props: any) => {
        const {onClick} = props;
        return (
            <Button onClick={onClick} className={clsx(classes.control, classes.next)}>
                <IconArrow color={"black"} isForward={true}/>
            </Button>
        );
    };
    const settings = {
        dots: false,
        infinite: true,
        variableWidth: true,
        outerEdgeLimit: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
                breakpoint: changePoint,
                settings: {
                    variableWidth: false
                }
            }
        ],
        beforeChange: (_oldIndex: number, newIndex: number) => {
            if(changeHandler) changeHandler(newIndex);
        }
    };
    return (
        <div className={classes.wrapper}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};
export default VariableWidthSlider;
