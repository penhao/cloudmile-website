import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";
import {useRouter} from "next/router";
import clsx from "clsx";
import {removeParam} from "../../utils/Utils";
import useTranslation from "next-translate/useTranslation";
import {useLinkStyles} from "./LinkStyles";

interface Props {
    href: string
    color: 'white' | 'black',
    children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        fontSize: theme.typography.pxToRem(16),
        margin: '0 10px',
        padding: '8px 20px',
        borderRadius: '99em',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: ({color}: Props) => (color === 'white') ? theme.palette.common.white : theme.palette.common.black,
        color: ({color}: Props) => (color === 'white') ? theme.palette.common.white : theme.palette.common.black,
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard
        }),
        '&:hover': {
            border: `1px solid ${theme.palette.secondary.main}`,
            color: theme.palette.secondary.main,
        },
        '&.active': {
            border: `1px solid ${theme.palette.secondary.main}`,
            color: theme.palette.secondary.main,
        }
    }
}));
const NavContactLink = ({href, color, children}: Props) => {
    const {lang} = useTranslation();
    const classes = useStyles({href, color, children});
    const linkClasses = useLinkStyles();

    const router = useRouter();
    const [hrefLink, setHrefLink] = useState('');
    const getLinkActive = (path: string) => {
        return router.asPath.includes(path.toLowerCase());
    };
    useEffect(() => {
        setHrefLink(`${href}${removeParam('category', window.location.search)}`);
    }, []);
    return (
        <Link href={href} passHref>
            <a className={clsx(
                classes.link,
                linkClasses.link,
                getLinkActive(href) ? 'active' : null)
            }>
                {children}
            </a>
        </Link>
    );
};

export default NavContactLink;
