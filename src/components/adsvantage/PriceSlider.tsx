import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Slider from "react-slick";

interface Props {
    children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    slider: {
        position: 'relative',
        width: '100%'
    }
}));
const PriceSlider = ({children}: Props) => {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: false,
        variableWidth: true,
        outerEdgeLimit: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} className={classes.slider}>
            {children}
        </Slider>
    );
};
export default PriceSlider;
