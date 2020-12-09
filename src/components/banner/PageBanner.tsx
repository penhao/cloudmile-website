import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import BackgroundImage from "../Images/BackgroundImage";
interface Props {
    imgUrl: string
    alt: string
    children: React.ReactNode
}

interface StyleProps {
    imgUrl: string
    isRetina: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        width: '640px',
        height: '230px',
        left: '50%',
        marginLeft: '-320px',
        [theme.breakpoints.up('sm')]: {
            width: '1200px',
            height: '350px',
            marginLeft: '-600px',
        },
        [theme.breakpoints.up('md')]: {
            width: '1920px',
            height: '460px',
            left: '50%',
            marginLeft: '-960px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            left: 0,
            marginLeft: 0
        }
    },
    cover: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: ({imgUrl, isRetina}: StyleProps) => {
            return `url(${fixImageUrl(imgUrl, 'xs', isRetina)})`;
        },
        [theme.breakpoints.up('sm')]: {
            backgroundImage: ({imgUrl, isRetina}: StyleProps) => {
                return `url(${fixImageUrl(imgUrl, 'sm', isRetina)})`;
            },
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: ({imgUrl, isRetina}: StyleProps) => {
                return `url(${fixImageUrl(imgUrl, 'md', isRetina)})`
            }
        }
    },
    info: {
        position: 'absolute',
        width: '100vw',
        padding: '0 20px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    }
}));
const fixImageUrl = (url: string, query: string, isRetina: boolean = false) => {
    const split = url.split('.');
    return `/images/${query}${split[0]}${isRetina ? '@2x' : ''}.${split[1]}`;
};
const PageBanner = ({imgUrl, alt = '', children}: Props) => {
    const [isRetina, setRetina] = useState(false);
    const classes = useStyles({imgUrl, isRetina});

    useEffect(() => {
        const mediaQuery =
            "(-webkit-min-device-pixel-ratio: 1.5)," +
            "(min--moz-device-pixel-ratio: 1.5)," +
            "(-o-min-device-pixel-ratio: 3/2)," +
            "(min-device-pixel-ratio: 1.5)" +
            "(min-resolution: 144dpi)" +
            "(min-resolution: 1.5dppx)";
        setRetina((window.matchMedia && window.matchMedia(mediaQuery).matches));
    }, []);
    return (
        <div className={classes.root}>
            <BackgroundImage imgUrl={imgUrl} alt={alt} detectRetina={true}/>
            <div className={classes.info}>
                {children}
            </div>
        </div>
    );
};
export default PageBanner;
