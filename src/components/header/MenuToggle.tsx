import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";


interface Props {
    isOpen: boolean
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const useStyles = makeStyles((theme: Theme) => ({
    button: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        padding: 0,
        top: 0,
        right: 0,
        border: 'none',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: theme.palette.common.black,
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.common.black
        },
        '& .MuiTouchRipple-child': {
            backgroundColor: theme.palette.common.white
        },
        [theme.breakpoints.up('sm')]: {
            width: '60px',
            height: '60px'
        }
    },
    icon: {
        display: 'block',
        position: 'relative',
        width: '30px',
        height: '20px',
        '& > span': {
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '4px',
            borderRadius: 99,
            backgroundColor: theme.palette.common.white,
            transition: theme.transitions.create(['all'], {
                easing: theme.transitions.easing.easeOut,
                duration: '0.3s'
            }),
            '&:nth-child(1)': {
                top: 0
            },
            '&:nth-child(2)': {
                top: '50%',
                marginTop: '-2px'
            },
            '&:nth-child(3)': {
                bottom: 0
            }
        }
    },
    active: {
        '& $icon': {
            '& > span': {
                '&:nth-child(1)': {
                    top: '50%',
                    transform: 'translate(0, -50%) rotate(45deg)',
                    transformOrigin: 'center center'
                },
                '&:nth-child(2)': {
                    opacity: 0
                },
                '&:nth-child(3)': {
                    bottom: 'auto',
                    top: '50%',
                    transform: 'translate(0, -50%) rotate(-45deg)',
                    transformOrigin: 'center center'
                }
            }
        }
    }
}));
const MenuToggle = ({isOpen, clickHandler}: Props) => {
    const classes = useStyles();
    return (
        <Button onClick={clickHandler}
                className={clsx(classes.button, (isOpen) ? classes.active : null)}>
            <span className={classes.icon}>
                <span/>
                <span/>
                <span/>
            </span>
        </Button>
    );
};
export default MenuToggle;
