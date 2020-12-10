import React, {Fragment, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import useTranslation from "next-translate/useTranslation";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NavLink from "../links/NavLink";
import {useRouter} from "next/router";
import {useLinkStyles} from "../links/LinkStyles";

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
const NavDropdownMd = ({statusData, routeGroup}: Props) => {

    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const {t, lang} = useTranslation();
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
    const getStatus = (routeName: string) => {
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

    return (
        <div onMouseLeave={handlerLeave}>
            <Button onMouseEnter={handlerEnter}
                    className={clsx(
                        classes.toggle,
                        linkClasses.styleLink,
                        getGroupActive() ? 'active' : null
                    )}>
                <span className={linkClasses.styleEffect}>
                    {t(`common:${routeGroup.title}`)}
                </span>
            </Button>
            <Collapse in={active} timeout={'auto'} className={classes.collapse}>
                <div className={classes.collapseInner}>
                    <Grid container spacing={4} wrap={"nowrap"}>
                        {
                            (routeGroup.routes.length)
                                ?
                                routeGroup.routes.map((subGroup: any, index: number) => {
                                    return (
                                        <Grid item xs key={index}>
                                            {
                                                (subGroup.title)
                                                    ?
                                                    <Fragment>
                                                        <Typography component={'div'} className={classes.subTitle}>
                                                            {t(`common:${subGroup.title}`)}
                                                        </Typography>
                                                        <Divider className={classes.divider}/>
                                                    </Fragment>
                                                    :
                                                    null
                                            }
                                            {
                                                <ul className={classes.routeList}>
                                                    {
                                                        subGroup.routes.map((route: any, index: number) => {
                                                            const routeName = t(`common:${route.title}`);
                                                            const routeHref: string = (route.href !== undefined)
                                                                ? route.href
                                                                : (lang === 'zh')
                                                                    ? route.zhLink
                                                                    : route.link;
                                                            const isLaunch: boolean = (route.link !== undefined);
                                                            return (
                                                                <li key={index}>
                                                                    <NavLink hrefPath={routeHref}
                                                                             isLaunch={isLaunch}
                                                                             textWrap={false}
                                                                             classNames={clsx(
                                                                                 linkClasses.styleLink,
                                                                                 (getLinkActive(routeHref)) ? 'active' : null
                                                                             )}>
                                                                        <span className={linkClasses.styleEffect}>
                                                                            {
                                                                                routeName
                                                                            }
                                                                            {
                                                                                (routeGroup.title === 'Resources' && getStatus(route.title))
                                                                                    ?
                                                                                    <span className={linkClasses.statusLabel}>New</span>
                                                                                    : null
                                                                            }
                                                                        </span>
                                                                    </NavLink>
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            }
                                        </Grid>
                                    );
                                })
                                :
                                null
                        }
                    </Grid>
                </div>
            </Collapse>
        </div>
    );
};
export default NavDropdownMd;
