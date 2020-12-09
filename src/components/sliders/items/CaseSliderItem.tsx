import React from 'react';
import Grid from "@material-ui/core/Grid";
import IconQuote from "../../icons/IconQuote";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import RatioContainer from "../../containers/RatioContainer";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import NavLink from "../../links/NavLink";
import SliderImage from "./SliderImage";
import {isValueEmpty} from "../../../utils/Utils";

interface Props {
    active: boolean;
    itemData: any;
}

interface StyleProps {
    lang: string;
    active: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        width: '100%',
        opacity: ({active}: StyleProps) => active ? 1 : 0.3,
        [theme.breakpoints.up('md')]: {
            maxWidth: '1000px',
        }
    },
    imgWrapper: {
        width: '300px',
        [theme.breakpoints.up('md')]: {
            width: '440px'
        }
    },
    desc: {
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 'normal',
        fontStyle: ({lang}: StyleProps) => (lang === 'en') ? 'italic' : 'normal',
        [theme.breakpoints.up('sm')]: {
            fontSize: '28px'
        }
    },
    author: {
        paddingTop: '40px',
        [theme.breakpoints.up('md')]: {
            marginTop: 'auto',
            paddingLeft: '40%'
        }
    },
    descWrapper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        paddingRight: '20px',
        [theme.breakpoints.up('md')]: {
            paddingRight: '40px'
        }
    }
}));

const CaseSliderItem = ({itemData, active = false}: Props) => {

    const {lang} = useTranslation();
    const classes = useStyles({lang, active});
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    return (
        <div className={classes.item}>
            <Grid container spacing={mdUp ? 4 : 2} wrap={"nowrap"}>
                <Hidden xsDown>
                    <Grid item>
                        <div className={classes.imgWrapper}>
                            <NavLink hrefPath={`/resources/case-study/[...slug]`}
                                     asPath={`/resources/case-study/${itemData.id}/${encodeURIComponent(itemData.title)}`}
                                     isLaunch={false} fullWidth={true} fullHeight={true}>
                                <RatioContainer ratio={{xs: (415 / 440), sm: (415 / 440), md: (415 / 440)}}>
                                    <SliderImage
                                        imgUrl={{
                                            desktop: (active && !isValueEmpty(itemData.image_icon_gif)) ? itemData.image_icon_gif : itemData.image_icon,
                                            mobile: (active && !isValueEmpty(itemData.image_icon_gif)) ? itemData.image_icon_gif : itemData.image_icon
                                        }}
                                        alt={''}/>
                                </RatioContainer>
                            </NavLink>
                        </div>
                    </Grid>
                </Hidden>
                <Grid item>
                    <div className={classes.descWrapper}>
                        <IconQuote lang={lang}/>
                        <Typography variant={'h4'}
                                    className={classes.desc}>
                            {itemData.recomm_text}
                        </Typography>
                        <Typography variant={'body1'}
                                    component={'div'}
                                    align={mdUp ? 'right' : 'left'}
                                    className={classes.author}>
                            {`${itemData.recomm_job}, ${itemData.recomm_user}`}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
export default CaseSliderItem;
