import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import RatioContainer from "../containers/RatioContainer";
import YouTube from "react-youtube";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import { isValueEmpty } from "../../utils/Utils";
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
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [videoReady, setVideoReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className={classes.headBanner}>
            <RatioContainer ratio={{ xs: 9 / 16, sm: 9 / 16, md: 9 / 16 }} customClass={classes.videoOuter}>
                <YouTube videoId={"pkdgNzcKMp8"}
                    opts={{
                        width: '100%',
                        height: '100%',
                        playerVars: {
                            autoplay: 1,
                            loop: 1,
                            mute: 1
                        }
                    }}
                    containerClassName={classes.video}
                    onReady={(event: any) => {
                        setVideoReady(true);
                        event.target.pauseVideo();
                    }}
                    onStateChange={(event: any) => {
                        if (videoReady && event.data === -1) {
                            event.target.playVideo();
                        }
                        if (event.data === 1) {
                            setIsPlaying(true);
                        }
                        if (event.data === 0) {
                            event.target.seekTo(0);
                            event.target.playVideo();
                        }
                    }} />
            </RatioContainer>
            {
                (!mdUp || !isPlaying)
                    ?
                    <BackgroundImage imgUrl={'/google-workspace/banner.jpg'}
                        detectRetina={true}
                        customClass={classes.videoCover} />
                    :
                    null
            }
        </div>
    )
});
export default Banner;