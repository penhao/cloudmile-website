import React, { useEffect, useState } from 'react';
import Layout from "../../../components/Layout";
import Container from "../../../components/containers/Container";
import YoutubePlayer from "../../../components/sections/YoutubePlayer";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import VideoRelatedPost from "../../../components/sections/video/VideoRelatedPost";
import { GetServerSidePropsContext } from "next";
import useFormatDate from "../../../components/useFormatDate";
import VideoDetailHead from "../../../components/sections/video/detail/VideoDetailHead";
import Hidden from "@material-ui/core/Hidden";
import { fetchVideoArticle } from "../../../services/ApiServices";
import { useRouter } from "next/router";
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Breadcrumbs from "../../../components/Breadcrumb";
import { useTranslation } from 'next-translate';

const useStyles = makeStyles((theme: Theme) => ({
    bgColor: {
        backgroundColor: theme.palette.grey["800"]
    },
    head: {
        paddingTop: '40px'
    },
    tagList: {
        display: 'flex',
        margin: '0 -10px 20px -10px',
        '& li': {
            padding: '0 10px'
        }
    },
    tag: {
        padding: '6px 15px',
        fontSize: theme.typography.pxToRem(12),
        fontWeight: 700,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none !important',
        borderRadius: '99em',
        '&:hover': {
            color: theme.palette.common.white
        }
    },
    title: {
        marginBottom: '20px',
        color: theme.palette.common.white,
    },
    desc: {
        marginBottom: '20px',
        color: theme.palette.common.white,
        '& a': {
            color: theme.palette.secondary.main,
            textDecoration: 'underline'
        }
    },
    date: {
        marginBottom: '40px',
        color: theme.palette.common.white,
    },
    videoWrapper: {
        position: 'relative',
        width: 'calc(100% + 40px)',
        left: '-20px',
        marginBottom: '20px'
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

const VideoDetailPage = ({ postData }) => {
    const classes = useStyles();
    const router = useRouter();
    const { t } = useTranslation();
    const [videoDesc, setVideoDesc] = useState('');
    const [breadcrumbData, setBreadcrumbData] = useState([]);

    console.log(postData)

    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb("/resources/video");
        breadcrumbs = breadcrumbs.map((breadcrumb) => {
            return {
                ...breadcrumb,
                breadcrumbName: t(`common:${breadcrumb.breadcrumbName}`),
            };
        })
        breadcrumbs.push({
            path: router.asPath,
            breadcrumbName: postData.title
        })
        setBreadcrumbData(breadcrumbs)
        //
        setVideoDesc(postData.video_body);
    }, [postData]);
    return (
        <Layout
            metadata={{
                href: "/resources/video",
                title: postData.seo_title,
                desc: postData.seo_description,
                keywords: postData.seo_keyword,
                shareImage: postData.image_social,
                customBreadcrumbNode: {
                    breadcrumbName: postData.title,
                    path: router.asPath
                }
            }}
            bgColor={'darken'}
        >
            <Container maxWidth={{ md: 1280 }}>
                <Breadcrumbs breadcrumbData={breadcrumbData} color={"white"} />
            </Container>
            <VideoDetailHead title={postData.title} tagList={postData.tags} />
            <Container maxWidth={{ md: 1280 }}>
                <div className={classes.videoWrapper}>
                    <YoutubePlayer videoUrl={(postData.video_youtbue !== null) ? postData.video_youtbue : ''}
                        loop={false}
                        autoPlay={false}
                        mute={false} />
                </div>
                <Container maxWidth={{ md: 760 }} paddingX={false} centerX={false}>
                    <Typography variant={"body1"} component={'div'} className={classes.desc}
                        dangerouslySetInnerHTML={{ __html: videoDesc }} />
                    <Typography variant={"body1"} component={'div'} className={classes.date}>
                        {useFormatDate(postData.start_date.replace(' ', 'T'))}
                    </Typography>
                    <Hidden mdUp>
                        <div className={classes.line}>
                            <hr />
                            <Typography variant={"body1"} component={"div"}>
                                {t('video:line')}
                            </Typography>
                            <a href="line://ti/p/@CloudMile" target='_blank' rel='noreferrer noopener'>
                                <img src="/images/icons/line.png" alt="@CloudMile" />
                            </a>
                        </div>
                    </Hidden>
                </Container>
            </Container>
            <VideoRelatedPost list={postData.related_article}
                title={t('video:Related Video').toUpperCase()} />
        </Layout>
    );
};

export const getServerSideProps = async ({ locale, query, res }: GetServerSidePropsContext) => {
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
export default VideoDetailPage;
