import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import NavLink from "../../../links/NavLink";
import Container from "../../../containers/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import IconFacebook from "../../../icons/IconFacebook";
import IconTwitter from "../../../icons/IconTwitter";
import IconLinkedin from "../../../icons/IconLinkedin";
import RatioContainer from "../../../containers/RatioContainer";
import Grid from "@material-ui/core/Grid";
import BackgroundImage from "../../../Images/BackgroundImage";
import useTranslation from "next-translate/useTranslation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import {useLinkStyles} from "../../../links/LinkStyles";


interface Props {
    desc: string;
    jobTitle: string;
    author: string;
    authorImg: string;
    categoryData: any[];
}

interface StyleProps {
    lang: string
}

const useStyles = makeStyles((theme: Theme) => ({
    head: {
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
    content: {
        position: 'relative'
    },
    desc: {
        marginBottom: '20px',
        fontWeight: 600,
        fontStyle: ({lang}: StyleProps) => (lang === 'en') ? 'italic' : 'normal',
        [theme.breakpoints.up('sm')]: {
            marginTop: '-10px'
        }
    },
    author: {},
    socials: {
        position: 'relative',
        marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            top: '20px',
            left: '-60px',
            marginBottom: 0
        },
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
        }
    },
    info: {
        '& > .MuiGrid-item': {
            '&:nth-child(1)': {
                [theme.breakpoints.up('sm')]: {
                    flex: '0 0 160px'
                }
            },
            '&:nth-child(2)': {
                [theme.breakpoints.up('sm')]: {
                    flex: '1 1 calc(100% - 160px)'
                }
            }
        }
    },
    tagLabel: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 1.63,
        letterSpacing: 'normal',
        color: theme.palette.primary.main
    },
    tags: {
        display: 'flex',
        marginTop: '20px',
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
    }
}));
const CaseDetailHead = ({authorImg, desc, jobTitle, author, categoryData = null}: Props) => {
    const {lang} = useTranslation();
    const classes = useStyles({lang});
    const linkClasses = useLinkStyles();
    const [currentUrl, setCurrentUrl] = useState('');
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));

    useEffect(() => {
        setCurrentUrl(encodeURIComponent(window.location.href));
    }, []);

    return (
        <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}} className={classes.head}>
            <Container maxWidth={{xs: 'none', sm: 'none', md: 1080}} paddingX={false} centerX={false}
                       className={classes.inner}>
                <div className={classes.content}>
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
                    <Grid container spacing={smUp ? 4 : 2} className={classes.info}>
                        <Grid item xs={12} sm={'auto'}>
                            <RatioContainer ratio={{xs: 1, sm: 1, md: 1}} maxWidth={{xs: 120, sm: 120, md: 120}}>
                                <BackgroundImage imgUrl={authorImg} detectRetina={false}/>
                            </RatioContainer>
                        </Grid>
                        <Grid item xs={12} sm={'auto'}>
                            <Typography variant={'h4'} className={classes.desc} dangerouslySetInnerHTML={{
                                __html: (lang === 'zh' || lang === 'zh-hant') ? `「${desc}」` : `“${desc}“`
                            }}/>
                            <Typography variant={'body1'} align={"right"} className={classes.author}
                                        dangerouslySetInnerHTML={{
                                            __html: `${jobTitle},<br/>${author}`
                                        }}/>
                        </Grid>
                    </Grid>
                    {
                        (categoryData && categoryData.length)
                            ?
                            <ul className={classes.tags}>
                                {
                                    categoryData.map((category: any, index: number) => {
                                        return (
                                            <li key={index}>
                                                {
                                                    index === 0
                                                        ? <span className={classes.tagLabel}>#</span>
                                                        : null
                                                }
                                                <NavLink hrefPath={`/resources/category/case-study/[id]`}
                                                         asPath={`/resources/category/case-study/${category.id}`}
                                                         classNames={linkClasses.textLink}>
                                                    {category.title}
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
export default CaseDetailHead;