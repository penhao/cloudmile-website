import React, { useCallback, useState } from "react";
import clsx from "clsx";
import { Modal, Backdrop, Fade, makeStyles, Theme, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import useWindowResize from "../../useWindowResize";
import RegisterItem from "../video/RegisterItem";
import IconClose from "../../icons/IconClose";
import { removeParam } from "../../../utils/Utils";

interface IProps {
    isOpen: boolean;
    postData: any;
}
const useStyles = makeStyles((theme: Theme) => ({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        overflow: 'hidden',
        overflowY: 'auto',
    },
    contentMask: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        padding: '40px 0',
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
        // top: '50%',
        // transform: 'translateY(-50%)'
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
const RegisterModal = ({ isOpen, postData = {} }: IProps) => {
    const classes = useStyles();
    const router = useRouter();
    const [height, setHeight] = useState(0);
    const windowSize = useWindowResize();
    const contentRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);
    const handleClose = () => {
        router.push(`/resources/video${removeParam('category', window.location.search)}`);
    };

    return (
        <Modal open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
            className={classes.modal}
        >
            <Fade in={isOpen}>
                <div className={classes.contentMask}>
                    <div ref={contentRef} className={clsx(
                        classes.content, (height < windowSize.height) ? classes.contentCenter : null
                    )}>
                        <RegisterItem postData={postData} />
                        <Button onClick={handleClose} className={classes.close}>
                            <IconClose />
                        </Button>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}

export default RegisterModal;