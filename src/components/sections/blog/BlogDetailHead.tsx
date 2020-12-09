import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import NavLink from "../../links/NavLink";
import Container from "../../containers/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import IconFacebook from "../../icons/IconFacebook";
import IconTwitter from "../../icons/IconTwitter";
import IconLinkedin from "../../icons/IconLinkedin";
import useFormatDate from "../../useFormatDate";
import {useLinkStyles} from "../../links/LinkStyles";

interface Props {
    title: string;
    date: string;
    tagData: any[];
    parentPage: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        marginBottom: '40px'
    },
    inner: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '60px'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '160px'
        }
    },
    contentWrapper: {
        position: 'relative'
    },
    title: {
        marginBottom: '20px',
        fontSize: theme.typography.pxToRem(32),
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(48)
        }
    },
    date: {
        marginBottom: '20px'
    },
    tagLabel: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 1.63,
        letterSpacing: 'normal',
        color: theme.palette.primary.main
    },
    tagList: {
        display: 'flex',
        '& li': {
            display: 'flex',
            alignItems: 'center',
            '&::after': {
                display: 'block',
                content: '"/"',
                fontWeight: 600,
                color: theme.palette.primary.main,
                margin: '0 5px'
            },
            '&:last-child': {
                '&::after': {
                    content: 'none'
                }
            }
        },
        '& a': {
            color: theme.palette.primary.main,
            fontWeight: 600
        }
    },
    socials: {
        position: 'relative',
        marginBottom: '20px',
        '& li': {
            display: 'inline-block',
            marginRight: '20px',
            '&:last-child': {
                marginRight: 0,
                [theme.breakpoints.up('sm')]: {
                    marginBottom: 0
                }
            },
            '& .MuiButton-root': {
                width: '40px',
                padding: 0,
                minWidth: 0,
                [theme.breakpoints.up('sm')]: {
                    width: '20px'
                }
            },
            '& svg': {
                width: '40px !important',
                height: '40px',
                [theme.breakpoints.up('sm')]: {
                    width: '20px !important',
                    height: '20px'
                }
            },
            [theme.breakpoints.up('sm')]: {
                display: 'block',
                marginRight: 0,
                marginBottom: '20px',
                '&:last-child': {
                    marginBottom: 0
                }
            }
        },
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            top: '10px',
            left: '-60px',
            marginBottom: 0
        },
        [theme.breakpoints.up('md')]: {
            top: '16px'
        }
    }
}));
const BlogDetailHead = ({title, date, tagData, parentPage}: Props) => {

    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const formatDate = useFormatDate(date.replace(' ', 'T'));
    const [currentUrl, setCurrentUrl] = useState('');
    useEffect(() => {
        setCurrentUrl(encodeURIComponent(window.location.href));
    }, []);

    return (
        <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}} className={classes.wrapper}>
            <Container maxWidth={{xs: 'none', sm: 'none', md: 1080}}
                       paddingX={false} centerX={false} className={classes.inner}>
                <div className={classes.contentWrapper}>
                    <ul className={classes.socials}>
                        <li>
                            <NavLink hrefPath={`http://www.facebook.com/sharer.php?u=${currentUrl}`} isLaunch={true}>
                                <IconFacebook/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink hrefPath={`https://twitter.com/share?url=${currentUrl}`} isLaunch={true}>
                                <IconTwitter/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink hrefPath={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`}
                                     isLaunch={true}>
                                <IconLinkedin/>
                            </NavLink>
                        </li>
                    </ul>
                    <Typography variant={'h2'} className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant={'body1'} component={'div'} className={classes.date}>
                        {formatDate}
                    </Typography>
                    {
                        (tagData?.length)
                            ?
                            <ul className={classes.tagList}>
                                {
                                    tagData.map((tag: any, index: number) => {
                                        return (
                                            <li key={index}>
                                                {
                                                    index === 0
                                                        ? <span className={classes.tagLabel}>#</span>
                                                        : null
                                                }
                                                <NavLink hrefPath={`/resources/category/${parentPage}/[id]`}
                                                         asPath={`/resources/category/${parentPage}/${tag.id}`}
                                                         classNames={linkClasses.textLink}>
                                                    {tag.title}
                                                </NavLink>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            :
                            null
                    }
                </div>
            </Container>
        </Container>
    );
};
export default BlogDetailHead;