import React, {Fragment} from "react";
import {AppProps} from 'next/app';
import Head from "next/head";
/* Material UI */
import GlobalTheme from "../mui/GlobalTheme";
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
/*Fontawesome*/
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
//
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/swiper.scss';
import "../styles/global.scss";

const CloudMileApp = ({Component, pageProps}: AppProps) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            // @ts-ignore
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <Fragment>
            <ThemeProvider theme={GlobalTheme}>
                <CssBaseline/>
                <Component {...pageProps}/>
            </ThemeProvider>
        </Fragment>
    )
};
export default CloudMileApp;