import useTranslation from "next-translate/useTranslation";
import { getRoute } from "../../../utils/Utils";
import { siteRoutes } from "../../../../public/config.json";
import Layout from "../../../components/Layout";
import React from "react";
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

const GoogleWorkspace = ({ blogCategory, eventCategory, blogCategoryId, blogPosts, eventPosts }) => {
    const { t, lang } = useTranslation();

    /* console.log('blogCategory', blogCategory);
    console.log('blogPosts', blogPosts);
    console.log('eventCategory', eventCategory);
    console.log('eventPosts', eventPosts); */

    const currentRoute = getRoute('Business Productivity', siteRoutes)[0];
    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <Banner />
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