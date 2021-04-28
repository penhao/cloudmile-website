import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core";
// import {IStyleValue} from "../types/Types";
import { StyleProps, MaxWidth } from "../types/StyleTypes";

export interface Props {
    icon?: string | null
    iconAlt?: string
    title?: string | null
    desc?: string | null
    color?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    descColor?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    maxWidth?: MaxWidth | null
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        position: 'relative',
        width: '100%',
        maxWidth: ({ maxWidth }: Props) => {
            return (maxWidth && maxWidth.xs)
                ?
                Number(maxWidth.xs)
                    ? `${maxWidth.xs}px`
                    : maxWidth.xs
                :
                'none';
        },
        zIndex: 1,
        [theme.breakpoints.up('sm')]: {
            maxWidth: ({ maxWidth }: Props) => {
                return (maxWidth && maxWidth.sm)
                    ?
                    Number(maxWidth.sm)
                        ? `${maxWidth.sm}px`
                        : maxWidth.sm
                    :
                    'none';

            }
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: ({ maxWidth }: Props) => {
                return (maxWidth && maxWidth.md)
                    ?
                    Number(maxWidth.md)
                        ? `${maxWidth.md}px`
                        : maxWidth.md
                    :
                    'none';

            },
        }
    },
    icon: {
        width: '60px',
        height: '60px',
        marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            width: '100px',
            height: '100px',
        }
    },
    title: {
        marginBottom: '15px',
        fontWeight: 600
    }
}));
const IconItem = ({ icon = null, iconAlt = '', color = 'primary', descColor = 'initial', title = null, desc = null, maxWidth = null }: Props) => {
    const classes = useStyles({ maxWidth });
    return (
        <div className={classes.item}>
            {
                (icon)
                    ?
                    <img src={icon} alt={(iconAlt) ? iconAlt : ''} className={classes.icon} />
                    :
                    null
            }
            {
                (title)
                    ?
                    <Typography variant={"h5"} color={color} className={classes.title}>
                        {title}
                    </Typography>
                    : null
            }
            {
                (desc)
                    ?
                    <Typography variant={"body1"} color={descColor}>
                        {desc}
                    </Typography>
                    : null
            }
        </div>
    );
};
export default IconItem;
