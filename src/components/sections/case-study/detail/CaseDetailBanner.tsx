import React, {Fragment, useState} from 'react';
import Container from "../../../containers/Container";
import RatioContainer from "../../../containers/RatioContainer";
import BackgroundImage from "../../../Images/BackgroundImage";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import YouTube from 'react-youtube';
import {isValueEmpty} from "../../../../utils/Utils";
import useTranslation from "next-translate/useTranslation";
import {useButtonStyles} from "../../../buttons/ButtonStyles";
import clsx from "clsx";

interface Props {
    imgUrl: string;
    videoUrl: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    banner: {
        position: 'relative',
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '80px'
        }
    },
    button: {
        position: 'relative',
        width: 'calc(100% - 40px)',
        maxWidth: '440px',
        marginTop: '-22px',
        zIndex: 1,
        left: '50%',
        transform: 'translate(-50%,0)'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '100%',
        maxWidth: '1440px',
        padding: '40px 20px'
    },
    video: {
        width: '100%',
        height: '100%'
    }
}));
const CaseDetailBanner = ({imgUrl = '', videoUrl = ''}: Props) => {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const {t} = useTranslation();
    const [playVideo, setPlayVideo] = useState(false);

    const handleOpen = () => setPlayVideo(true);
    const handleClose = () => setPlayVideo(false);
    const getVideo = () => {
        const opts: any = {
            width: '100%',
            height: '100%',
            playerVars: {
                autoplay: 1, loop: 0
            }
        };
        return (
            <YouTube videoId={videoUrl}
                     opts={opts}
                     containerClassName={classes.video}/>
        );
    };
    const getVideoModal = () => {
        return (
            <Modal open={playVideo}
                   onClose={handleClose}
                   closeAfterTransition
                   BackdropComponent={Backdrop}
                   BackdropProps={{timeout: 500}}
                   className={classes.modal}>
                <Fade in={playVideo} addEndListener={null}>
                    <div className={classes.paper}>
                        <RatioContainer ratio={{xs: 9 / 16, sm: 9 / 16, md: 9 / 16}}>
                            {getVideo()}
                        </RatioContainer>
                    </div>
                </Fade>
            </Modal>
        )
    };
    return (
        <Fragment>
            <Container maxWidth={{md: 1920}} paddingX={false} className={classes.banner}>
                <Container maxWidth={{md: `${1100 / 1280 * 100}%`}} paddingX={false} centerX={false}>
                    <RatioContainer ratio={{xs: 300 / 320, sm: 400 / 1100, md: 400 / 1100}} maxHeight={{md: 400}}>
                        <BackgroundImage imgUrl={imgUrl} detectRetina={false}/>
                    </RatioContainer>
                    {
                        (!isValueEmpty(videoUrl))
                            ?
                            <Button variant={"contained"}
                                    color={"primary"}
                                    onClick={handleOpen}
                                    className={clsx(
                                        classes.button,
                                        buttonClasses.roundedButton
                                    )}>
                                {t('case-study:Play Video')}
                            </Button>
                            :
                            null
                    }
                </Container>
            </Container>
            {
                (!isValueEmpty(videoUrl)) ? getVideoModal() : null
            }
        </Fragment>
    );
};

export default CaseDetailBanner;
