import React, {useEffect, useState} from 'react';
import Layout from "../../../../components/Layout";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import VideoDetailHead from "../../../../components/sections/video/detail/VideoDetailHead";
import Grid from "@material-ui/core/Grid";
import Container from "../../../../components/containers/Container";
import RatioContainer from "../../../../components/containers/RatioContainer";
import VideoRelatedPost from "../../../../components/sections/video/VideoRelatedPost";
import Typography from "@material-ui/core/Typography";
import BackgroundImage from "../../../../components/Images/BackgroundImage";
import IconArrow from "../../../../components/icons/IconArrow";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import {GetServerSidePropsContext} from "next";
import useFormatDate from "../../../../components/useFormatDate";
import useTranslation from "next-translate/useTranslation";
import {fetchVideoArticle} from "../../../../services/ApiServices";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
    bgColor: {
        backgroundColor: theme.palette.grey["800"]
    },
    content: {
        marginBottom: '40px'
    },
    videoWrapper: {
        marginBottom: '20px'
    },
    divider: {
        width: '100%',
        height: '1px',
        backgroundColor: theme.palette.common.white,
        marginTop: 0,
        marginBottom: '30px',
    },
    title: {
        color: theme.palette.common.white,
    },
    desc: {
        color: theme.palette.common.white,
        marginBottom: '20px'
    },
    date: {
        color: theme.palette.common.white,
        marginBottom: '20px'
    },
    cta: {
        width: '100%',
        height: '100%'
    },
    ctaInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none'
    },
    ctaText: {
        color: theme.palette.warning.main,
        marginRight: '10px',
        fontWeight: 700
    },
    line: {
        marginBottom: '40px',
        '& hr': {
            marginBottom: '40px'
        },
        '& p': {
            marginBottom: '20px',
            color: theme.palette.common.white
        },
        '& a': {
            width: '100px'
        }
    }
}));
const LiveStreamPage = ({postData}) => {
    const classes = useStyles();
    const {t} = useTranslation();
    const router = useRouter();
    const [videoDesc, setVideoDesc] = useState('');
    const [domain, setDomain] = useState('');
    useEffect(() => {
        setVideoDesc(postData.video_body);
        setDomain(window.location.hostname);
    }, [postData]);
    return (
        <Layout
            metadata={{
                title: postData.seo_title,
                desc: postData.seo_description,
                keywords: postData.seo_keyword,
                href: router.asPath,
                shareImg: postData.image_social,
                isPostHref: true
            }}
            bgColor={'darken'}
        >
            <div className={classes.bgColor}>
                <VideoDetailHead title={postData.title} tagList={postData.tags}/>
                <Container maxWidth={{md: 1280}} className={classes.content}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <RatioContainer ratio={{xs: 9 / 16, sm: 9 / 16, md: 9 / 16}}
                                            customClass={classes.videoWrapper}>
                                <iframe width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${postData.video_live_id}`}
                                        frameBorder="0"
                                        allowFullScreen/>
                            </RatioContainer>
                            <Typography variant={"body1"} className={classes.desc}
                                        dangerouslySetInnerHTML={{__html: videoDesc}}/>
                            <Typography variant={"body1"} component={'div'} className={classes.date}>
                                {useFormatDate(postData.created_at.replace(' ', 'T'))}
                            </Typography>
                            <Hidden mdUp>
                                <div className={classes.line}>
                                    <hr/>
                                    <Typography variant={"body1"}>
                                        {t('video:line')}
                                    </Typography>
                                    <a href="line://ti/p/@CloudMile" target='_blank'
                                       rel='noreferrer noopener'>
                                        <img src="/images/icons/line.png" alt="@CloudMile"/>
                                    </a>
                                </div>
                            </Hidden>
                            <hr className={classes.divider}/>
                            <RatioContainer ratio={{xs: 300 / 800, sm: 300 / 800, md: 200 / 800}}>
                                <a href={(postData.video_survey !== null) ? postData.video_survey : '#'}
                                   target={'_blank'} className={classes.cta}>
                                    <BackgroundImage
                                        imgUrl={postData.image_survey}
                                        detectRetina={false}/>
                                </a>
                                <div className={classes.ctaInfo}>
                                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                        <Typography variant={"h6"} component={'div'}
                                                    className={classes.ctaText}>
                                            {t('video:cta')}
                                        </Typography>
                                        <IconArrow color={"white"} isForward/>
                                    </Box>
                                </div>
                            </RatioContainer>
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={12} md={4}>
                                <iframe width="100%"
                                        height="700px"
                                        src={`https://www.youtube.com/live_chat?v=${postData.video_live_id}&embed_domain=${domain}`}
                                        allowFullScreen
                                        frameBorder="0"/>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
                <VideoRelatedPost list={postData.related_article}
                                  title={t('video:Related Video').toUpperCase()}/>
            </div>
        </Layout>
    );
};
export const getServerSideProps = async ({locale, query, res}: GetServerSidePropsContext) => {
    const postData = await fetchVideoArticle(locale, query.slug[0]);
    if (postData?.error || postData?.error === 'article not found') {
        const redirectUrl = `${(locale === 'zh') ? '/zh' : ''}/404`;
        res.setHeader("location", redirectUrl);
        res.statusCode = 302;
        res.end();
    }
    return {
        props: {
            postData: postData.data[0]
        }
    }
};
export default LiveStreamPage;
