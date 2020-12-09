import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import useScrollPercentage from "../../useScrollPercentage";
import Sticky from "react-sticky-el";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles((theme: Theme) => ({
    progress: {
        position: 'relative',
        width: '100%',
        zIndex: 10,
        '& .MuiLinearProgress-root': {
            backgroundColor: 'transparent'
        },
        '& .sticky': {
            top: '50px !important',
            [theme.breakpoints.up('sm')]: {
                top: '60px !important',
            }
        }
    }
}));
const ScrollProgress = () => {
    const classes = useStyles();
    const scrollProgress = useScrollPercentage();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <div className={classes.progress}>
            <Sticky topOffset={smUp ? -60 : -50}>
                <LinearProgress variant="determinate"
                                value={scrollProgress}
                                color={"secondary"}/>
            </Sticky>
        </div>
    );
};
export default ScrollProgress;
