import React from 'react';
import CookieConsent from "react-cookie-consent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import NavLink from "./links/NavLink";
import { setCookie } from 'nookies';

const useStyles = makeStyles((theme: Theme) => ({
    alert: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '10px 0',
        backgroundColor: '#a9a9a9',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        '& > div': {
            padding: '10px 20px',
            '&:nth-child(2)': {
                textAlign: 'right'
            }
        },
        '& p': {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 'normal',
            lineHeight: 1.63,
            color: theme.palette.common.black,
            '& a': {
                color: theme.palette.common.black,
                textDecoration: 'underline',
                '&:hover': {
                    color: theme.palette.secondary.main
                }
            }
        }
    },
    link: {
        fontSize: theme.typography.pxToRem(14),
        fontWeight: 600,
        lineHeight: 1.43,
        textAlign: 'center',
        padding: '8px 20px',
        borderRadius: '99em',
        border: 'none',
        backgroundColor: '#d8d8d8',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
    }
}));
const CookieAlert = () => {
    const classes = useStyles();
    const handleAccept = () => {
    };
    return (
        <div>
            <CookieConsent
                cookieName="AllowCookie"
                location="top"
                overlay={false}
                expires={150}
                disableStyles={true}
                buttonText="ALLOW COOKIES"
                buttonClasses={classes.link}
                onAccept={handleAccept}
                containerClasses={classes.alert}
            >
                <p>
                    This website uses cookies to ensure you get the best experience on our website.
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <NavLink hrefPath={'/privacy'}>
                        Privacy Notice
                    </NavLink>
                </p>
            </CookieConsent>
        </div>
    );
};
export default CookieAlert;
