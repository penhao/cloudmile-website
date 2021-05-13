import React from "react";
import {v4 as uuidv4} from "uuid";
import {makeStyles} from "@material-ui/styles";
import {Theme, Grid} from "@material-ui/core";
import useAdoptStepList, {IStepList, IDetailItem} from "./useAdoptStepList";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "next-translate";

const useStyles = makeStyles((theme: Theme) => ({
    stepListOuter: {
        width: '100%',
        overflowY: 'hidden',
        overflowX: 'auto'
    },
    stepList: {
        width: '100%',
        minWidth: '1160px'
    },
    stepTitle: {
        height: '76px',
        '& span': {
            fontSize: '16px',
            fontWeight: 600,
            color: theme.palette.secondary.main
        }
    },
    stepDetail: {
        '& li': {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginBottom: '20px',
            '&:last-child': {
                marginBottom: 0
            },
            '& img': {
                width: '60px',
                marginRight: '16px'
            }
        }
    },
    arrow: {
        width: '100%',
        marginTop: '16px',
        marginBottom: '26px'
    }
}));
const AdoptStepList = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const list = useAdoptStepList();
    return (
        <div className={classes.stepListOuter}>
            <div className={classes.stepList}>
                <Grid container spacing={4}>
                    {
                        list.map((item: IStepList) => {
                            return (
                                <Grid item xs={3} key={uuidv4()}>
                                    <Typography variant={"h4"} color={"primary"} dangerouslySetInnerHTML={
                                        {__html: item.title}
                                    } className={classes.stepTitle}/>
                                    <img src="/images/icons/product/arrow.svg" className={classes.arrow}/>
                                    <ul className={classes.stepDetail}>
                                        {
                                            item.detailList.map((detail: IDetailItem) => {
                                                return (
                                                    <li key={uuidv4()}>
                                                        <img src={detail.iconUrl}/>
                                                        <Typography variant={"body1"} color={"secondary"}>
                                                            {detail.desc}
                                                        </Typography>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </div>
        </div>
    );
};
export default AdoptStepList;