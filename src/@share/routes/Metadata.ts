interface IData {
    title: string;
    desc: string;
    keywords?: string;
    shareImage?: string;
}
export interface IMetadata {
    href: string;
    en: IData;
    zh: IData;
}
export const getMetadada = (href: string) => {
    return Metadata.find((metadata) => {
        return metadata.href === href;
    });
};

const Metadata: IMetadata[] = [
    {
        href: "/",
        en: {
            title: "CloudMile | Your Trusted Partner for Digital Transformation",
            desc: "CloudMile is a leading AI and cloud service company that empowers enterprises by utilizing machine learning, big data, and Google Cloud services.",
        },
        zh: {
            title: "CloudMile | 值得您信賴的數位轉型夥伴",
            desc: "CloudMile 為亞洲領先人工智慧服務與雲端供應商，致力於實踐 AI 成為企業成長動能。",
        },
    },
    {
        href: "/cloud/solutions/digital-transformation",
        en: {
            title: "Embrace Digital Transformation for the Future | CloudMile",
            desc: "Digital transformation is the key for anyone to stay competitive in the future market. We ensure a seamless transformation via our cloud and AI services.",
        },
        zh: {
            title: "數位轉型顧問 | CloudMile",
            desc: "從數位策略開始，CloudMile 為您提供從商業策略顧問、技術評估、雲端與人工智慧科技導入，協助您轉型成為決策靈活、技術整合的數位型企業。",
        },
    },
    {
        href: "/cloud/solutions/it-modernization",
        en: {
            title: "Transform Your IT Systems and Stay Competitive | CloudMile",
            desc: "We help businesses to stay ahead of the competition in the era of cloud computing by upgrading their IT systems. Check out our services.",
        },
        zh: {
            title: "IT 架構現代化 | CloudMile",
            desc: "從升級基礎架構開始，透過雲端搬遷、資料倉儲現代化、混合雲與多雲架構與應用程式現代化，我們能為您建造最適合數位時代的 IT 基礎架構。",
        },
    },
    {
        href: "/cloud/solutions/cloud-migration",
        en: {
            title: "Cloud Migration | CloudMile",
            desc: "Reduce the cost with CloudMile’s professional services consultants and our proven implementation methodology.",
        },
        zh: {
            title: "雲端搬遷 | CloudMile",
            desc: "透過 CloudMile 經認證的搬遷流程與專業工程團隊，我們能協助您降低 IT 成本和雲端搬遷風險。",
        },
    },
    {
        href: "/cloud/solutions/data-driven-business",
        en: {
            title: "Make Smart Decisions with Data-driven Approach | CloudMile",
            desc: "Boost your company's performance and stay competitive in the market through data-driven business decisions that utilize ML, big data, and data applications.",
        },
        zh: {
            title: "數據導向解決方案 | CloudMile",
            desc: "CloudMile 可提供從最基礎的數據蒐集、數據處理，到數據視覺化與數據分析中所有必要的技術服務。我們可為您打造數據驅動模式，極大化數據的商業價值。",
        },
    },
    {
        href: "/cloud/solutions/cloud-management-platform",
        en: {
            title: "Make Cloud Management Smart and Simple | CloudMile",
            desc: "MileLync can help you to efficiently manage cloud cost, optimize cloud resources and make data-driven decisions.",
            keywords:
                "MileLync, Cloud Management Platform, cloud cost management, data visualization, google cloud platform",
        },
        zh: {
            title: "MileLync 輕鬆掌握智慧化的雲端管理 | CloudMile",
            desc: "MileLync 幫助您更有效率地管理雲端成本、優化雲端資源並且根據數據制定商業決策。",
            keywords:
                "MileLync, 雲端管理平台, 雲端成本管理, 資料視覺化, 雲端資源, google cloud platform",
        },
    },
    {
        href: "/cloud/solutions/multi-cdn-platform",
        en: {
            title: "MileCDN: Unleash Your Website's Power | CloudMile",
            desc: "Want to target the Chinese market? Our MileCDN is an ICP license-free cloud platform that allows your website to be accessed by the target Chinese audience.",
        },
        zh: {
            title: "多重 CDN 平台 | CloudMile",
            desc: "MileCDN 是一個 Multi-CDN 服務管理平臺，讓您無須煩惱申請 ICP 許可證相關事宜，便能提供位於中國的使用者穩定的體驗。",
        },
    },
    {
        href: "/cloud/solutions/google-workspace",
        en: {
            title: "Business Productivity by Innovative Communication | CloudMile",
            desc: "Embrace an innovative way of the working environment that impacts your business' productivity. Check out our cutting-edge customized productivity solutions",
        },
        zh: {
            title: "商業生產力 | CloudMile",
            desc: "透過全新的數位工作模式，我們能讓員工盡情使用雲端分享構想、線上協作、直播會議，不用面對面也能有效率地達成工作目標。",
        },
    },
    {
        href: "/cloud/services/all-cloud-services",
        en: {
            title: "Make the Most of IT Transformation via Cloud | CloudMile",
            desc: "We offer a full package of cloud solutions such as cloud migration, security, architecture combined with machine learning and data analysis.",
        },
        zh: {
            title: "所有雲端服務 | CloudMile",
            desc: "我們提供全面性的雲端導入與託管服務、應用程式現代化、數據搜尋、機器學習等技術服務，在您數位轉型的過程中永不缺席。",
        },
    },
    {
        href: "/ai/artificial-intelligence-services",
        en: {
            title: "Artificial Intelligence Services from A to Z | CloudMile",
            desc: "Our AI services offer comprehensive AI transformation solutions to ensure seamless integration with your business. We walk you through this AI journey.",
        },
        zh: {
            title: "人工智慧服務 | CloudMile",
            desc: "CloudMile 人工智慧服務提供最落地的產業人工智慧引擎，運用多產業的服務經驗，我們能完整結合技術與商業面需求，加速企業轉型。",
        },
    },
    {
        href: "/ai/adsvantage",
        en: {
            title: "ADsvantage | AI Advertising Platform",
            desc: "ADsvantage Ads idea and AI alerting can help brand marketer and e-commerce reduce 33% cost of advertising.",
        },
        zh: {
            title: "ADsvantage | AI 智能廣告平台",
            desc: "AI 智能廣告平台 ADsvantage(廣告智 庫)，提供企業廣告主及電商平台，透過超過百萬的文案創意庫 (Ads idea) 及 AI 智慧監控工具，平均只要3 秒即可生成一個廣告 文案，可為企業每個月節省至少 33% 廣告作業成本。",
        },
    },
    {
        href: "/resources/blog",
        en: {
            title: "Technical Insights | CloudMile",
            desc: "Follow our CloudMile technical insights including digital transformation, technical trends. From Insights to impact, make a difference by navigating challenges with your business.",
        },
        zh: {
            title: "技術觀點 | CloudMile",
            desc: "關注 CloudMile 技術觀點，將定期分享企業數位轉型、技術趨勢等內容，從累積觀點開始創造更大的影響力。",
        },
    },
    {
        href: "/resources/media-center",
        en: {
            title: "Media Center | CloudMile",
            desc: "Stay up-to-date with CloudMile news, partnership and product launch information.",
        },
        zh: {
            title: "媒體中心 | CloudMile",
            desc: "追蹤 CloudMile 最新消息，隨時掌握 CloudMile 合作新聞、產品發佈等最新訊息。",
        },
    },
    {
        href: "/resources/case-study",
        en: {
            title: "Case Study | CloudMile",
            desc: "Explore success stories to learn how CloudMile drives digital transformation.",
        },
        zh: {
            title: "合作案例 | CloudMile",
            desc: "立即探索 CloudMile 合作案例，了解產業最新的數位轉型成功案例分享。",
        },
    },
    {
        href: "/resources/event",
        en: {
            title: "CloudMile Event | CloudMile",
            desc: "Read more about the Latest CloudMile news and events details to enhance your technical knowledge.",
        },
        zh: {
            title: "CloudMile 活動 | CloudMile",
            desc: "了解最新的 CloudMile 資訊與活動，共同學習更多雲端與人工智慧相關趨勢與技術知識。",
        },
    },
    {
        href: "/resources/video",
        en: {
            title: "CloudMile TV | CloudMile",
            desc: "CloudMile TV |  A 24x7 video channel focused on technical topics for your business to complete digital transformation successfully.",
        },
        zh: {
            title: "CloudMile 影音 | CloudMile",
            desc: "CloudMile 影音 | 24x7 的影音平台，提供您完整的數位轉型技術知識與解決方案分享，加速您企業的數位轉型旅程。",
        },
    },
    {
        href: "/company/team",
        en: {
            title: "Who Are We? | CloudMile",
            desc: "Meet our senior management team to get to know more about CloudMile.",
        },
        zh: {
            title: "關於我們 | CloudMile",
            desc: "國際級的商業顧問、熟悉產業應用的技術團隊，CloudMile 為亞洲領先人工智慧服務與雲端供應商，致力於實踐 AI 成為企業成長動能。",
        },
    },
    {
        href: "/company/partner",
        en: {
            title: "Join Our First Class Business Partner Network | CloudMile",
            desc: "Become CloudMile's business partner and take your place among the global industry-leading solution partners such as Google Cloud, Cloudflare, Workplace.",
        },
        zh: {
            title: "合作夥伴計畫 | CloudMile",
            desc: "加入 CloudMile 合作夥伴計畫，與我們國際級夥伴 Google Cloud、Workplace、Cloudflare 等一同打造數位轉型的整合服務。",
        },
    },
    {
        href: "/company/career",
        en: {
            title: "Join Us & Let's Grow Together | CloudMile",
            desc: "Join CloudMile's young, agile team. Our company is a great place to start a new career. We work hard but play harder.",
        },
        zh: {
            title: "加入我們 | CloudMile",
            desc: "歡迎加入創新、敏捷、熱愛工作與生活的團隊，透過與國際級的夥伴合作，我們將一同邁向國際職涯舞台。",
        },
    },
    {
        href: "/contact",
        en: {
            title: "Contact Us | CloudMile",
            desc: "Let’s discuss how we can help with your digital transformation journey.",
        },
        zh: {
            title: "聯絡我們 | CloudMile",
            desc: "讓我們來討論如何協助您實踐數位轉型。",
        },
    },
    {
        href: "/privacy",
        en: {
            title: "Privacy Policy | CloudMile",
            desc: "Check out here to find out more about the purpose of collecting personal data and how we use and keep them confidential.",
        },
        zh: {
            title: "隱私權政策 | CloudMile",
            desc: "歡迎了解我們如何運用您的個人資訊以及注重您資料保密的企業責任。",
        },
    },
    {
        href: "/terms",
        en: {
            title: "Policy Terms | CloudMile",
            desc: "Check out here to find out more about the purpose of collecting personal data and how we use and keep them confidential.",
        },
        zh: {
            title: "資訊安全政策 | CloudMile",
            desc: "歡迎了解我們如何運用您的個人資訊以及注重您資料保密的企業責任。",
        },
    },
];

export default Metadata;
