import React, { useEffect, useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Sticky from "react-sticky-el";
import LogoCloudMile from "./LogoCloudMile";
import MenuToggle from "./MenuToggle";
import Container from "../containers/Container";
import LanguageDropdown from "./LanguageDropdown";
import NavListMd from "./NavListMd";
import NavListXs from "./NavListXs";
import SearchDropdown from "./SearchDropdown";
import Hidden from "@material-ui/core/Hidden";
import { fetchNavStatus } from "../../services/ApiServices";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        position: 'relative',
        width: '100%',
        zIndex: theme.zIndex.appBar
    },
    headerInner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: '50px',
        backgroundColor: theme.palette.common.black,
        [theme.breakpoints.up('sm')]: {
            height: '60px',
            justifyContent: 'flex-start'
        }
    }
}));
const Header = () => {
    const router = useRouter();
    const { lang } = useTranslation();
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [statusData, setStatusData] = useState<any | null>(null);

    const openNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const fetchData = async () => {
            return fetchNavStatus(lang);
        };
        fetchData()
            .then((response: any) => {
                // console.log(response);
                if (response.status) {
                    setStatusData(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [router, lang]);
    return (
        <header className={classes.header}>
            <Sticky>
                <Container className={classes.headerInner}>
                    <LogoCloudMile />
                    <Hidden smDown>
                        <NavListMd statusData={statusData} />
                        <SearchDropdown />
                        <LanguageDropdown />
                    </Hidden>
                </Container>
                <Hidden mdUp>
                    <MenuToggle isOpen={isOpen} clickHandler={openNavMenu} />
                    <NavListXs active={isOpen} statusData={statusData} />
                </Hidden>
            </Sticky>
        </header>
    );
};
export default Header;
