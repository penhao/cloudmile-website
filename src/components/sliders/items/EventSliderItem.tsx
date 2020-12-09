import React from 'react';
import Grid from "@material-ui/core/Grid";
import GridItem480 from "../../sections/items/GridItem480";
import GridItemFlexible from "../../sections/items/GridItemFlexible";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useFormatDate from "../../useFormatDate";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import {useButtonStyles} from "../../buttons/ButtonStyles";
import NavLink from "../../links/NavLink";
import {Theme} from "@material-ui/core";
import clsx from "clsx";

interface Props {
    itemData: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    date: {
        textIndent: '2px',
        marginBottom: '5px'
    },
    link: {
        margin: '20px 0',
        [theme.breakpoints.up('md')]: {
            margin: '40px 0 0 0'
        }
    }
}));
const EventSliderItem = ({itemData}: Props) => {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <Grid container spacing={4} direction={"row-reverse"}>
            <GridItemFlexible>
                <img src={smUp ? itemData.image_pc : itemData.image_mobile} alt={''}/>
            </GridItemFlexible>
            <GridItem480>
                <Typography variant={"body1"} component={'div'} className={classes.date}>
                    {useFormatDate(itemData.created_at.replace(' ', 'T'))}
                </Typography>
                <Typography variant={"h5"}>
                    {itemData.title}
                </Typography>
                <NavLink
                    hrefPath={
                        (itemData.event_type === 2)
                            ? itemData.event_act_url
                            : '/resources/event/[...slug]'
                    }
                    asPath={
                        (itemData.event_type === 2)
                            ? ''
                            : `/resources/event/${itemData.id}/${encodeURIComponent(itemData.title)}`
                    }
                    isLaunch={itemData.event_type === 2}
                    fullWidth={true}
                >
                    <Button variant={"contained"}
                            component={'div'}
                            color={"primary"}
                            fullWidth
                            className={clsx(
                                classes.link,
                                buttonClasses.roundedButton
                            )}>
                        Register
                    </Button>
                </NavLink>
            </GridItem480>
        </Grid>
    );
};
export default EventSliderItem;
