import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import {StyleProps, MaxWidth} from "../types/StyleTypes";
import {isValueEmpty} from "../../utils/Utils";
import clsx from "clsx";


interface Props {
    maxWidth?: MaxWidth | null;
    centerX?: boolean;
    paddingX?: boolean;
    fullHeight?: boolean;
    className?: string | null;
    children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: 'relative',
        width: '100%',
        height: ({fullHeight}: StyleProps) => fullHeight ? '100%' : 'auto',
        paddingLeft: ({paddingX}: StyleProps) => (paddingX) ? theme.spacing(2) : 0,
        paddingRight: ({paddingX}: StyleProps) => (paddingX) ? theme.spacing(2) : 0,
        marginLeft: ({centerX}: StyleProps) => (centerX) ? 'auto' : 0,
        marginRight: ({centerX}: StyleProps) => (centerX) ? 'auto' : 0,
        maxWidth: ({maxWidth}: StyleProps) => {
            return (maxWidth && !isValueEmpty(maxWidth.xs))
                ? (Number(maxWidth.xs))
                    ? `${maxWidth.xs}px`
                    : maxWidth.xs
                : 'none';
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: ({maxWidth}: StyleProps) => {
                return (maxWidth && !isValueEmpty(maxWidth.sm))
                    ? (Number(maxWidth.sm))
                        ? `${maxWidth.sm}px`
                        : maxWidth.sm
                    : 'none';
            }
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: ({maxWidth}: StyleProps) => {
                return (maxWidth && !isValueEmpty(maxWidth.md))
                    ? (Number(maxWidth.md))
                        ? `${maxWidth.md}px`
                        : maxWidth.md
                    : 'none';
            }
        }
    }
}));
const Container = ({maxWidth, centerX = true, paddingX = true, fullHeight = false, className = null, children}: Props) => {
    const classes = useStyles({maxWidth, centerX, paddingX, fullHeight});
    return (
        <div className={clsx(classes.container, className)}>
            {children}
        </div>
    );
};
export default Container;
