import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
export const FooterStyles = makeStyles((theme: Theme) => ({
    footer: {
        width: '100%',
        padding: '40px 0 25px 0',
        backgroundColor: theme.palette.grey["300"]
    },
    groupTitle: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 'normal',
        marginBottom: '10px'
    },
    navGroup: {
        flex: '0 1 auto'
    },
    contactGroup: {
        marginLeft: 'auto'
    },
    divider: {
        marginBottom: '20px',
        backgroundColor: theme.palette.common.black
    },
    subGroupTitle: {
        fontWeight: 400,
        color: theme.palette.grey["400"],
        marginBottom: '10px'
    },
    subNavGroup: {
        marginBottom: '20px',
        paddingRight: '40px',
        '&:last-child': {
            marginBottom: 0
        }
    },
    linkList: {
        '& li': {
            marginBottom: '10px',
            '&:last-child': {
                marginBottom: 0
            }
        }
    },
    address: {
        fontStyle: 'normal',
        marginBottom: '20px',
        '& ul': {
            '& li': {
                marginBottom: '4px'
            }
        }
    },
    legal: {
        marginTop: '50px'
    }
}));