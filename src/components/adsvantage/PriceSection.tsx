import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from "../containers/Container";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import { makeStyles, withStyles, Theme, Grid, Switch, Typography, Box } from "@material-ui/core";
import useUserPrice, { UserPriceProps } from "./useUserPrice";
import useAgencyPrice, { AgencyPriceProps } from "./useAgencyPrice";
import PriceItem from "./price/PriceItem";
import { useTranslation } from 'next-translate';
import { useInView } from 'react-hook-inview';

interface Props {
    scrollChangeHadler: (target: string | null) => void;
}
const useStyles = makeStyles((theme: Theme) => ({
    section: {
        marginBottom: '120px'
    },
    title: {
        marginBottom: '34px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '74px',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '85px',
        }
    },
    switchOuter: {
        marginBottom: '30px',
        transform: 'translateX(-20px)',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '55px',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '20px',
        }
    },
    scroller: {
        display: 'flex',
        width: '100%',
        paddingBottom: '20px',
        overflowX: 'auto',
        overflowY: 'hidden'
    },
    itemCon: {
        width: '100%',
        minWidth: '1100px'
    }
}));

const StyleSwitch = withStyles((theme) => ({
    root: {
        width: 70,
        height: 28,
        padding: 0,
        margin: '0 8px',
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(42px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
            },
        },
    },
    thumb: {
        width: 24,
        height: 24,
        boxShadow: 'none',
        color: theme.palette.common.white,
    },
    track: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderRadius: 30 / 2,
        opacity: 1,
    },
    checked: {},
}))(Switch);

const PriceSection = ({ scrollChangeHadler }: Props) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const userPriceList = useUserPrice();
    const agencyPriceList = useAgencyPrice();
    const [state, setState] = useState(false);
    const handleChange = () => setState(prevState => !prevState);
    const [ref, inView] = useInView(
        {
            onEnter: () => scrollChangeHadler('price'),
            onLeave: () => scrollChangeHadler(null)
        },
    )
    return (
        <section ref={ref} className={classes.section}>
            <Container maxWidth={{ md: 1280 }}>
                <Container maxWidth={{ xs: 'none', sm: 'none', md: 1280 }} paddingX={false} centerX={false}>
                    <SectionTitleLabel color={'primary'} />
                    <SectionTitle className={classes.title}>
                        {t('adsvantage:Free trial of AI copywriter')}
                    </SectionTitle>
                </Container>
            </Container>
            <Container maxWidth={{ sm: 1140, md: 1140 }} paddingX={true}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} className={classes.switchOuter}>
                    <Typography variant={"h6"} component="div" color={!state ? 'primary' : 'inherit'}>
                        {t('adsvantage:Advertiser')}
                    </Typography>
                    <StyleSwitch checked={state} onChange={handleChange} name="priceSwitch" />
                    <Typography variant={"h6"} component="div" color={state ? 'secondary' : 'inherit'}>
                        {t('adsvantage:Agency')}
                    </Typography>
                </Box>
                <div className={classes.scroller}>
                    <Grid container spacing={4} className={classes.itemCon}>
                        {
                            !state
                                ?
                                userPriceList.map((data: UserPriceProps) => {
                                    return (
                                        <Grid item xs={4} key={uuidv4()}>
                                            <PriceItem data={data} type={'User'} />
                                        </Grid>
                                    )
                                })
                                :
                                agencyPriceList.map((data: AgencyPriceProps) => {
                                    return (
                                        <Grid item xs={6} key={uuidv4()}>
                                            <PriceItem data={data} type={'Agency'} />
                                        </Grid>
                                    )
                                })
                        }
                    </Grid>
                </div>
            </Container>
        </section>
    );
};
export default PriceSection;
