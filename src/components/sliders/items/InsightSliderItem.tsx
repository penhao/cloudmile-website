import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import RatioContainer from "../../containers/RatioContainer";
import NavLink from "../../links/NavLink";
import SliderImage from "./SliderImage";
import {useLinkStyles} from "../../links/LinkStyles";
import clsx from "clsx";

interface Props {
    imgUrl: { desktop: string, mobile: string }
    alt: string;
    desc: string;
    href: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        paddingRight: '20px',
        [theme.breakpoints.up('sm')]: {
            width: '500px',
            paddingRight: '10px',
        }
    },
    cover: {
        width: '100%',
        marginBottom: '10px',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '30px',
        }
    },
    linkWrapper: {
        [theme.breakpoints.up('sm')]: {
            paddingRight: '20px',
        }
    },
    link: {
        fontSize: theme.typography.pxToRem(18),
        lineHeight: 1.56
    }
}));
const InsightSliderItem = ({imgUrl, alt, desc, href}: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    return (
        <div className={classes.root}>
            <div className={classes.cover}>
                <NavLink hrefPath={href} fullWidth={true}>
                    <RatioContainer ratio={{xs: (200 / 320), sm: (286 / 450), md: (286 / 450)}}>
                        <SliderImage
                            imgUrl={{
                                desktop: imgUrl.desktop,
                                mobile: imgUrl.mobile
                            }}
                            alt={''}/>
                    </RatioContainer>
                </NavLink>
            </div>
            <div className={classes.linkWrapper}>
                <NavLink hrefPath={href} textWrap={true} classNames={clsx(classes.link, linkClasses.textLink)}>
                    {desc}
                </NavLink>
            </div>
        </div>
    );
};
export default InsightSliderItem;
