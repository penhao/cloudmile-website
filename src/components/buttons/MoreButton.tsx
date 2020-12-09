import React from 'react';
import IconMore from "../icons/IconMore";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";

interface IProps {
    disabled: boolean;
    clickHandler: React.MouseEventHandler;
    color?: string;
}
interface StyleProps {
    color: string;
}
const useStyles = makeStyles((theme: Theme) => ({
    button: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: 600,
        marginTop: '40px',
        color: ({color}: StyleProps) => color,
        '& .MuiButton-endIcon': {
            marginLeft: 0
        },
        '&.Mui-disabled': {
            color: ({color}: StyleProps) => color,
            '& .MuiButton-endIcon': {
                marginLeft: 0
            }
        },
        '& .MuiTouchRipple-child': {
            backgroundColor: theme.palette.common.white
        }
    }
}));
const MoreButton = ({disabled, clickHandler, color = useTheme().palette.primary.main}: IProps) => {
    const classes = useStyles({color});
    return (
        <Button fullWidth
                endIcon={<IconMore color={color}/>}
                onClick={clickHandler}
                disabled={disabled}
                className={classes.button}>
            more
        </Button>
    );
};
export default MoreButton;
