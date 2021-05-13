import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../../components/containers/Container";
import SectionTitleLabel from "../../components/sections/SectionTitleLabel";
import SectionTitle from "../../components/sections/SectionTitle";
import {makeStyles, Theme, Grid} from '@material-ui/core';
import {useTranslation} from 'next-translate';
import SeminarSlider from "./SeminarSlider";

interface Props {
    data: any
}

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: '40px'
    },
    sliderOuter: {
        display: 'flex',
        '& > div': {
            margin: '0 -20px'
        }
    }
}));

function SeminarSection({data}: Props) {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <React.Fragment>
            {
                data && data.length
                    ?
                    <SectionContainer>
                        <Container maxWidth={{md: 1280}}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false}
                                               centerX={false}>
                                        <SectionTitleLabel color={'warning'}/>
                                        <SectionTitle className={classes.title}>
                                            {t('google-workspace:Latest Seminar')}
                                        </SectionTitle>
                                    </Container>
                                </Grid>
                                <Grid item xs={12}>
                                    <SeminarSlider data={data}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </SectionContainer>
                    : null
            }
        </React.Fragment>
    )
}

export default SeminarSection
