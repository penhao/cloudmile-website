import React from 'react';
import useThemeColor from "../useThemeColor";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

interface Props {
    isForward?: boolean;
    color: string;
}
const useStyles = makeStyles(() => ({
    forward: {
        transform: 'rotate(180deg)'
    }
}));
const IconArrow = ({isForward = false, color}: Props) => {
    const classes = useStyles();
    const themeColor = useThemeColor({color});
    return (
        <svg width="38px" height="20px" viewBox="0 0 38 20" className={clsx((isForward) ? classes.forward : null)}>
            <g id="icon/previous/static" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
               strokeLinecap="round">
                <polyline id="Path-2" stroke={themeColor} strokeWidth="2"
                          transform="translate(6.500000, 10.000000) rotate(-180.000000) translate(-6.500000, -10.000000) "
                          points="1 1 12 9.95351968 1 19"/>
                <line x1="36" y1="10" x2="1.5" y2="10" id="Path" stroke={themeColor} strokeWidth="2"/>
            </g>
        </svg>
    );
};

export default IconArrow;
