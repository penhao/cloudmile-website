import React from 'react';
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import useTranslation from "next-translate/useTranslation";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    banner: {
        position: 'relative',
        backgroundColor: theme.palette.grey["100"],
        '&::before': {
            position: 'absolute',
            display: 'block',
            content: '""',
            width: '100%',
            height: '20px',
            left: 0,
            top: '20px',
            backgroundColor: theme.palette.warning.main
        }
    },
    bannerInner: {
        paddingTop: '40px',
        paddingBottom: '80px',
    }
}));
const EventListBanner = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <Container maxWidth={{ md: 1280 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} className={classes.banner}>
                    <div className={classes.bannerInner}>
                        <SectionTitleLabel color={'warning'}>
                            {t('event:Read the Latest CloudMile News & Events')}
                        </SectionTitleLabel>
                        <SectionTitle color={'black'} variant={"h2"} component={"h1"}>
                            {t('event:CloudMile Event')}
                        </SectionTitle>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};
export default EventListBanner;
