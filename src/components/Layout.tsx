import React, {Fragment} from 'react';
import {usePageStyles} from "./PageStyles";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import PageHead, {MetadataProps} from "./PageHead";
import CookieAlert from "./CookieAlert";
import ContactAlert from "./ContactAlert";

interface Props {
    bgColor?: string;
    metadata: MetadataProps | null;
    children: React.ReactNode;
}

const Layout = ({metadata = null, children, bgColor = 'light'}: Props) => {
    const classes = usePageStyles({bgColor});

    return (
        <Fragment>
            {
                metadata ? <PageHead metadata={metadata}/> : null
            }
            <div className={classes.layout}>
                <CookieAlert/>
                <Header/>
                <div role="main" className={classes.main}>
                    {children}
                </div>
                <Footer/>
                <ContactAlert/>
            </div>
        </Fragment>
    );
};
export default Layout;
