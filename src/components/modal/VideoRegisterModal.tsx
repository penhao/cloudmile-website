import React from 'react';
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
}));
const VideoRegisterModal = ({title, caption, salesforceData = null, openModel = false, closeHandler}: Props) => {

    const classes = useStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));

    return (
        <div>
            <Modal open={openModel}
                   onClose={closeHandler}
                   closeAfterTransition
                   BackdropComponent={Backdrop}
                   BackdropProps={{timeout: 500}}
                   className={classes.modal}
            >
                <Fade in={openModel}>
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
                                <RegisterForm salesforceData={salesforceData}/>
                            </Grid>
                        </Grid>
                        <Button onClick={closeHandler} className={classes.close}>
                            <IconClose/>
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
export default VideoRegisterModal;
