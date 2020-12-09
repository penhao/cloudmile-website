import React, {useRef, useState} from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IdleTimer from "react-idle-timer";
import Grid from "@material-ui/core/Grid";
import NewsLetterForm from "../forms/NewsLetterForm";
import SectionTitle from "../sections/SectionTitle";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import IconClose from "../icons/IconClose";
import Button from "@material-ui/core/Button";
import {SalesforceDataType} from "../forms/FormTypes";
import {useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";

interface Props {
    title: string;
    caption: string;
    salesforceData?: SalesforceDataType | null;
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
const IdleNewsletterModal = ({title, caption, salesforceData}: Props) => {

    const classes = useStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
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
            <IdleTimer ref={idleTimerRef} timeout={2 * 60 * 1000} onIdle={onIdle}/>
            <Modal open={modalIsOpen}
                   onClose={handleModalClose}
                   closeAfterTransition
                   BackdropComponent={Backdrop}
                   BackdropProps={{timeout: 500}}
                   className={classes.modal}
            >
                <Fade in={modalIsOpen}>
                    <div className={classes.content}>
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
                                <NewsLetterForm salesforceData={salesforceData}/>
                            </Grid>
                        </Grid>
                        <Button onClick={handleModalClose} className={classes.close}>
                            <IconClose/>
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
export default IdleNewsletterModal;
