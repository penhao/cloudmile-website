import React from 'react';
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
import { siteRoutes } from "../../../public/config.json";
import { getRoute } from "../../utils/Utils";


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
    const contactRoute = getRoute('Contact Us', siteRoutes)[0];

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
                                siteRoutes.map((group: any, index: number) => {
                                    if (group.title === 'Home' || group.title === 'Contact Us' || group.title === 'Privacy') return;
                                    return (
                                        <li key={index}>
                                            <NavDropdownXs routeGroup={group}
                                                statusData={group.title === 'Resources' ? statusData : null} />
                                            <Divider className={classes.divider} />
                                        </li>
                                    )
                                })
                            }
                            <li className={classes.contact}>
                                <NavContactLink href={contactRoute.href}
                                    color={'black'}>
                                    {
                                        t(`common:${contactRoute.title}`)
                                    }
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
