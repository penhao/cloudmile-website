import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Grid, Theme, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ResultItem, { ResultItemProps } from "./ResultItem";

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        position: 'relative',
        width: '100%',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 2px 14px 0 rgba(137, 174, 255, 0.2)',
        backgroundColor: theme.palette.common.white,
    },
    resultForm: {
        height: '310px',
        overflowX: 'hidden',
        overflowY: 'auto'
    },
    formTitle: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: theme.palette.common.black,
        marginBottom: '6px'
    },
    infoList: {
        '& > div': {
            position: 'relative',
            flex: '0 0 200px',
            padding: '6px 20px',
            '&::after': {
                display: 'block',
                position: 'absolute',
                content: '""',
                width: '1px',
                height: '100%',
                right: 0,
                top: 0,
                backgroundColor: '#5d799c'
            },
            '&:last-child': {
                flex: '1 1 auto',
                '&::after': {
                    content: 'none',
                }
            }
        }
    },
    infoLabel: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: theme.palette.common.black,
        whiteSpace: 'nowrap',
        marginBottom: '6px'
    },
    infoDesc: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#285a99'
    },
    actions: {
        marginTop: '10px'
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
    loading: {
        position: 'absolute',
        width: '300px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    }
}));
const Step2 = () => {
    const classes = useStyles();
    const [active, setActive] = useState(false);
    const [infoList, setInfoList] = useState([
        {
            label: 'Keywords',
            value: '面膜推薦，美白面膜，保濕面膜推薦'
        },
        {
            label: 'Company / Brand Name',
            value: 'ADsvantage'
        },
        {
            label: 'URL',
            value: 'www.example.com'
        },
        {
            label: 'Description',
            value: '保濕面膜推薦，鎖水、補水、潤澤，全面優惠'
        }
    ]);
    const [resultList, setResultList] = useState<ResultItemProps[]>([
        {
            title: '[美白黑面膜] 全台最低價格 | 韓妞嚴選 暗沈蠟黃全面改造',
            url: 'www.example.com',
            desc: '面膜保養新突破，只要8分鐘！天天敷3步驟，肌膚由內而外、還原透亮水潤光澤。'
        },
        {
            title: '38女王節》超高CP面膜推薦 | 多品項面膜，全台24h到貨',
            url: 'www.example.com',
            desc: '不用再精打細算，給你懂女人的高CP優惠。保濕、修護各式面膜，全館單品優惠中。'
        },
        {
            title: '美白面膜好評不斷》8分鐘升級面膜 | 最強8分鐘面膜升級版，立即體驗',
            url: 'www.example.com',
            desc: '3步驟輕鬆搞定，5分鐘超級鎖水！敷完就有乳霜質地，網友最愛敷完整開架！立即體驗'
        },
        {
            title: '水嫩鎖水面膜 - 限時3天全店免運 85 折 | 冬季保養就靠它，網友零負評',
            url: 'www.example.com',
            desc: '面膜保養新突破，只要8分鐘！天天敷3步驟，肌膚由內而外、還原透亮水潤光澤。'
        },
        {
            title: '日本革命級超人氣面膜 神級成分超有感 | 網友好評推薦，新品上市',
            url: 'www.example.com',
            desc: '面膜保養新突破，只要8分鐘！天天敷3步驟，肌膚由內而外、還原透亮水潤光澤。'
        },
        {
            title: '全效保濕 夜間充電首選面膜 | 一敷有感，潤澤天然配方',
            url: 'www.example.com',
            desc: '面膜保養新突破，只要8分鐘！天天敷3步驟，肌膚由內而外、還原透亮水潤光澤。'
        },
        {
            title: '[美白黑面膜] 全台最低價格 | 韓妞嚴選 暗沈蠟黃全面改造',
            url: 'www.example.com',
            desc: '面膜保養新突破，只要8分鐘！天天敷3步驟，肌膚由內而外、還原透亮水潤光澤。'
        },
        {
            title: '38女王節》超高CP面膜推薦 | 多品項面膜，全台24h到貨',
            url: 'www.example.com',
            desc: '不用再精打細算，給你懂女人的高CP優惠。保濕、修護各式面膜，全館單品優惠中。'
        },
        {
            title: '美白面膜好評不斷》8分鐘升級面膜 | 最強8分鐘面膜升級版，立即體驗',
            url: 'www.example.com',
            desc: '3步驟輕鬆搞定，5分鐘超級鎖水！敷完就有乳霜質地，網友最愛敷完整開架！立即體驗'
        },
    ]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
            clearTimeout(timer);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant={"h6"} className={classes.formTitle}>描述您的產品</Typography>
                <div className={classes.form}>
                    <Box display={'flex'} flexWrap={'nowrap'} className={classes.infoList}>
                        {
                            infoList && infoList.length
                                ?
                                infoList.map((info: any) => {
                                    return (
                                        <div key={uuidv4()}>
                                            <div className={classes.infoLabel}>{info.label}</div>
                                            <p className={classes.infoDesc}>{info.value}</p>
                                        </div>
                                    )
                                })
                                : null
                        }
                    </Box>
                </div>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"h6"} className={classes.formTitle}>AI 生成結果 (廣告)</Typography>
                <div className={clsx(classes.form, classes.resultForm)}>
                    {
                        active
                            ?
                            <Grid container spacing={2}>
                                {
                                    resultList && resultList.length
                                        ? resultList.map((result: ResultItemProps, index: number) => {
                                            return (
                                                <Grid item xs={4} key={uuidv4()}>
                                                    <ResultItem data={result} index={index} print={active} />
                                                </Grid>
                                            )
                                        })
                                        : null
                                }
                            </Grid>
                            :
                            <img src="/images/md/adsvantage/demo/loading.gif" alt="" className={classes.loading} />
                    }
                </div>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={1} justify={"flex-end"} className={classes.actions}>
                    <Grid item>
                        <Button variant={"contained"}
                            href={'#'}
                            target={'_blank'}
                            disabled={!active}
                            className={classes.submit}>立即試用</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default Step2;
