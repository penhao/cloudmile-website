import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface IProps {
    icon: IconProp
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    info: {
        '& svg': {
            fontSize: '20px',
            color: theme.palette.secondary.main,
            marginRight: '10px',
            marginTop: '3px'
        }
    }
}));
const OfficeInfo = ({icon, children}: IProps) => {
    const classes = useStyles();
    return (
        <Box display={'flex'} className={classes.info}>
            <FontAwesomeIcon icon={icon}/>
            {children}
        </Box>
    );
};
export default OfficeInfo;
