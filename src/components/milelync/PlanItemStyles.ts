import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";

const usePlanItemStyles = makeStyles((theme: Theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '550px',
        padding: '15px 20px',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.grey['300']}`,
        backgroundColor: '#e8e8e8',
        [theme.breakpoints.up('sm')]: {
            height: '620px'

        }
    },
    itemHead: {
        flex: '0 0 auto'
    },
    info: {
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        // padding: '10px 0',
        '& $desc': {
            height: '50%'
        },
        '& p': {
            lineHeight: 1.4
        }
    },
    itemBottom: {
        flex: '0 0 auto',
        marginTop: 'auto',
        '& $desc': {
            '&:last-child': {
                paddingBottom: 0
            }
        },
        '& p': {
            lineHeight: 1.4
        }
    },
    title: {
        marginBottom: '5px'
    },
    price: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: '15px'
    },
    originalPrice: {
        color: '#737373',
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'line-through',
        marginRight: '5px'
    },
    priceUnit: {
        marginLeft: '5px',
        fontWeight: 600
    },
    desc: {
        position: 'relative',
        padding: '10px 0',
        borderTop: '1px solid #979797',
        textAlign: 'center',
        '& p': {
            '& span': {
                color: theme.palette.common.black
            }
        }
    },
    descTitle: {
        fontWeight: 600,
        lineHeight: 1.4,
        marginBottom: '8px'
    },
    list: {
        position: 'relative',
        display: 'inline-block',
        '& li': {
            position: 'relative',
            paddingLeft: '24px',
            marginBottom: '5px',
            fontSize: '14px',
            '&:last-child': {
                marginBottom: 0
            },
            '&::before': {
                display: 'block',
                position: 'absolute',
                content: '""',
                width: '16px',
                height: '16px',
                backgroundImage: `url(/images/icons/icon-check.svg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                left: 0,
                top: '2px'
            }
        }
    },
    emptyList: {
        '&::before': {
            content: 'none !important'
        }
    },
    pullBottom: {
        marginTop: 'auto'
    }
}));
export default usePlanItemStyles;