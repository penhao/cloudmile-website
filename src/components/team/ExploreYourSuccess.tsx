import React from 'react';
import Container from "../containers/Container";
import SectionContainer from "../containers/SectionContainer";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../sections/SectionTitleLabel";
import SectionTitle from "../sections/SectionTitle";
import SectionLabel from "../sections/SectionLabel";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import ImageClipEffect from "../effects/ImageClipEffect";
import RatioContainer from "../containers/RatioContainer";
import ParallaxEffect from "../effects/ParallaxEffect";
import ResponseImage from "../Images/ResponseImage";
import ShiftContainer from "../containers/ShiftContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useOffices, { IOfficeProps } from "../useOffices";
import useTranslation from "next-translate/useTranslation";
import OfficeInfo from "../sections/OfficeInfo";
import NavLink from "../links/NavLink";
import { Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useLinkStyles } from "../links/LinkStyles";


const useStyles = makeStyles((theme: Theme) => ({
    coverWrapper: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        }
    },
    ourOffice: {
        fontWeight: 400,
        [theme.breakpoints.up('sm')]: {
            marginTop: '20px'
        }
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
    },
    global: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            paddingTop: '100px'
        }
    }
}));
const ExploreYourSuccess = () => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const { t } = useTranslation();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const offices = useOffices();
    const getTel = (tel: string) => {
        return tel.split('-').join('');
    };
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={4} alignItems={"center"} direction={mdUp ? "row-reverse" : "row"}>
                    <Grid item xs={12} md={6}>
                        <ShiftContainer shiftX={{ xs: -20, sm: -20, md: -160 }} growX={{ xs: 40, sm: 40, md: 180 }}>
                            <div className={classes.coverWrapper}>
                                <RatioContainer ratio={{ xs: 340 / 390, sm: 340 / 390, md: 340 / 390 }}>
                                    <ImageClipEffect>
                                        <ParallaxEffect>
                                            <ResponseImage imageUrl={'/team/singaore-office1.jpg'}
                                                alt={t('team:alt.Overview of an office')} />
                                        </ParallaxEffect>
                                    </ImageClipEffect>
                                </RatioContainer>
                                <RatioContainer ratio={{ xs: 340 / 390, sm: 340 / 390, md: 340 / 390 }}>
                                    <ImageClipEffect>
                                        <ParallaxEffect>
                                            <ResponseImage imageUrl={'/team/singaore-office2.jpg'}
                                                alt={t('team:alt.Overview of an office')} />
                                        </ParallaxEffect>
                                    </ImageClipEffect>
                                </RatioContainer>
                            </div>
                        </ShiftContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box width="100%" display={'flex'} justifyContent={(mdUp) ? 'flex-end' : 'flex-start'}>
                            <Container maxWidth={{ sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'} />
                                <SectionTitle>
                                    {t('team:Explore your Success with__')}
                                </SectionTitle>
                            </Container>
                        </Box>
                        <SectionLabel>EXPLORE</SectionLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth={{ md: 1240 }} paddingX={false}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <div className={classes.global}>
                                        <ResponseImage imageUrl={'/team/global.jpg'}
                                            alt={t('team:alt.The locations of All 3 CloudMile Offices')} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SectionDescWrapper>
                                        <Grid container spacing={4}>
                                            <Grid item xs={12}>
                                                <Typography variant={"h3"} className={classes.ourOffice}>
                                                    {t('team:Our Office')}
                                                </Typography>
                                            </Grid>
                                            {
                                                (offices && offices.length)
                                                    ?
                                                    offices.map((offices: IOfficeProps, index: number) => {
                                                        return (
                                                            <Grid item xs={12} key={index}
                                                                className={classes.office}>
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
                                                                                underline={true}
                                                                                classNames={linkClasses.textLink}>
                                                                                {t(`location:${offices.address}`)}
                                                                            </NavLink>
                                                                        </OfficeInfo>
                                                                    </li>
                                                                    <li>
                                                                        <OfficeInfo icon={faPhone}>
                                                                            <NavLink
                                                                                hrefPath={`tel:${getTel(offices.tel)}`}
                                                                                isLaunch={true}
                                                                                underline={true}
                                                                                classNames={linkClasses.textLink}>
                                                                                {offices.tel}
                                                                            </NavLink>
                                                                        </OfficeInfo>
                                                                    </li>
                                                                    <li>
                                                                        <OfficeInfo icon={faEnvelope}>
                                                                            <NavLink
                                                                                hrefPath={`mailto:${offices.serviceEmail}`}
                                                                                isLaunch={true}
                                                                                underline={true}
                                                                                classNames={linkClasses.textLink}>
                                                                                {offices.serviceEmail}
                                                                            </NavLink>
                                                                        </OfficeInfo>
                                                                    </li>
                                                                </ul>
                                                            </Grid>
                                                        )
                                                    })
                                                    :
                                                    null
                                            }
                                        </Grid>
                                    </SectionDescWrapper>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default ExploreYourSuccess;
