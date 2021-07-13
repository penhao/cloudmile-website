import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import NavLink from "../../links/NavLink";
import RatioContainer from "../../containers/RatioContainer";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import BackgroundImage from "../../Images/BackgroundImage";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import LinesEllipsis from 'react-lines-ellipsis';
import useFormatDate from "../../useFormatDate";
import { useLinkStyles } from "../../links/LinkStyles";
import IconLaunch from "../../icons/IconLaunch";

interface Props {
    parentPage: string;
    itemData: any;
    isTopic?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        display: 'block',
        '&:hover': {
            "& $date": {
                bottom: '-20px',
                transition: theme.transitions.create('bottom', {
                    easing: theme.transitions.easing.easeOut,
                    duration: '0.3s'
                })
            },
            '& $dateContainer': {
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
            '& $cover': {
                transformOrigin: 'center center',
                transform: 'scale(1.1)'
            }
        }
    },
    itemInner: {
        position: 'relative',
        width: '100%',
        paddingLeft: '30px',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '30px',
        }
    },
    cover: {
        transformOrigin: 'center center',
        transform: 'scale(1)',
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.easeOut,
            duration: '1.2s'
        }),
        pointerEvents: 'none'
    },
    title: {
        fontSize: theme.typography.pxToRem(20),
        lineHeight: 1.5,
        marginTop: '10px',
        pointerEvents: 'none',
        fontWeight: "bold",
        '& span': {
            display: 'inline',
            position: 'relative'
        },
        '& br': {
            display: 'none !important'
        }
    },
    topic: {
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.pxToRem(30),
            lineHeight: 1.33,
        }
    },
    icon: {
        marginTop: '20px',
        overflow: 'hidden'
    },
    dateContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        '&::before': {
            position: 'absolute',
            display: 'block',
            content: '""',
            width: '10px',
            height: '10px',
            top: 0,
            left: '2px',
            borderRadius: 99,
            backgroundColor: theme.palette.secondary.main,
            opacity: 0,
            transform: 'scale(0)',
            transition: theme.transitions.create(['opacity', 'transform'], {
                easing: theme.transitions.easing.easeOut,
                duration: '0.3s'
            })
        }
    },
    date: {
        position: 'absolute',
        whiteSpace: 'nowrap',
        transformOrigin: 'right bottom',
        transform: 'rotate(-90deg)',
        right: '-20px',
        bottom: 0,
        color: theme.palette.common.black,
        transition: theme.transitions.create('bottom', {
            easing: theme.transitions.easing.easeOut,
            duration: '0.3s'
        }),
        transitionDelay: '0.2s'
    }
}));

const BlogTopicItem = ({ parentPage, itemData, isTopic = false }: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const formatDate = useFormatDate(itemData.start_date.replace(' ', 'T'));

    return (
        <NavLink hrefPath={`/resources/${parentPage}/[...slug]`}
            asPath={`/resources/${parentPage}/${itemData.id}/${encodeURIComponent(itemData.title)}`}
            fullWidth={true} underline={true} textWrap={true}
            classNames={clsx(
                classes.item,
                (isTopic) ? linkClasses.iconLink : linkClasses.textLink
            )}>
            <Box display={'flex'} justifyContent={'flex-end'} className={classes.itemInner}>
                <RatioContainer ratio={{ xs: 400 / 565, sm: 400 / 565, md: 400 / 565 }}>
                    <BackgroundImage imgUrl={smUp ? itemData.image_pc : itemData.image_mobile}
                        detectRetina={false} customClass={classes.cover} />
                </RatioContainer>
                <div className={classes.dateContainer}>
                    <Typography variant={"body1"} component={'div'} className={classes.date}>
                        {formatDate}
                    </Typography>
                </div>
            </Box>
            <Typography variant={'h5'} component={"div"} className={clsx(
                classes.title, isTopic ? classes.topic : null
            )}>
                <LinesEllipsis text={itemData.title} maxLine='3' ellipsis='...' trimRight basedOn='letters' />
            </Typography>
            {
                (isTopic)
                    ?
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <div className={classes.icon}>
                            <IconLaunch />
                        </div>
                    </Box>
                    :
                    null
            }
        </NavLink>
    );
};
export default BlogTopicItem;
