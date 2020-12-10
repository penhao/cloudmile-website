import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import GridItemFlexible from "../items/GridItemFlexible";
import GridItem480 from "../items/GridItem480";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useFormatDate from "../../useFormatDate";
import Container from "../../containers/Container";
import NavLink from "../../links/NavLink";
import {Button} from "@material-ui/core";
import {useButtonStyles} from "../../buttons/ButtonStyles";
import {useLinkStyles} from "../../links/LinkStyles";

interface Props {
    itemData: any;
}

const useStyles = makeStyles(() => ({
    item: {
        marginTop: '-80px',
        marginBottom: '40px'
    },
    date: {
        textIndent: '2px',
        marginBottom: '5px'
    },
    registerButton: {
        marginTop: '20px'
    }
}));
const EventTopicItem = ({itemData}: Props) => {
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
        <div className={classes.item}>
            <Container maxWidth={{md: 1280}}>
                <Grid container spacing={4} direction={"row-reverse"}>
                    <GridItemFlexible>
                        <NavLink hrefPath={getHrefPath()}
                                 asPath={getAsPath()}
                                 fullWidth={true}
                                 isLaunch={getItemStatus()}
                        >
                            <img src={smUp ? itemData.image_pc : itemData.image_mobile} alt={''}/>
                        </NavLink>
                    </GridItemFlexible>
                    <GridItem480>
                        <Typography variant={"h6"} component={'div'} className={classes.date}>
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
                        <NavLink hrefPath={getHrefPath()}
                                 asPath={getAsPath()}
                                 fullWidth={true}
                                 isLaunch={getItemStatus()}
                                 classNames={classes.registerButton}
                        >
                            <Button variant={"contained"}
                                    color={"primary"}
                                    fullWidth
                                    className={buttonClasses.roundedButton}>
                                Register
                            </Button>
                        </NavLink>
                    </GridItem480>
                </Grid>
            </Container>
        </div>
    );
};
export default EventTopicItem;
