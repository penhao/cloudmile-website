import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from "../containers/Container";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import { makeStyles, Theme, useTheme, useMediaQuery, Grid, Box, Hidden, ThemeProvider } from "@material-ui/core";
import GridItemFlexible from "../sections/items/GridItemFlexible";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import ShiftContainer from "../containers/ShiftContainer";
import IconItem from "../sections/IconItem";
import GridItem480 from "../sections/items/GridItem480";
import GlobalTheme from "../../mui/GlobalTheme";
import { useTranslation } from 'next-translate';

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        marginBottom: '35px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '60px',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '25px',
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
    }
}));
const ToolsSection = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [valueList, setValueList] = useState([]);
    useEffect(() => {
        setValueList([
            {
                icon: '/images/icons/icon-agency.svg',
                iconAlt: '',
                title: t('adsvantage:Advertising Agency'),
                desc: t('adsvantage:Ads account management with multiple segments helps you evaluate advertising performance')
            },
            {
                icon: '/images/icons/icon-e-commerce.svg',
                iconAlt: '',
                title: t('adsvantage:E-commerce & Retails'),
                desc: t('adsvantage:From product copywriting, advertising to performance monitoring')
            },
            {
                icon: '/images/icons/icon-markting.svg',
                iconAlt: '',
                title: t('adsvantage:Brand Ｍarketer'),
                desc: t('adsvantage:Save your time for more important tasks')
            }
        ])
    }, [lang])
    return (
        <section className={classes.section}>
            <Container maxWidth={{ md: 1280 }}>
                <Container maxWidth={{ xs: 'none', sm: 'none', md: '' }} paddingX={false} centerX={false}>
                    <SectionTitleLabel color={'primary'} />
                    <SectionTitle className={classes.title}>
                        {t('adsvantage:Your Best AI Advertising Tool')}
                    </SectionTitle>
                </Container>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Hidden only={'sm'}>
                        <GridItem480 grow={true} />
                    </Hidden>
                    {
                        (valueList && valueList.length)
                            ?
                            <GridItemFlexible grow={true} overflow={"visible"}>
                                <SectionDescWrapper>
                                    <Container maxWidth={{ xs: 'none', sm: 'none', md: 760 }} paddingX={false}
                                        centerX={false}>
                                        <ShiftContainer shiftX={{ md: -160 }} growX={{ md: true }}>
                                            <ThemeProvider theme={GlobalTheme}>
                                                <Grid container spacing={4}>
                                                    {
                                                        valueList.map((item: any, index: number) => {
                                                            return (
                                                                <Grid item xs={12} md={4} key={uuidv4()}>
                                                                    <IconItem icon={item.icon}
                                                                        iconAlt={item.iconAlt}
                                                                        title={item.title}
                                                                        desc={item.desc}
                                                                        color={'primary'} />
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </ThemeProvider>
                                        </ShiftContainer>
                                    </Container>
                                </SectionDescWrapper>
                            </GridItemFlexible>
                            :
                            null
                    }
                </Grid>
            </Container>
        </section>
    );
};
export default ToolsSection;
