import React from 'react';
import Container from "../containers/Container";
import { Grid, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import Typography from "@material-ui/core/Typography";
import SectionContainer from "../containers/SectionContainer";
import useTranslation from "next-translate/useTranslation";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionDesc from "../sections/SectionDesc";
import ResponseImage from "../Images/ResponseImage";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ShiftContainer from "../containers/ShiftContainer";
import ColorGraphic from "../sections/ColorGraphic";
import Hidden from "@material-ui/core/Hidden";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: '20px'
    },
    logo: {
        margin: '0 auto'
    },
    logos: {
        marginTop: '40px',
        marginBottom: '40px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px',
            marginBottom: '80px',
        }
    },
    badge: {
        position: 'relative',
        width: '100%',
        maxWidth: '168px',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
        }
    },
    badgeRadius: {
        borderRadius: '99em',
        border: `1px solid ${theme.palette.grey["200"]}`,
    },
    badges: {
        marginTop: '60px'
    },
    colorDot: {
        position: 'absolute',
        left: '-175px',
        top: '55px'
    }
}));
const PartnerNetworks = () => {

    const classes = useStyles();
    const { t } = useTranslation();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={mdUp ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{ sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'} />
                                <SectionTitle>
                                    {t('partner:CloudMile Partner Networks')}
                                </SectionTitle>
                                <Hidden xsDown>
                                    <ColorGraphic type={"dot"} size={350} color={"primary"}
                                        customClass={classes.colorDot} />
                                </Hidden>
                            </Container>
                        </Box>
                        <SectionLabel>PARTNER</SectionLabel>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{ md: 600 }} paddingX={false} centerX={false}>
                            <SectionDescWrapper>
                                <SectionDesc>
                                    <span dangerouslySetInnerHTML={{
                                        __html: t('partner:Our global industry-leading strategic and__')
                                    }} />
                                </SectionDesc>
                                <ShiftContainer shiftX={{ md: -160 }} growX={{ md: 160 }}>
                                    <Grid container spacing={4} alignItems={"center"} className={classes.logos}>
                                        <Grid item xs={6} sm={4}>
                                            <ResponseImage imageUrl={'/partner/cloudflare-logo-black.jpg'}
                                                alt={t('partner:alt.The Logos of CloudMile\'s Business Partners')}
                                                maxWidth={{ xs: 200, sm: 200, md: 200 }}
                                                customClass={classes.logo} />
                                        </Grid>
                                        <Grid item xs={6} sm={4}>
                                            <ResponseImage imageUrl={'/partner/elastic-logo.jpg'}
                                                alt={t('partner:alt.The Logos of CloudMile\'s Business Partners')}
                                                maxWidth={{ xs: 130, sm: 130, md: 130 }}
                                                customClass={classes.logo} />
                                        </Grid>
                                        <Grid item xs={6} sm={4}>
                                            <ResponseImage imageUrl={'/partner/workplace-from-facebook.jpg'}
                                                alt={t('partner:alt.The Logos of CloudMile\'s Business Partners')}
                                                maxWidth={{ xs: 190, sm: 190, md: 190 }}
                                                customClass={classes.logo} />
                                        </Grid>

                                        <Grid item xs={6} sm={4}>
                                            <ResponseImage imageUrl={'/partner/google-cloud-logo.jpg'}
                                                alt={t('partner:alt.The Logos of CloudMile\'s Business Partners')}
                                                maxWidth={{ xs: 230, sm: 230, md: 230 }}
                                                customClass={classes.logo} />
                                        </Grid>
                                        <Grid item xs={6} sm={4}>
                                            <ResponseImage imageUrl={'/partner/shi-fang-logo.jpg'}
                                                alt={t('partner:alt.The Logos of CloudMile\'s Business Partners')}
                                                maxWidth={{ xs: 200, sm: 200, md: 200 }}
                                                customClass={classes.logo} />
                                        </Grid>
                                        <Grid item xs={6} sm={4}>
                                            <ResponseImage imageUrl={'/partner/lucidworks-logo.jpg'}
                                                alt={t('partner:alt.The Logos of CloudMile\'s Business Partners')}
                                                maxWidth={{ xs: 220, sm: 220, md: 220 }}
                                                customClass={classes.logo} />
                                        </Grid>
                                    </Grid>
                                </ShiftContainer>
                                <ShiftContainer shiftX={{ sm: -160, md: -160 }} growX={{ sm: 160, md: 160 }}>
                                    <Typography variant={"h5"} color={"primary"} className={classes.title}>
                                        {t('partner:We are Google Cloud Premier Partner')}
                                    </Typography>
                                </ShiftContainer>
                                <Typography variant={"body1"}>
                                    {t('partner:Earned 40+ Google Cloud official certificates and__')}
                                </Typography>
                                <ShiftContainer shiftX={{ sm: -160, md: -160 }} growX={{ sm: 160, md: 160 }}>
                                    <Grid container spacing={4} alignItems={"center"} className={classes.badges}>
                                        <Grid item xs={6} sm={3}>
                                            <ResponseImage imageUrl={'/partner/msp-badge.png'}
                                                alt={''}
                                                maxWidth={{ xs: 168, sm: 168, md: 168 }}
                                                customClass={classes.badge} />
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <ResponseImage imageUrl={'/partner/data-analytic-badge.png'}
                                                alt={t('partner:alt.Certification of Google Cloud Partner with the Specialization in Data Analytics')}
                                                maxWidth={{ xs: 168, sm: 168, md: 168 }}
                                                customClass={clsx(classes.badge, classes.badgeRadius)} />
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <ResponseImage imageUrl={'/partner/machine-learning-badge.png'}
                                                alt={t('partner:alt.Certification of Google Cloud Partner with the Specialization in Machine Learning')}
                                                maxWidth={{ xs: 168, sm: 168, md: 168 }}
                                                customClass={clsx(classes.badge, classes.badgeRadius)} />
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <ResponseImage imageUrl={'/partner/infrastructure-badge.png'}
                                                alt={t('partner:alt.Certification of Google Cloud Partner with the Specialization in Infrastructure')}
                                                maxWidth={{ xs: 168, sm: 168, md: 168 }}
                                                customClass={clsx(classes.badge, classes.badgeRadius)} />
                                        </Grid>
                                    </Grid>
                                </ShiftContainer>
                            </SectionDescWrapper>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default PartnerNetworks;
