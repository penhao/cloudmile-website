import React, { useState } from 'react';
import { Theme, Typography } from "@material-ui/core";
import { makeStyles, Button, Box, Grid } from "@material-ui/core";
import KeywordList from "./KeywordList";
import TypingInput from "./TypingInput";
import clsx from "clsx";

interface IProps {
    changeStepHandler: (step: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    step: {
        padding: '20px 30px 30px 30px',
        borderRadius: '15px',
        boxShadow: '0 2px 14px 0 rgba(137, 174, 255, 0.2)',
        backgroundColor: theme.palette.common.white,
        cursor: 'pointer',
        '& $row': {
            '&::last-child': {
                marginBottom: 0
            }
        }
    },
    stepLabel: {
        marginTop: '78px',
        transition: theme.transitions.create(['margin-top'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeOut
        }),
        '& span': {
            display: 'block',
            padding: '12px 10px',
            fontSize: '16px',
            fontWeight: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            borderRadius: '10px',
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            animation: `$LabelFloating 1.5s ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite'
        }
    },
    "@keyframes LabelFloating": {
        '0%': {
            transform: 'translate(0, -15px)'
        },
        '50%': {
            transform: 'translate(0, 5px)'
        },
        '100%': {
            transform: 'translate(0, -15px)'
        }
    },
    stepLabelActive: {
        marginTop: '455px',
    },
    form: {
        width: '565px'
    },
    title: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: theme.palette.common.black,
        marginBottom: '6px'
    },
    label: {
        display: 'block',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        marginBottom: '4px',
        pointerEvents: 'none'
    },
    actions: {
        marginTop: '10px'
    },
    cancel: {
        width: '144px',
        border: 'solid 1px #0458c0',
        backgroundColor: theme.palette.common.white,
        color: '#0458c0',
        '&:hover': {
            backgroundColor: theme.palette.common.white,
        },
        '&.Mui-disabled': {
            border: `solid 1px ${theme.palette.grey[300]}`,
        }
    },
    submit: {
        width: '144px',
        border: 'solid 1px #0458c0',
        backgroundColor: '#0458c0',
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: '#0458c0',
        },
        '&.Mui-disabled': {
            border: `solid 1px ${theme.palette.grey[300]}`,
        }
    },

}));
const Step1 = ({ changeStepHandler }: IProps) => {
    const classes = useStyles();
    const [active, setActive] = useState(false);

    const handleActive = () => setActive(true);
    const handleCancel = (e) => {
        e.stopPropagation();
        setActive(false);
    };
    const handleClick = (e) => {
        e.stopPropagation();
        if (!active) {
            setActive(true);
        } else {
            changeStepHandler('Step2');
        }
    };
    return (
        <Grid container spacing={2}>
            <Grid item className={classes.form}>
                <Typography variant={"h6"} className={classes.title}>描述您的產品</Typography>
                <div className={classes.step} onClick={handleActive}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <label className={classes.label}>關鍵字 *</label>
                            <KeywordList active={active} />
                        </Grid>
                        <Grid item xs={12}>
                            <label className={classes.label}>產品描述</label>
                            <TypingInput type={'textarea'}
                                rows={4}
                                value={'保濕面膜推薦，鎖水、補水、潤澤，全面優惠'}
                                placeholder={'請輸入產品描述'}
                                active={active}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label className={classes.label}>公司/品牌名稱</label>
                            <TypingInput type={'input'}
                                value={'ADsvantage'}
                                placeholder={'輸入公司或品牌名稱'}
                                active={active}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label className={classes.label}>最終到達網址</label>
                            <TypingInput type={'input'}
                                value={'https://www.example.com'}
                                placeholder={'輸入URL ex: http://www.example.com'}
                                active={active}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1} justify={"flex-end"} className={classes.actions}>
                                <Grid item>
                                    <Button variant={"contained"}
                                        disabled={!active}
                                        onClick={handleCancel}
                                        className={classes.cancel}>取消</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={"contained"}
                                        disabled={!active}
                                        onClick={handleClick}
                                        className={classes.submit}>生成</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item>
                <div className={clsx(
                    classes.stepLabel,
                    active ? classes.stepLabelActive : null
                )}>
                    <span>
                        {
                            active
                                ? 'Step 2: AI 產出文案！'
                                : 'Step 1: 填寫關鍵字與描述'
                        }
                    </span>
                </div>
            </Grid>
        </Grid>
    );
};
export default Step1;
