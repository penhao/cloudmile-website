import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionLabel from "../SectionLabel";
import Hidden from "@material-ui/core/Hidden";
import ShiftContainer from "../../containers/ShiftContainer";
import SectionDescWrapper from "../SectionDescWrapper";
import TransformationDescList from "./TransformationDescList";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";
import IconLaunch from "../../icons/IconLaunch";


const TransformationProgram = () => {
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp?4:2} direction={mdUp ? "row-reverse" : "row"} alignItems={"flex-end"}>
                    <Hidden smDown>
                        <Grid item xs={12} md={6}/>
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('digital-transformation:CloudMile AI Transformation Program')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>ADOPTION PROGRAM</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={smUp?4:2}>
                            <Hidden smDown>
                                <Grid item xs={12} md={6}/>
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Container paddingX={false} centerX={false}
                                           maxWidth={{xs: 'none', sm: 'none', md: 600}}>
                                    <ShiftContainer shiftX={{md: -320}} growX={{md: true}}>
                                        <SectionDescWrapper>
                                            <Typography variant={"body1"} dangerouslySetInnerHTML={
                                                {__html:t('digital-transformation:With the experience of over 10 different__')}
                                            }/>
                                            <TransformationDescList/>
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Container>
                            </Grid>
                            <Hidden mdUp>
                                <Grid item xs={12}>
                                    <Box display={'flex'} justifyContent={'flex-end'}>
                                        <IconLaunch active={true}/>
                                    </Box>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </SectionContainer>
    );
};
export default TransformationProgram;
