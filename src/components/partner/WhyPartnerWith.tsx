import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import { Grid, Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import IconQuote from "../icons/IconQuote";
import useTranslation from "next-translate/useTranslation";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => ({
    desc: {
        fontWeight: 600,
        fontStyle: 'italic',
        marginBottom: '40px'
    },
    cloudflare: {
        width: '100%',
        maxWidth: '240px',
        marginBottom: '10px',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '440px',
            marginBottom: '20px',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '440px',
            marginBottom: '10px',
        }
    }
}));

const WhyPartnerWith = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
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
                                    {t('partner:Why partner with CloudMile?')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>PARTNER</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth={{ md: 1240 }} paddingX={false}>
                            <SectionDescWrapper>
                                <Box width="100%" display={'flex'} justifyContent={'flex-end'}>
                                    <img src="/images/logos/cloudflare-logo.svg"
                                        alt={t('partner:alt.CloudFare Logo')}
                                        className={classes.cloudflare} />
                                </Box>
                                <Container maxWidth={{ md: 920 }} paddingX={false}>
                                    <IconQuote lang={lang} />
                                    <Typography variant={"h4"} className={classes.desc}>
                                        {t('partner:As one of Cloudflare’s leading partners in__')}
                                    </Typography>
                                    <Typography variant={"body1"}>
                                        <span dangerouslySetInnerHTML={{
                                            __html: t('partner:Stephen Lo__')
                                        }} />
                                    </Typography>
                                </Container>
                            </SectionDescWrapper>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default WhyPartnerWith;
