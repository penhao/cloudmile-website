import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/styles";
import NavDropdownMd from "./NavDropdownMd";
import useTranslation from "next-translate/useTranslation";
import NavContactLink from "../links/NavContactLink";
import Routes, { IRoute, getRoute } from "../../@share/routes/Routes";

interface Props {
    statusData: any;
}

const useStyles = makeStyles(() => ({
    nav: {
        marginLeft: 'auto',
        zIndex: 1
    },
    list: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        position: 'relative',
        '& li': {
            position: 'relative'
        }
    }
}));
const NavListMd = ({ statusData }: Props) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const contactRoute = getRoute("/contact");

    return (
        <nav className={classes.nav}>
            {
                <ul className={classes.list}>
                    {
                        Routes.map((route: IRoute) => {
                            if (route.disabled) return;
                            return (
                                <li key={uuidv4()}>
                                    <NavDropdownMd
                                        routeGroup={route}
                                        statusData={statusData} />
                                </li>
                            )
                        })
                    }
                    <li>
                        <NavContactLink href={contactRoute.path}
                            color={'white'}>
                            {t(`common:${contactRoute.breadcrumbName}`)}
                        </NavContactLink>
                    </li>
                </ul>
            }
        </nav>
    );
};
export default NavListMd;
