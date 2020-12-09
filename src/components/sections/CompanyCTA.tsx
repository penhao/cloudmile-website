import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import NavLink from "../links/NavLink";
import makeStyles from "@material-ui/core/styles/makeStyles";
import RatioContainer from "../containers/RatioContainer";
import BackgroundImage from "../Images/BackgroundImage";
import Typography from "@material-ui/core/Typography";
import {Theme} from "@material-ui/core";
import {useLinkStyles} from "../links/LinkStyles";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";


interface Props {
    href: string
    title: string
    caption: string
    gutterBottom?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
    cta: {
        display: 'block',
        '& svg': {
            pointerEvents: 'none'
        },
        '&:hover': {
            '& svg': {
                animation: `$HoverEffect 0.7s ${theme.transitions.easing.easeOut}`
            },
            '& $cover': {
                transform: 'scale(1.1)'
            }
        }
    },
    cover: {
        transformOrigin: 'center center',
        transform: 'scale(1)',
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.easeOut,
            duration: '1.2s'
        })
    },
    info: {
        position: 'absolute',
        width: '100%',
        top: '50%',
        transform: 'translate(0,-50%)',
        padding: '20px',
        textAlign: 'center',
        '& h3': {
            fontWeight: 400,
            color: theme.palette.common.white,
            marginBottom: '20px',
            [theme.breakpoints.up('sm')]: {
                marginBottom: '40px',
            }
        },
        '& p': {
            color: theme.palette.common.white,
            marginBottom: '10px'
        }
    }
}));
const CompanyCTA = ({href, title, caption, gutterBottom = true}: Props) => {
    const classes = useStyles({gutterBottom});
    const {t} = useTranslation();
    const linkClasses = useLinkStyles();
    return (
        <SectionContainer margin={gutterBottom}>
            <NavLink hrefPath={href} fullWidth={true} classNames={clsx(
                classes.cta,
                linkClasses.iconLink
            )}>
                <RatioContainer ratio={{xs: 230 / 320, sm: 260 / 640, md: 490 / 1920}}>
                    <BackgroundImage imgUrl={'/partner/right-oppartunities.jpg'}
                                     alt={t('partner:alt.Forest with open road')}
                                     detectRetina={true}
                                     customClass={classes.cover}/>
                    <div className={classes.info}>
                        <Typography variant={"h3"} align={"center"}>
                            {title}
                        </Typography>
                        <Typography variant={"body1"} align={"center"}>
                            {caption}
                        </Typography>
                        <div className={linkClasses.iconMask}>
                            <svg width="117px" height="18px" viewBox="0 0 117 18" version="1.1">
                                <g id="icon/go/static" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                                   strokeLinecap="round">
                                    <polyline id="Path-2" stroke="#CB1090" strokeWidth="2"
                                              points="105.5 0 116.582283 8.95351968 105.5 18"/>
                                    <line x1="0.5" y1="9" x2="116.5" y2="9" id="Path" stroke="#CB1090"
                                          strokeWidth="2"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </RatioContainer>
            </NavLink>
        </SectionContainer>
    );
};
export default CompanyCTA;
