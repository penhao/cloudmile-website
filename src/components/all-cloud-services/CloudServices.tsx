import React, { useEffect, useState } from 'react';
import Container from "../containers/Container";
import SectionContainer from "../containers/SectionContainer";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import IconItem from "../sections/IconItem";
import useTranslation from "next-translate/useTranslation";
import { Theme, useMediaQuery } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import { isValueEmpty } from "../../utils/Utils";
import clsx from "clsx";
import IconLaunch from "../icons/IconLaunch";
import NavLink from "../links/NavLink";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useLinkStyles } from "../links/LinkStyles";

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        marginTop: '20px'
    }
}));
const CloudServices = () => {
    const { t, lang } = useTranslation();
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/multi-cloud.svg',
                iconAlt: t('all-cloud-services:alt.Grey, Orange, and Blue Clouds'),
                title: t('all-cloud-services:Hybrid Cloud / Multi-Cloud'),
                desc: t('all-cloud-services:CloudMile provides a seamless integration of__')
            },
            {
                icon: '/images/icons/product/cloud-migration.svg',
                iconAlt: t('all-cloud-services:alt.Merging Blue and Orange Cloud'),
                title: t('all-cloud-services:Cloud Migration'),
                desc: t('all-cloud-services:Offering customized migration plans__'),
                link: '/cloud/solutions/cloud-migration'
            },
            {
                icon: '/images/icons/product/cloud-architecture.svg',
                iconAlt: t('all-cloud-services:alt.Blue Cloud with lines'),
                title: t('all-cloud-services:Cloud Architecture'),
                desc: t('all-cloud-services:Experienced in serving hundreds of clients__')
            },
            {
                icon: '/images/icons/product/cloud-security.svg',
                iconAlt: t('all-cloud-services:alt.Blue Cloud with orange lines'),
                title: t('all-cloud-services:Cloud Security'),
                desc: t('all-cloud-services:Collaborate with Cloudflare__')
            },
            {
                icon: '/images/icons/product/google-map.svg',
                iconAlt: t('all-cloud-services:alt.Blue and Orange balloon combining'),
                title: t('all-cloud-services:Google Maps Services'),
                desc: t('all-cloud-services:By providing maps solutions suggestion__')
            },
            {
                icon: '/images/icons/product/sap.svg',
                iconAlt: t('all-cloud-services:alt.SAP geometric written format'),
                title: t('all-cloud-services:SAP on Google Cloud'),
                desc: t('all-cloud-services:CloudMile provides SAP clients guidance and support__')
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
                                {t('all-cloud-services:Cloud Services')}
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
                                            const hasLink = !isValueEmpty(item.link);
                                            console.log(hasLink);
                                            return (
                                                <Grid item xs={12} sm={6} md={3} key={index}>
                                                    <IconItem icon={item.icon}
                                                        iconAlt={item.iconAlt}
                                                        title={item.title}
                                                        desc={item.desc} />
                                                    {
                                                        hasLink
                                                            ?
                                                            <NavLink hrefPath={item.link}
                                                                classNames={clsx(classes.link, linkClasses.iconLink)}>
                                                                <IconLaunch />
                                                            </NavLink>
                                                            :
                                                            null
                                                    }
                                                </Grid>
                                            );
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
export default CloudServices;
