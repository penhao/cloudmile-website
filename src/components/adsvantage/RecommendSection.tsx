import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from "../containers/Container";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import { makeStyles, Theme, useTheme, useMediaQuery, Grid, Box } from "@material-ui/core";
import ValueItem from "./ValueItem";
import ShiftContainer from "../containers/ShiftContainer";
import IconItem from "../sections/IconItem";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import { useTranslation } from 'next-translate';

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        position: 'relative',
        padding: '70px 0 70px 0',
        marginBottom: '55px',
        [theme.breakpoints.up('sm')]: {
            padding: '85px 0 90px 0',
            marginBottom: '60px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '210px 0 150px 0',
            marginBottom: '75px'
        }
    },
    bg: {
        position: 'absolute',
        width: 'auto',
        height: '100%',
        top: 0,
        left: '50%',
        transform: 'translateX(-38%)',
        [theme.breakpoints.up('sm')]: {
            transform: 'translateX(-50%)'
        },
        [theme.breakpoints.up('md')]: {
            transform: 'translateX(-76.8%)'
        }
    },
}));
const RecommendSection = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const [valueList, setValueList] = useState([]);
    const valueColor = useTheme().palette.primary.main;
    useEffect(() => {
        setValueList([
            {
                value: `5,000+`,
                desc: t('adsvantage:Advertising accounts')
            },
            {
                value: `20+`,
                desc: t('adsvantage:Industry types')
            },
            {
                value: `500${t('adsvantage:million')}+`,
                desc: t('adsvantage:Advertising copywriting')
            }
        ])
    }, [lang])
    return (
        <section className={classes.section}>
            <img src="/images/md/adsvantage/recommend-bg.svg" alt="" className={classes.bg} />
            <Container maxWidth={{ md: 1280 }}>
                <Grid container spacing={4} alignItems={"center"}>
                    <Grid item xs={12} md={6}>
                        <SectionTitleLabel color={'primary'} />
                        <SectionTitle color={useTheme().palette.primary.main}>
                            {t('adsvantage:Recognized and admired by customers')}
                        </SectionTitle>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SectionDescWrapper>
                            <Grid container spacing={4}>
                                {
                                    valueList && valueList.length
                                        ?
                                        valueList.map((item) => {
                                            return (
                                                <Grid item xs={12} key={uuidv4()}>
                                                    <ValueItem value={item.value} desc={item.desc}
                                                        valueColor={valueColor} />
                                                </Grid>
                                            )
                                        })
                                        : null
                                }
                            </Grid>
                        </SectionDescWrapper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};
export default RecommendSection;
