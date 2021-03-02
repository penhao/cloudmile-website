import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import {isValueEmpty} from "../../../utils/Utils";
import BackgroundImage from "../../Images/BackgroundImage";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import RatioContainer from "../../containers/RatioContainer";
import YouTube from "react-youtube";

interface Props {
    imgUrl: string;
    videoId: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    banner: {
        position: 'relative',
        width: '640px',
        height: '300px',
        left: '50%',
        transform: 'translate(-50%,0)',
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
            width: '1200px',
            height: '313px',
        },
        [theme.breakpoints.up('md')]: {
            width: '1920px',
            height: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%'
        }
    },
    videoContainer: {
        position: 'absolute',
        width: theme.breakpoints.values.sm,
        // height: '100%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        [theme.breakpoints.up('sm')]: {
            width: theme.breakpoints.values.md,
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            left: 0,
            top: '50%',
            transform: 'translate(0,-50%)'
        }
    },
    video: {
        width: '100%',
        height: '100%'
    },
    coverContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    }
}));
const VideoListBanner = ({imgUrl, videoId}: Props) => {
    const classes = useStyles();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    const [videoReady, setVideoReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const getVideo = () => {
        const opts: any = {
            width: '100%',
            height: '100%',
            playerVars: {
                autoplay: 1,
                loop: 1,
                mute: 1
            }
        };
        return (
            <YouTube videoId={videoId}
                     opts={opts}
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
                     }}/>
        );
    };
    return (
        <div className={classes.banner}>
            {
                (!isValueEmpty(videoId) && mdUp)
                    ?
                    <RatioContainer ratio={{xs: 9 / 16, sm: 9 / 16, md: 9 / 16}}
                                    customClass={classes.videoContainer}>
                        {getVideo()}
                    </RatioContainer>
                    : null
            }
            {
                (!mdUp || !isPlaying || isValueEmpty(videoId))
                    ?
                    <BackgroundImage imgUrl={imgUrl} detectRetina={false}/>
                    : null
            }
        </div>
    );
};
export default VideoListBanner;
