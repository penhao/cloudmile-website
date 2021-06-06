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

const SupportServices = () => {
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/managing.svg',
                iconAlt: t('all-cloud-services:alt.A person icon with orange ball on head part'),
                title: t('all-cloud-services:Managed Service'),
                desc: t('all-cloud-services:Never worry about potential cloud__')
            },
            {
                icon: '/images/icons/product/24-7.svg',
                iconAlt: t('all-cloud-services:alt.Visualization of 24/7'),
                title: t('all-cloud-services:24/7 Technical Support'),
                desc: t('all-cloud-services:Local technical consultancy plus__')
            },
            {
                icon: '/images/icons/product/billing.svg',
                iconAlt: t('all-cloud-services:alt.2 white half pieces with 4 stripe within a blue square'),
                title: t('all-cloud-services:Billing Support'),
                desc: t('all-cloud-services:CloudMile helps issue invoices__')
            },
            {
                icon: '/images/icons/product/training.svg',
                iconAlt: t('all-cloud-services:alt.A person icon with 3 orange lines'),
                title: t('all-cloud-services:Training'),
                desc: t('all-cloud-services:Customized services including basic__')
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
                                {t('all-cloud-services:Support Services')}
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
                            : null
                    }
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default SupportServices;
