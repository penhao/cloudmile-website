import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import useTranslation from "next-translate/useTranslation";
import SectionDesc from "../sections/SectionDesc";

const ApplyJobs = () => {
    const { t } = useTranslation();
    return (
        <SectionContainer>
            <Container maxWidth={{ xs: 'none', sm: 'none', md: 1280 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <SectionTitleLabel color={'warning'} />
                        <SectionTitle>
                            {t('career:Apply to Jobs at CloudMile')}
                        </SectionTitle>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SectionDesc>
                            <span dangerouslySetInnerHTML={{
                                __html: t('career:Now deliver your resume to__')
                            }} />
                        </SectionDesc>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default ApplyJobs;
