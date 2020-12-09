import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";

export const useFormStyles = makeStyles((theme: Theme) => ({
    formInner: {
        paddingLeft: '8px',
        paddingRight: '20px'
    },
    icon: {
        fontSize: '20px',
        width: '20px',
        marginRight: '16px',
        marginTop: '21px'
    },
    fixArea: {
        display: 'block',
        width: '36px',
        height: '2px'
    },
    input: {
        width: '100%'
    },
    privacy: {
        padding: '10px 20px 8px 44px',
        color: theme.palette.grey["800"],
        '& a': {
            color: theme.palette.secondary.main,
            textDecoration: 'underline'
        }
    },
    privacyLink:{
        display:'inline !important'
    },
    submit: {
        borderRadius: '99em',
        fontSize: '20px',
        fontWeight: 600,
        letterSpacing: 'normal',
        lineHeight: 'normal',
        paddingTop: '7px',
        paddingBottom: '9px',
        '& .MuiButton-endIcon': {
            marginLeft: '20px'
        }
    },
    recaptcha: {
        padding: '20px 0 20px 44px'
    }
}));