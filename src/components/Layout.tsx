import React, { Fragment } from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import PageHead, { IMetadataProps } from "./PageHead";
import CookieAlert from "./CookieAlert";
import ContactAlert from "./ContactAlert";
import { makeStyles, Theme } from '@material-ui/core';

interface IProps {
    bgColor?: string;
    metadata: IMetadataProps | any;
    children: React.ReactNode;
}
interface IStyleProps {
    bgColor?: string;
}
const useStyles = makeStyles((theme: Theme) => ({
    pageWrapper: {
        backgroundColor: ({ bgColor }: IStyleProps) => {
            return bgColor === 'light' ? theme.palette.common.white : theme.palette.grey["800"]
        }
    },
    page: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        zIndex: 1
    }
}));
const Layout = ({ metadata, bgColor = 'light', children }: IProps) => {
    const classes = useStyles({ bgColor });

    return (
        <Fragment>
            <PageHead metadata={metadata} />
            <div className={classes.pageWrapper}>
                <CookieAlert />
                <Header />
                <div role="main" className={classes.page}>
                    {children}
                </div>
                <Footer />
                <ContactAlert />
            </div>
        </Fragment>
    );
};
export default Layout;
