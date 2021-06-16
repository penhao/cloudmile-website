import React, { Fragment, useEffect, useState } from 'react';
import Layout from "../components/Layout";
import PageBanner from "../components/banner/PageBanner";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SectionContainer from "../components/containers/SectionContainer";
import NavLink from "../components/links/NavLink";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

import Offices, { IOffice } from "../@share/Offices";
import OfficeInfo from "../components/sections/OfficeInfo";
import ContactForm from "../components/forms/ContactForm";
import useTranslation from "next-translate/useTranslation";
import { useLinkStyles } from "../components/links/LinkStyles";
import { useRouter } from 'next/router';
import { getMetadada } from '../@share/routes/Metadata';
import { getBreadcrumb } from '../@share/routes/Routes';
import Container from '../components/containers/Container';
import Breadcrumbs from "../components/Breadcrumb";

const useStyles = makeStyles((theme: Theme) => ({
    bannerWrapper: {
        width: '100%',
        // marginBottom: '60px',
        // [theme.breakpoints.up('md')]: {
        //     marginBottom: '70px'
        // }
    },
    bannerTitle: {
        color: 'white'
    },
    bannerSubTitle: {
        color: 'white',
        marginBottom: '10px'
    },
    locationTitle: {
        fontWeight: 400,
        marginBottom: '45px'
    },
    office: {
        '& ul': {
            '& li': {
                marginBottom: '25px',
                '&:last-child': {
                    marginBottom: 0
                }
            }
        }
    },
    officeName: {
        marginBottom: '25px'
    }
}));
const Contact = () => {

    const { t, lang } = useTranslation();
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const getTel = (tel: string) => {
        return tel.split('-').join('');
    };

    const router = useRouter();
    const metadata = getMetadada(router.route);
    const [breadcrumbData, setBreadcrumbData] = useState([]);
    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb(router.route);
        breadcrumbs = breadcrumbs.map((breadcrumb) => {
            return {
                ...breadcrumb,
                breadcrumbName: t(`common:${breadcrumb.breadcrumbName}`),
            };
        })
        setBreadcrumbData(breadcrumbs)
    }, [lang]);
    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <div className={classes.bannerWrapper}>
                <PageBanner imgUrl={'/contact/banner.jpg'} alt={''}>
                    <Fragment>
                        <Typography variant={'h5'}
                            align={'center'}
                            className={classes.bannerSubTitle}>
                            {t('contact:Let’s discuss how we can help with your digital transformation journey')}
                        </Typography>
                        <Typography variant={'h1'}
                            align={'center'}
                            className={classes.bannerTitle}>
                            {t('contact:Contact Us')}
                        </Typography>
                    </Fragment>
                </PageBanner>
            </div>
            <Container>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <Container maxWidth={{ xs: 'none', sm: 960, md: 960 }}>
                <SectionContainer>
                    <ContactForm />
                </SectionContainer>
                {
                    (Offices && Offices.length)
                        ?
                        <SectionContainer>
                            <Typography variant={'h3'} className={classes.locationTitle}>Our Office</Typography>
                            <Grid container spacing={4}>
                                {
                                    Offices.map((offices: IOffice, index: number) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={4} key={index} className={classes.office}>
                                                <Typography variant={'h5'}
                                                    color={"primary"}
                                                    className={classes.officeName}>
                                                    {t(`location:${offices.office}`)}
                                                </Typography>
                                                <ul>
                                                    <li>
                                                        <OfficeInfo icon={faBandcamp}>
                                                            <NavLink hrefPath={offices.addressLink}
                                                                isLaunch={true}
                                                                classNames={linkClasses.textLink}>
                                                                {t(`location:${offices.address}`)}
                                                            </NavLink>
                                                        </OfficeInfo>
                                                    </li>
                                                    <li>
                                                        <OfficeInfo icon={faPhone}>
                                                            <NavLink hrefPath={`tel:${getTel(offices.tel)}`}
                                                                isLaunch={true}
                                                                classNames={linkClasses.textLink}>
                                                                {offices.tel}
                                                            </NavLink>
                                                        </OfficeInfo>
                                                    </li>
                                                    <li>
                                                        <OfficeInfo icon={faEnvelope}>
                                                            <NavLink hrefPath={`mailto:${offices.serviceEmail}`}
                                                                isLaunch={true}
                                                                classNames={linkClasses.textLink}>
                                                                {offices.serviceEmail}
                                                            </NavLink>
                                                        </OfficeInfo>
                                                    </li>
                                                    <li>
                                                        <OfficeInfo icon={faUser}>
                                                            <NavLink hrefPath={`mailto:${offices.hrEmail}`}
                                                                isLaunch={true}
                                                                classNames={linkClasses.textLink}>
                                                                {offices.hrEmail}
                                                            </NavLink>
                                                        </OfficeInfo>
                                                    </li>
                                                </ul>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </SectionContainer>
                        :
                        null
                }
            </Container>

        </Layout>
    );
};

export default Contact;
