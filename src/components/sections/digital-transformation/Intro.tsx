import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "../../containers/Container";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionDesc from "../SectionDesc";
import SectionDescWrapper from "../SectionDescWrapper";
import SectionContainer from "../../containers/SectionContainer";
import useTranslation from "next-translate/useTranslation";
import {useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";


const Intro = () => {
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <SectionContainer>
            <Container maxWidth={{md: 1280}}>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'}/>
                            <SectionTitle>
                                {t('digital-transformation:Why is Digital Transformation important for your company?')}
                            </SectionTitle>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SectionDescWrapper>
                            <SectionDesc>
                                {t('digital-transformation:Digital Transformation (DT) refers to__')}
                            </SectionDesc>
                        </SectionDescWrapper>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default Intro;
