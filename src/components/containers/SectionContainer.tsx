import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

interface Props {
    backgroundColor?: string
    margin?: boolean
    className?: string | null
    children?: React.ReactNode
}

interface StyleProps {
    backgroundColor: string;
    margin: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        position: 'relative',
        width: '100%',
        marginBottom: ({margin}: StyleProps) => (margin) ? '100px' : 0,
        backgroundColor: ({backgroundColor}: StyleProps) => backgroundColor,
        [theme.breakpoints.up('sm')]: {
            marginBottom: ({margin}: StyleProps) => (margin) ? '120px' : 0
        }
    }
}));
const SectionContainer = ({margin = true, backgroundColor = "transparent", className = null, children}: Props) => {
    const classes = useStyles({backgroundColor, margin});
    return (
        <section className={clsx(classes.section, className)}>
            {children}
        </section>
    );
};

export default SectionContainer;
