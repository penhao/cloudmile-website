import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {Grid, Theme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";


export interface IItemProps {
    icon: string
    iconAlt: string
    title: string | null
    desc: string | null
    list: string[]
    link: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        width: '100px',
        height: '100px',
        marginBottom: '20px'
    },
    title: {
        width:'100%',
        marginBottom: '15px',
        [theme.breakpoints.up('sm')]: {
            width:'calc(100% - 200px)'
        },
        [theme.breakpoints.up('md')]: {
            width:'100%'
        },
    },
    descWrapper: {
        flex: '1 1 auto'
    },
    listWrapper: {
        flex: '1 1 auto',
        [theme.breakpoints.up('sm')]: {
            flex: '0 0 200px'
        },
        [theme.breakpoints.up('md')]: {
            flex: '1 1 auto'
        }
    },
    list: {
        '& li': {
            position: 'relative',
            color: theme.palette.secondary.main,
            marginBottom: '15px',
            paddingLeft: '15px',
            '&:last-child': {
                marginBottom: 0
            },
            '&::before': {
                display: 'block',
                position: 'absolute',
                content: '""',
                width: '8px',
                height: '8px',
                left: 0,
                top: '8px',
                borderRadius: 99,
                backgroundColor: theme.palette.primary.main
            }
        },
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {
            '& li': {
                whiteSpace: 'nowrap',
                marginBottom: '15px'
            }
        }
    },
    link: {
        marginTop: '20px'
    }
}));
const IconListItem = ({icon, iconAlt, title, desc, list, link}: IItemProps) => {
    const classes = useStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <div>
            <img src={icon} alt={iconAlt} className={classes.icon}/>
            <Typography variant={"h5"} color={'primary'} className={classes.title}>
                {title}
            </Typography>
            <Grid container spacing={smUp ? 4 : 2} wrap={smUp ? "nowrap" : "wrap"}>
                <Grid item xs={12} sm className={classes.descWrapper}>
                    <Typography variant={"body1"}>
                        {desc}
                    </Typography>
                    <div className={classes.link}>{link}</div>
                </Grid>
                {
                    (list && list.length)
                        ?
                        <Grid item xs={12} sm className={classes.listWrapper}>
                            <ul className={classes.list}>
                                {
                                    list.map((item: string, index: number) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Grid>
                        : null
                }
            </Grid>
        </div>
    );
};
export default IconListItem;