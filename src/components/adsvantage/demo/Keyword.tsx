import React, {useEffect, useState} from 'react';
import {makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";

interface IProps {
    index: number
    keyword: string
    print: boolean
}

interface IStyleProps {
    delay: number
}

const useStyles = makeStyles((theme: Theme) => ({
    keyword: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 9px 3px 9px',
        borderRadius: '99em',
        border: 'solid 1px #8ab2e4',
        backgroundColor: '#eef5ff',
        fontSize: '14px',
        lineHeight: '14px',
        opacity: 0,
        pointerEvents: 'none',
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
    icon: {
        width: '8px',
        height: '8px',
        marginLeft: '8px',
        transform: 'translateY(1px)'
    }
}));
const Keyword = ({index, keyword, print = false}: IProps) => {
    const [active, setActive] = useState(false);
    const [delay, setDelay] = useState(0);
    const classes = useStyles({delay});
    useEffect(() => {
        setActive(print);
        // setDelay(index * 300);
    }, [print]);
    return (
        <div className={clsx(classes.keyword, active ? classes.active : "")}>
            {keyword}
            <img src="/images/icons/icon-cancel.svg" alt="" className={classes.icon}/>
        </div>
    );
};
export default Keyword;
