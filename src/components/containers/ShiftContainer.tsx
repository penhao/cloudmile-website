import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";


type IShiftValue = {
    xs?: number | null,
    sm?: number | null,
    md?: number | null
}
type IGrowValue = {
    xs?: boolean | number | null,
    sm?: boolean | number | null,
    md?: boolean | number | null,
}

interface Props {
    growX?: IGrowValue | null
    shiftX?: IShiftValue | null
    shiftY?: IShiftValue | null
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position:'relative',
        width: ({growX}: Props) => {
            return (growX && growX.xs)
                ? (typeof growX.xs === "boolean")
                    ? 'auto'
                    : `calc(100% + ${growX.xs}px)`
                :
                '100%';
        },
        marginLeft: ({shiftX}: Props) => {
            return (shiftX && shiftX.xs) ? `${shiftX.xs}px` : 'initial';
        },
        marginTop: ({shiftY}: Props) => {
            return (shiftY && shiftY.xs) ? `${shiftY.xs}px` : 'initial';
        },
        [theme.breakpoints.up('sm')]: {
            width: ({growX}: Props) => {
                return (growX && growX.sm)
                    ? (typeof growX.sm === "boolean")
                        ? 'auto'
                        : `calc(100% + ${growX.sm}px)`
                    :
                    '100%';
            },
            marginLeft: ({shiftX}: Props) => {
                return (shiftX && shiftX.sm) ? `${shiftX.sm}px` : 'initial';
            },
            marginTop: ({shiftY}: Props) => {
                return (shiftY && shiftY.sm) ? `${shiftY.sm}px` : 'initial';
            }
        },
        [theme.breakpoints.up('md')]: {
            width: ({growX}: Props) => {
                return (growX && growX.md)
                    ? (typeof growX.md === "boolean")
                        ? 'auto'
                        : `calc(100% + ${growX.md}px)`
                    :
                    '100%';
            },
            marginLeft: ({shiftX}: Props) => {
                return (shiftX && shiftX.md) ? `${shiftX.md}px` : 'initial';
            },
            marginTop: ({shiftY}: Props) => {
                return (shiftY && shiftY.md) ? `${shiftY.md}px` : 'initial';
            }
        }
    }
}));
const ShiftContainer = ({growX = null, shiftX = null, shiftY = null, children}: Props) => {
    const classes = useStyles({growX, shiftX, shiftY});
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export default ShiftContainer;
