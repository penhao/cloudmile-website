import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface IProps {
    grow?: boolean | null
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        [theme.breakpoints.up('md')]: {
            flex: ({grow}: IProps) => {
                return grow ? '0 0 37.5%' : '0 0 480px'
            }
        }
    }
}));
const GridItem480 = ({grow = null, children}: IProps) => {
    const classes = useStyles({grow});
    return (
        <Grid item xs={12} md className={classes.item}>
            {children}
        </Grid>
    );
};
export default GridItem480;
