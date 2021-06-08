import React, { useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useTranslation from "next-translate/useTranslation";
import IconPlus from "../icons/IconPlus";
import IconMinus from "../icons/IconMinus";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavLink from "../links/NavLink";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useLinkStyles } from "../links/LinkStyles";
import { IRoute } from "../../@share/routes/Routes";
import { v4 as uuidv4 } from "uuid";

interface Props {
    statusData?: any | null;
    routeGroup: any
}

const useStyles = makeStyles((theme: Theme) => ({
    toggle: {
        width: '100%',
        padding: '20px',
        color: theme.palette.common.black,
        borderRadius: 0,
        backgroundColor: theme.palette.grey["300"],
        zIndex: 1,
        '& .MuiButton-label': {
            justifyContent: 'space-between'
        },
        '& .MuiTouchRipple-child': {
            backgroundColor: theme.palette.common.white
        },
        '& .MuiButton-endIcon': {
            width: '16px',
            margin: 0,
            transform: 'rotate(0deg)',
            transformOrigin: 'center center',
            transition: theme.transitions.create('transform', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.standard
            })
        },
        '&:hover': {
            backgroundColor: theme.palette.grey["300"]
        },
        '&.active': {
            '& .MuiButton-endIcon': {
                transform: 'rotate(180deg)'
            }
        }
    },
    collapse: {
        position: 'relative'
    },
    collapseInner: {
        padding: '10px 0',
        backgroundColor: theme.palette.grey["400"]
    },
    link: {
        display: 'block',
        padding: '10px 20px'
    },
    subTitle: {
        padding: '10px 20px 0 20px',
        fontSize: '16px',
        fontWeight: 600,
        color: theme.palette.grey["300"]
    }
}
));
const NavDropdownXs = ({ statusData, routeGroup }: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const { t, lang } = useTranslation();
    const router = useRouter();
    const isRouteList = routeGroup.routes[0].routes === undefined;
    const [active, setActive] = useState(false);
    const handlerClick = () => setActive(!active);
    const getEndIcon = () => {
        return (active) ? <IconMinus /> : <IconPlus />
    };
    const getLinkActive = (path: string) => {
        return router.asPath.includes(path.toLowerCase());
    };
    const getStatus = (breadcrumbName: string) => {
        switch (breadcrumbName) {
            case 'Blog':
                return statusData?.blog;
            case 'Media Center':
                return statusData?.news;
            case 'Case Study':
                return statusData?.case;
            case 'Event':
                return statusData?.event;
            case 'Video':
                return statusData?.video;
            default:
                return false
        }
    };
    const getNavLinks = (routes: IRoute[]) => {
        return (
            <ul>
                {
                    routes.map((route: any, index: number) => {
                        if (route.disabled) return;
                        const routeName = t(`common:${route.breadcrumbName}`);
                        const routeHref: string = (route.path !== undefined) ? route.path : route.link[lang];
                        const isLaunch: boolean = (route.path === undefined);
                        return (
                            <li key={index}>
                                <NavLink hrefPath={routeHref} isLaunch={isLaunch}
                                    textWrap={false}
                                    classNames={clsx(
                                        classes.link,
                                        linkClasses.textLink,
                                        (getLinkActive(routeHref)) ? 'active' : null
                                    )}>
                                    <span>
                                        {routeName}
                                        {
                                            (getStatus(route.breadcrumbName))
                                                ?
                                                <span
                                                    className={linkClasses.statusLabel}>New</span>
                                                : null
                                        }
                                    </span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    return (
        <div>
            <Button onClick={handlerClick} endIcon={getEndIcon()}
                className={clsx(classes.toggle, linkClasses.link, (active) ? 'active' : null)}>
                <span> {t(`common:${routeGroup.breadcrumbName}`)}</span>
            </Button>
            <Collapse in={active} timeout={"auto"}>
                <div className={classes.collapseInner}>
                    <Grid container>
                        {
                            isRouteList
                                ?
                                <Grid item xs={12}>
                                    {getNavLinks(routeGroup.routes)}
                                </Grid>
                                :
                                routeGroup.routes.map((route: IRoute) => {
                                    if (route.disabled) return;
                                    return (
                                        <Grid item xs={12} key={uuidv4()}>
                                            <Typography component={'div'} className={classes.subTitle}>
                                                {t(`common:${route.breadcrumbName}`)}
                                            </Typography>
                                            {getNavLinks(route.routes)}
                                        </Grid>
                                    )
                                })

                        }
                    </Grid>
                </div>
            </Collapse>
        </div>
    );
};
export default NavDropdownXs;
