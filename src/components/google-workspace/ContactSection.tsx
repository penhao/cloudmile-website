import React from 'react'
import { useTranslation } from 'next-translate';
import { useInView } from 'react-hook-inview';
import ADSvantageForm from "../forms/ADSvantageForm";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionContainer from "../containers/SectionContainer";


function ContactSection() {
    const { t, lang } = useTranslation();
    return (
        <SectionContainer>
            <Container maxWidth={{ xs: 'none', sm: 'none', md: 1280 }}>
                <Grid container spacing={4} direction={"row-reverse"}>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false}
                                   centerX={false}>
                            <SectionTitleLabel color={'secondary'}>
                                {t('google-workspace:Contact Us')}
                            </SectionTitleLabel>
                            <SectionTitle>
                                {t('google-workspace:Transforming How Enterprises Work')}
                            </SectionTitle>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ADSvantageForm />
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    )
}

export default ContactSection
