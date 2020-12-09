import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";

interface IProps {
    children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        position: 'relative',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '25%'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0
        }
    }
}));
const SectionDescWrapper = ({children}: IProps) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
};
export default SectionDescWrapper;

