import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from "../containers/Container";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import { makeStyles, Theme, useTheme, useMediaQuery, Grid, Box } from "@material-ui/core";
import ValueItem from "./ValueItem";
import Product from "./dashboard/Product";
import { useTranslation } from 'next-translate';

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        position: 'relative',
        padding: '55px 0 90px 0',
        marginBottom: '75px',
        [theme.breakpoints.up('sm')]: {
            padding: '120px 0 35px 0',
            marginBottom: '60px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '115px 0 210px 0',
            marginBottom: '65px'
        }
    },
    title: {
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '65px',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '85px',
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
        borderRadius: '5px',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            // maxWidth: '740px',
        }
    },
    productInner: {
        position: 'absolute',
        width: '96.2%',
        height: '100%',
        top: 0,
        right: 0
    },
    bg: {
        position: 'absolute',
        width: 'auto',
        height: '100%',
        top: 0,
        left: '50%',
        transform: 'translateX(-55%)',
        [theme.breakpoints.up('sm')]: {
            transform: 'translateX(-44%)'
        },
        [theme.breakpoints.up('md')]: {
            transform: 'translateX(-62%)'
        }
    },
    productBg: {
        position: 'absolute',
        width: '600px',
        left: '-105px',
        top: '-50px',
    }
}));
const DashboardSection = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [valueList, setValueList] = useState([]);
    const valueColor = smUp ? useTheme().palette.secondary.light : useTheme().palette.secondary.main
    useEffect(() => {
        setValueList([
            {
                value: `User friendly`,
                desc: t('adsvantage:User dashboard simply visualizes the marketing strategy and advertising effect')
            },
            {
                value: `1&nbsp;<span>click</span>`,
                desc: t('adsvantage:Control the advertising costs in no time, and you are one click away from releasing your product advertisement')
            }
        ])
    }, [lang])
    return (
        <section className={classes.section}>
            <img src="/images/md/adsvantage/dashboard/dashboard-bg.svg" alt="" className={classes.bg} />
            <Container maxWidth={{ md: 1280 }}>
                <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                    <SectionTitleLabel color={'secondary.light'} className={classes.label}>
                        {t('adsvantage:Cross-platform charts and dashboard')}
                    </SectionTitleLabel>
                    <SectionTitle className={classes.title}>
                        {t('adsvantage:Find the information you are looking for at a glance on a clear chart')}
                    </SectionTitle>
                </Container>
                <Grid container spacing={smUp ? 4 : 2} className={classes.gridCon}>
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
                                                    <Grid item xs={12} key={uuidv4()}>
                                                        <ValueItem value={item.value} desc={item.desc}
                                                            valueColor={valueColor} />
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
export default DashboardSection;
