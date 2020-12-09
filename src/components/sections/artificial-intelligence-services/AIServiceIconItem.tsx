import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {Theme} from "@material-ui/core";


export interface IItemProps {
    icon: string
    iconAlt?: string
    title: string
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        position: 'relative',
        width: '100%',
        zIndex: 1
    },
    icon: {
        position: 'relative',
        width: '60px',
        height: '60px',
        marginBottom: '15px',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '60px',
            height: '60px',
        }
    },
    title: {
        fontWeight: 700,
        lineHeight: 1.25
    }
}));
const AIServiceIconItem = ({icon, iconAlt = '', title}: IItemProps) => {
    const classes = useStyles();
    return (
        <div className={classes.item}>
            <img src={icon} alt={iconAlt} className={classes.icon}/>
            <Typography variant={"body1"} color={"primary"} align={"center"} className={classes.title}>
                {title}
            </Typography>
        </div>
    );
};
export default AIServiceIconItem;
