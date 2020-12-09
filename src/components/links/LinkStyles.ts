import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";


interface LinkProps {
    underline: boolean;
    fullWidth: boolean;
    fullHeight: boolean;
    textWrap: boolean;
    color?: string;
}

export const useLinkStyles = makeStyles((theme: Theme) => ({
    link: {
        width: ({fullWidth}: LinkProps) => (fullWidth) ? '100%' : 'auto',
        height: ({fullHeight}: LinkProps) => (fullHeight) ? '100%' : 'auto',
        fontSize: '16px',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.common.black,
        whiteSpace: ({textWrap}: LinkProps) => (textWrap) ? 'normal' : 'nowrap',
        '&:hover,&.active': {
            textDecoration: ({underline}: LinkProps) => (underline) ? 'underline' : 'none',
        }
    },
    statusLabel: {
        position: 'absolute',
        fontSize: '12px',
        top: '10px',
        marginLeft: '5px',
        color: theme.palette.secondary.main,
        [theme.breakpoints.up('md')]: {
            top: 0,
        }
    },
    textLink: {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        zIndex: 1,
        whiteSpace: ({textWrap}: LinkProps) => (textWrap) ? 'normal' : 'nowrap',
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard
        }),
        '&:hover,&.active': {
            color: theme.palette.secondary.main
        }
    },
    styleLink: {
        position: 'relative',
        display: 'block',
        width: 'auto',
        zIndex: 1,
        whiteSpace: ({textWrap}: LinkProps) => (textWrap) ? 'normal' : 'nowrap',
        '&:hover,&.active': {
            '& $styleEffect': {
                '&::after': {
                    width: '100%'
                }
            }
        }
    },
    styleEffect: {
        display: 'inline-block',
        position: 'relative',
        width: 'auto',
        '&::after': {
            position: 'absolute',
            display: 'block',
            content: '""',
            width: 0,
            height: '3px',
            bottom: '1px',
            backgroundColor: theme.palette.secondary.main,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.standard
            })
        }
    },
    iconLink: {
        overflow: 'hidden',
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard
        }),
        '&:hover': {
            color: theme.palette.secondary.main,
            '& svg': {
                animation: `$ArrowForwardEffect 0.7s ${theme.transitions.easing.easeOut}`
            }
        },
        '& svg': {
            position: 'relative',
            zIndex: 1,
        }
    },
    iconMask: {
        display: 'inline-block',
        overflow: 'hidden',
        '&.active': {
            '& svg':{
                animation: `$ArrowForwardEffect 0.7s ${theme.transitions.easing.easeOut}`,
                animationIterationCount:'infinite'
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
