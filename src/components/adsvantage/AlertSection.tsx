import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, useTheme, Box, Grid, useMediaQuery } from "@material-ui/core";
import Container from "../containers/Container";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import { v4 as uuidv4 } from "uuid";
import ValueItem from "./ValueItem";
import Product from "./alert/Product";
import { useTranslation } from 'next-translate';

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        marginBottom: '35px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '50px',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '150px',
        }
    },
    title: {
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '65px',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '125px',
        }
    },
    label: {
        fontSize: '20px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '24px'
        }
    },
    gridCon: {
        '& $gridItem': {
            '&:nth-child(1)': {
                [theme.breakpoints.up('md')]: {
                    flex: '1 1 65%'
                }
            },
            '&:nth-child(2)': {
                [theme.breakpoints.up('md')]: {
                    flex: '1 1 35%'
                }
            }
        }
    },
    gridItem: {
        position: 'relative'
    },
    product: {
        position: 'relative',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            maxWidth: '787px',
            paddingRight: '18px',
        }
    },
    bg: {
        position: 'absolute',
        width: '576px',
        right: '-20px',
        bottom: '-60px',
    },
}));
const AlertSection = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [valueList, setValueList] = useState([]);
    const valueColor = useTheme().palette.error.main;
    useEffect(() => {
        setValueList([
            {
                value: `24&nbsp;<span>hours</span>`,
                desc: t('adsvantage:24/7 smart alert, customized and precise prediction on advertising budget')
            },
            {
                value: `Score`,
                desc: t('adsvantage:Unique Performance Score model helps you maximize the advertising performance')
            }
        ])
    }, [lang])
    return (
        <section className={classes.section}>
            <Container maxWidth={{ md: 1280 }}>
                <Container maxWidth={{ xs: 'none', sm: 'none', md: 'none' }} paddingX={false} centerX={false}>
                    <SectionTitleLabel color={'error'} className={classes.label}>
                        {t('adsvantage:24/7 Smart Alerting')}
                    </SectionTitleLabel>
                    <SectionTitle className={classes.title}>
                        {t('adsvantage:Leave Ads to AI Who Does it All for You')}
                    </SectionTitle>
                </Container>
                <Grid container spacing={smUp ? 4 : 2}
                    direction={mdUp ? "row-reverse" : 'row'}
                    className={classes.gridCon}>
                    <Grid item xs={12} md className={classes.gridItem}>
                        <Container maxWidth={{ sm: 640 }} paddingX={false}>
                            <Product />
                        </Container>
                    </Grid>
                    <Grid item xs={12} md className={classes.gridItem}>
                        <Container maxWidth={{ sm: 640 }} paddingX={false}>
                            {
                                valueList && valueList.length
                                    ?
                                    <Grid container spacing={smUp ? 4 : 2}>
                                        {
                                            valueList.map((item) => {
                                                return (
                                                    <Grid item xs={12} sm={6} md={12} key={uuidv4()}>
                                                        <Box display={'flex'}
                                                            justifyContent={mdUp ? 'flex-end' : 'flex-start'}>
                                                            <ValueItem value={item.value}
                                                                desc={item.desc}
                                                                valueColor={valueColor} />
                                                        </Box>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    : null
                            }
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};
export default AlertSection;
