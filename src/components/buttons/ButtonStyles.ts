import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";


interface LinkProps {
    underline: boolean;
    color?: string;
}

export const useButtonStyles = makeStyles((theme: Theme) => ({
    sliderButton: {
        width: '60px',
        height: '60px',
        minWidth: 'auto',
        padding: 0,
        borderRadius: 0,
        zIndex: 1
    },
    blackButton: {
        width: '80px',
        height: '80px',
        minWidth: 'auto',
        padding: 0,
        borderRadius: 0,
        zIndex: 1,
        backgroundColor: theme.palette.common.black,
        '&:hover': {
            backgroundColor: theme.palette.common.black
        },
        '& .MuiTouchRipple-child': {
            backgroundColor: theme.palette.common.white
        }
    },
    roundedButton: {
        position: 'relative',
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 'normal',
        textAlign: 'center',
        color: theme.palette.common.white,
        padding: '7px 20px 6px 20px',
        borderRadius: '99em',
        boxShadow: 'none !important'
    }
}));
