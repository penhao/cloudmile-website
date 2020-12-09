import React, {Fragment} from 'react';
import NavLink from "../../links/NavLink";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import RatioContainer from "../../containers/RatioContainer";
import BackgroundImage from "../../Images/BackgroundImage";
import useFormatDate from "../../useFormatDate";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import IconLaunch from "../../icons/IconLaunch";

interface Props {
    itemData: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        backgroundColor: theme.palette.grey["200"],
        '&:hover': {
            '& $title,$date': {
                color: theme.palette.common.black
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
    itemInner: {
        height: '100%'
    },
    title: {
        color: theme.palette.common.black,
        padding: '10px 20px 30px 20px',
        [theme.breakpoints.up('sm')]: {
            padding: '10px 15px 15px 15px',
        }
    },
    date: {
        padding: '15px',
        color: theme.palette.common.black,
        backgroundColor: theme.palette.warning.main
    },
    cover: {
        position: 'relative',
        marginTop: 'auto'
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
    }
}));
const EventListItem = ({itemData}: Props) => {
    const classes = useStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));

    const getItemStatus = () => {
        return Number(itemData.event_type) === 2;
    };
    const getHrefPath = () => {
        return getItemStatus()
            ? itemData.event_act_url
            : '/resources/event/[...slug]';
    };
    const getAsPath = () => {
        return getItemStatus()
            ? itemData.event_act_url
            : `/resources/event/${itemData.id}/${encodeURIComponent(itemData.title)}`;
    };
    return (
        <NavLink hrefPath={getHrefPath()}
                 asPath={getAsPath()}
                 fullWidth={true}
                 fullHeight={true}
                 isLaunch={getItemStatus()}
                 underline={false}
                 classNames={classes.item}
        >
            <Box display={'flex'} flexDirection={'column'} className={classes.itemInner}>
                <Typography variant={"body1"} component={'div'} align={"center"} className={classes.date}>
                    {useFormatDate(itemData.created_at.replace(' ', 'T'))}
                </Typography>
                <Typography variant={"body1"} align={"center"} className={classes.title}>
                    {itemData.title}
                </Typography>
                <div className={classes.cover}>
                    <RatioContainer ratio={{xs: 156 / 280, sm: 156 / 280, md: 156 / 280}}>
                        <BackgroundImage imgUrl={smUp ? itemData.image_pc : itemData.image_mobile}
                                         detectRetina={false}/>
                    </RatioContainer>
                    <div className={classes.coverOverlay}>
                        <IconLaunch color={'white'}/>
                    </div>
                </div>
            </Box>
        </NavLink>
    );
};
export default EventListItem;
