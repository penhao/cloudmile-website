import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import useThemeColor from "../useThemeColor";
import {Controller, Scene} from "react-scrollmagic";
import {Theme} from "@material-ui/core";

interface Props {
    children?: React.ReactNode;
    color: string;
}
interface StyleProps {
    color: string
}
const useStyles = makeStyles((theme: Theme) => ({
    textLabel: {
        position: 'relative',
        fontSize: '18px',
        fontWeight: 600,
        letterSpacing: 'normal',
        lineHeight: 'normal',
        color: ({color}: StyleProps) => color,
        zIndex: 1,
        opacity: 0,
        transition: theme.transitions.create(['opacity'], {
            easing: theme.transitions.easing.easeOut,
            duration: '1s'
        }),
        transitionDelay: '0.2s'
    },
    graphicLabel: {
        display: 'block',
        position: 'relative',
        marginBottom: '5px',
        zIndex: 1,
        '&::before': {
            display: 'block',
            content: '""',
            width: '10px',
            height: '10px',
            borderRadius: '99em',
            backgroundColor: ({color}: StyleProps) => color,
            opacity: 0,
            transition: theme.transitions.create(['opacity'], {
                easing: theme.transitions.easing.easeOut,
                duration: '0.7s'
            }),
            transitionDelay: '0.1s'
        },
        '&::after': {
            display: 'block',
            content: '""',
            position: 'absolute',
            width: 0,
            height: '10px',
            top: 0,
            left: '15px',
            borderRadius: '99em',
            backgroundColor: ({color}: StyleProps) => color,
            opacity: 0,
            transition: theme.transitions.create(['opacity', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: '1s'
            }),
            transitionDelay: '0.1s'
        }
    },
    active: {
        '&$textLabel': {
            opacity: 1
        },
        '&$graphicLabel': {
            '&::before': {
                opacity: 1
            },
            '&::after': {
                opacity: 1,
                width: '85px'
            }
        }
    }
}));

const SectionTitleLabel = ({color, children}: Props) => {
    const classes = useStyles({color: useThemeColor({color})});
    const getTextLabel = () => {
        return (
            <Typography component={'span'} variant={"body1"} className={classes.textLabel}>
                {children}
            </Typography>
        )
    };
    const getGraphicLabel = () => {
        return (
            <span className={classes.graphicLabel}/>
        )
    };
    return (
        <Controller>
            <Scene classToggle={classes.active} reverse={false} indicators={false} triggerHook={0.9}>
                {(children) ? getTextLabel() : getGraphicLabel()}
            </Scene>
        </Controller>
    );
};
export default SectionTitleLabel;
