import React, {useState} from 'react';
import YouTube from "react-youtube";
import makeStyles from "@material-ui/core/styles/makeStyles";
import RatioContainer from "../containers/RatioContainer";
import {isValueEmpty} from "../../utils/Utils";

interface Props {
    videoUrl: string;
    loop?: boolean;
    autoPlay?: boolean;
    mute?: boolean;
    playReadyHandler?: Function | null
}

const useStyles = makeStyles(() => ({
    player: {
        position: 'relative',
        width: '100%'
    },
    video: {
        width: '100%',
        height: '100%'
    },
    cover: {
        position: 'absolute',
        top: 0,
        left: 0
    }
}));

const YoutubePlayer = ({videoUrl, loop = false, autoPlay = true, mute = true, playReadyHandler = null}: Props) => {
    const classes = useStyles();
    const [videoReady, setVideoReady] = useState(false);
    const opts: any = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: (autoPlay) ? 1 : 0,
            loop: (loop) ? 1 : 0,
            mute: (mute) ? 1 : 0
        }
    };
    return (
        <RatioContainer ratio={{xs: 9 / 16, sm: 9 / 16, md: 9 / 16}} customClass={classes.player}>
            {
                (!isValueEmpty(videoUrl))
                    ?
                    <YouTube videoId={videoUrl}
                             opts={opts}
                             containerClassName={classes.video}
                             onReady={(event: any) => {
                                 setVideoReady(true);
                                 event.target.pauseVideo();
                                 if (playReadyHandler) {
                                     playReadyHandler(true);
                                 }
                             }}
                             onStateChange={(event: any) => {
                                 if (videoReady && event.data === -1) {
                                     if (autoPlay) {
                                         event.target.playVideo();
                                     }
                                 }
                                 if (event.data === 0 && loop) {
                                     event.target.seekTo(0);
                                     event.target.playVideo();
                                 }
                             }}/>
                    :
                    null
            }
        </RatioContainer>
    );
};
export default YoutubePlayer;
