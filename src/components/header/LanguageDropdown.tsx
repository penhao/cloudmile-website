import React, {useState} from 'react';
import {Button, Theme} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";
import {makeStyles} from "@material-ui/styles";
import Collapse from "@material-ui/core/Collapse/Collapse";
import LanguageLink from "../links/LanguageLink";
import Divider from "@material-ui/core/Divider";
import {useLinkStyles} from "../links/LinkStyles";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    dropdown: {
        marginLeft: '10px',
        marginRight: '-10px'
    },
    toggle: {
        padding: '10px',
        minWidth: 'initial',
        color: theme.palette.common.white,
        zIndex: 1,
        '& .MuiButton-label': {
            '& svg': {
                color: theme.palette.common.white
            }
        },
        '&:hover': {
            '& .MuiButton-label': {
                '& svg': {
                    color: theme.palette.secondary.main
                }
            }
        }
    },
    icon: {
        display: 'block',
        width: '20px !important',
        padding: 0,
        fontSize: '20px'
    },
    collapse: {
        position: 'absolute',
        width: '280px',
        right: '-20px',
        top: 0,
        paddingTop: '60px'
    },
    collapseInner: {
        // padding: '0 20px',
        backgroundColor: theme.palette.grey["300"],
        pointerEvents: 'none'
    },
    divider: {
        width: 'calc(100% - 40px)',
        margin: '0 auto'
    },
    routeList: {
        pointerEvents: 'all',
        '& li': {
            textAlign: 'center',
            '&:last-child': {
                marginBottom: 0
            }
        }
    }
}));
const LanguageDropdown = () => {

    const {lang} = useTranslation();
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const [active, setActive] = useState(false);
    const handlerEnter = () => setActive(true);
    const handlerLeave = () => setActive(false);

    return (
        <div onMouseLeave={handlerLeave} className={classes.dropdown}>
            <Button onMouseEnter={handlerEnter} className={classes.toggle}>
                <FontAwesomeIcon icon={faGlobeAmericas} className={classes.icon}/>
            </Button>
            <Collapse in={active} timeout={'auto'} className={classes.collapse}>
                <div className={classes.collapseInner}>
                    <div className={classes.routeList}>
                        <div>
                            <LanguageLink locale={'zh-hant'} className={clsx(
                                linkClasses.styleLink,
                                (lang === 'zh-hant') ? 'active' : null
                            )}>
                                <span className={linkClasses.styleEffect}>繁體中文</span>
                            </LanguageLink>
                        </div>
                        <Divider className={classes.divider}/>
                        <div>
                            <LanguageLink locale={'en'} className={clsx(
                                linkClasses.styleLink,
                                (lang === 'en') ? 'active' : null
                            )}>
                                <span className={linkClasses.styleEffect}>ENGLISH</span>
                            </LanguageLink>
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};
export default LanguageDropdown;
