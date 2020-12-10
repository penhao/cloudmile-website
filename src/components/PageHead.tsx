import React, {useEffect} from 'react';
import Head from "next/head";
import {metadataDomain} from "../../public/config.json";
import {isValueEmpty} from "../utils/Utils";
import useTranslation from "next-translate/useTranslation";

export interface MetadataProps {
    href: string;
    title: string;
    desc: string;
    shareImg?: string;
    keywords?: string;
    isPostHref?: boolean;
}

interface Props {
    metadata: MetadataProps
}

const PageHead = ({metadata}: Props) => {
    const {lang} = useTranslation();
    const enHref = `${metadataDomain}${metadata.href}`;
    const zhHref = `${metadataDomain}/zh${metadata.href}`;
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <meta property="og:site_name" content="CloudMile"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content={
                (metadata.shareImg !== undefined && !isValueEmpty(metadata.shareImg))
                    ? metadata.shareImg
                    : `${metadataDomain}/images/fb-share.png`
            }/>
            <meta property="og:image:width" content="600"/>
            <meta property="og:image:height" content="315"/>
            <meta property="og:title" content={metadata.title}/>
            <meta property="og:description" content={metadata.desc}/>
            <meta property="og:url" content={lang === 'zh' ? zhHref : enHref}/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={metadata.title}/>
            <meta name="twitter:description" content={metadata.desc}/>
            <meta name="twitter:image" content={
                (metadata.shareImg !== undefined && !isValueEmpty(metadata.shareImg))
                    ? metadata.shareImg
                    : `${metadataDomain}/images/fb-share.png`
            }/>

            <link rel="canonical" href={
                (metadata.isPostHref !== undefined && metadata.isPostHref)
                    ? lang === 'zh' ? zhHref : enHref
                    : enHref
            }/>
            <link rel="alternate" hrefLang="en-SG" href={
                (metadata.isPostHref !== undefined && metadata.isPostHref)
                    ? lang === 'zh' ? zhHref : enHref
                    : enHref
            }/>
            <link rel="alternate" hrefLang="x-default" href={
                (metadata.isPostHref !== undefined && metadata.isPostHref)
                    ? lang === 'zh' ? zhHref : enHref
                    : enHref
            }/>
            <link rel="alternate" hrefLang="zh-Hant" href={
                (metadata.isPostHref !== undefined && metadata.isPostHref)
                    ? lang === 'zh' ? zhHref : enHref
                    : zhHref
            }/>
            {
                (metadata.keywords && !isValueEmpty(metadata.keywords))
                    ? <meta name="keywords" content={metadata.keywords}/>
                    : null
            }
            <meta name="description" content={metadata.desc}/>
            <title>{metadata.title}</title>
        </Head>
    );
};
export default PageHead;
