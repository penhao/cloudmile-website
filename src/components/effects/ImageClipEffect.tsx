import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";
import TrackVisibility from "react-on-screen";

interface IProps {
    isVisible?: boolean
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        width: '100%',
        '&::after': {
            display: 'block',
            content: '""',
            position: 'absolute',
            width: '120%',
            height: '120%',
            backgroundColor: theme.palette.common.white,
            top: '-10%',
            left: '-10%',
            zIndex: 1,
            transformOrigin: 'right top'
        }
    },
    inner: {
        position: 'relative',
        transformOrigin: 'center center',
        transform: 'scale(1.5)'
    },
    active: {
        '& $inner': {
            transform: 'scale(1)',
            transition: theme.transitions.create(['transform'], {
                easing: theme.transitions.easing.easeOut,
                duration: '1.2s'
            }),
            transitionDelay: '0.2s'
        },
        '&::after': {
            transform: 'scaleX(0)',
            transition: theme.transitions.create(['transform'], {
                easing: theme.transitions.easing.easeOut,
                duration: '1.5s'
            }),
            transitionDelay: '0.3s'
        }
    }
}));
const TrackingChild = ({isVisible, children}: IProps) => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.root, (isVisible) ? classes.active : null)}>
            <div className={classes.inner}>
                {children}
            </div>
        </div>
    )
};
const ImageClipEffect = ({children}: IProps) => {
    return (
        <TrackVisibility once={true} partialVisibility={true}>
            <TrackingChild children={children}/>
        </TrackVisibility>
    );
};
export default ImageClipEffect;