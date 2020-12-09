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
    mask: {
        position: 'relative',
        width: '100%',
        clipPath: 'inset(0% 100% 0% 0%)',
        opacity: 1,
        transition: theme.transitions.create(['clip-path', 'opacity'], {
            easing: theme.transitions.easing.easeOut,
            duration: '1.5s'
        }),
        transitionDelay: '0.3s',
        zIndex: 3
    },
    active: {
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1
    }
}));
const TrackingChild = ({isVisible, children}: IProps) => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.mask, (isVisible) ? classes.active : null)}>
            {children}
        </div>
    )
};
const TextClipEffect = ({children}: IProps) => {
    return (
        <TrackVisibility once={true} offset={0} partialVisibility>
            <TrackingChild children={children}/>
        </TrackVisibility>
    );
};
export default TextClipEffect;
