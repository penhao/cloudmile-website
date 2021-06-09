import React, { Fragment, useEffect, useState } from 'react';
import NavLink from "../../links/NavLink";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import RatioContainer from "../../containers/RatioContainer";
import BackgroundImage from "../../Images/BackgroundImage";
import Typography from "@material-ui/core/Typography";
import VideoRegisterModal from "../../modal/VideoRegisterModal";
import useTheme from "@material-ui/core/styles/useTheme";
import useFormatDate from "../../../components/useFormatDate";
import LinesEllipsis from "react-lines-ellipsis";
import { SalesforcePostParams } from "../../useUrlParams";
import useTranslation from "next-translate/useTranslation";
import { removeParam } from "../../../utils/Utils";
import Link from 'next/link';

interface Props {
    type: number;
    category?: any;
    itemData: any;
    color?: string;
}
interface StyleProps {
    color: string;
}
const useStyles = makeStyles((theme: Theme) => ({
    item: {
        width: '100%',
        textAlign: 'left',
        padding: 0,
        color: theme.palette.common.white,
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            '& $title': {
                color: theme.palette.secondary.main,
                textDecoration: 'underline'
            },
            '& $desc,$date': {
                color: ({ color }: StyleProps) => color,
                textDecoration: 'none'
            },
            '& $coverOverlay': {
                opacity: 1,
                '& svg': {
                    left: '20px',
                    [theme.breakpoints.up('sm')]: {
                        left: '15px'
                    }
                }
            }
        }
    },
    cover: {
        position: 'relative',
        width: '100%',
        marginBottom: '15px',
        backgroundColor: theme.palette.common.black
    },
    coverOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1,
        overflow: 'hidden',
        opacity: 0,
        transition: theme.transitions.create('opacity', {
            easing: theme.transitions.easing.easeOut,
            duration: '0.3s'
        }),
        '& svg': {
            position: 'absolute',
            left: '-300px',
            bottom: '15px',
            transition: theme.transitions.create('left', {
                easing: theme.transitions.easing.easeOut,
                duration: '0.3s'
            })
        }
    },
    title: {
        color: theme.palette.common.white,
        marginBottom: '8px'
    },
    desc: {
        color: theme.palette.common.white,
        marginBottom: '10px',
        fontWeight: 400
    },
    date: {
        color: theme.palette.common.white,
        fontWeight: 400
    }
}));
const VideoListItem = ({ category, type, itemData }: Props) => {
    const classes = useStyles();
    const getContent = () => {
        return (
            <Fragment>
                <div className={classes.cover}>
                    <RatioContainer ratio={{ xs: 180 / 280, sm: 180 / 280, md: 180 / 280 }}>
                        <BackgroundImage imgUrl={itemData.image_other} detectRetina={false} />
                    </RatioContainer>
                    <div className={classes.coverOverlay}>
                        <svg width="117px" height="18px" viewBox="0 0 117 18" version="1.1">
                            <g id="icon/go/static" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                                strokeLinecap="round">
                                <polyline id="Path-2" stroke="#FFFFFF" strokeWidth="2"
                                    points="105.5 0 116.582283 8.95351968 105.5 18" />
                                <line x1="0.5" y1="9" x2="116.5" y2="9" id="Path" stroke="#FFFFFF" strokeWidth="2" />
                            </g>
                        </svg>
                    </div>
                </div>
                <Typography variant={"h6"} className={classes.title}>
                    {itemData.title}
                </Typography>
                <Typography variant={"body1"} component={'div'} className={classes.desc}>
                    <LinesEllipsis
                        text={itemData.seo_description}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters' />
                </Typography>
                <Typography variant={"body1"} component={'div'} className={classes.date}>
                    {useFormatDate(itemData.created_at.replace(' ', 'T'))}
                </Typography>
            </Fragment>
        )
    };
    const getLinkByType = (type: number) => {
        if (type === 1) {
            return (
                <NavLink hrefPath={'/resources/video/[...slug]'}
                    asPath={`/resources/video/${itemData.id}/${encodeURIComponent(itemData.title)}`}
                    underline={false}
                    fullWidth
                    fullHeight
                    classNames={classes.item}>
                    {getContent()}
                </NavLink>
            );
        } else {
            return (
                <Link
                    href={`/resources/video/?categoryId=${category}&postId=${itemData.id}`}
                    as={`/resources/video/register/${category}/${itemData.id}/${encodeURIComponent(itemData.title)}`}
                >
                    <a className={classes.item}>
                        {getContent()}
                    </a>
                </Link>
            );
        }
    };
    return (
        <Fragment>
            {
                getLinkByType(type)
            }
        </Fragment>
    );
};
export default VideoListItem;
