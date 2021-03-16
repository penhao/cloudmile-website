import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

interface IProps {
    position?: 'left' | 'right'
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    labelWrapper: {
        width: ({position}: IProps) => (position === 'left') ? 'auto' : 'calc(100% - 20px)',
        position: 'absolute',
        [theme.breakpoints.up('sm')]: {
            marginTop: '40px'
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '60px',
        }
    },
    label: {
        display: 'inline-block',
        position: 'absolute',
        right: ({position}: IProps) => (position === 'left') ? '-20px' : '20px',
        bottom: 0,
        whiteSpace: 'nowrap',
        textAlign: 'right',
        transformOrigin: 'right bottom',
        transform: 'rotate(-90deg)',
        zIndex: 1,
        textTransform:'uppercase'
    }
}));
const SectionLabel = ({position = 'left', children}: IProps) => {
    const classes = useStyles({position});
    return (
        <Hidden xsDown>
            <div className={classes.labelWrapper}>
                <Typography variant={"body1"} component={'span'} className={classes.label}>
                    {`${children}_`}
                </Typography>
            </div>
        </Hidden>
    );
};
export default SectionLabel;
