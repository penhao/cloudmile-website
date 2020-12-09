import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import RatioContainer from "../../containers/RatioContainer";
import BackgroundImage from "../../Images/BackgroundImage";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import YouTube from "react-youtube";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useTranslation from "next-translate/useTranslation";
import {isValueEmpty} from "../../../utils/Utils";

interface Props {
    imgUrl: string;
    videoUrl: string;
}
const useStyles = makeStyles((theme: Theme) => ({
    banner: {
        position: 'relative',
        marginBottom: '70px'
    },
    info: {
        position: 'absolute',
        width: '100%',
        top: '50%',
        transform: 'translate(0,-50%)',
        zIndex: 2
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1
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
    }
}));
const CaseStudyBanner = ({imgUrl, videoUrl}: Props) => {
    const {t} = useTranslation();
    const classes = useStyles({imgUrl});
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
            <YouTube videoId={videoUrl}
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
            <RatioContainer ratio={{xs: 300 / 320, sm: 400 / 1280, md: 400 / 1280}}
                            maxHeight={{xs: 300, sm: 400, md: 400}}>
                {
                    (!isValueEmpty(videoUrl) && mdUp)
                        ?
                        <RatioContainer ratio={{xs: 9 / 16, sm: 9 / 16, md: 9 / 16}}
                                        customClass={classes.videoContainer}>
                            {getVideo()}
                        </RatioContainer>
                        : null
                }
                {
                    (!mdUp || !isPlaying || isValueEmpty(videoUrl))
                        ?
                        <BackgroundImage imgUrl={imgUrl} detectRetina={false}/>
                        : null
                }
            </RatioContainer>
            <div className={classes.overlay}/>
            <div className={classes.info}>
                <Container maxWidth={{md: 1280}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Container maxWidth={{sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}>
                                    {t('case-study:Make Your Digital Transformation Possible')}
                                </SectionTitleLabel>
                                <SectionTitle color={'white'}>
                                    {t('case-study:No Matter What Your Business Is, We Know What You Need')}
                                </SectionTitle>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};
export default CaseStudyBanner;
