import React, {useEffect, useState} from 'react';
import RatioContainer from "../../containers/RatioContainer";
import {makeStyles, Theme} from "@material-ui/core/styles";
import BackgroundImage from "../../Images/BackgroundImage";
import TrackVisibility from "react-on-screen";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: 'relative',
        width: '100%',
        padding: '0 5% 0 0',
        [theme.breakpoints.up('md')]: {
            maxWidth: '760px',
            padding: '0 5%',
        },
        '& > div': {
            position: 'relative',
        }
    },
    productBg: {
        position: 'absolute',
        width: '80.409356725146199%',
        height: 'auto',
        left: '-10%',
        top: '-13%',
    },
    animation: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1
    },
    handwriteInput: {
        position: 'absolute',
        width: '13.450292397660819%',
        height: 'auto',
        left: '17%',
        top: '27%',
        opacity: 0,
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.short,
        }),
        '&.active': {
            opacity: 1
        }
    },
    handwriteGenerate: {
        position: 'absolute',
        width: '21.637426900584795%',
        height: 'auto',
        right: '8%',
        top: '22%',
        opacity: 0,
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.short,
        }),
        '&.active': {
            opacity: 1
        }
    },
    handwriteIdea: {
        position: 'absolute',
        width: '10.380116959064327%',
        height: 'auto',
        right: '0',
        top: '10%',
        transform: 'scale(0)',
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }),
        '&.active': {
            transform: 'scale(1)',
        }
    },
    arrowLeft: {
        position: 'absolute',
        width: '18.274853801169591%',
        height: 'auto',
        left: '6%',
        top: '6%',
        transform: 'scale(0)',
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }),
        '&.active': {
            transform: 'scale(1)',
        }
    },
    arrowRight: {
        position: 'absolute',
        width: '15.935672514619883%',
        height: 'auto',
        left: '60%',
        top: '18%',
        zIndex: 1,
        transform: 'scale(0)',
        transformOrigin: 'left top',
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }),
        '&.active': {
            transform: 'scale(1)',
        }
    },
    popKeyword: {
        position: 'absolute',
        width: '38.304093567251462%',
        height: 'auto',
        left: '28%',
        top: '-10%',
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
    popResult: {
        position: 'absolute',
        width: '65.058479532163743%',
        height: 'auto',
        right: '-10%',
        top: '36%',
        transform: 'scale(0)',
        transformOrigin: 'center top',
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
    const [transitions, setTransitions] = useState([false, false, false, false]);
    useEffect(() => {
        if (!isVisible) {
            setTransId(0);
            setTransitions([false, false, false, false]);
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
            <img src="/images/md/adsvantage/aiwriter/handwrite-input.svg" alt="" className={clsx(
                classes.handwriteInput,
                transitions[0] ? 'active' : null
            )}/>
            <img src="/images/md/adsvantage/aiwriter/arrow1.svg" alt="" className={clsx(
                classes.arrowLeft,
                transitions[0] ? 'active' : null
            )}/>
            <RatioContainer ratio={{xs: 200 / 262, sm: 200 / 262, md: 200 / 262}} customClass={clsx(
                classes.popKeyword,
                transitions[1] ? 'active' : null
            )}>
                <BackgroundImage imgUrl={'/adsvantage/aiwriter/pop-keyword.png'} backgroundSize={"contain"}/>
            </RatioContainer>
            <img src="/images/md/adsvantage/aiwriter/arrow2.svg" alt="" className={clsx(
                classes.arrowRight,
                transitions[2] ? 'active' : null
            )}/>
            <img src="/images/md/adsvantage/aiwriter/handwrite-generate.svg" alt="" className={clsx(
                classes.handwriteGenerate,
                transitions[2] ? 'active' : null
            )}/>
            <img src="/images/md/adsvantage/aiwriter/handwrite-idea.svg" alt="" className={clsx(
                classes.handwriteIdea,
                transitions[2] ? 'active' : null
            )}/>
            <RatioContainer ratio={{xs: 240 / 445, sm: 240 / 445, md: 240 / 445}} customClass={clsx(
                classes.popResult,
                transitions[3] ? 'active' : null
            )}>
                <BackgroundImage imgUrl={'/adsvantage/aiwriter/pop-result.png'} backgroundSize={"contain"}/>
            </RatioContainer>
        </>
    );
};
const Product = () => {
    const classes = useStyles();
    const {lang} = useTranslation();
    const coverUrl = lang === 'zh' ? '/adsvantage/aiwriter/aiwriter-ui-zh.png' : '/adsvantage/aiwriter/aiwriter-ui.png';
    return (
        <div className={classes.container}>
            <div>
                <img src="/images/md/adsvantage/aiwriter/aiwriter-ui-bg.svg" alt="" className={classes.productBg}/>
                <RatioContainer ratio={{xs: 452 / 684, sm: 452 / 684, md: 452 / 684}}>
                    <BackgroundImage imgUrl={coverUrl} backgroundSize={"contain"}/>
                </RatioContainer>
                <TrackVisibility once={false} className={classes.animation}>
                    <TrackingChild/>
                </TrackVisibility>
            </div>
        </div>
    );
};
export default Product;
