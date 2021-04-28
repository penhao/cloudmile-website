import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

export type ResultItemProps = {
    title: string;
    url: string;
    desc: string;
};

interface IProps {
    index: number;
    data: ResultItemProps;
    print: boolean
}

interface IStyleProps {
    delay: number
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        width:'100%',
        height:'100%',
        padding: '14px 16px 28px 16px',
        borderRadius: '15px',
        boxShadow: '0 2px 14px 0 rgba(137, 174, 255, 0.2)',
        backgroundColor: theme.palette.common.white,
        transition: ({delay}: IStyleProps) => {
            return theme.transitions.create('opacity', {
                duration: theme.transitions.duration.short,
                easing: theme.transitions.easing.easeOut,
                delay: `${delay}ms`
            })
        },
    },
    active: {
        opacity: 1
    },
    title: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 1.43,
        letterSpacing: 'normal',
        color: '#285a99'
    },
    url: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#06943e',
        marginBottom: '5px'
    },
    desc: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#909090'
    },
}));
const ResultItem = React.memo(({data, index, print}: IProps) => {
    const [active, setActive] = useState(false);
    const [delay, setDelay] = useState(0);
    const classes = useStyles({delay});
    useEffect(() => {
        setActive(print);
        setDelay(index * 300);
    }, [print]);
    return (
        <div className={clsx(classes.item, active ? classes.active : "")}>
            <h6 className={classes.title}>{data.title}</h6>
            <div className={classes.url}>{data.url}</div>
            <p className={classes.desc}>{data.desc}</p>
        </div>
    );
});
export default ResultItem;
