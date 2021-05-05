import React, {useEffect, useState} from 'react';
import RatioContainer from "../../containers/RatioContainer";
import {makeStyles, Theme} from "@material-ui/core/styles";
import BackgroundImage from "../../Images/BackgroundImage";
import TrackVisibility from "react-on-screen";
import clsx from "clsx";
import Container from "../../containers/Container";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: 'relative',
        width: '100%',
    },
    product: {
        position: 'relative',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    productContent: {
        position: 'absolute',
        left: 0,
        top: 0,
        transition: theme.transitions.create(['top'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeOut
        }),
        '&.active': {
            top: '-86%'
        }
    },
    productInner: {
        position: 'absolute',
        width: '96.2%',
        height: '100%',
        top: 0,
        right: 0
    },
    uiBg: {
        position: 'absolute',
        width: `${600 / 760 * 100}%`,
        height: 'auto',
        left: '-12%',
        top: '-13%'
    }
}));

interface IProps {
    isVisible?: boolean
    children?: React.ReactNode
}

const TrackingChild = ({isVisible}: IProps) => {
    const classes = useStyles();
    const {lang} = useTranslation();
    const [active, setActive] = useState(false);
    const coverUrl = lang === 'zh' ? '/images/md/adsvantage/dashboard/dashboard-content-zh@2x.jpg' : '/images/md/adsvantage/dashboard/dashboard-content@2x.jpg';
    useEffect(() => {
        if (!isVisible) {
            setActive(false);
            return;
        }
        const timer = setTimeout(() => {
            setActive(prevState => !prevState);
            clearTimeout(timer);
        }, 2000);
        return () => clearTimeout(timer);
    }, [isVisible, active]);
    return (
        <div className={classes.product}>
            <img src="/images/md/adsvantage/dashboard/dashboard-ui@2x.jpg" alt=""/>
            <div className={classes.productInner}>
                <img src={coverUrl} alt="" className={clsx(
                    classes.productContent,
                    active ? 'active' : null
                )}/>
            </div>
        </div>
    )
};
const Product = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src="/images/md/adsvantage/dashboard/dashboard-ui-bg.svg" alt="" className={classes.uiBg}/>
            <TrackVisibility>
                <TrackingChild/>
            </TrackVisibility>
        </div>
    );
};
export default Product;
