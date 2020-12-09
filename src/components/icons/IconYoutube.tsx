import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        display: 'block',
        width: '35px !important',
        fontSize: '35px',
        color: theme.palette.common.black,
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}));
const IconYoutube = () => {
    const classes = useStyles();
    return (
        <FontAwesomeIcon icon={faYoutube} className={classes.icon}/>
    );
};
export default IconYoutube;
