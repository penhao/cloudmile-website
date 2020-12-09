import React from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionDescWrapper from "../SectionDescWrapper";
import SectionDesc from "../SectionDesc";
import useTranslation from "next-translate/useTranslation";
import {useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";

const Intro = () => {
    const {t} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <SectionContainer>
            <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}}>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'}/>
                            <SectionTitle>
                                {t('data-driven-business:Why Data-Driven Approach Matters for Your Business?')}
                            </SectionTitle>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SectionDescWrapper>
                            <SectionDesc>
                                {t('data-driven-business:Well, it’s simple__')}
                            </SectionDesc>
                        </SectionDescWrapper>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default Intro;
