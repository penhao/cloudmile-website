import React from 'react';
import Head from "next/head";
import { isValueEmpty } from "../utils/Utils";
import useTranslation from "next-translate/useTranslation";
import { getBreadcrumb } from "../@share/routes/Routes";

export interface IMetadataProps {
    href: string;
    title: string;
    desc: string;
    jsonld?: string;
    shareImage?: string;
    keywords?: string;
    customBreadcrumbNode?: any;
}
interface IProps {
    metadata: IMetadataProps;
}
const PageHead = ({ metadata }: IProps) => {
    const { t, lang } = useTranslation();

    const getJSONLD = () => {
        const breadcrumbData = getBreadcrumb(metadata.href);
        const itemList = breadcrumbData.map((breadcrumb, index) => {
            return {
                "@type": "ListItem",
                position: index + 1,
                name: t(`common:${breadcrumb.breadcrumbName}`),
                item: `${process.env.DOMAIN_PATH}${lang === "en" ? "" : "/" + lang
                    }${breadcrumb.path}`,
            }
        });
        if (metadata.customBreadcrumbNode) itemList.push({
            "@type": "ListItem",
            position: itemList.length + 1,
            name: metadata.customBreadcrumbNode.breadcrumbName,
            item: `${process.env.DOMAIN_PATH}${lang === "en" ? "" : "/" + lang
                }${metadata.customBreadcrumbNode.path}`,
        })
        return JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: itemList,
        })
    }


    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            {/* Facebook */}
            <meta name="facebook-domain-verification" content="hwkm0f494ifbg1116ihpgn3amd83hz" />
            <meta property="og:site_name" content="CloudMile" />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="315" />
            <meta property="og:image" content={
                metadata.shareImage ? metadata.shareImage : `${process.env.DOMAIN_PATH}/images/fb-share.png`
            } />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.desc} />
            <meta property="og:url" content={
                `${process.env.DOMAIN_PATH}${lang === "en" ? "" : "/" + lang}${metadata.customBreadcrumbNode ? metadata.customBreadcrumbNode.path : metadata.href}`
            } />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.desc} />
            <meta name="twitter:image" content={
                metadata.shareImage ? metadata.shareImage : `${process.env.DOMAIN_PATH}/images/fb-share.png`
            } />

            <meta name="description" content={metadata.desc} />
            <meta name="keywords" content={metadata.keywords ? metadata.keywords : "CloudMile"} />
            <title>{metadata.title}</title>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: getJSONLD()
                }}
            />
            {/* Google GTM */}
            <script dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MC38SW7');`
            }} />
        </Head>
    );
};
export default PageHead;
