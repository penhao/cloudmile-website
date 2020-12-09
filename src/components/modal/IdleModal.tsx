import React, {useRef, useState} from 'react';
import {makeStyles, Theme} from "@material-ui/core/styles";
import IdleTimer from "react-idle-timer";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade/Fade";
import Button from "@material-ui/core/Button";
import IconClose from "../icons/IconClose";


interface Props {
    delay?: number;
    children: React.ReactNode;
}
const useStyles = makeStyles((theme: Theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        content: {
            position: 'relative',
            width: '100%',
            maxWidth: '680px',
            backgroundColor: theme.palette.common.white,
            padding: theme.spacing(2, 2),
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(4, 4),
            }
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
    }),
);
const IdleModal = ({delay = 2, children}: Props) => {
    const classes = useStyles();
    const idleTime = delay * 60 * 1000;
    const idleTimerRef = useRef(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onIdle = () => {
        handleModalOpen();
    };
    const handleModalOpen = () => {
        setModalIsOpen(true);
    };
    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <IdleTimer ref={idleTimerRef} timeout={idleTime} onIdle={onIdle}/>
            <Modal open={modalIsOpen}
                   onClose={handleModalClose}
                   closeAfterTransition
                   BackdropComponent={Backdrop}
                   BackdropProps={{timeout: 500}}
                   className={classes.modal}>
                <Fade in={modalIsOpen}>
                    <div className={classes.content}>
                        {children}
                        <Button onClick={handleModalClose} className={classes.close}>
                            <IconClose/>
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
export default IdleModal;
