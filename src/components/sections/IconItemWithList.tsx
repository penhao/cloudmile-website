import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {Theme} from "@material-ui/core";
import {StyleProps, MaxWidth} from "../types/StyleTypes";

export interface Props {
    icon?: string | null
    iconAlt?: string
    title?: string | null
    list: any[] | null
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
        maxWidth: ({maxWidth}: Props) => {
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
            maxWidth: ({maxWidth}: Props) => {
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
            maxWidth: ({maxWidth}: Props) => {
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
        [theme.breakpoints.up('sm')]:{
            marginBottom: '40px'
        }
    },
    list: {
        '& li': {
            marginBottom: '20px',
            '&:last-child': {
                marginBottom: '0',
            },
            '& p': {
                '&:first-child': {
                    fontWeight:theme.typography.fontWeightMedium
                }
            }
        }
    }
}));
const IconItemWithList = ({icon = null, iconAlt = '', color = 'primary', descColor = 'initial', title = null, list = null, maxWidth = null}: Props) => {
    const classes = useStyles({maxWidth});
    return (
        <div className={classes.item}>
            {
                (icon)
                    ?
                    <img src={icon} alt={(iconAlt) ? iconAlt : ''} className={classes.icon}/>
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
                (list && list.length)
                    ?
                    <ul className={classes.list}>
                        {
                            list.map((item: any, index: number) => {
                                return (
                                    <li key={index}>
                                        <Typography variant={"body1"} color={"secondary"}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant={"body1"} color={descColor}>
                                            {item.desc}
                                        </Typography>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    : null
            }
        </div>
    );
};
export default IconItemWithList;
