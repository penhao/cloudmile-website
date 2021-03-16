import React, {useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useTranslation from "next-translate/useTranslation";
import IconPlus from "../icons/IconPlus";
import IconMinus from "../icons/IconMinus";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavLink from "../links/NavLink";
import clsx from "clsx";
import {useRouter} from "next/router";
import {useLinkStyles} from "../links/LinkStyles";

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
const NavDropdownXs = ({statusData, routeGroup}: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const {t, lang} = useTranslation();
    const router = useRouter();
    const [active, setActive] = useState(false);
    const handlerClick = () => setActive(!active);
    const getEndIcon = () => {
        return (active) ? <IconMinus/> : <IconPlus/>
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
        <div>
            <Button onClick={handlerClick} endIcon={getEndIcon()}
                    className={clsx(classes.toggle, linkClasses.link, (active) ? 'active' : null)}>
                <span>{t(`common:${routeGroup.title}`)}</span>
            </Button>
            <Collapse in={active} timeout={"auto"}>
                <div className={classes.collapseInner}>
                    <Grid container>
                        {
                            (routeGroup.routes.length)
                                ?
                                routeGroup.routes.map((subGroup: any, index: number) => {
                                    return (
                                        <Grid item xs={12} key={index}>
                                            {
                                                (subGroup.title)
                                                    ?
                                                    <Typography component={'div'} className={classes.subTitle}>
                                                        {t(`common:${subGroup.title}`)}
                                                    </Typography>
                                                    :
                                                    null
                                            }
                                            {
                                                <ul>
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
                                                                                (routeGroup.title === 'Resources' && getStatus(route.title))
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
export default NavDropdownXs;
