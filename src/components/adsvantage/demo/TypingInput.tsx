import React, {useEffect, useState} from 'react';
import {makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";

interface IProps {
    type: string;
    value: string;
    placeholder: string;
    rows?: number;
    active: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    input: {
        display: 'block',
        position: 'relative',
        width: '100%',
        minHeight: '38px',
        padding: '7px 12px',
        borderRadius: '5.5px',
        border: 'solid 1px #d8d8d8',
        backgroundColor: theme.palette.common.white,
        fontSize: '14px',
        letterSpacing: 'normal',
        lineHeight: 'normal',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.grey["100"],
        },
        '&::placeholder': {
            color: theme.palette.grey["400"]
        }
    },
    textarea: {
        resize: 'none'
    }
}));

function CustomInput({type, ...props}) {
    return React.createElement(type || 'input', props, null);
}

const TypingInput = ({type, value, placeholder, active, rows}: IProps) => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const [blink, setBlink] = useState(false);
    const [print, setPrint] = useState(false);
    useEffect(() => {
        setPrint(active);
    }, [active]);
    useEffect(() => {
        if (!print) setIndex(0);
        if (!print || index === value.length) return;
        const typeTimer = setTimeout(() => {
            setIndex((prev) => prev + 1);
            clearTimeout(typeTimer);
        }, 30);
        return () => clearTimeout(typeTimer);
    }, [index, print]);

    useEffect(() => {
        if (!print) return;
        if (index === value.length) {
            setBlink(false);
            return;
        }
        const blinkTimer = setTimeout(() => {
            setBlink((prev) => !prev);
            clearTimeout(blinkTimer);
        }, 300);
        return () => clearTimeout(blinkTimer);
    }, [blink, print]);

    return (
        <CustomInput type={type}
                     placeholder={placeholder}
                     defaultValue={`${value.substring(0, index)}${blink ? "|" : ""}`}
                     readOnly
                     rows={rows}
                     className={clsx(
                         classes.input,
                         type === 'textarea' ? classes.textarea : null
                     )}
        />
    );
};
export default TypingInput;
