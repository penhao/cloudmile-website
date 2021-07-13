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
import { useButtonStyles } from "../../buttons/ButtonStyles";
import NavLink from "../../links/NavLink";
import { Theme } from "@material-ui/core";
import clsx from "clsx";
import { useLinkStyles } from "../../links/LinkStyles";
import { useTranslation } from 'next-translate';

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
const EventSliderItem = ({ itemData }: Props) => {
    const { t } = useTranslation()
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const buttonClasses = useButtonStyles();
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
        <Grid container spacing={4} direction={"row-reverse"}>
            <GridItemFlexible>
                <NavLink hrefPath={getHrefPath()}
                    asPath={getAsPath()}
                    fullWidth={true}
                    isLaunch={getItemStatus()}
                >
                    <img src={smUp ? itemData.image_pc : itemData.image_mobile} alt={''} />
                </NavLink>
            </GridItemFlexible>
            <GridItem480>
                <Typography variant={"body1"} component={'div'} className={classes.date}>
                    {useFormatDate(itemData.created_at.replace(' ', 'T'))}
                </Typography>
                <NavLink hrefPath={getHrefPath()}
                    asPath={getAsPath()}
                    underline={true}
                    isLaunch={getItemStatus()}
                    classNames={linkClasses.textLink}
                >
                    <Typography variant={"h5"} component={'div'}>
                        {itemData.title}
                    </Typography>
                </NavLink>
                <NavLink
                    hrefPath={
                        (itemData.event_type === 2) ? itemData.event_act_url : '/resources/event/[...slug]'
                    }
                    asPath={
                        (itemData.event_type === 2) ? '' : `/resources/event/${itemData.id}/${encodeURIComponent(itemData.title)}`
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
                        {t("common:Register")}
                    </Button>
                </NavLink>
            </GridItem480>
        </Grid>
    );
};
export default EventSliderItem;
