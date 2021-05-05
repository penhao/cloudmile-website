import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from "../containers/Container";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import { makeStyles, Theme, useTheme, useMediaQuery, Grid, Box } from "@material-ui/core";
import ValueItem from "./ValueItem";
import RatioContainer from "../containers/RatioContainer";
import Product from "./aiwriter/Product";
import { useTranslation } from 'next-translate';

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        position: 'relative',
        padding: '70px 0 70px 0',
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            padding: '110px 0 130px 0',
            marginBottom: '50px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '120px 0 280px 0',
            marginBottom: '20px'
        }
    },
    bg: {
        position: 'absolute',
        width: 'auto',
        height: '100%',
        top: 0,
        left: '50%',
        transform: 'translateX(-41%)',
        [theme.breakpoints.up('sm')]: {
            transform: 'translateX(-45%)',
        },
        [theme.breakpoints.up('md')]: {
            transform: 'translateX(-54.5%)',
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
        display: 'block',
        fontSize: '20px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '24px',
            textIndent: '6px'
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
    }
}));
const AIWriterSection = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation()
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const valueColor = useTheme().palette.common.white;
    const [valueList, setValueList] = useState([]);

    useEffect(() => {
        setValueList([
            {
                value: `3&nbsp;<span>sec</span>`,
                desc: t('adsvantage:One ads content in three seconds, 80% of time spent on content brainstorming is saved')
            },
            {
                value: `5,000,000+`,
                desc: t('adsvantage:Millions of Ads copy database across over 20 industries')
            }
        ])
    }, [lang])



    return (
        <section className={classes.section}>
            <img src="/images/md/adsvantage/aiwriter/aiwriter-bg.svg" alt="" className={classes.bg} />
            <Container maxWidth={{ md: 1280 }}>
                <Container maxWidth={{ xs: 'none', sm: 'none', md: 'none' }} paddingX={false} centerX={false}>
                    <SectionTitleLabel color={'white'} className={classes.label}>{t('adsvantage:AI Copywriter')}</SectionTitleLabel>
                    <SectionTitle className={classes.title}>{t('adsvantage:Smart Copywriter with Amazing Creativity')}</SectionTitle>
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
                                                    <Grid item xs={12} sm={6} md={12} key={uuidv4()}>
                                                        <ValueItem value={item.value}
                                                            desc={item.desc}
                                                            valueColor={valueColor} />
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    :
                                    null
                            }
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};
export default AIWriterSection;
