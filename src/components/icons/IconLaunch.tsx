import React from 'react';
import useThemeColor, {ColorProps} from "../useThemeColor";
import {useLinkStyles} from "../links/LinkStyles";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";

interface Props {
    color?: string;
    className?: string;
    active?: boolean;
}
const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        display: 'inline-block',
        overflow: 'hidden',
        '&.active': {
            '& svg': {
                animation: `$ArrowForwardEffect 0.7s ${theme.transitions.easing.easeOut}`,
                animationIterationCount: 'infinite'
            }
        }
    },
    "@keyframes ArrowForwardEffect": {
        '0%': {
            transform: 'translate(0, 0)'
        },
        '30%': {
            transform: 'translate(100%, 0)'
        },
        '51%': {
            transform: 'translate(100%, 0)'
        },
        '52%': {
            transform: 'translate(-100%, 0)'
        },
        '100%': {
            transform: 'translate(0, 0)'
        }
    }
}));
const IconLaunch = ({color = 'error', active = false, className}: Props) => {
    const classes = useStyles();
    const iconColor = useThemeColor({color});
    return (
        <span className={clsx(
            classes.icon,
            active ? 'active' : null
        )}>
            <svg width="117px" height="18px" viewBox="0 0 117 18" version="1.1" className={className}>
                <g id="icon/go/static" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                   strokeLinecap="round">
                    <polyline id="Path-2" stroke={iconColor} strokeWidth="2"
                              points="105.5 0 116.582283 8.95351968 105.5 18"/>
                    <line x1="0.5" y1="9" x2="116.5" y2="9" id="Path" stroke={iconColor} strokeWidth="2"/>
                </g>
            </svg>
        </span>
    );
};

export default IconLaunch;
