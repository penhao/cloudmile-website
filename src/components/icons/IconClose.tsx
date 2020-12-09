import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    icon: {
        transform: 'rotate(45deg)',
        transformOrigin: 'center center'
    }
}));

const IconClose = () => {
    const classes = useStyles();
    return (
        <svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" className={classes.icon}>
            <g id="icon/plus" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                <line x1="10" y1="2" x2="10" y2="18" id="Line" stroke="#F2800B" strokeWidth="4"/>
                <line x1="2" y1="10" x2="18" y2="10" id="Line" stroke="#F2800B" strokeWidth="4"/>
            </g>
        </svg>
    );
};

export default IconClose;
