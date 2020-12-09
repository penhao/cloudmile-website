import React from 'react';
import Container from "../../containers/Container";
import SectionContainer from "../../containers/SectionContainer";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import ResponseImage from "../../Images/ResponseImage";
import useTranslation from "next-translate/useTranslation";

const Investors = () => {
    const {t, lang} = useTranslation();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    const getPrefixImgUrl = (url: string) => {
        const splitArr = url.split('.');
        return `${splitArr[0]}${lang === 'en' ? '' : '-zh'}.${splitArr[1]}`;
    };
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('team:Investors')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>INVESTORS</SectionLabel>
                    </Grid>

                    <Grid item xs={12}>
                        <Container maxWidth={{xs: 200, sm: 540, md: 960}} paddingX={false}>
                            <Grid container spacing={4} alignItems={"center"}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <ResponseImage imageUrl={getPrefixImgUrl('/team/blackmarble.jpg')}
                                                   alt={t('team:alt.A list of CloudMile\'s investors')}/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <ResponseImage imageUrl={getPrefixImgUrl('/team/substance-capital.jpg')}
                                                   alt={t('team:alt.A list of CloudMile\'s investors')}/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <ResponseImage imageUrl={getPrefixImgUrl('/team/cdib-capital-group.jpg')}
                                                   alt={t('team:alt.A list of CloudMile\'s investors')}/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <ResponseImage imageUrl={getPrefixImgUrl('/team/taiwan-cooperative-venture-capital.jpg')}
                                                   alt={t('team:alt.A list of CloudMile\'s investors')}/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <ResponseImage imageUrl={getPrefixImgUrl('/team/fullerton.jpg')}
                                                   alt={t('team:alt.A list of CloudMile\'s investors')}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>

                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default Investors;
