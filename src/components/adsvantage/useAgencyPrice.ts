import {useEffect, useState} from "react";
import useTranslation from "next-translate/useTranslation";


export type AgencyPriceProps = {
    topic: boolean,
    projectName: string,
    pricePrefix?:string,
    priceDesc: string,
    price: string,
    type: string,
    features: string[],
    accountFeatures: string[],
    linkText: string;
    linkUrl: string;
};
const useAgencyPrice = () => {
    const {lang} = useTranslation();
    const [list, setList] = useState<AgencyPriceProps[]>([]);
    const getListByLang = () => {
        switch (lang) {
            case 'en':
                return [
                    {
                        topic: false,
                        projectName: 'Enterprise Lite',
                        priceDesc: ``,
                        price: '10,000',
                        features: [
                            'AI Copy Generator',
                            'Ad Idea',
                            `Numbers of Copy <span>5M+</span>`,
                            'Performance Estimation',
                            'Keyword Planning Tool',
                            'Search Trends',
                            'Ads Optimization',
                            'Search Library',
                        ],
                        type: 'Account Management',
                        accountFeatures: [
                            `New user <span>1-10</span>`,
                            '',
                            ''
                        ],
                        linkText: 'Start Free Trial',
                        linkUrl: 'https://adsvantage.ainotam.com/authorization/signup?plan=adsvantage_enterprise_lite'
                    },
                    {
                        topic: false,
                        projectName: 'Enterprise',
                        priceDesc: ``,
                        pricePrefix:'>',
                        price: '30,000',
                        features: [
                            'AI Copy Generator',
                            'Ad Idea',
                            `Numbers of Copy <span>5M+</span>`,
                            'Performance Estimation',
                            'Keyword Planning Tool',
                            'Search Trends',
                            'Ads Optimization',
                            'Customized Alerting',
                            'Search Library',
                            'Campaign Report',
                            'Google Ads Integration'
                        ],
                        type: 'Account Management',
                        accountFeatures: [
                            `New user <span>1-30</span>`,
                            `Access Management`,
                            `<span>30</span> accounts at least`,
                        ],
                        linkText: 'Contact Us',
                        linkUrl: 'https://adsvantage.ainotam.com/authorization/signup?plan=adsvantage_enterprise'
                    }
                ];
            case 'zh':
                return [
                    {
                        topic: false,
                        projectName: 'Enterprise Lite',
                        priceDesc: `適合<span>較大規模</span>的行銷團隊`,
                        price: '10,000',
                        features: [
                            'AI 智慧寫手',
                            '文案數據資料庫',
                            `文案數據量 <span>500萬+</span>`,
                            '文案成效預估',
                            '關鍵字規劃工具',
                            '競品搜尋趨勢',
                            'AI 關鍵字廣告優化',
                            '關鍵字廣告經驗管理',
                        ],
                        type: '帳戶管理',
                        accountFeatures: [
                            `使用者數量(新) <span>1-10</span>`,
                            '',
                            ''
                        ],
                        linkText: '搶先試用',
                        linkUrl: 'https://adsvantage.ainotam.com/authorization/signup?plan=adsvantage_enterprise_lite'
                    },
                    {
                        topic: false,
                        projectName: 'Enterprise',
                        priceDesc: `適合<span>較大規模</span>的行銷團隊`,
                        pricePrefix:'>',
                        price: '30,000',
                        features: [
                            'AI 智慧寫手',
                            '文案數據資料庫',
                            `文案數據量 <span>500萬+</span>`,
                            '文案成效預估',
                            '關鍵字規劃工具',
                            '競品搜尋趨勢',
                            'AI 關鍵字廣告優化',
                            '客製化廣告監測',
                            '關鍵字廣告經驗管理',
                            '廣告活動報表分析',
                            '自動同步 Google Ads'
                        ],
                        type: '帳戶管理',
                        accountFeatures: [
                            `使用者數量(新) <span>1-30</span>`,
                            `廣告帳戶管理權限`,
                            `可管理 <span>超過 30 個</span>帳號`,
                        ],
                        linkText: '聯繫我們',
                        linkUrl: 'https://adsvantage.ainotam.com/authorization/signup?plan=adsvantage_enterprise'
                    }
                ];
            default:
                return [];
        }
    };
    useEffect(() => {
        setList(getListByLang());
    }, [lang]);

    return list;
};
export default useAgencyPrice;