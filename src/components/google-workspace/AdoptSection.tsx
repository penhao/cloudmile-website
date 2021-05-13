import React from "react";
import Container from "../containers/Container";
import { Grid, Hidden, useMediaQuery, useTheme, Typography, Theme } from "@material-ui/core";
import { useTranslation } from "next-translate";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import ShiftContainer from "../containers/ShiftContainer";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SectionContainer from "../containers/SectionContainer";
import useAdoptStepList, { IDetailItem } from "./useAdoptStepList";
import AdoptStepList from "./AdoptStepList";


const useStyles = makeStyles((theme: Theme) => ({
    stepListOuter: {
        width: '100%',
        overflowY: 'hidden',
        overflowX: 'auto'
    },
    stepList: {
        width: '1240px'
    }
}));
const AdoptSection = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const stepList = useAdoptStepList();
    return (
        <SectionContainer>
            <Container maxWidth={{ md: 1280 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'} />
                                <SectionTitle>
                                    {t('google-workspace:How to adopt Google Workspace?')}
                                </SectionTitle>
                            </Container>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={4}>
                            <Hidden smDown>
                                <Grid item xs={12} md={6} />
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Container paddingX={false} centerX={false}
                                    maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                                    <ShiftContainer shiftX={{ md: -160 }} growX={{ md: true }}>
                                        <SectionDescWrapper>
                                            <Typography variant={"body1"}>
                                                {t('google-workspace:Small businesses can choose to purchase configurable services directly due to their simple staffing')}
                                            </Typography>
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <AdoptStepList />
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    )
};
export default AdoptSection;