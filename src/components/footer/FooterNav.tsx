import React from 'react';
import {siteRoutes} from "../../../public/config.json";
import {Theme} from "@material-ui/core";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {useLinkStyles} from "../links/LinkStyles";
import NavLink from "../links/NavLink";
import {makeStyles} from "@material-ui/styles";
import useTranslation from "next-translate/useTranslation";
import FooterSocialList from "./FooterSocialList";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import {getRoute} from "../../utils/Utils";
import {useRouter} from "next/router";

interface Props {
    statusData: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    group: {
        [theme.breakpoints.up('md')]: {
            flex: '0 1 auto'
        }
    },
    title: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 'normal',
        marginBottom: '10px',
        whiteSpace: 'nowrap'
    },
    subTitle: {
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.grey["400"],
        marginBottom: '10px',
        whiteSpace: 'nowrap'
    },
    contactGroup: {
        [theme.breakpoints.up('sm')]: {
            flex: '0 1 auto'
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: 'auto'
        }
    },
    divider: {
        marginBottom: '20px',
        backgroundColor: theme.palette.common.black
    },
    subGroup: {
        marginBottom: '20px',
        paddingRight: '40px',
        '&:last-child': {
            marginBottom: 0
        }
    },
    linkList: {
        '& li': {
            marginBottom: '10px',
            '&:last-child': {
                marginBottom: 0
            }
        }
    },
    link: {
        display: 'inline-block'
    },
    linkLabel: {
        right: '-30px',
        top: 0
    },
    address: {
        fontStyle: 'normal',
        margin: '20px 0',
        '& ul': {
            '& li': {
                marginBottom: '4px'
            }
        }
    }
}));
const FooterNav = ({statusData}: Props) => {
    const router = useRouter();
    const {t, lang} = useTranslation();
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const getNewLabelStatus = (routeName: string) => {
        switch (routeName) {
            case 'Blog':
                return (statusData?.blog) ? statusData.blog : false;
            case 'Media Center':
                return (statusData?.news) ? statusData.news : false;
            case 'Case Study':
                return (statusData?.case) ? statusData.case : false;
            case 'Event':
                return (statusData?.event) ? statusData.event : false;
            case 'Video':
                return (statusData?.video) ? statusData.video : false;
            default:
                return false
        }
    };
    const getLinkActive = (path: string) => {
        return router.asPath.includes(path.toLowerCase());
    };
    const getNavList = () => {
        if (!siteRoutes || !siteRoutes.length) return;
        return (
            siteRoutes.map((group: any, index: number) => {
                if (group.title === 'Home' || group.title === 'Contact Us' || group.title === 'Privacy') return;
                const subRoutes = group.routes;
                return (
                    <Grid item xs={12} sm key={index} className={classes.group}>
                        <Typography component={'h3'} className={classes.title} key={index}>
                            {t(`common:${group.title}`)}
                        </Typography>
                        <Divider classes={{root: classes.divider}}/>
                        {
                            subRoutes.map((subGroup: any, index: number) => {
                                return (
                                    <div key={index} className={classes.subGroup}>
                                        {
                                            (subGroup.title)
                                                ?
                                                <Typography className={classes.subTitle}>
                                                    {t(`common:${subGroup.title}`)}
                                                </Typography>
                                                : null
                                        }
                                        <ul className={classes.linkList}>
                                            {
                                                subGroup.routes.map((route: any, index: number) => {
                                                    const routeName = t(`common:${route.title}`);
                                                    const routeHref: string = (route.href !== undefined)
                                                        ? route.href
                                                        : (lang === 'zh-hant')
                                                            ? route.zhLink
                                                            : route.link;
                                                    const isLaunch: boolean = (route.link !== undefined);
                                                    return (
                                                        <li key={index}>
                                                            <NavLink hrefPath={routeHref}
                                                                     textWrap={false}
                                                                     isLaunch={isLaunch}
                                                                     classNames={clsx(
                                                                         classes.link,
                                                                         mdUp ? linkClasses.styleLink : linkClasses.textLink,
                                                                         (getLinkActive(routeHref)) ? 'active' : null
                                                                     )}
                                                            >
                                                                <span
                                                                    className={linkClasses.styleEffect}>{routeName}</span>
                                                                {
                                                                    (group.title === 'Resources' && getNewLabelStatus(route.name))
                                                                        ?
                                                                        <span
                                                                            className={clsx(classes.linkLabel, linkClasses.statusLabel)}>New</span>
                                                                        :
                                                                        null
                                                                }
                                                            </NavLink>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </Grid>
                );
            })
        )
    };
    const getContact = () => {
        const contactRoute = getRoute('Contact Us', siteRoutes)[0];
        const contactTitle = t(`common:${contactRoute['title']}`);
        return (
            <Grid item xs={12} sm className={clsx(classes.group, classes.contactGroup)}>
                <Typography component={'h3'} className={classes.title}>
                    {contactTitle}
                </Typography>
                <Divider classes={{root: classes.divider}}/>
                <div className={classes.subGroup}>
                    <ul className={classes.linkList}>
                        <li>
                            <NavLink hrefPath={contactRoute['href']} textWrap={false}
                                     classNames={clsx(
                                         classes.link,
                                         mdUp ? linkClasses.styleLink : linkClasses.textLink,
                                         getLinkActive(contactRoute['href']) ? 'active' : null
                                     )}>
                                <span className={linkClasses.styleEffect}>
                                    {contactTitle}
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                    <address className={classes.address}>
                        <ul>
                            <li>
                                <NavLink isLaunch={true}
                                         underline={true}
                                         hrefPath={'tel:+886227576077'}
                                         classNames={clsx(linkClasses.textLink)}>
                                    (TW) +886-2-2757-6077
                                </NavLink>
                            </li>
                            <li>
                                <NavLink isLaunch={true}
                                         underline={true}
                                         hrefPath={'tel:+85234810068'}
                                         classNames={clsx(linkClasses.textLink)}>
                                    (HK) +852-3481-0068
                                </NavLink>
                            </li>
                            <li>
                                <NavLink isLaunch={true}
                                         underline={true}
                                         hrefPath={'tel:+6569322820'}
                                         classNames={clsx(linkClasses.textLink)}>
                                    (SG) +65-6932-2820
                                </NavLink>
                            </li>
                            <li>
                                <NavLink isLaunch={true}
                                         underline={true}
                                         hrefPath={'mailto:service@mile.cloud'}
                                         classNames={clsx(linkClasses.textLink)}>
                                    service@mile.cloud
                                </NavLink>
                            </li>
                        </ul>
                    </address>
                    <Grid container spacing={2} className={classes.subGroup}>
                        <FooterSocialList/>
                    </Grid>
                </div>
            </Grid>
        )
    };
    return (
        <Grid container spacing={4} component={'nav'}>
            <Hidden xsDown>
                {getNavList()}
            </Hidden>
            {getContact()}
        </Grid>
    );
};
export default FooterNav;
