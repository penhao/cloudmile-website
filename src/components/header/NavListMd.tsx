import React from 'react';
import {makeStyles} from "@material-ui/styles";
import NavDropdownMd from "./NavDropdownMd";
import useTranslation from "next-translate/useTranslation";
import NavContactLink from "../links/NavContactLink";
import {siteRoutes} from "../../../public/config.json";
import {getRoute} from "../../utils/Utils";


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
const NavListMd = ({statusData}: Props) => {
    const classes = useStyles();
    const {t} = useTranslation();
    const contactRoute = getRoute('Contact Us', siteRoutes)[0];

    return (
        <nav className={classes.nav}>
            {
                <ul className={classes.list}>
                    {
                        siteRoutes.map((group: any, index: number) => {
                            if (group.title === 'Home' || group.title === 'Contact Us' || group.title === 'Privacy') return;
                            return (
                                <li key={index}>
                                    <NavDropdownMd routeGroup={group}
                                                   statusData={group.name === 'Resources' ? statusData : null}/>
                                </li>
                            );
                        })
                    }
                    <li>
                        <NavContactLink href={contactRoute.href}
                                        color={'white'}>
                            {
                                t(`common:${contactRoute.title}`)
                            }
                        </NavContactLink>
                    </li>
                </ul>
            }
        </nav>
    );
};
export default NavListMd;
