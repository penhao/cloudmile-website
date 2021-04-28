import React, {useEffect, useState} from 'react';
import RatioContainer from "../../containers/RatioContainer";
import {makeStyles, Theme} from "@material-ui/core/styles";
import BackgroundImage from "../../Images/BackgroundImage";
import TrackVisibility from "react-on-screen";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: 'relative',
        width: '100%',
        paddingRight: '2.631578947368421%',
        [theme.breakpoints.up('md')]: {
            maxWidth: '760px',

        }
    },
    uiBg: {
        position: 'absolute',
        width: `${576 / 741 * 100}%`,
        height: 'auto',
        right: '-12%',
        top: '50%',
        transform: 'translateY(-51%)'
    },
    animation: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1
    },
    handwriteRemind: {
        position: 'absolute',
        width: `${151 / 741 * 100}%`,
        height: 'auto',
        left: '50%',
        top: '16%',
        transform: 'translateX(-34%)',
        opacity: 0,
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.short,
        }),
        '&.active': {
            opacity: 1
        }
    },
    arrowLeft: {
        position: 'absolute',
        width: `${102 / 741 * 100}%`,
        height: 'auto',
        left: '50%',
        top: '14%',
        zIndex: 1,
        transform: 'scale(0) translateX(-156%)',
        transformOrigin: 'right center',
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }),
        '&.active': {
            transform: 'scale(1) translateX(-156%)',
        }
    },
    arrowRight: {
        position: 'absolute',
        width: `${58 / 741 * 100}%`,
        height: 'auto',
        left: '50%',
        top: '20%',
        zIndex: 1,
        transform: 'scale(0) translateX(190%)',
        transformOrigin: 'left center',
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }),
        '&.active': {
            transform: 'scale(1) translateX(190%)',
        }
    },
    popCategory: {
        position: 'absolute',
        width: `${277 / 741 * 100}%`,
        left: '2%',
        top: '4%',
        transform: 'scale(0)',
        transformOrigin: 'center center',
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }),
        '&.active': {
            transform: 'scale(1)',
        }
    },
    popProgress: {
        position: 'absolute',
        width: `${265 / 741 * 100}%`,
        right: '-7%',
        top: '10%',
        transform: 'scale(0)',
        transformOrigin: 'center center',
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }),
        '&.active': {
            transform: 'scale(1)',
        }
    },
}));

interface IProps {
    isVisible?: boolean
    children?: React.ReactNode
}

const TrackingChild = ({isVisible}: IProps) => {
    const classes = useStyles();
    const [transId, setTransId] = useState(0);
    const [transitions, setTransitions] = useState([false, false]);
    useEffect(() => {
        if(!isVisible){
            setTransId(0);
            setTransitions([false, false]);
            return;
        }
        if (isVisible && transId > transitions.length - 1) return;
        const timer = setTimeout(() => {
            setTransitions(prev => {
                return prev.map((trans: boolean, index: number) => {
                    return index === transId ? true : trans;
                })
            });
            setTransId(prevState => prevState + 1);
            clearTimeout(timer);
        }, 300);
        return () => clearTimeout(timer);
    }, [isVisible, transId]);
    return (
        <>
            <RatioContainer ratio={{xs: 427 / 277, sm: 427 / 277, md: 427 / 277}} customClass={clsx(
                classes.popCategory,
                transitions[1] ? 'active' : null
            )}>
                <BackgroundImage imgUrl={'/adsvantage/alert/pop-category.png'} backgroundSize={"contain"}/>
            </RatioContainer>
            <RatioContainer ratio={{xs: 208 / 265, sm: 208 / 265, md: 208 / 265}} customClass={clsx(
                classes.popProgress,
                transitions[1] ? 'active' : null
            )}>
                <BackgroundImage imgUrl={'/adsvantage/alert/pop-progress.png'} backgroundSize={"contain"}/>
            </RatioContainer>
            <img src="/images/md/adsvantage/alert/handwrite-remind.svg" alt="" className={clsx(
                classes.handwriteRemind,
                transitions[0] ? 'active' : null
            )}/>
            <img src="/images/md/adsvantage/alert/arrow1.svg" alt="" className={clsx(
                classes.arrowLeft,
                transitions[0] ? 'active' : null
            )}/>
            <img src="/images/md/adsvantage/alert/arrow2.svg" alt="" className={clsx(
                classes.arrowRight,
                transitions[0] ? 'active' : null
            )}/>
        </>
    );
};
const Product = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <img src="/images/md/adsvantage/alert/alert-ui-bg.svg" alt="" className={classes.uiBg}/>
                <RatioContainer ratio={{xs: 362 / 741, sm: 362 / 741, md: 362 / 741}}>
                    <BackgroundImage imgUrl={'/adsvantage/alert/alert-ui.png'} backgroundSize={"contain"}/>
                </RatioContainer>
                <TrackVisibility once={false} className={classes.animation}>
                    <TrackingChild/>
                </TrackVisibility>
            </div>
        </div>
    );
};
export default Product;
