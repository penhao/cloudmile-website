import React from 'react';
import NavLink from "../../links/NavLink";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import BackgroundImage from "../../Images/BackgroundImage";
import RatioContainer from "../../containers/RatioContainer";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";


interface Props {
    data: any;
}

interface StyleProps {
    lang: string
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        '&:hover': {
            '& $image': {
                transformOrigin: 'center center',
                transform: 'scale(1.1)'
            },
            '& $desc': {
                color: theme.palette.secondary.main,
                textDecoration: 'underline'
            },
            '& $author': {
                color: theme.palette.common.black
            }
        }
    },
    cover: {
        marginBottom: '20px'
    },
    image: {
        transformOrigin: 'center center',
        transform: 'scale(1)',
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.easeOut,
            duration: '1.2s'
        }),
        pointerEvents: 'none'
    },
    desc: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: 600,
        fontStyle: ({lang}: StyleProps) => (lang === 'en') ? 'italic' : 'normal',
        marginBottom: '20px'
    },
    author: {
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.common.black
    }
}));

const CaseStudyListItem = ({data}: Props) => {
    const {lang} = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const classes = useStyles({lang});
    return (
        <NavLink hrefPath={'/resources/case-study/[...slug]'}
                 asPath={`/resources/case-study/${data.id}/${encodeURIComponent(data.title)}`}
                 fullWidth={true}
                 underline={false}
                 classNames={classes.link}>

            <RatioContainer ratio={{xs: 1, sm: 1, md: 1}} customClass={classes.cover}>
                <BackgroundImage imgUrl={data.image_icon}
                                 detectRetina={false}
                                 customClass={classes.image}/>
            </RatioContainer>
            <Typography variant={'h6'} className={classes.desc}>
                {
                    (lang === 'zh' || lang === 'zh-hant')
                        ? `「${data.recomm_text}」`
                        : `“${data.recomm_text}“`
                }
            </Typography>
            <Typography variant={"body1"} component={'div'} align={"right"} className={classes.author} dangerouslySetInnerHTML={{
                __html:`${data.recomm_job}, ${data.recomm_user}`
            }}/>

        </NavLink>
    );
};
export default CaseStudyListItem;
