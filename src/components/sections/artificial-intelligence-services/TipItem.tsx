import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

export interface ITipItem {
    tip: string
    positionX?: 'left' | 'right' | 'center'
    positionY?: 'top' | 'bottom',
    customClass?: string | null
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '25px',
        position: 'relative'
    },
    tip: {
        position: 'absolute',
        fontSize: theme.typography.pxToRem(20),
        padding: '7px 20px',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.main,
        left: ({positionX}: ITipItem) => {
            return (positionX === 'center')
                ? '50%'
                : (positionX === 'left')
                    ? '0'
                    : 'auto'
        },
        transform: ({positionX}: ITipItem) => {
            return (positionX === 'center')
                ? 'translateX(-50%)'
                : 'translateX(0)'
        },
        bottom: ({positionY}: ITipItem) => {
            return (positionY === 'bottom') ? '-60px' : 'auto';
        },
        top: ({positionY}: ITipItem) => {
            return (positionY === 'top') ? '-60px' : 'auto';
        },
        opacity: 0,
        transition: theme.transitions.create(['opacity'], {
            easing: theme.transitions.easing.easeOut,
            duration: '0.5s'
        })
    },
    ripple: {
        cursor: 'pointer',
        display: 'block',
        width: '25px',
        height: '25px',
        borderRadius: '99em',
        [theme.breakpoints.up('md')]:{
            animation: '$RippleEffect 0.7s linear infinite',
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
                animation: 'none',
                '& ~ $tip': {
                    opacity: 1
                }
            }
        }
    },
    "@keyframes RippleEffect": {
        '0%': {
            boxShadow: '0 0 0 0 rgba(242,168,65,0.3), 0 0 0 0.5em rgba(242,168,65,0.3), 0 0 0 1.5em rgba(242,168,65,0.3), 0 0 0 2.5em rgba(242,168,65,0.3)'
        },
        '100%': {
            boxShadow: '0 0 0 0.5em rgba(242,168,65,0.3), 0 0 0 1.5em rgba(242,168,65,0.3), 0 0 0 2.5em rgba(242,168,65,0.3), 0 0 0 4em rgba(100,0,0, 0)'
        }
    }
}));
const TipItem = ({tip, positionX = 'center', positionY = 'bottom', customClass = null}: ITipItem) => {
    const classes = useStyles({tip, positionX, positionY});
    return (
        <div className={clsx(classes.root, customClass)}>
            <span className={classes.ripple}/>
            <Typography variant={"body1"}
                        noWrap
                        className={classes.tip}>
                {tip}
            </Typography>
        </div>
    );
};
export default TipItem;
