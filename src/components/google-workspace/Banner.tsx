import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import BackgroundImage from "../Images/BackgroundImage";

const useStyles = makeStyles((theme: Theme) => ({
    headBanner: {
        position: "relative",
        width: "100%",
        height: "230px",
        overflow: 'hidden',
        marginBottom: "40px",
        [theme.breakpoints.up("sm")]: {
            height: "460px",
        },
        [theme.breakpoints.up("md")]: {
            height: "460px"
        },
    },
    videoOuter: {
        position: "relative",
        width: "640px",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        pointerEvents: 'none',
        [theme.breakpoints.up("sm")]: {
            width: "1200px",
        },
        [theme.breakpoints.up("md")]: {
            width: "1920px",
        },
        [theme.breakpoints.up("lg")]: {
            width: "100%",
            left: 0,
            transform: "translate(0,-50%)",
        },
    },
    video: {
        width: '100%',
        height: '100%'
    },
    videoCover: {
        position: "absolute",
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    }
}));
const Banner = React.memo(() => {
    const classes = useStyles();
    return (
        <div className={classes.headBanner}>
            <BackgroundImage imgUrl={'/google-workspace/banner.jpg'}
                detectRetina={true}
                customClass={classes.videoCover} />
        </div>
    )
});
export default Banner;