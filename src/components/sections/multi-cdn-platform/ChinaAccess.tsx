import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Grid from "@material-ui/core/Grid";
import SectionContainer from "../../containers/SectionContainer";
import Box from "@material-ui/core/Box";
import Container from "../../containers/Container";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import ResponseImage from "../../Images/ResponseImage";
import IconItem from "../IconItem";
import useTranslation from "next-translate/useTranslation";


const useStyles = makeStyles((theme: Theme) => ({
    wrapper1: {
        paddingBottom: '20px',
        [theme.breakpoints.up('md')]: {
            paddingBottom: '40px'
        }
    },
    wrapper2: {
        paddingTop: '20px',
        paddingBottom: '20px',
        [theme.breakpoints.up('md')]: {
            paddingTop: '40px',
            paddingBottom: '40px'
        }
    },
    itemWrapper: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '100px'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0
        }
    }
}));
const ChinaAccess = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'}
                             justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}>
                                    {t('multi-cdn-platform:Reach Chinese Audience via__')}
                                </SectionTitleLabel>
                                <SectionTitle>
                                    {t('multi-cdn-platform:China Access')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>DAILY TASKS EFFECTIVELY</SectionLabel>
                    </Grid>

                    {/**/}
                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 'none', sm: 500, md: 1240}} paddingX={false} className={classes.wrapper1}>
                            <Grid container spacing={4} alignItems={"center"}>
                                <Grid item xs={12} md={6}>
                                    <Box display={'flex'} justifyContent={mdUp ? 'flex-end' : 'flex-start'}>
                                        <Container maxWidth={{xs: 'none', sm: 'none', md: 430}} paddingX={false} centerX={false}>
                                            <ResponseImage imageUrl={'/china-access/china-access.jpg'}
                                                           alt={t('multi-cdn-platform:alt.South Korea, Taiwan, Thailand, Hong Kong, Vietnam and China clusters')}/>
                                        </Container>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box display={'flex'} justifyContent={'center'} className={classes.itemWrapper}>
                                        <IconItem
                                            title={t('multi-cdn-platform:Allow people to access your website from China')}
                                            desc={t('multi-cdn-platform:To ensure the performance__')}
                                            color={"initial"}
                                            maxWidth={{xs: 'none', sm: 'none', md: 440}}/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>

                    {/**/}
                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 'none', sm: 500, md: 1240}} paddingX={false} className={classes.wrapper2}>
                            <Grid container spacing={4} direction={mdUp ? "row-reverse" : "row"}
                                  alignItems={"center"}>
                                <Grid item xs={12} md={6}>
                                    <Container maxWidth={{xs: 'none', sm: 'none', md: 480}} paddingX={false} centerX={false}>
                                        <ResponseImage imageUrl={'/china-access/cdn-chart.jpg'}
                                                       alt={t('multi-cdn-platform:alt.MileCDN AI Load Balancing')}/>
                                    </Container>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box display={'flex'} justifyContent={'center'} className={classes.itemWrapper}>
                                        <IconItem
                                            title={t('multi-cdn-platform:CDN optimization drilled down to city/province level')}
                                            desc={t('multi-cdn-platform:In addition, with AI Allocation of__')}
                                            color={"initial"}
                                            maxWidth={{xs: 'none', sm: 'none', md: 440}}/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default ChinaAccess;

