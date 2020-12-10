import React, {Fragment, useEffect, useState} from 'react';
import NavLink from "../../links/NavLink";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import RatioContainer from "../../containers/RatioContainer";
import BackgroundImage from "../../Images/BackgroundImage";
import Typography from "@material-ui/core/Typography";
import VideoRegisterModal from "../../modal/VideoRegisterModal";
import useTheme from "@material-ui/core/styles/useTheme";
import useFormatDate from "../../../components/useFormatDate";
import LinesEllipsis from "react-lines-ellipsis";
import {SalesforcePostParams} from "../../useUrlParams";
import useTranslation from "next-translate/useTranslation";
import {removeParam} from "../../../utils/Utils";

interface Props {
    type: number;
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
                color: ({color}: StyleProps) => color,
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
        color: ({color}: StyleProps) => color,
        marginBottom: '8px'
    },
    desc: {
        color: ({color}: StyleProps) => color,
        marginBottom: '10px',
        fontWeight: 400
    },
    date: {
        color: ({color}: StyleProps) => color,
        fontWeight: 400
    }
}));
const VideoListItem = ({type, itemData, color = useTheme().palette.common.white}: Props) => {
    const {t, lang} = useTranslation();
    const classes = useStyles({color});
    const [activeForm, setActiveForm] = useState(false);
    const [salesforceData, setSalesforceData] = useState<SalesforcePostParams | null>(null);
    useEffect(() => {
        const pathOrigin = window.location.origin;
        const urlParams = removeParam('category', window.location.search);
        const fixLang = lang === 'en' ? '' : ('/' + lang);
        const redirectUrl = (type === 2)
            ? `${pathOrigin}${fixLang}/resources/video/live-stream/${itemData.id}/${encodeURIComponent(itemData.title)}${urlParams}`
            : `${pathOrigin}${fixLang}/resources/video/${itemData.id}/${encodeURIComponent(itemData.title)}${urlParams}`;
        setSalesforceData({
            utmSource: itemData.utm_source,
            utmMedium: itemData.utm_medium,
            utmCampaign: itemData.utm_campaign,
            leadSource: itemData.lead_source,
            campaignId: itemData.salesforce_id,
            redirectUrl: redirectUrl,
            country: itemData.country
        })
    }, [itemData]);
    const getContent = () => {
        return (
            <Fragment>
                <div className={classes.cover}>
                    <RatioContainer ratio={{xs: 180 / 280, sm: 180 / 280, md: 180 / 280}}>
                        <BackgroundImage imgUrl={itemData.image_other} detectRetina={false}/>
                    </RatioContainer>
                    <div className={classes.coverOverlay}>
                        <svg width="117px" height="18px" viewBox="0 0 117 18" version="1.1">
                            <g id="icon/go/static" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                               strokeLinecap="round">
                                <polyline id="Path-2" stroke="#FFFFFF" strokeWidth="2"
                                          points="105.5 0 116.582283 8.95351968 105.5 18"/>
                                <line x1="0.5" y1="9" x2="116.5" y2="9" id="Path" stroke="#FFFFFF" strokeWidth="2"/>
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
                        basedOn='letters'/>
                </Typography>
                <Typography variant={"body1"} component={'div'} className={classes.date}>
                    {useFormatDate(itemData.created_at.replace(' ', 'T'))}
                </Typography>
            </Fragment>
        )
    };
    const getLinkByType = (type: number) => {
        switch (type) {
            case 1:
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
            case 2:
                return (
                    <Fragment>
                        <button onClick={() => setActiveForm(true)} className={classes.item}>
                            {getContent()}
                        </button>
                        <VideoRegisterModal
                            title={itemData.form_title}
                            caption={t('video:Register to Watch')}
                            openModel={activeForm}
                            closeHandler={handleClose}
                            salesforceData={salesforceData}/>
                    </Fragment>
                );
            case 3:
                return (
                    <Fragment>
                        <button onClick={() => setActiveForm(true)} className={classes.item}>
                            {getContent()}
                        </button>
                        <VideoRegisterModal
                            title={itemData.form_title}
                            caption={t('video:Register to Watch')}
                            openModel={activeForm}
                            closeHandler={handleClose}
                            salesforceData={salesforceData}/>
                    </Fragment>
                );
            default:
                return null;
        }
    };
    const handleClose = () => {
        setActiveForm(false);
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
