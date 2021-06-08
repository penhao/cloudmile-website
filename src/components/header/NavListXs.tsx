import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LanguageLink from "../links/LanguageLink";
import NavDropdownXs from "./NavDropdownXs";
import Divider from "@material-ui/core/Divider";
import useTranslation from "next-translate/useTranslation";
import NavContactLink from "../links/NavContactLink";
import { useLinkStyles } from "../links/LinkStyles";
import clsx from "clsx";
import Routes, { IRoute, getRoute } from "../../@share/routes/Routes";

interface Props {
    statusData?: any | null;
    active: boolean
}
const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        position: 'absolute',
        width: '100%',
        backgroundColor: theme.palette.grey["400"]
    },
    divider: {
        position: 'absolute',
        width: `calc(100% - 40px)`,
        bottom: 0,
        left: '20px',
        zIndex: 1
    },
    collapse: {
        width: '100%',
        left: 0,
        top: 0
        // top: '50px',
        // [theme.breakpoints.up('sm')]: {
        //     top: '60px'
        // }
    },
    collapseInner: {
        width: '100%'
    },
    nav: {
        position: 'relative',
        width: '100%',
        maxHeight: `calc(100vh - 112px)`,
        overflow: 'hidden',
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
            maxHeight: `calc(100vh - 122px)`
        }
    },
    linkList: {
        '& li': {
            position: 'relative'
        }
    },
    contact: {
        padding: '15px 20px',
        textAlign: 'center',
        backgroundColor: theme.palette.grey["300"]
    }
}));
const NavListXs = ({ statusData, active }: Props) => {

    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const { t, lang } = useTranslation();
    const contactRoute = getRoute("/contact");

    return (
        <div className={classes.wrapper}>
            <Collapse in={active} timeout={"auto"} className={classes.collapse}>
                <div className={classes.collapseInner}>
                    {/* Language */}
                    <Grid container justify={"center"}>
                        <Grid item>
                            <LanguageLink locale={'zh'} className={clsx(
                                linkClasses.textLink,
                                (lang === 'zh') ? 'active' : null
                            )}>
                                繁體中文
                            </LanguageLink>
                        </Grid>
                        <Grid item>
                            <LanguageLink locale={'en'} className={clsx(
                                linkClasses.textLink,
                                (lang === 'en') ? 'active' : null
                            )}>
                                ENGLISH
                            </LanguageLink>
                        </Grid>
                    </Grid>
                    {/* Nav */}
                    <nav className={classes.nav}>
                        <ul className={classes.linkList}>
                            {
                                Routes.map((route: IRoute) => {
                                    if (route.disabled) return;
                                    return (
                                        <li key={uuidv4()}>
                                            <NavDropdownXs routeGroup={route}
                                                statusData={statusData} />
                                            <Divider className={classes.divider} />
                                        </li>
                                    )
                                })
                            }
                            <li className={classes.contact}>
                                <NavContactLink href={contactRoute.path}
                                    color={'black'}>
                                    {t(`common:${contactRoute.breadcrumbName}`)}
                                </NavContactLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Collapse>
        </div>
    );
};
export default NavListXs;
