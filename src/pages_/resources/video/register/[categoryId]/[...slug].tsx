import React, { useEffect, useState } from 'react';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import Layout from "../../../../../components/Layout";
import { fetchVideoArticle, fetchVideoList } from '../../../../../services/ApiServices';
import Container from "../../../../../components/containers/Container";
import { Grid, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import RegisterItem from '../../../../../components/sections/video/RegisterItem';
import { useRouter } from "next/router";
import { getBreadcrumb } from '../../../../../@share/routes/Routes';
import { useTranslation } from 'next-translate';

const useStyles = makeStyles((theme: Theme) => ({
    contentWrapper: {
        paddingTop: '40px',
        paddingBottom: '40px',
        [theme.breakpoints.up("sm")]: {
            paddingTop: '60px',
            paddingBottom: '60px',
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: '80px',
            paddingBottom: '90px',
        }
    }
}))
const VideoRegisterPage = ({ postData }) => {
    const classes = useStyles();
    const router = useRouter();
    console.log(router);
    return (
        <Layout metadata={{
            href: "/resources/video",
            title: postData.seo_title,
            desc: postData.seo_description,
            keywords: postData.seo_keyword,
            customBreadcrumbNode: {
                breadcrumbName: postData.title,
                path: router.asPath
            }
        }}>
            <div className={classes.contentWrapper}>
                <Container maxWidth={{ xs: "none", sm: "640", md: "640" }}>
                    <RegisterItem postData={postData} />
                </Container>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async ({ locale, query }: GetServerSidePropsContext) => {
    const fetchData = await fetchVideoList(locale, 1, 12, +query.categoryId);
    if (fetchData?.error) {
        return {
            notFound: true,
        }
    }
    const postData = fetchData.data.find(post => {
        return post.id === query.slug[0];
    })
    return {
        props: {
            postData: postData
        }
    }
};
export default VideoRegisterPage
