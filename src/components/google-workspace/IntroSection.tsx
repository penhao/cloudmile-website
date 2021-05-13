import React from "react";
import Container from "../containers/Container";
import { Grid, Hidden, useMediaQuery, useTheme, Typography, Theme } from "@material-ui/core";
import { useTranslation } from "next-translate";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import ShiftContainer from "../containers/ShiftContainer";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SectionContainer from "../containers/SectionContainer";


const useStyles = makeStyles((theme: Theme) => ({
    desc: {
        margin: '20px 0',
        [theme.breakpoints.up('sm')]: {
            margin: '40px 0',
        }
    },
    iconsFiveUp: {
        position: 'relative',
        maxWidth: '650px',
        margin: '0 auto'
    }
}));
const IntroSection = () => {
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'} />
                                <SectionTitle>
                                    Google Workspace
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>Google Workspace</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={smUp ? 4 : 2}>
                            <Hidden smDown>
                                <Grid item xs={12} md={6} />
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Container paddingX={false} centerX={false} maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                                    <ShiftContainer shiftX={{ md: -160 }} growX={{ md: true }}>
                                        <SectionDescWrapper>
                                            <img src="/images/md/google-workspace/google-workspace.svg" alt="" />
                                            <Typography variant={"body1"} className={classes.desc}>
                                                Google Workspace (formerly G Suite) is an integrated workspace tool developed by
                                                Google Cloud. All Google Workspace plans provide a custom email for your
                                                business and includes collaboration tools like Gmail, Calendar, Drive, Docs, and
                                                more. Not only adding more advanced functions to collaboration and video, but
                                                also making more layers in version and price positioning, Google Workspace
                                                provides more diversified version options for enterprises.
                                            </Typography>
                                            <img src="/images/md/google-workspace/five-up.svg" alt=""
                                                className={classes.iconsFiveUp} />
                                        </SectionDescWrapper>
                                    </ShiftContainer>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    )
};
export default IntroSection;