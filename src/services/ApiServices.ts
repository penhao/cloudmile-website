import axios, {AxiosRequestConfig} from "axios";
import CatchAxiosError from "./Error";
import {apiDomain} from "../../public/config.json";

const currentDomain: string = apiDomain;
const baseConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const get = async (url: string, config: AxiosRequestConfig) => {
    const requestConfig = {
        ...baseConfig,
        ...config
    };
    return await axios.get(url, requestConfig).catch(CatchAxiosError)
};
const getFixLanguage = (lang: string) => {
    return (lang === 'zh' || lang === 'zh-hant') ? 'tw' : lang;
};
export const fetchNavStatus = async (lang: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang)
        }
    };
    const response: any = await get(`${currentDomain}/api/Navigation`, requestConfig);
    return response.data;
};
export const fetchHomeSliderList = async (lang: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang)
        }
    };
    const response: any = await get(`${currentDomain}/api/Welcome`, requestConfig);
    return response.data;
};

// https://cloudmile.long-teng.com.tw/api/Search.html?lang=tw&type=4&page=5&limit=1&keyword=%E5%A4%A7%E6%95%B8%E6%93%9A
export const fetchListByKeyword = async (lang: string, keyword: string, startCount: number, limit: number, type: any) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            keyword: encodeURIComponent(keyword),
            page: startCount,
            limit: limit,
            type: type ? type : null
        }
    };
    const response: any = await get(`${currentDomain}/api/Search.html`, requestConfig);
    return response.data;
};
export const fetchTagList = async (lang: string, pageId: number) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            cat: pageId
        }
    };
    // 1:blog 2:event 3: 新聞管理 5:客戶案例
    const response: any = await get(`${currentDomain}/api/Tag`, requestConfig);
    return response.data;
};
export const fetchBlogList = async (lang: string, startCount: number, limit: number) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            page: startCount,
            limit: limit
        }
    };
    const response: any = await get(`${currentDomain}/api/Blog`, requestConfig);
    return response.data;
};
export const fetchBlogArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId
        }
    };
    const response: any = await get(`${currentDomain}/api/Blog`, requestConfig);
    return (response.status) ? response.data : response;
};
export const fetchListByTag = async (lang: string, pageId: number, tagId: number, startCount: number, limit: number, sort = 'desc') => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            type: pageId,
            tag: tagId,
            page: startCount,
            limit: limit,
            sort: sort
        }
    };
    const response: any = await get(`${currentDomain}/api/SearchArticleTag`, requestConfig);
    return (response.status) ? response.data : response;
};

export const fetchMediaCenterList = async (lang: string, startCount: number, limit: number) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            page: startCount,
            limit: limit
        }
    };
    const response: any = await get(`${currentDomain}/api/News`, requestConfig);
    return response.data;
};
export const fetchMediaCenterArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId
        }
    };
    const response: any = await get(`${currentDomain}/api/News`, requestConfig);
    return (response.status) ? response.data : response;
};
export const fetchCaseList = async (lang: string, startCount: number, limit: number) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            page: startCount,
            limit: limit
        }
    };
    const response: any = await get(`${currentDomain}/api/cases`, requestConfig);
    return response.data;
};
export const fetchCaseArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId
        }
    };
    const response: any = await get(`${currentDomain}/api/cases`, requestConfig);
    return (response.status) ? response.data : response;
};
export const fetchEventList = async (lang: string, startCount: number, limit: number) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            page: startCount,
            limit: limit
        }
    };
    const response: any = await get(`${currentDomain}/api/Event`, requestConfig);
    return response.data;
};
export const fetchEventArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId
        }
    };
    const response: any = await get(`${currentDomain}/api/Event`, requestConfig);
    return (response.status) ? response.data : response;
};
export const fetchVideoCategoryList = async (lang: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang)
        }
    };
    const response: any = await get(`${currentDomain}/api/VideoCategory`, requestConfig);
    return response.data;
};
// https://cloudmile.long-teng.com.tw/api/Video.html?lang=tw&page=1&limit=10&tag=6
export const fetchVideoList = async (lang: string, startCount: number, limit: number, categoryId: number) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            page: startCount,
            limit: limit,
            tag: categoryId
        }
    };
    const response: any = await get(`${currentDomain}/api/Video`, requestConfig);
    return response.data;
};
export const fetchVideoArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId
        }
    };
    const response: any = await get(`${currentDomain}/api/Video`, requestConfig);
    return (response.status) ? response.data : response;
};
export const fetchJobList = async (lang: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang)
        }
    };
    const response: any = await get(`${currentDomain}/api/Work.html`, requestConfig);
    return response.data;
};

/* Preview */
export const fetchPreviewBlogArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId,
            preview: 1
        }
    };
    const response: any = await get(`${currentDomain}/api/Blog`, requestConfig);
    return (response.status) ? response.data : response;
};
export const fetchPreviewMediaCenterArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId,
            preview: 1
        }
    };
    const response: any = await get(`${currentDomain}/api/News`, requestConfig);
    return (response.status) ? response.data : response;
};
export const fetchPreviewCaseArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId,
            preview: 1
        }
    };
    const response: any = await get(`${currentDomain}/api/cases`, requestConfig);
    return (response.status) ? response.data : response;
};
export const fetchPreviewEventArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId,
            preview: 1
        }
    };
    const response: any = await get(`${currentDomain}/api/Event`, requestConfig);
    return (response.status) ? response.data : response;
};
export const fetchPreviewVideoArticle = async (lang: string, articleId: number | string) => {
    const requestConfig: AxiosRequestConfig = {
        params: {
            lang: getFixLanguage(lang),
            id: articleId,
            preview: 1
        }
    };
    const response: any = await get(`${currentDomain}/api/Video`, requestConfig);
    return (response.status) ? response.data : response;
};