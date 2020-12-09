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
import SectionDescWrapper from "../SectionDescWrapper";
import IconItem from "../IconItem";
import useTranslation from "next-translate/useTranslation";

const GoGlobal = () => {
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
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('multi-cdn-platform:Go Global with Reliability and Protection')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>GO GLOBAL</SectionLabel>
                    </Grid>

                    {/**/}
                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 'none', sm: 'none', md: 1240}} paddingX={false}>
                            <Grid container spacing={4} alignItems={"center"}>
                                <Grid item xs={12} md={6}>
                                    <SectionDescWrapper>
                                        <Box display={'flex'} justifyContent={mdUp ? 'center' : 'flex-start'}>
                                            <Container maxWidth={{xs: 'none', sm: 430, md: 430}} paddingX={false} centerX={false}>
                                                <img src="/images/md/china-access/go-global.svg"
                                                     alt={t('multi-cdn-platform:alt.Half of the world shown with digital frontier style')}/>
                                            </Container>
                                        </Box>
                                    </SectionDescWrapper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SectionDescWrapper>
                                        <Grid container spacing={4} direction={"column"}>
                                            <Grid item xs={12}>
                                                <IconItem title={t('multi-cdn-platform:MileCDN X GCP')}
                                                          desc={t('multi-cdn-platform:As Google Cloud Premier Partner__')}
                                                          color={"primary"}/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <IconItem
                                                    title={t('multi-cdn-platform:Cyber security and performance optimization')}
                                                    desc={t('multi-cdn-platform:MileCDN can effectively mitigate attacks from__')}
                                                    color={"primary"}/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <IconItem
                                                    title={t('multi-cdn-platform:Multi-CDN service management platform')}
                                                    desc={t('multi-cdn-platform:Automatically reroute your CDN for__')}
                                                    color={"primary"}/>
                                            </Grid>
                                        </Grid>

                                    </SectionDescWrapper>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default GoGlobal;

