import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export type SalesforcePostParams = {
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    campaignId?: string;
    leadSource: string;
    redirectUrl?: string;
    country?: string;
};

export interface Props {
    defaultParams: SalesforcePostParams;
}

const useUrlParams = (defaultParams: SalesforcePostParams) => {
    const router = useRouter();
    const [urlParams, setUrlParams] = useState<SalesforcePostParams>(
        defaultParams
    );
    const getUrlParam = (url: string, key: string) => {
        return new URL(url).searchParams.get(key);
    };
    useEffect(() => {
        const path = window.location.origin + router.asPath;
        setUrlParams({
            utmSource: getUrlParam(path, "utm_source")
                ? getUrlParam(path, "utm_source")!
                : defaultParams.utmSource,
            utmMedium: getUrlParam(path, "utm_medium")
                ? getUrlParam(path, "utm_medium")!
                : defaultParams.utmMedium,
            utmCampaign: getUrlParam(path, "utm_campaign")
                ? getUrlParam(path, "utm_campaign")!
                : defaultParams.utmCampaign,
            leadSource: defaultParams.leadSource,
            campaignId: defaultParams.campaignId,
        });
    }, []);

    return urlParams;
};
export default useUrlParams;
