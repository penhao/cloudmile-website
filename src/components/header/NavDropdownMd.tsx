import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import useTranslation from "next-translate/useTranslation";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NavLink from "../links/NavLink";
import { useRouter } from "next/router";
import { useLinkStyles } from "../links/LinkStyles";

import { IRoute } from "../../@share/routes/Routes";

interface Props {
    statusData?: any | null;
    routeGroup: any;
}
const useStyles = makeStyles((theme: Theme) => (
    {
        toggle: {
            padding: '10px 20px',
            fontSize: '16px',
            lineHeight: 'normal',
            color: theme.palette.common.white
        },
        collapse: {
            position: 'absolute',
            width: 'auto',
            left: 0,
            top: '-9px',
            paddingTop: '60px'
        },
        collapseInner: {
            padding: '20px',
            backgroundColor: theme.palette.grey["300"]
        },
        routeList: {
            minWidth: '150px',
            paddingRight: '40px',
            '& li': {
                marginBottom: '20px',
                '&:last-child': {
                    marginBottom: 0
                }
            }
        },
        subTitle: {
            fontSize: '20px',
            fontWeight: 600,
            color: theme.palette.common.black,
            marginBottom: '8px'
        },
        divider: {
            marginBottom: '10px',
            backgroundColor: theme.palette.common.black
        }
    }
));
const NavDropdownMd = ({ statusData, routeGroup }: Props) => {

    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const { t, lang } = useTranslation();
    const isRouteList = routeGroup.routes[0].routes === undefined;
    const router = useRouter();
    const [active, setActive] = useState(false);
    const handlerEnter = () => setActive(true);
    const handlerLeave = () => setActive(false);


    const getGroupActive = () => {
        const groupName = t(`common:${routeGroup.name}`);
        return router.asPath.includes(groupName.toLowerCase());
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
            <ul className={classes.routeList}>
                {
                    routes.map((route: IRoute) => {
                        if (route.disabled) return;
                        const routeName = t(`common:${route.breadcrumbName}`);
                        const routeHref: string = (route.path !== undefined) ? route.path : route.link[lang];
                        const isLaunch: boolean = (route.path === undefined);
                        return (
                            <li key={uuidv4()}>
                                <NavLink hrefPath={routeHref}
                                    isLaunch={isLaunch}
                                    textWrap={false}
                                    classNames={clsx(
                                        linkClasses.styleLink,
                                        (getLinkActive(routeHref)) ? 'active' : null
                                    )}>
                                    <span className={linkClasses.styleEffect}>
                                        {routeName}
                                        {
                                            (getStatus(route.breadcrumbName))
                                                ?
                                                <span className={linkClasses.statusLabel}>New</span>
                                                :
                                                null
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
        <div onMouseLeave={handlerLeave}>
            <Button onMouseEnter={handlerEnter}
                className={clsx(
                    classes.toggle,
                    linkClasses.styleLink,
                    getGroupActive() ? 'active' : null
                )}>
                <span className={linkClasses.styleEffect}>
                    {t(`common:${routeGroup.breadcrumbName}`)}
                </span>
            </Button>
            <Collapse in={active} timeout={'auto'} className={classes.collapse}>
                <div className={classes.collapseInner}>
                    <Grid container spacing={4} wrap={"nowrap"}>
                        {
                            isRouteList
                                ?
                                <Grid item xs>
                                    {getNavLinks(routeGroup.routes)}
                                </Grid>
                                :
                                routeGroup.routes.map((route: IRoute) => {
                                    if (route.disabled) return;
                                    return (
                                        <Grid item xs key={uuidv4()}>
                                            <Typography component={'div'} className={classes.subTitle}>
                                                {t(`common:${route.breadcrumbName}`)}
                                            </Typography>
                                            <Divider className={classes.divider} />
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
export default NavDropdownMd;
