import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import clsx from "clsx";
// import {IStyleValue} from "../types/Types";


type RatioProps = {
    xs: number, sm: number, md: number
}
type ValueProps = {
    xs?: number | string | 'none',
    sm?: number | string | 'none',
    md?: number | string | 'none'
}

interface Props {
    ratio: RatioProps
    maxWidth?: ValueProps
    maxHeight?: ValueProps
    overflow?: 'hidden' | 'visible'
    customClass?: string | null
    backgroundColor?: string
    children: React.ReactNode
}

interface StyleProps {
    ratio: RatioProps
    maxWidth: ValueProps
    maxHeight: ValueProps
    overflow: 'hidden' | 'visible'
}

const useStyles = makeStyles((theme: Theme) => ({
    ratioContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: ({maxWidth}: StyleProps) => {
            return (maxWidth && maxWidth.xs)
                ?
                Number(maxWidth.xs)
                    ? `${maxWidth.xs}px`
                    : maxWidth.xs
                :
                'none';
        },
        height: ({maxHeight}: StyleProps) => {
            return (maxHeight && maxHeight.xs)
                ?
                Number(maxHeight.xs)
                    ? `${maxHeight.xs}px`
                    : maxHeight.xs
                :
                'auto';
        },
        maxHeight: ({maxHeight}: StyleProps) => {
            return (maxHeight && maxHeight.xs)
                ?
                Number(maxHeight.xs)
                    ? `${maxHeight.xs}px`
                    : maxHeight.xs
                :
                'none';
        },
        overflow: ({overflow}: StyleProps) => overflow,
        '&::after': {
            display: 'block',
            position: 'relative',
            content: '""',
            width: '100%',
            paddingTop: ({ratio}: StyleProps) => `${ratio.xs * 100}%`,
            pointerEvents: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: ({maxWidth}: StyleProps) => {
                return (maxWidth && maxWidth.sm)
                    ?
                    Number(maxWidth.sm)
                        ? `${maxWidth.sm}px`
                        : maxWidth.sm
                    :
                    'none';

            },
            height: ({maxHeight}: StyleProps) => {
                return (maxHeight && maxHeight.sm)
                    ?
                    Number(maxHeight.sm)
                        ? `${maxHeight.sm}px`
                        : maxHeight.sm
                    :
                    'auto';
            },
            maxHeight: ({maxHeight}: StyleProps) => {
                return (maxHeight && maxHeight.sm)
                    ?
                    Number(maxHeight.sm)
                        ? `${maxHeight.sm}px`
                        : maxHeight.sm
                    :
                    'none';
            },
            '&::after': {
                paddingTop: ({ratio}: StyleProps) => `${ratio.sm * 100}%`
            }
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: ({maxWidth}: StyleProps) => {
                return (maxWidth && maxWidth.md)
                    ?
                    Number(maxWidth.md)
                        ? `${maxWidth.md}px`
                        : maxWidth.md
                    :
                    'none';

            },
            height: ({maxHeight}: StyleProps) => {
                return (maxHeight && maxHeight.md)
                    ?
                    Number(maxHeight.md)
                        ? `${maxHeight.md}px`
                        : maxHeight.md
                    :
                    'auto';
            },
            maxHeight: ({maxHeight}: StyleProps) => {
                return (maxHeight && maxHeight.md)
                    ?
                    Number(maxHeight.md)
                        ? `${maxHeight.md}px`
                        : maxHeight.md
                    :
                    'none';
            },
            '&::after': {
                paddingTop: ({ratio}: StyleProps) => `${ratio.md * 100}%`
            }
        }

    },
    inner: {
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1,
        overflow: ({overflow}: StyleProps) => overflow,
        // border: `1px solid red`
    }
}));

const RatioContainer = (
    {
        ratio = {xs: 0, sm: 0, md: 0},
        maxWidth = {xs: 'none', sm: 'none', md: 'none'},
        maxHeight = {xs: 'none', sm: 'none', md: 'none'},
        overflow = 'hidden',
        customClass = null,
        children
    }: Props
) => {
    const classes = useStyles({ratio, maxWidth, maxHeight, overflow});
    return (
        <div className={clsx(classes.ratioContainer, customClass)}>
            <span className={classes.inner}>
                {children}
            </span>
        </div>
    );
};
export default RatioContainer;