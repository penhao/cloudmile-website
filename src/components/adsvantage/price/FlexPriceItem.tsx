import React from 'react';
import {UserPriceProps} from "../useUserPrice";
import {v4 as uuidv4} from 'uuid';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";


interface Props {
    data: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        // alignSelf:'stretch',
        // display: 'flex',
        // flexDirection: 'column',
        // position: 'relative',
        width: '100%',
        height: '100%',
        border: '1px solid'
    },
    top: {
        // flexGrow: 0,
        // flexShrink: 0,
        // flexBasis: '40px',
        height:'21%',
        borderBottom: '1px solid'
    },
    middle: {
        // flexGrow: 1,
        // flexShrink: 0,
        // flexBasis: 'auto',
        height:'48%',
        borderBottom: '1px solid'
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        // flexGrow: 1,
        // flexShrink: 0,
        // flexBasis: '85px',
        height:'31%%',
    },
    button: {
        marginTop: 'auto'
    }
}));
const FlexPriceItem = ({data}: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.item}>
            <div className={classes.top}>
                <div>title</div>
                <div>price</div>
            </div>
            <div className={classes.middle}>
                <div>
                    {
                        data.features.map((feature) => {
                            return (
                                <div key={uuidv4()}>{feature}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes.bottom}>
                <div>
                    {
                        data.grade.map((grade) => {
                            return (
                                <div key={uuidv4()}>{grade}</div>
                            )
                        })
                    }
                </div>
                <button className={classes.button}>button</button>
            </div>
        </div>
    );
};

export default FlexPriceItem;
