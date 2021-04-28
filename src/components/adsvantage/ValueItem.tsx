import React from 'react';
import { makeStyles, Theme, Typography } from "@material-ui/core";


interface Props {
    value: string;
    desc: string;
    valueColor?: string;
}

interface IStyleProps {
    valueColor: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        // width: '100%',
    },
    value: {
        fontSize: '32px',
        fontWeight: 'bold',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: ({ valueColor }: IStyleProps) => valueColor,
        '& > span': {
            fontSize: '30px',
            fontWeight: 'bold',
            color: ({ valueColor }: IStyleProps) => valueColor,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '50px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '60px',
        }
    },
    desc: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: '280px',
        }
    }
}));
const ValueItem = ({ value, desc, valueColor = 'black' }: Props) => {
    const classes = useStyles({ valueColor });
    return (
        <div className={classes.item}>
            <div className={classes.value} dangerouslySetInnerHTML={{
                __html: value
            }} />
            <Typography variant={"body1"} className={classes.desc}>{desc}</Typography>
        </div>
    );
};
export default ValueItem;
