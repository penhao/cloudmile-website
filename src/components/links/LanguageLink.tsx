import React, {useEffect, useState} from 'react';
import Link from "next/link";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import {useLinkStyles} from "./LinkStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import {removeParam} from "../../utils/Utils";

interface Props {
    locale: string;
    className?: string | null;
    children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    languageLink: {
        padding: '20px 40px',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            padding: '20px',
            textAlign: 'center'
        }
    }
}));

const LanguageLink = ({locale, className = null, children}: Props) => {

    const {lang} = useTranslation();
    const router = useRouter();
    const classes = useStyles();
    const linkStyles = useLinkStyles();
    const [urlParams, setUrlParams] = useState('');
    const getRedirectUrl = () => {
        const routePath = router.route.replace(`/${lang}`, '');
        if (routePath === '/resources/blog/[...slug]') {
            return `/resources/blog${urlParams}`;
        }
        if (routePath === '/resources/media-center/[...slug]') {
            return `/resources/media-center${urlParams}`;
        }
        if (routePath === '/resources/case-study/[...slug]') {
            return `/resources/case-study${urlParams}`;
        }
        if (routePath === '/resources/event/[...slug]') {
            return `/resources/event${urlParams}`;
        }
        if (routePath === '/resources/video/[...slug]' || routePath === '/resources/video/live-stream/[...slug]') {
            return `/resources/video${urlParams}`;
        }
        if (routePath === '/resources/category/[...slug]') {
            if (router.query.slug[0] === 'blog') {
                return `/resources/blog${urlParams}`;
            }
            if (router.query.slug[0] === 'media-center') {
                return `/resources/media-center${urlParams}`;
            }
            if (router.query.slug[0] === 'case-study') {
                return `/resources/case-study${urlParams}`;
            }
            if (router.query.slug[0] === 'event') {
                return `/resources/event${urlParams}`;
            }
        }
        return (lang === 'en') ? `${router.route}${urlParams}` : (routePath.length === 0) ? `/${urlParams}` : `${routePath}${urlParams}`;
    };
    useEffect(() => {
        setUrlParams(removeParam('category', window.location.search));
    }, [router]);

    return (
        <Link href={getRedirectUrl()} as={getRedirectUrl()} locale={locale}>
            <a className={clsx(
                classes.languageLink, linkStyles.link, className
            )}>
                {children}
            </a>
        </Link>
    );
};
export default LanguageLink;
