import {useEffect, useState} from "react";


export type UserPriceProps = {
    topic: boolean,
    projectName: string,
    priceDesc: string,
    price: string,
    pricePrefix?:string,
    type: string,
    features: string[],
    accountFeatures: string[],
    linkText: string;
    linkUrl: string;
};
const useUserPrice = () => {
    const [list, setList] = useState<UserPriceProps[]>([]);
    useEffect(() => {
        setList([
            {
                topic: false,
                projectName: 'Starter',
                priceDesc: `適合<span>個人</span>或<span>中小型</span>的行銷團隊`,
                price: '1,399',
                features: [
                    'AI 智慧寫手',
                    '文案數據資料庫',
                    '文案數據量 300萬',
                    '文案成效預估',
                    '關鍵字規劃工具',
                    '競品搜尋趨勢'
                ],
                type: '帳戶管理',
                accountFeatures: [
                    `使用者數量(新) <span>1</span>`,
                    "",
                    ""
                ],
                linkText: '搶先試用',
                linkUrl: 'https://adsvantage.ainotam.com/authorization/signup?plan=starter'
            },
            {
                topic: true,
                projectName: 'Standard',
                priceDesc: `適合<span>成長中</span>的行銷團隊`,
                price: '1,999',
                features: [
                    'AI 智慧寫手',
                    '文案數據資料庫',
                    `文案數據量 <span>400</span>萬`,
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
                    `使用者數量(新) <span>3</span>`,
                    `廣告帳戶管理權限`,
                    `可管理 <span>1-10</span> 個帳號`,
                ],
                linkText: '搶先試用',
                linkUrl: 'https://adsvantage.ainotam.com/authorization/signup?plan=standard'
            },
            {
                topic: false,
                projectName: 'Professional',
                priceDesc: `適合<span>較大規模</span>的行銷團隊`,
                price: '3,999',
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
                    `使用者數量(新) <span>5</span>`,
                    `廣告帳戶管理權限`,
                    `可管理 <span>11-30</span> 個帳號`,
                ],
                linkText: '搶先試用',
                linkUrl: 'https://adsvantage.ainotam.com/authorization/signup?plan=standard'
            }
        ]);
    }, []);

    return list;
};
export default useUserPrice;