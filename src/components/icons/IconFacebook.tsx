import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        display: 'block',
        width: '35px',
        fontSize: '35px',
        color: theme.palette.common.black,
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}));
const IconFacebook = () => {
    const classes = useStyles();
    return (
        <FontAwesomeIcon icon={faFacebookSquare} className={classes.icon}/>
    );
};
export default IconFacebook;
