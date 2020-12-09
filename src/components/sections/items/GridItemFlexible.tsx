import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface IProps {
    grow?: boolean | null
    overflow?: 'hidden' | 'visible'
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        [theme.breakpoints.up('md')]: {
            flex: ({grow}: IProps) => {
                return grow ? '0 0 62.5%' : '0 0 calc(100% - 480px)'
            },
            overflow: ({overflow}: IProps) => overflow
        }
    }
}));
const GridItemFlexible = ({grow = null, overflow = 'hidden', children}: IProps) => {
    const classes = useStyles({grow, overflow});
    return (
        <Grid item xs={12} md className={classes.item}>
            {children}
        </Grid>
    );
};
export default GridItemFlexible;
