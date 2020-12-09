import {useEffect, useState} from "react";

export interface MetaProps {
    title: string;
    desc: string;
    keywords?: string;
}
export interface MetaUrlProps {
    en: string;
    'zh-hant': string;
}
export interface SeoMetaProps {
    seoData: MetaProps;
    seoUrl: MetaUrlProps;
    domain?: string;
}

const getMetaUrl = (pageName: string, domain: string) => {
    const metaUrl = {
        "home": {
            en: `${domain}`,
            'zh-hant': `${domain}/zh-hant/`
        },
        "digital-transformation": {
            en: `${domain}/cloud/solutions/digital-transformation`,
            'zh-hant': `${domain}/zh-hant/cloud/solutions/digital-transformation`
        },
        "it-modernization": {
            en: `${domain}/cloud/solutions/it-modernization`,
            'zh-hant': `${domain}/zh-hant/cloud/solutions/it-modernization`
        },
        "data-driven-business": {
            en: `${domain}/cloud/solutions/data-driven-business`,
            'zh-hant': `${domain}/zh-hant/cloud/solutions/data-driven-business`
        },
        "multi-cdn-platform": {
            en: `${domain}/cloud/solutions/multi-cdn-platform`,
            'zh-hant': `${domain}/zh-hant/cloud/solutions/multi-cdn-platform`
        },
        "business-productivity": {
            en: `${domain}/cloud/solutions/business-productivity`,
            'zh-hant': `${domain}/zh-hant/cloud/solutions/business-productivity`
        },
        "all-cloud-services": {
            en: `${domain}/cloud/services/all-cloud-services`,
            'zh-hant': `${domain}/zh-hant/cloud/services/all-cloud-services`
        },
        "ai-services": {
            en: `${domain}/ai/artificial-intelligence-services`,
            'zh-hant': `${domain}/zh-hant/ai/artificial-intelligence-services`
        },
        "team": {
            en: `${domain}/company/team`,
            'zh-hant': `${domain}/zh-hant/company/team`
        },
        "partner": {
            en: `${domain}/company/partner`,
            'zh-hant': `${domain}/zh-hant/company/partner`
        },
        "career": {
            en: `${domain}/company/career`,
            'zh-hant': `${domain}/zh-hant/company/career`
        },
        "privacy": {
            en: `${domain}/privacy`,
            'zh-hant': `${domain}/zh-hant/privacy`
        },
        "contact": {
            en: `${domain}/contact`,
            'zh-hant': `${domain}/zh-hant/contact`
        },
        "blog": {
            en: `${domain}/resources/blog`,
            'zh-hant': `${domain}/zh-hant/resources/blog`
        },
        "media-center": {
            en: `${domain}/resources/media-center`,
            'zh-hant': `${domain}/zh-hant/resources/media-center`
        },
        "event": {
            en: `${domain}/resources/event`,
            'zh-hant': `${domain}/zh-hant/resources/event`
        },
        "case-study": {
            en: `${domain}/resources/case-study`,
            'zh-hant': `${domain}/zh-hant/resources/case-study`
        },
        "video": {
            en: `${domain}/resources/video`,
            'zh-hant': `${domain}/zh-hant/resources/video`
        }
    };
    return metaUrl[pageName];
};
const getMetaData = (pageName: string, lang: string) => {
    const metaData = {
        en: {
            "home": {
                "title": "CloudMile | Your Trusted Partner for Digital Transformation",
                "desc": "CloudMile is a leading AI and cloud service company that empowers enterprises by utilizing machine learning, big data, and Google Cloud services."
            },
            "digital-transformation": {
                "title": "Embrace Digital Transformation for the Future | CloudMile",
                "desc": "Digital transformation is the key for anyone to stay competitive in the future market. We ensure a seamless transformation via our cloud and AI services."
            },
            "it-modernization": {
                "title": "Transform Your IT Systems and Stay Competitive | CloudMile",
                "desc": "We help businesses to stay ahead of the competition in the era of cloud computing by upgrading their IT systems. Check out our services."
            },
            "data-driven-business": {
                "title": "Make Smart Decisions with Data-driven Approach | CloudMile",
                "desc": "Boost your company's performance and stay competitive in the market through data-driven business decisions that utilize ML, big data, and data applications."
            },
            "multi-cdn-platform": {
                "title": "MileCDN: Unleash Your Website's Power | CloudMile",
                "desc": "Want to target the Chinese market? Our MileCDN is an ICP license-free cloud platform that allows your website to be accessed by the target Chinese audience."
            },
            "business-productivity": {
                "title": "Business Productivity by Innovative Communication | CloudMile",
                "desc": "Embrace an innovative way of the working environment that impacts your business' productivity. Check out our cutting-edge customized productivity solutions"
            },
            "all-cloud-services": {
                "title": "Make the Most of IT Transformation via Cloud | CloudMile",
                "desc": "We offer a full package of cloud solutions such as cloud migration, security, architecture combined with machine learning and data analysis."
            },
            "ai-services": {
                "title": "Artificial Intelligence Services from A to Z | CloudMile",
                "desc": "Our AI services offer comprehensive AI transformation solutions to ensure seamless integration with your business. We walk you through this AI journey."
            },
            "team": {
                "title": "Who Are We? | CloudMile",
                "desc": "Meet our senior management team to get to know more about CloudMile."
            },
            "partner": {
                "title": "Join Our First Class Business Partner Network | CloudMile",
                "desc": "Become CloudMile's business partner and take your place among the global industry-leading solution partners such as Google Cloud, Cloudflare, Workplace."
            },
            "career": {
                "title": "Join Us & Let's Grow Together | CloudMile",
                "desc": "Join CloudMile's young, agile team. Our company is a great place to start a new career. We work hard but play harder."
            },
            "privacy": {
                "title": "Privacy Policy | CloudMile",
                "desc": "Check out here to find out more about the purpose of collecting personal data and how we use and keep them confidential."
            },
            "contact": {
                "title": "Contact Us | CloudMile",
                "desc": "Let’s discuss how we can help with your digital transformation journey."
            },
            "blog": {
                "title": "Technical Insights | CloudMile",
                "desc": "Follow our CloudMile technical insights including digital transformation, technical trends. From Insights to impact, make a difference by navigating challenges with your business."
            },
            "media-center": {
                "title": "Media Center | CloudMile",
                "desc": "Stay up-to-date with CloudMile news, partnership and product launch information."
            },
            "event": {
                "title": "CloudMile Event | CloudMile",
                "desc": "Read more about the Latest CloudMile news and events details to enhance your technical knowledge."
            },
            "case-study": {
                "title": "Case Study | CloudMile",
                "desc": "Explore success stories to learn how CloudMile drives digital transformation."
            },
            "video": {
                "title": "CloudMile TV | CloudMile",
                "desc": "CloudMile TV |  A 24x7 video channel focused on technical topics for your business to complete digital transformation successfully."
            }
        },
        "zh-hant": {
            "home": {
                "title": "CloudMile | 值得您信賴的數位轉型夥伴",
                "desc": "CloudMile 為亞洲領先人工智慧服務與雲端供應商，致力於實踐 AI 成為企業成長動能。"
            },
            "digital_transformation": {
                "title": "數位轉型顧問 | CloudMile",
                "desc": "從數位策略開始，CloudMile 為您提供從商業策略顧問、技術評估、雲端與人工智慧科技導入，協助您轉型成為決策靈活、技術整合的數位型企業。"
            },
            "it_modernization": {
                "title": "IT 架構現代化 | CloudMile",
                "desc": "從升級基礎架構開始，透過雲端搬遷、資料倉儲現代化、混合雲與多雲架構與應用程式現代化，我們能為您建造最適合數位時代的 IT 基礎架構。"
            },
            "data_driven_business": {
                "title": "數據導向解決方案 | CloudMile",
                "desc": "CloudMile 可提供從最基礎的數據蒐集、數據處理，到數據視覺化與數據分析中所有必要的技術服務。我們可為您打造數據驅動模式，極大化數據的商業價值。"
            },
            "multi_cdn_platform": {
                "title": "多重 CDN 平台 | CloudMile",
                "desc": "MileCDN 是一個 Multi-CDN 服務管理平臺，讓您無須煩惱申請 ICP 許可證相關事宜，便能提供位於中國的使用者穩定的體驗。"
            },
            "business_productivity": {
                "title": "商業生產力 | CloudMile",
                "desc": "透過全新的數位工作模式，我們能讓員工盡情使用雲端分享構想、線上協作、直播會議，不用面對面也能有效率地達成工作目標。"
            },
            "all_cloud_services": {
                "title": "所有雲端服務 | CloudMile",
                "desc": "我們提供全面性的雲端導入與託管服務、應用程式現代化、數據搜尋、機器學習等技術服務，在您數位轉型的過程中永不缺席。"
            },
            "ai_services": {
                "title": "人工智慧服務 | CloudMile",
                "desc": "CloudMile 人工智慧服務提供最落地的產業人工智慧引擎，運用多產業的服務經驗，我們能完整結合技術與商業面需求，加速企業轉型。"
            },
            "team": {
                "title": "關於我們 | CloudMile",
                "desc": "國際級的商業顧問、熟悉產業應用的技術團隊，CloudMile 為亞洲領先人工智慧服務與雲端供應商，致力於實踐 AI 成為企業成長動能。"
            },
            "partner": {
                "title": "合作夥伴計畫 | CloudMile",
                "desc": "加入 CloudMile 合作夥伴計畫，與我們國際級夥伴 Google Cloud、Workplace、Cloudflare 等一同打造數位轉型的整合服務。"
            },
            "career": {
                "title": "加入我們 | CloudMile",
                "desc": "歡迎加入創新、敏捷、熱愛工作與生活的團隊，透過與國際級的夥伴合作，我們將一同邁向國際職涯舞台。"
            },
            "privacy": {
                "title": "隱私權政策 | CloudMile",
                "desc": "歡迎了解我們如何運用您的個人資訊以及注重您資料保密的企業責任。"
            },
            "contact": {
                "title": "聯絡我們 | CloudMile",
                "desc": "讓我們來討論如何協助您實踐數位轉型。"
            },
            "blog": {
                "title": "技術觀點 | CloudMile",
                "desc": "關注 CloudMile 技術觀點，將定期分享企業數位轉型、技術趨勢等內容，從累積觀點開始創造更大的影響力。"
            },
            "media-center": {
                "title": "媒體中心 | CloudMile",
                "desc": "追蹤 CloudMile 最新消息，隨時掌握 CloudMile 合作新聞、產品發佈等最新訊息。"
            },
            "event": {
                "title": "CloudMile 活動 | CloudMile",
                "desc": "了解最新的 CloudMile 資訊與活動，共同學習更多雲端與人工智慧相關趨勢與技術知識。"
            },
            "case-study": {
                "title": "合作案例 | CloudMile",
                "desc": "立即探索 CloudMile 合作案例，了解產業最新的數位轉型成功案例分享。"
            },
            "video": {
                "title": "CloudMile 影音 | CloudMile",
                "desc": "CloudMile 影音 | 24x7 的影音平台，提供您完整的數位轉型技術知識與解決方案分享，加速您企業的數位轉型旅程。"
            }
        }
    };
    return metaData[lang][pageName] as MetaProps;
};
const useMetaData = (pageName: string, lang: string) => {
    const [metaData, setMetaData] = useState<SeoMetaProps>({
        seoData: getMetaData('home', lang),
        seoUrl: getMetaUrl('home', '')
    });
    useEffect(() => {
        console.log(window.location);
        console.log(getMetaUrl(pageName, window.location.origin));
        setMetaData({
            seoData: getMetaData(pageName, lang),
            seoUrl: getMetaUrl(pageName, window.location.origin),
            domain: window.location.origin
        });

    }, [pageName, lang]);
    return metaData;
};
export default useMetaData;