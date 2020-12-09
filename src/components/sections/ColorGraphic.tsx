import React from 'react';
import {makeStyles, createStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import useThemeColor from "../useThemeColor";

type GraphicType = 'dot' | 'line' | 'dashline'
interface Props {
    type: GraphicType;
    color: string;
    size: number;
    lineSizeRate?: number;
    customClass?: string | null;
}
interface StyleProps {
    type: GraphicType
    size: number
    lineSizeRate: number
    backgroundColor: string
}

const useStyles = makeStyles(() => createStyles({
    root: {
        display: ({type}: StyleProps) => (type === 'dashline') ? 'flex' : 'block',
        flexWrap: 'nowrap',
        mixBlendMode: 'multiply',
        backgroundBlendMode: 'multiply',
        '&::before': {
            flex: ({type, size, lineSizeRate}: StyleProps) => (type === 'line') ? `0 0 ${size * lineSizeRate}px` : `0 0 ${size}px`,
            display: 'block',
            content: '""',
            width: ({type, size, lineSizeRate}: StyleProps) => (type === 'line') ? `${size * lineSizeRate}px` : `${size}px`,
            height: ({size}: StyleProps) => `${size}px`,
            marginRight: ({type}: StyleProps) => (type === 'dashline') ? '30px' : 0,
            borderRadius: '99em',
            backgroundColor: ({backgroundColor}: StyleProps) => backgroundColor
        },
        '&::after': {
            flex: ({size, lineSizeRate}: StyleProps) => `0 0 ${size * lineSizeRate}px`,
            display: 'block',
            content: ({type}: StyleProps) => (type === 'dashline') ? '""' : '',
            width: ({size, lineSizeRate}: StyleProps) => `${size * lineSizeRate}px`,
            height: ({size}: StyleProps) => `${size}px`,
            borderRadius: '99em',
            backgroundColor: ({backgroundColor}: StyleProps) => backgroundColor
        }
    }
}));
const ColorGraphic = ({type, size, lineSizeRate = 1, color = 'transplant', customClass = null}: Props) => {
    const backgroundColor = useThemeColor({color});
    const classes = useStyles({type, size, lineSizeRate, backgroundColor});
    return (
        <span className={clsx(classes.root, customClass)}/>
    );
};

export default ColorGraphic;
