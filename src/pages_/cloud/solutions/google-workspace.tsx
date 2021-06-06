import React, { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import Layout from "../../../components/Layout";
import Banner from "../../../components/google-workspace/Banner";
import IntroSection from "../../../components/google-workspace/IntroSection";
import OfficeSection from "../../../components/google-workspace/OfficeSection";
import RemoteSection from "../../../components/google-workspace/RemoteSection";
import AdoptSection from "../../../components/google-workspace/AdoptSection";
import RelatedSection from "../../../components/google-workspace/RelatedSection";
import SeminarSection from "../../../components/google-workspace/SeminarSection";
import { GetServerSidePropsContext } from "next";
import { fetchListByTag, fetchTagList } from "../../../services/ApiServices";
import ProductContact from "../../../components/sections/ProductContact";

import { useRouter } from 'next/router';
import { getMetadada } from '../../../@share/routes/Metadata';
import { getBreadcrumb } from '../../../@share/routes/Routes';
import Container from '../../../components/containers/Container';
import Breadcrumbs from "../../../components/Breadcrumb";

const GoogleWorkspace = ({ blogCategory, eventCategory, blogCategoryId, blogPosts, eventPosts }) => {
    const { t, lang } = useTranslation();
    const router = useRouter();
    const metadata = getMetadada(router.asPath);
    console.log("metadata", metadata)
    const [breadcrumbData, setBreadcrumbData] = useState([]);

    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb(router.asPath);
        breadcrumbs = breadcrumbs.map((breadcrumb) => {
            return {
                ...breadcrumb,
                breadcrumbName: t(`common:${breadcrumb.breadcrumbName}`),
            };
        })
        setBreadcrumbData(breadcrumbs)
    }, [lang]);

    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <Banner />
            <Container>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <IntroSection />
            <OfficeSection />
            <RemoteSection />
            <AdoptSection />
            <SeminarSection data={eventPosts.data} />
            <RelatedSection data={blogPosts.data} categoryId={blogCategoryId} />
            <ProductContact
                title={t('google-workspace:Transforming How Enterprises Work')}
                caption={t('google-workspace:Contact Us')}
                currentPage={'gws'} />
        </Layout>
    );
};

export const getServerSideProps = async ({ locale, res }: GetServerSidePropsContext) => {
    const blogCategory = await fetchTagList(locale, 1);
    const eventCategory = await fetchTagList(locale, 2);
    const currentBlogItem = blogCategory.data.find(category => {
        return category.title.toLowerCase() === 'google workspace';
    });
    const currentEventItem = eventCategory.data.find(category => {
        return category.title.toLowerCase() === 'google workspace';
    });
    let blogPosts = { data: [] };
    if (currentBlogItem !== undefined) {
        blogPosts = await fetchListByTag(locale, 1, +currentBlogItem.id, 1, 4, 'desc');
    }
    let eventPosts = { data: [] };
    if (currentEventItem !== undefined) {
        eventPosts = await fetchListByTag(locale, 2, +currentEventItem.id, 1, 8, 'desc');
    }
    return {
        props: {
            blogCategory,
            eventCategory,
            blogCategoryId: currentBlogItem.id,
            blogPosts,
            eventPosts,
        }
    }
};
export default GoogleWorkspace;