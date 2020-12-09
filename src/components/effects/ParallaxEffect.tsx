import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Controller, Scene} from "react-scrollmagic";
import {Timeline, Tween} from "react-gsap";

interface IProps {
    children?: React.ReactNode
}

const useStyles = makeStyles(() => ({
    parallax: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    inner: {
        position: 'relative',
        width: '110%',
        left: 0
    }
}));
const ParallaxEffect = ({children}: IProps) => {
    const classes = useStyles();
    return (
        <Controller>
            <Scene indicators={false} duration="150%" triggerHook="onEnter">
                <Timeline wrapper={<div className={classes.parallax}/>}>
                    <Tween from={{yPercent: -20}} to={{yPercent: 0}}>
                        <div className={classes.inner}>
                            {children}
                        </div>
                    </Tween>
                </Timeline>
            </Scene>
        </Controller>
    );
};
export default ParallaxEffect;
