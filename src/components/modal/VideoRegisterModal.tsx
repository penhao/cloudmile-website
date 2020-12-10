import React, {useCallback, useEffect, useRef, useState} from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from "@material-ui/core/Grid";
import SectionTitle from "../sections/SectionTitle";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import IconClose from "../icons/IconClose";
import Button from "@material-ui/core/Button";
import {SalesforcePostParams} from "../useUrlParams";
import RegisterForm from "../forms/RegisterForm";
import {useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import {usePageStyles} from "../PageStyles";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import useWindowResize from "../useWindowResize";

interface Props {
    title: string;
    caption: string;
    openModel: boolean;
    salesforceData: SalesforcePostParams | null;
    closeHandler: React.ReactEventHandler<{}>;
}

const useStyles = makeStyles((theme: Theme) => ({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    contentMask: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        padding: '40px 0',
        overflow: 'hidden',
        overflowY: 'auto',
        pointerEvents: 'none'
    },
    content: {
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(2, 2),
        pointerEvents: 'all',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4, 4),
        }
    },
    contentCenter: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    close: {
        position: 'absolute',
        width: '60px',
        height: '60px',
        minWidth: 'auto',
        top: 0,
        right: 0,
        padding: 0
    }
}));
const VideoRegisterModal = ({title, caption, salesforceData = null, openModel = false, closeHandler}: Props) => {

    const {lang} = useTranslation();
    const classes = useStyles();
    const pageClasses = usePageStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));

    const windowSize = useWindowResize();
    const [height, setHeight] = useState(0);
    const contentRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return (
        <div>
            <Modal open={openModel}
                   onClose={closeHandler}
                   closeAfterTransition
                   BackdropComponent={Backdrop}
                   BackdropProps={{timeout: 500}}
                   className={clsx(
                       classes.modal,
                       lang === 'zh' ? pageClasses.fontNotoSans : pageClasses.fontOpenSans
                   )}>
                <Fade in={openModel}>
                    <div className={classes.contentMask}>
                        <div ref={contentRef} className={clsx(
                            classes.content, (height < windowSize.height) ? classes.contentCenter : null
                        )}>
                            <Grid container spacing={smUp ? 4 : 2}>
                                <Grid item xs={12}>
                                    <SectionTitleLabel color={"warning"}>
                                        {caption}
                                    </SectionTitleLabel>
                                    <SectionTitle>
                                        {title}
                                    </SectionTitle>
                                </Grid>
                                <Grid item xs={12}>
                                    <RegisterForm salesforceData={salesforceData}/>
                                </Grid>
                            </Grid>
                            <Button onClick={closeHandler} className={classes.close}>
                                <IconClose/>
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
export default VideoRegisterModal;
