import React, { Fragment } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import NavLink from "../../links/NavLink";
import Typography from "@material-ui/core/Typography";
import LinesEllipsis from "react-lines-ellipsis";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useFormatDate from "../../useFormatDate";
import { isValueEmpty } from "../../../utils/Utils";
import { useLinkStyles } from "../../links/LinkStyles";
import clsx from "clsx";


interface Props {
    currentPage: string;
    data: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        '&:hover': {
            '& $title': {
                textDecoration: 'underline'
            },
            '& $date': {
                '&::before': {
                    opacity: 1,
                    transform: 'scale(1)',
                    transition: theme.transitions.create(['opacity', 'transform'], {
                        easing: theme.transitions.easing.easeOut,
                        duration: '0.3s'
                    }),
                    transitionDelay: '0.2s'
                }
            },
            "& $dateText": {
                transform: 'translateX(20px)',
                transition: theme.transitions.create('transform', {
                    easing: theme.transitions.easing.easeOut,
                    duration: '0.3s'
                })
            }
        }
    },
    inner: {
        position: 'relative',
        width: '100%',
        padding: '15px 20px 30px 20px',
        [theme.breakpoints.up('sm')]: {
            padding: '15px 20px',
        }
    },
    title: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: "bold",
        marginBottom: '5px'
    },
    desc: {
        fontSize: theme.typography.pxToRem(16),
        color: `${theme.palette.common.black} !important`
    },
    date: {
        position: 'relative',
        marginTop: '20px',
        '&::before': {
            position: 'absolute',
            display: 'block',
            content: '""',
            width: '10px',
            height: '10px',
            top: '10px',
            left: 0,
            borderRadius: 99,
            backgroundColor: theme.palette.secondary.main,
            opacity: 0,
            transform: 'scale(0)',
            transition: theme.transitions.create(['opacity', 'transform'], {
                easing: theme.transitions.easing.easeOut,
                duration: '0.3s'
            })
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '10px',
        }
    },
    dateText: {
        fontSize: theme.typography.pxToRem(16),
        transform: 'translateX(0)',
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.easeOut,
            duration: '0.3s'
        }),
        transitionDelay: '0.2s'
    }
}));
const PostListItem = ({ currentPage, data }: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const formatDate = useFormatDate(data.start_date.replace(' ', 'T'));
    return (
        <Fragment>
            {
                (currentPage === 'event' && data.event_type === '2')
                    ?
                    <NavLink hrefPath={data.event_act_url}
                        fullWidth={true} isLaunch={true} classNames={clsx(classes.link, linkClasses.textLink)}>
                        <div className={classes.inner}>
                            <Typography variant={'h5'} component={"div"} className={classes.title}>
                                <LinesEllipsis
                                    text={data.title}
                                    maxLine={smUp ? 1 : 3}
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters' />
                            </Typography>
                            {
                                (data.seo_description && !isValueEmpty(data.seo_description))
                                    ?
                                    <Typography variant={"body1"} component={'div'} className={classes.desc}>
                                        <LinesEllipsis
                                            text={data.seo_description}
                                            maxLine={1}
                                            ellipsis='...'
                                            trimRight
                                            basedOn='letters' />
                                    </Typography>
                                    :
                                    null
                            }
                            <div className={classes.date}>
                                <Typography variant={"body1"} component={'div'} className={classes.dateText}>
                                    {formatDate}
                                </Typography>
                            </div>
                        </div>
                    </NavLink>
                    :
                    <NavLink hrefPath={`/resources/${currentPage}/[...slug]`}
                        asPath={`/resources/${currentPage}/${data.id}/${encodeURIComponent(data.title)}`}
                        fullWidth={true}
                        classNames={clsx(classes.link, linkClasses.textLink)}>
                        <div className={classes.inner}>
                            <Typography variant={'h5'} component={"div"} className={classes.title}>
                                <LinesEllipsis
                                    text={data.title}
                                    maxLine={smUp ? 1 : 3}
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters' />
                            </Typography>
                            {
                                (data.seo_description && !isValueEmpty(data.seo_description))
                                    ?
                                    <Typography variant={"body1"} component={'div'} className={classes.desc}>
                                        <LinesEllipsis
                                            text={data.seo_description}
                                            maxLine={1}
                                            ellipsis='...'
                                            trimRight
                                            basedOn='letters' />
                                    </Typography>
                                    :
                                    null
                            }
                            <div className={classes.date}>
                                <Typography variant={"body1"} component={'div'} className={classes.dateText}>
                                    {formatDate}
                                </Typography>
                            </div>
                        </div>
                    </NavLink>
            }
        </Fragment>
    );
};
export default PostListItem;
