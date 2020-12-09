import React, {useEffect, useState} from 'react';
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import SectionContainer from "../../containers/SectionContainer";
import IconItem from "../IconItem";
import useTranslation from "next-translate/useTranslation";
import {useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";


const MachineLearning = () => {
    const {t, lang} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/machine-learning.svg',
                iconAlt: t('all-cloud-services:alt.3 small data clusters'),
                title: t('all-cloud-services:Machine Learning (ML)'),
                desc: t('all-cloud-services:Leverage the power of Machine learning__')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}}>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{xs: 'none', sm: 600, md: 600}} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'}/>
                            <SectionTitle>
                                {t('all-cloud-services:Machine Learning')}
                            </SectionTitle>
                        </Container>
                    </Grid>
                    {
                        (list && list.length)
                            ?
                            <Grid item xs={12}>
                                <Grid container spacing={smUp ? 4 : 2}>
                                    {
                                        list.map((item: any, index: number) => {
                                            return (
                                                <Grid item xs={12} sm={6} md={3} key={index}>
                                                    <IconItem icon={item.icon}
                                                              iconAlt={item.iconAlt}
                                                              title={item.title}
                                                              desc={item.desc}/>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                            : null
                    }
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default MachineLearning;
