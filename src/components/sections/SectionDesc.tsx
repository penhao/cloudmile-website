import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

interface IProps {
    customClass?: string | null;
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    desc: {
        fontWeight: 400,
        letterSpacing: 'normal',
        lineHeight: 1.63,
        paddingTop: 0,
        [theme.breakpoints.up('md')]: {
            lineHeight: 1.63,
            paddingTop: '24px'
        },
        '& a': {
            color: theme.palette.secondary.main,
            textDecoration: 'underline'
        }
    }
}));
const SectionDesc = ({customClass = null, children}: IProps) => {
    const classes = useStyles();
    return (
        <Typography variant={"body1"} className={clsx(classes.desc, customClass)}>
            {children}
        </Typography>
    );
};
export default SectionDesc;
