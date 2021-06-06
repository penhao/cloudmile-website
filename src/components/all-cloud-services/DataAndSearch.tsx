import React, { useEffect, useState } from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import useTranslation from "next-translate/useTranslation";
import IconItem from "../sections/IconItem";
import { useMediaQuery } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";

const DataAndSearch = () => {
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/data-integration.svg',
                iconAlt: t('all-cloud-services:alt.A visual of data integration'),
                title: t('all-cloud-services:Data Integration'),
                desc: t('all-cloud-services:Unleash your data\'s full potential by our cost-effective__')
            },
            {
                icon: '/images/icons/product/data-application.svg',
                iconAlt: t('all-cloud-services:alt.A square shape of visualizing data application process'),
                title: t('all-cloud-services:Data Applications'),
                desc: t('all-cloud-services:Design and utilize dashboards in a way__')
            },
            {
                icon: '/images/icons/product/cloud-discovery.svg',
                iconAlt: t('all-cloud-services:alt.A blue cloud with magnifying glass'),
                title: t('all-cloud-services:Google Cloud Search Services'),
                desc: t('all-cloud-services:No matter whether integrated with G Suite__')
            },
            {
                icon: '/images/icons/product/elasticsearch.svg',
                iconAlt: t('all-cloud-services:alt.A magnifying glass analyzing bar chart'),
                title: t('all-cloud-services:Elasticsearch Services'),
                desc: t('all-cloud-services:It doesn\'t matter whether enterprises are using__')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container maxWidth={{ xs: 'none', sm: 'none', md: 1280 }}>
                <Grid container spacing={smUp ? 4 : 2}>

                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'} />
                            <SectionTitle>
                                {t('all-cloud-services:Data & Search')}
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
                                                        desc={item.desc} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                            :
                            null
                    }
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default DataAndSearch;
