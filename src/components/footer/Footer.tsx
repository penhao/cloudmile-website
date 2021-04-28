import React, { useEffect, useState } from 'react';
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import useTranslation from "next-translate/useTranslation";
import Container from "../containers/Container";
import NavLink from "../links/NavLink";
import Copyright from "./Copyright";
import FooterNav from "./FooterNav";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { useLinkStyles } from "../links/LinkStyles";
import { fetchNavStatus } from "../../services/ApiServices";
import { useRouter } from "next/router";
import { getRoute } from "../../utils/Utils";
import { siteRoutes } from "../../../public/config.json";


export const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        position: 'relative',
        width: '100%',
        padding: '40px 0 25px 0',
        backgroundColor: theme.palette.grey["200"],
        zIndex: 2
    },
    legal: {
        marginTop: '50px',
        '& .MuiGrid-item': {
            [theme.breakpoints.up('sm')]: {
                flex: '0 1 auto'
            }
        }
    },
    privacy: {
        paddingLeft: '18px',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '20px',
            borderLeft: `1px solid ${theme.palette.common.black}`
        }
    }
}));

const Footer = () => {
    const router = useRouter();
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const { t, lang } = useTranslation();
    const [statusData, setStatusData] = useState<any | null>(null);
    const getPrivacyLink = () => {
        const privacyRoute = getRoute('Privacy', siteRoutes)[0];
        return (
            <NavLink hrefPath={privacyRoute['href']}
                underline={true}
                classNames={clsx(linkClasses.textLink)}>
                {t(`common:${privacyRoute['title']}`)}
            </NavLink>
        )
    };
    useEffect(() => {
        const fetchData = async () => {
            return fetchNavStatus(lang);
        };
        fetchData().then((response: any) => {
            // console.log(response);
            if (response.status) {
                setStatusData(response.data);
            }
        });
    }, [router, lang]);
    return (
        <footer className={classes.footer}>
            <Container maxWidth={{ md: 1280 }}>
                <FooterNav statusData={statusData} />
                <Grid container spacing={2} className={classes.legal}>
                    <Grid item xs={12} sm>
                        <Copyright />
                    </Grid>
                    <Grid item xs={12} sm>
                        <div className={classes.privacy}>
                            {getPrivacyLink()}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};
export default Footer;