type RedirectType = { from: string, to: string; };
// MediaCenter
// ========================================================================

const mediaRedirects = [
    {
        from: "/zh-hant/ai-adsvantage/",
        to: "/zh/resources/media-center/141/CloudMile%20AI%20%E5%8A%9B%E5%8A%A9%E4%BC%81%E6%A5%AD%E6%90%B6%E4%BD%94%E5%BE%8C%E7%96%AB%E5%85%88%E6%A9%9F%20ADsvantage%E5%85%8D%E8%B2%BB%E8%A9%A6%E7%94%A8"
    },
    {
        from: "/zh-hant/latest-news/d-biz-programme/",
        to: "/zh/resources/media-center/140/%E9%97%9C%E6%96%BC%E3%80%8C%E9%81%99%E8%B7%9D%E7%87%9F%E5%95%86%E8%A8%88%E5%8A%83%E3%80%8D"
    },
    {
        from: "/zh-hant/2020-hk-workshop-start-digital-transformation-via-cloud-ai-solutions/",
        to: "/zh/resources/media-center/139/CloudMile%20%E9%A6%99%E6%B8%AF%E6%8A%80%E8%A1%93%E8%AC%9B%E5%BA%A7%EF%BC%8C%E5%8A%A9%E4%BC%81%E6%A5%AD%E5%96%84%E7%94%A8AI%E3%80%81%E9%9B%B2%E7%AB%AF%E5%95%9F%E5%8B%95%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B"
    },
    {
        from: "/zh-hant/ainotam-launches-ai-search-ads-management-platform-loupe/",
        to: "/zh/resources/media-center/137/Ainotam%20%E8%89%BE%E8%AB%BE%E9%A0%93%E7%A7%91%E6%8A%80%E6%8E%A8%E5%87%BA%E6%A5%AD%E7%95%8C%E9%A6%96%E5%89%B5%20AI%20%E9%97%9C%E9%8D%B5%E5%AD%97%E5%BB%A3%E5%91%8A%E6%93%8D%E4%BD%9C%E5%8A%A0%E9%80%9F%E5%99%A8"
    },
    {
        from: "/zh-hant/cloudmile-announced-the-completion-of-pre-series-b-financing/",
        to: "/zh/resources/media-center/136/CloudMile%20%E5%AE%8C%E6%88%90600%E8%90%AC%E7%BE%8E%E5%85%83%E5%8B%9F%E8%B3%87%EF%BC%8C%E5%8A%A0%E9%80%9F%E6%8B%93%E5%B1%95%E5%B8%82%E5%A0%B4%E5%8F%8A%20AI%20%E7%94%A2%E5%93%81%E9%96%8B%E7%99%BC"
    },
    {
        from: "/zh-hant/cloudmile%E6%94%9C%E6%89%8Bmulti-cdn%E5%B0%88%E5%AE%B6mlytics%E6%8E%A8%E5%87%BA%E4%B8%80%E7%AB%99%E5%BC%8F%E5%B9%B3%E5%8F%B0milecdn/",
        to: "/zh/resources/media-center/135/CloudMile%E6%94%9C%E6%89%8BMulti%20CDN%E5%B0%88%E5%AE%B6mlytics%E6%8E%A8%E5%87%BA%E4%B8%80%E7%AB%99%E5%BC%8F%E5%B9%B3%E5%8F%B0MileCDN"
    },
    {
        from: "/zh-hant/cloudmile-ai-application/",
        to: "/zh/resources/media-center/134/%E6%89%93%E9%80%A0%E4%BC%81%E6%A5%AD%E6%9C%89%E6%84%9F%E7%9A%84%20AI%20%E6%87%89%E7%94%A8%EF%BC%81CloudMile%20%E4%BB%A5%20AI4Biz%20%E5%8A%A9%E4%BC%81%E6%A5%AD%E8%BD%89%E5%9E%8B"
    },
    {
        from: "/zh-hant/cloudmile-ainotam/",
        to: "/zh/resources/media-center/133/CloudMile%E6%88%90%E7%AB%8BAinotam%EF%BC%8C%E6%94%9C%E6%89%8B%E5%93%81%E7%89%8C%E7%94%A8AI%E7%BF%BB%E8%BD%89%E6%95%B8%E4%BD%8D%E8%A1%8C%E9%8A%B7"
    },
    {
        from: "/zh-hant/cloudmile-hk-20190711/",
        to: "/zh/resources/media-center/132/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E9%9B%B2%E7%AB%AF%E6%9C%8D%E5%8B%99%E4%BE%9B%E6%87%89%E5%95%86CloudMile%E7%99%BB%E9%99%B8%E9%A6%99%E6%B8%AF%20%E7%82%BAGoogle%20Cloud%E6%A0%B8%E5%BF%83%E7%AD%96%E7%95%A5%E5%90%88%E4%BD%9C%E5%A4%A5%E4%BC%B4%E3%80%80%E5%8A%A9%E6%9C%AC%E5%9C%B0%E4%BC%81%E6%A5%AD%E6%95%B8%E7%A2%BC%E8%BD%89%E5%9E%8B"
    },
    {
        from: "/zh-hant/%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B0%8F%E4%BC%81%E6%A5%AD%E7%9F%A5%E8%AD%98%E5%AD%B8%E8%8B%91%E9%96%8B%E8%B7%91cloudmile%E5%B0%87%E5%8A%A9%E4%BC%81%E6%A5%AD%E5%8A%A0%E9%80%9F%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B/",
        to: "/zh/resources/media-center/131/%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B0%8F%E4%BC%81%E6%A5%AD%E7%9F%A5%E8%AD%98%E5%AD%B8%E8%8B%91%E9%96%8B%E8%B7%91%EF%BC%8CCloudMile%E5%B0%87%E5%8A%A9%E4%BC%81%E6%A5%AD%E5%8A%A0%E9%80%9F%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B"
    },
    {
        from: "/zh-hant/data-is-power-fsi-digital-transformation-with-ai/",
        to: "/zh/resources/media-center/130/%E3%80%8C%E6%95%B8%E6%93%9A%E5%8D%B3%E5%8A%9B%E9%87%8F%EF%BC%81%E3%80%8D%E9%87%91%E8%9E%8D%E6%A5%AD%E5%8A%9B%E6%B1%82%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B%EF%BC%8CAI%E7%A7%91%E6%8A%80%E5%89%B5%E9%80%A0%E5%89%8D%E6%89%80%E6%9C%AA%E6%9C%89%E6%96%B0%E5%95%86%E6%A9%9F"
    },
    {
        from: "/zh-hant/cloudmile-two-years-anniversary-provide-better-ai-and-cloud-services/",
        to: "/zh/resources/media-center/129/CloudMile%E5%85%A9%E6%AD%B2%E4%BA%86%EF%BC%81%E6%8F%9A%E5%B8%86%E5%95%9F%E8%88%AA%EF%BC%8C%E7%82%BA%E4%B8%96%E7%95%8C%E6%8F%90%E4%BE%9B%E6%9B%B4%E5%A5%BD%E7%9A%84AI%E8%88%87%E9%9B%B2%E7%AB%AF%E6%9C%8D%E5%8B%99"
    },
    {
        from: "/zh-hant/cloudmile-enlarges-recruitment-by-tripling-revenue-annually/",
        to: "/zh/resources/media-center/82/%E7%87%9F%E6%94%B6%E5%B9%B4%E5%A2%9E%E4%B8%89%E5%80%8D%20CloudMile%20%E6%93%B4%E5%A4%A7%E6%8B%9B%E5%8B%9F"
    },
    {
        from: "/zh-hant/joincloudmile/",
        to: "/zh/resources/media-center/81/Join%20CloudMile!%20%C2%A0CloudMile%20%E8%90%AC%E9%87%8C%E9%9B%B2%E5%BC%B7%E5%8A%9B%E5%BE%B5%E6%89%8D%E4%B8%AD%EF%BC%81%20"
    },
    {
        from: "/zh-hant/cloudmile-elastic/",
        to: "/zh/resources/media-center/80/CloudMile%E7%B5%90%E7%9B%9F%E5%85%A8%E7%90%83%E9%A0%82%E5%B0%96%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E5%B7%A8%E6%93%98Elastic%20%E6%B4%BB%E5%8C%96%E5%A4%A7%E6%95%B8%E6%93%9A%20%E5%8A%9B%E6%8E%A8%E7%94%A2%E6%A5%AD%E5%8D%87%E7%B4%9A"
    },
    {
        from: "/zh-hant/cloudmile-%E5%86%8D%E7%8D%B2-8000%E8%90%AC-a%E8%BC%AA%E8%9E%8D%E8%B3%87-%E5%BC%95%E9%80%B2-%E7%AD%96%E7%95%A5%E6%8A%95%E8%B3%87-%E4%BD%88%E5%B1%80%E4%BA%9E%E6%B4%B2/",
        to: "/zh/resources/media-center/79/CloudMile%20%E5%86%8D%E7%8D%B28%2C000%E8%90%ACA%E8%BC%AA%E8%9E%8D%E8%B3%87%20%E5%BC%95%E9%80%B2%E7%AD%96%E7%95%A5%E6%8A%95%E8%B3%87%E4%BD%88%E5%B1%80%E4%BA%9E%E6%B4%B2"
    },
    {
        from: "/zh-hant/cloudmile-google-maps-platform/",
        to: "/zh/resources/media-center/78/CloudMile%20%E7%8D%B2%E5%8F%96%20Google%20Maps%20Platform%20%E5%A4%A5%E4%BC%B4%E8%B3%87%E6%A0%BC"
    },
    {
        from: "/zh-hant/cloudmile-expanding-globally/",
        to: "/zh/resources/media-center/77/CloudMile%20%E9%80%B2%E8%BB%8D%E5%9C%8B%E9%9A%9B%EF%BC%8C%E6%B7%B1%E5%8C%96%E9%9B%B2%E7%AB%AF%E5%8F%8A%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%9C%8D%E5%8B%99%E4%BD%88%E5%B1%80"
    },
    {
        from: "/zh-hant/anniversary-looking-back/",
        to: "/zh/resources/media-center/76/%E6%88%91%E5%80%91%E4%B8%80%E6%AD%B2%E4%BA%86%EF%BC%81CloudMile%20%E9%80%B1%E5%B9%B4%E5%9B%9E%E9%A1%A7"
    },
    {
        from: "/zh-hant/gcp/gcp-asia-fast-track-program-partner/",
        to: "/zh/resources/media-center/75/CloudMile%20%E6%88%90%E7%82%BA%20Google%20Cloud%20%E4%BA%9E%E6%B4%B2%E6%9C%80%E5%A4%9A%E6%8A%80%E8%A1%93%E8%AA%8D%E8%AD%89%E5%90%88%E4%BD%9C%E5%A4%A5%E4%BC%B4"
    },
    {
        from: "/latest-news/d-biz-programme/",
        to: "/resources/media-center/268/ABOUT%20DISTANCE%20BUSINESS%20PROGRAMME%20(D-BIZ)"
    },
    {
        from: "/ai-company-cloudmile-celebrates-3-years-anniversary/",
        to: "/resources/media-center/267/CLOUDMILE%20IS%20TURNING%203!%20MORE%20AI%20APPLICATIONS%20ARE%20COMING%20TO%20HELP%20ENTERPRISES%20OPTIMIZE%20OPERATIONS%20PERFORMANCE"
    },
    {
        from: "/ai-company-cloudmile-raised-6-million-in-pre-b-series-funding/",
        to: "/resources/media-center/266/AI%20COMPANY%20CLOUDMILE%20RAISED%20%246%20MILLION%20IN%20PRE-B%20SERIES%20FUNDING"
    },
    {
        from: "/cloud-expo-asia-test-account-winner/",
        to: "/resources/media-center/265/Winners%20of%20test%20account%20to%20the%20MileCDN%20platform!%20%7C%20GCP%20%7C%20CloudMile"
    },
    {
        from: "/cloudmile-partnered-with-mlytics/",
        to: "/resources/media-center/264/CLOUDMILE%20PARTNERED%20WITH%20MLYTICS%2C%20EXPERT%20IN%20MULTI%20CDN%20TO%20LAUNCH%20ONE-STOP%20PLATFORM%3A%20MILECDN"
    },
    {
        from: "/cloudmile-hk-20190711/",
        to: "/resources/media-center/263/GOOGLE%20CLOUD%20PREMIUM%20PARTNER%20%E2%80%9CCLOUDMILE%E2%80%9D%20EXPANDS%20TO%20HONG%20KONG%20ACCELERATES%20DIGITAL%20TRANSFORMATION%20FOR%20HONG%20KONG%20ENTERPRISES"
    },
    {
        from: "/g-suite-will-raise-the-price-for-basic-and-business-edition/",
        to: "/resources/media-center/262/G%20SUITE%20PRICE%20RAISING%3ABASIC%20AND%20BUSINESS%20EDITION"
    },
    {
        from: "/cloudmile-partners-with-elastic-to-help-expansion-into-taiwan/",
        to: "/resources/media-center/261/CLOUDMILE%20PARTNERS%20WITH%20ELASTIC%20TO%20HELP%20EXPANSION%20INTO%20TAIWAN"
    },
    {
        from: "/cloudmile-raised-another-a-round-funding-2-6m-explored-asian-market-with-strategic-investment/",
        to: "/resources/media-center/260/CLOUDMILE%20RAISED%20ANOTHER%20A-ROUND%20FUNDING%202.6M%3A%20EXPLORED%20ASIAN%20MARKET%20WITH%20STRATEGIC%20INVESTMENT"
    },
    {
        from: "/cloudmile-google-maps-platform/",
        to: "/resources/media-center/259/CLOUDMILE%20BECOMES%20PREMIER%20PARTNER%20FOR%20GOOGLE%20MAPS!%20"
    },
    {
        from: "/cloudmile-infrastructure-specialization/",
        to: "/resources/media-center/258/CLOUDMILE%20ACHIEVES%20GOOGLE%20CLOUD%20INFRASTRUCTURE%20SPECIALIZATION"
    },
    {
        from: "/gcp/opening-day-review/",
        to: "/resources/media-center/257/CLOUDMILE%2C%20GOOGLE%20CLOUD%20ALIGN%20EFFORTS%20TO%20HELP%20COMPANIES%20MOVE%20TO%20THE%20CLOUD"
    }
];
// Event
// ========================================================================
const eventRedirects = [
    {
        from: "/zh-hant/resources/event/q4workspacewebinar/",
        to: "/zh/resources/event/152/G%20Suite%20%E6%8F%9B%E6%96%B0%E8%A3%9D%EF%BC%81Google%20Workspace%20%E5%88%9D%E7%99%BB%E5%A0%B4"
    },
    {
        from: "/zh-hant/ai-advertising-workshop/",
        to: "/zh/resources/event/150/AI%20%E9%97%9C%E9%8D%B5%E5%AD%97%E5%BB%A3%E5%91%8A%E7%B7%9A%E4%B8%8A%E6%95%99%E5%AD%B8%E5%B7%A5%E4%BD%9C%E5%9D%8A%EF%BD%9C%E8%BF%8E%E6%8E%A5%E9%9B%BB%E5%95%86%E5%AE%85%E7%B6%93%E6%BF%9F%E4%B8%8B%E7%9A%84%E9%9B%99%E5%8D%81%E4%B8%80"
    },
    {
        from: "/zh-hant/resources/event/q3ecwebinar/",
        to: "/zh/resources/event/149/%E6%90%B6%E6%94%BB%E8%B3%BC%E7%89%A9%E5%AD%A3%EF%BC%81%E9%81%8B%E7%94%A8%E5%A4%A7%E6%95%B8%E6%93%9A%E5%88%86%E6%9E%90%E9%81%94%E5%88%B0%E7%B2%BE%E6%BA%96%E8%A1%8C%E9%8A%B7"
    },
    {
        from: "/zh-hant/resources/event/q3gamingwebinar-registration/",
        to: "/zh/resources/event/147/%E5%BC%95%E9%A0%98%E5%9C%8B%E9%9A%9B%E8%B6%A8%E5%8B%A2%20%E4%BD%88%E5%B1%80%E5%85%A8%E7%90%83%E9%81%8A%E6%88%B2%E7%89%88%E5%9C%96"
    },
    {
        from: "/zh-hant/webinar/q2-apigee-webinar-registration/",
        to: "/zh/resources/event/146/%E3%80%90%E6%B4%BB%E5%8B%95%E7%B5%90%E6%9D%9F%E3%80%91CloudMile%20%E7%B7%9A%E4%B8%8A%E7%A0%94%E8%A8%8E%E6%9C%83%EF%BC%9A%E5%85%A8%E7%90%83%E9%97%9C%E6%B3%A8%EF%BC%81%E4%B8%80%E7%AB%99%E5%BC%8F%E6%8E%8C%E6%8F%A1%E9%96%8B%E6%94%BE%E5%BC%8F%E9%8A%80%E8%A1%8C"
    },
    {
        from: "/zh-hant/q2anthoswebinarregistration/",
        to: "/zh/resources/event/145/%E3%80%90CloudMile%20%E7%B7%9A%E4%B8%8A%E7%A0%94%E8%A8%8E%E6%9C%83%E3%80%91%E6%B7%B7%E5%90%88%E9%9B%B2%E5%A4%A7%E8%BA%8D%E9%80%B2%EF%BC%81%E4%BC%81%E6%A5%AD%E7%82%BA%E4%BD%95%E8%A6%81%E4%BD%BF%E7%94%A8Anthos%EF%BC%9F"
    },
    {
        from: "/zh-hant/2019-cloudflare-tw-webinar/",
        to: "/zh/resources/event/144/%E3%80%90%E6%B4%BB%E5%8B%95%E7%B5%90%E6%9D%9F%E3%80%912019%20CloudMile%20%E7%B7%9A%E4%B8%8A%E8%AC%9B%E5%BA%A7"
    },
    {
        from: "/zh-hant/data-warehouse-migration-seminar/",
        to: "/zh/resources/event/143/%5B%E6%B4%BB%E5%8B%95%E7%B5%90%E6%9D%9F%5D%E8%B3%87%E6%96%99%E5%80%89%E5%84%B2%E9%81%B7%E7%A7%BB%E8%AC%9B%E5%BA%A7"
    },
    {
        from: "/zh-hant/google-maps-seminar-2019/",
        to: "/zh/resources/event/89/2019%20Google%20Maps%20%E4%BC%81%E6%A5%AD%E5%9C%B0%E5%9C%96%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%A1%88%E7%A0%94%E8%A8%8E%E6%9C%83%E5%A0%B1%E5%90%8D%E9%96%8B%E5%A7%8B"
    },
    {
        from: "/zh-hant/2019-innovex/",
        to: "/zh/resources/event/87/CloudMile%20%E8%90%AC%E9%87%8C%E9%9B%B2%E8%88%87%E4%BD%A0%E7%9B%B8%E7%B4%84%202019%20InnoVEX%20%E6%96%B0%E5%89%B5%E7%89%B9%E5%B1%95%EF%BC%81"
    },
    {
        from: "/zh-hant/google-cloud-next19-extended-meetup/",
        to: "/zh/resources/event/86/Google%20Cloud%20Next'19%20"
    },
    {
        from: "/zh-hant/hktdc-international-ict-expo-2019/",
        to: "/zh/resources/event/84/2019%2F4%2F13-4%2F16%20%E5%9C%8B%E9%9A%9B%E8%B3%87%E8%A8%8A%E7%A7%91%E6%8A%80%E5%8D%9A%E8%A6%BD%EF%BC%88HKTDC%20ICT%20Expo%202019%EF%BC%89"
    },
    {
        from: "/optimize-business-performance-via-cloud-ai-solutions/",
        to: "/resources/event/256/Optimize%20Business%20Performance%20via%20Cloud%20%26%20AI%20solutions%20"
    },
    {
        from: "/2019-vm-migration-hk-webinar/",
        to: "/resources/event/254/Accelerate%20digital%20transformation%20by%20paving%20cornerstone%20of%20VM%20Migration"
    },
    {
        from: "/google-cloud-next-19-extended-meetup/",
        to: "/resources/event/250/Google%20Cloud%20Next'19%20Extended%20Meetup"
    },
    {
        from: "/come-to-meet-cloudmile-this-saturday-hk-ict-expo-2019/",
        to: "/resources/event/249/Come%20to%20meet%20CloudMile%20this%20Saturday%20%40HK%20ICT%20Expo%202019"
    }
];
// Case Study
// ========================================================================
const caseRedirects = [
    {
        from: "/gcp-showcase-anue",
        to: "/resources/case-study/247/Anue"
    },
    {
        from: "/gmaps-showcase-sinyi/",
        to: "/resources/case-study/248/Sinyi%20Realty%20"
    },
    {
        from: "/zh-hant/gcp-showcase-boutir/",
        to: "/zh/resources/case-study/90/Boutir%20%E6%8E%8C%E8%88%96"
    },
    {
        from: "/zh-hant/machine-learning-showcase-hermin/",
        to: "/zh/resources/case-study/91/%E5%92%8C%E6%98%8E%E7%B4%A1%E7%B9%94"
    },
    {
        from: "/zh-hant/gcp-showcase-17media/",
        to: "/zh/resources/case-study/92/17%20Media"
    },
    {
        from: "/zh-hant/gcp-showcase-ysdt/",
        to: "/zh/resources/case-study/154/%E9%81%A0%E6%99%82%E7%A7%91%E6%8A%80"
    },
    {
        from: "/zh-hant/gcp-showcase-jumbo/",
        to: "/zh/resources/case-study/155/JUMBO%20%E5%B0%8A%E5%8D%9A%E7%A7%91%E6%8A%80"
    },
    {
        from: "/zh-hant/gcp-showcase-shopline/",
        to: "/zh/resources/case-study/156/SHOPLINE"
    },
    {
        from: "/zh-hant/gcp-showcase-baby-home",
        to: "/zh/resources/case-study/157/BabyHome"
    },
    {
        from: "/zh-hant/cloudflare-showcase-icook/",
        to: "/zh/resources/case-study/153/iCook"
    },

    {
        from: "/zh-hant/milecdn-showcase-yile-technology/",
        to: "/zh/resources/case-study/158/Yile%20Technology%20%E5%BC%88%E6%A8%82%E7%A7%91%E6%8A%80"
    },
    {
        from: "/zh-hant/gcp-showcase-anue/",
        to: "/zh/resources/case-study/159/Anue%20%E9%89%85%E4%BA%A8"
    },
    {
        from: "/zh-hant/gmaps-showcase-sinyi/",
        to: "/zh/resources/case-study/160/%E4%BF%A1%E7%BE%A9%E6%88%BF%E5%B1%8B"
    },
    {
        from: "/cloudflare-showcase-icook/",
        to: "/resources/case-study/246/iCook"
    },
    {
        from: "/gcp-showcase-boutir/",
        to: "/resources/case-study/239/BOUTIR"
    },
    {
        from: "/machine-learning-showcase-hermin/",
        to: "/resources/case-study/240/HERMIN"
    },
    {
        from: "/gcp-showcase-17media/",
        to: "/resources/case-study/241/17%20LIVE"
    },
    {
        from: "/gcp-showcase-ysdt/",
        to: "/resources/case-study/242/YSDT%20"
    },
    {
        from: "/gcp-showcase-jumbo/",
        to: "/resources/case-study/243/JUMBO"
    },
    {
        from: "/gcp-showcase-shopline/",
        to: "/resources/case-study/244/SHOPLINE"
    },
    {
        from: "/gcp-showcase-babyhome/",
        to: "/resources/case-study/245/BabyHome"
    }
];
// Blog
// ========================================================================
const blogRedirects = [
    {
        from: "/zh-hant/cost-optimization-best-practices-for-bigquery",
        to: "/zh/resources/blog/24/BigQuery%20%E6%88%90%E6%9C%AC%E5%84%AA%E5%8C%96%E4%B8%89%E5%A4%A7%E6%8C%87%E5%8D%97%EF%BC%81%20%E8%AE%93%E4%BC%81%E6%A5%AD%E8%8A%B1%E6%9B%B4%E5%B0%91%E7%94%A8%E6%9B%B4%E5%A5%BD"
    },
    {
        from: "/zh-hant/resources/blog/gcp-ai-in-manufacturer/",
        to: "/zh/resources/blog/4/GCP%20%E5%BE%9E%E6%95%B8%E6%93%9A%E5%88%86%E6%9E%90%E5%88%B0%20AI%20%E9%A0%90%E6%B8%AC%20%E5%8D%94%E5%8A%A9%E8%A3%BD%E9%80%A0%E6%A5%AD%E7%B8%AE%E7%9F%AD%E7%94%A2%E5%93%81%E4%B8%8A%E5%B8%82%E6%99%82%E7%A8%8B%20"
    },
    {
        from: "/zh-hant/resources/blog/cdn-fastly/",
        to: "/zh/resources/blog/5/MileCDN%20%E8%88%87%E9%82%8A%E7%B7%A3%E9%9B%B2%E7%AB%AF%E5%B9%B3%E5%8F%B0%E9%A0%98%E5%B0%8E%E8%80%85%20Fastly%20%E4%B8%80%E5%90%8C%E6%89%93%E9%80%A0%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%20CDN%20%E9%AB%94%E9%A9%97"
    },
    {
        from: "/zh-hant/resources/blog/gcp-manufacturer-digital-transformation/",
        to: "/zh/resources/blog/6/%E5%BE%8C%E7%96%AB%E6%83%85%E5%B8%82%E5%A0%B4%E5%BF%AB%E9%80%9F%E8%AE%8A%E9%81%B7%20%E8%A3%BD%E9%80%A0%E6%A5%AD%E8%97%89%E6%B7%B7%E5%90%88%E9%9B%B2%E9%82%81%E9%96%8B%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B%E7%AC%AC%E4%B8%80%E6%AD%A5"
    },
    {
        from: "/zh-hant/resources/blog/first-step-of-digital-transformation-build-data-journey/",
        to: "/zh/resources/blog/7/%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B%E5%BE%9E%E5%93%AA%E8%91%97%E6%89%8B%EF%BC%9F%E5%BB%BA%E7%AB%8B%E3%80%8C%E8%B3%87%E6%96%99%E6%97%85%E7%A8%8B%E3%80%8D%E7%82%BA%E9%97%9C%E9%8D%B5%E7%AC%AC%E4%B8%80%E6%AD%A5"
    },
    {
        from: "/zh-hant/blog/2020financeforum-signup/",
        to: "/zh/resources/blog/25/%E7%AB%8B%E5%8D%B3%E8%A7%80%E7%9C%8B%EF%BD%9C%E3%80%8CAI%E9%9B%B2%E7%AB%AF%E6%B1%BA%E5%8B%9D%E6%96%B0%E9%87%91%E8%9E%8D%E7%94%9F%E6%85%8B%E7%B3%BB%E3%80%8DCEO%E9%9B%B2%E7%AB%AF%E7%AD%96%E7%95%A5%E9%AB%98%E5%B3%B0%E6%9C%83"
    },
    {
        from: "/zh-hant/gcp-top-data-security/",
        to: "/zh/resources/blog/8/API%E3%80%81%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%94%B9%E8%AE%8A%E9%87%91%E8%9E%8D%E6%A5%AD%E9%81%8A%E6%88%B2%E8%A6%8F%E5%89%87%20GCP%20%E5%8D%94%E5%8A%A9%E6%89%93%E9%80%A0%E5%BD%88%E6%80%A7%E6%95%8F%E6%8D%B7%20IT%20%E6%9E%B6%E6%A7%8B"
    },
    {
        from: "/zh-hant/resources/blog/googleworkspace-new-release/",
        to: "/zh/resources/blog/9/%E5%85%A8%E6%96%B0%20Google%20Workspace%20%E4%B8%80%E7%AB%99%E5%BC%8F%E5%82%99%E9%BD%8A%E6%89%80%E9%A0%88%E4%B9%8B%E5%8D%94%E4%BD%9C%E5%B7%A5%E5%85%B7"
    },
    {
        from: "/zh-hant/resources/blog/gcp-googlecloudnext-apigee-modernization/",
        to: "/zh/resources/blog/10/APIGEE%20%E5%8D%94%E5%8A%A9%E4%BC%81%E6%A5%AD%E6%87%89%E7%94%A8%E7%8F%BE%E4%BB%A3%E5%8C%96%20%E5%81%9A%E5%A5%BDAPI%E7%AE%A1%E7%90%86%E7%82%BA%E4%BC%81%E6%A5%AD%E9%96%8B%E5%95%9F%E6%96%B0%E6%A5%AD%E5%8B%99%E5%95%86%E6%A9%9F"
    },
    {
        from: "/zh-hant/resources/blog/gcp-googlecloudnext-app-modernization/",
        to: "/zh/resources/blog/11/%E7%AE%A1%E7%90%86%E6%B7%B7%E5%90%88%E9%9B%B2%E3%80%81%E5%A4%9A%E9%9B%B2%E5%8F%8A%E6%93%B4%E5%B1%95%E5%85%A8%E7%90%83%E5%8C%96%E7%9A%84%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0%20%E2%80%93%20ANTHOS"
    },
    {
        from: "/zh-hant/resources/blog/gcp-googlecloudnext-data-management/",
        to: "/zh/resources/blog/12/%E6%8B%8B%E9%96%8B%E8%88%8A%E7%B3%BB%E7%B5%B1%E6%9D%9F%E7%B8%9B%20GCP%20%E9%9B%B2%E7%AB%AF%E8%B3%87%E6%96%99%E5%BA%AB%E5%8A%A9%E4%BC%81%E6%A5%AD%E6%87%89%E7%94%A8%E5%8D%87%E7%B4%9A%EF%BC%8C%E7%99%BC%E6%8F%AE%E6%9B%B4%E5%A4%9A%E5%89%B5%E9%80%A0%E5%8A%9B%EF%BC%81"
    },
    {
        from: "/zh-hant/resources/blog/gcp-googlecloudnext-data-analysis/",
        to: "/zh/resources/blog/13/BigQuery%E5%A4%9A%E9%A0%85%E6%8A%80%E8%A1%93%E7%AA%81%E7%A0%B4%20%E5%8A%A9%E4%BC%81%E6%A5%AD%E7%99%BC%E6%8F%AE%E6%9B%B4%E5%A4%9A%E6%A5%AD%E5%8B%99%E5%89%B5%E6%96%B0"
    },
    {
        from: "/zh-hant/gcp-bigquery-omni/",
        to: "/zh/resources/blog/14/BigQuery%20Omni%20%E8%AE%93%E8%B7%A8%E9%9B%B2%E8%B3%87%E6%96%99%E5%88%86%E6%9E%90%E6%9B%B4%E6%96%B9%E4%BE%BF"
    },
    {
        from: "/zh-hant/cloudflare-ddos-attack/",
        to: "/zh/resources/blog/15/%E6%95%B8%E4%BD%8D%E5%8C%96%E8%BD%89%E5%9E%8B%E9%97%9C%E9%8D%B5%E6%A0%B8%E5%BF%83%E6%8A%80%E8%A1%93%20%20%E9%9B%B2%E7%AB%AF%E8%B3%87%E5%AE%89%E9%98%B2%E7%A6%A6%E5%8A%9B%20Cloudflare%20%E5%85%A8%E5%A4%A9%E5%80%99%E6%8A%80%E8%A1%93%E6%94%AF%E6%8F%B4"
    },
    {
        from: "/zh-hant/resources/blog/embracing-digital-transformation/",
        to: "/zh/resources/blog/16/%E6%93%81%E6%8A%B1%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B%EF%BC%9A%E8%B4%8F%E8%80%85%E9%80%9A%E5%90%83%E6%88%96%E4%B8%80%E7%84%A1%E6%89%80%E6%9C%89%EF%BC%9F"
    },
    {
        from: "/zh-hant/resources/blog/gcp-optimize-your-infrastructure/",
        to: "/zh/resources/blog/17/Google%20Cloud%20%E6%8C%81%E7%BA%8C%E5%84%AA%E5%8C%96%E5%9F%BA%E7%A4%8E%E6%9E%B6%E6%A7%8B%E7%9A%84%E6%9C%8D%E5%8B%99%20%E5%8A%A9%E5%8A%9B%E4%BC%81%E6%A5%AD%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B"
    },
    {
        from: "/zh-hant/media-center/accelerate-business-growth-with-cloud/",
        to: "/zh/resources/blog/18/%E5%88%A5%E9%87%8D%E6%96%B0%E7%99%BC%E6%98%8E%E8%BC%AA%E5%AD%90%EF%BC%8C%E7%AD%8B%E6%96%97%E3%80%8C%E9%9B%B2%E3%80%8D%E8%AE%93%E4%BC%81%E6%A5%AD%E8%B7%91%E6%9B%B4%E5%BF%AB"
    },
    {
        from: "/zh-hant/resources/blog/gcp-gaming-solution/",
        to: "/zh/resources/blog/19/%E6%8B%93%E5%B1%95%E9%81%8A%E6%88%B2%E7%89%88%E5%9C%96%20GCP%20%E8%BC%95%E9%AC%86%E6%BB%BF%E8%B6%B3%E8%B7%A8%E5%8D%80%E7%8E%A9%E5%AE%B6%E9%9C%80%E6%B1%82"
    },
    {
        from: "/zh-hant/resources/blog/gmaps-15-anniversery/",
        to: "/zh/resources/blog/20/Google%20Maps%20%E5%85%A8%E6%96%B0%E7%9A%84%E5%89%B5%E6%96%B0%E5%8A%9F%E8%83%BD"
    },
    {
        from: "/zh-hant/resources/blog/hybrid-cloud-is-suitable-for-your-business/",
        to: "/zh/resources/blog/21/%E7%A7%81%E6%9C%89%E9%9B%B2%E3%80%81%E5%85%AC%E6%9C%89%E9%9B%B2%E3%80%81%E6%B7%B7%E5%90%88%E9%9B%B2%E8%88%87%E5%A4%9A%E9%9B%B2%EF%BC%8C%E5%93%AA%E4%B8%80%E5%80%8B%E6%9B%B4%E9%81%A9%E5%90%88%E6%82%A8%E7%9A%84%E4%BC%81%E6%A5%AD%EF%BC%9F"
    },
    {
        from: "/zh-hant/resources/blog/cloudflare-how-to-protect-from-ddos-attack/",
        to: "/zh/resources/blog/22/%E5%AE%85%E7%B6%93%E6%BF%9F%E5%BC%95%E7%99%BC%E7%B6%B2%E8%B7%AF%E6%B5%81%E9%87%8F%E6%9A%B4%E5%A2%9E%EF%BC%81%20%E4%BC%81%E6%A5%AD%E5%A6%82%E4%BD%95%E8%BF%8E%E6%88%B0%E5%B7%A8%E9%87%8FDDOS%E6%94%BB%E6%93%8A%EF%BC%9F"
    },
    {
        from: "/zh-hant/resources/blog/bigquery-how-data-redesign-our-world/",
        to: "/zh/resources/blog/23/Big%20Data%20%E5%A4%A7%E6%95%B8%E6%93%9A%E9%98%B2%E7%96%AB%E6%97%A2%E5%BF%AB%E4%B8%94%E6%BA%96%20%E6%96%B0%E4%B8%80%E4%BB%A3%E9%9B%B2%E7%AB%AF%E8%B3%87%E6%96%99%E5%80%89%E5%84%B2%E8%AE%93%E4%BC%81%E6%A5%AD%E7%94%A8%E6%9B%B4%E5%B0%91%EF%BC%8C%E5%81%9A%E6%9B%B4%E5%A5%BD"
    },
    {
        from: "/zh-hant/resources/blog/gmaps-socash-case-study/",
        to: "/zh/resources/blog/27/SoCash%EF%BC%9A%E9%80%8F%E9%81%8E%20Google%20Maps%20Platform%20%E5%B0%87%E4%BA%9E%E6%B4%B2%E6%B6%88%E8%B2%BB%E8%80%85%E5%B8%B6%E5%BE%80%E8%A1%8C%E5%8B%95%E5%B0%8E%E5%90%91%E7%9A%84%E7%8F%BE%E9%87%91%E6%9C%8D%E5%8B%99%EF%BC%81%20"
    },
    {
        from: "/zh-hant/resources/blog/data-lake-and-data-warehouse/",
        to: "/zh/resources/blog/26/%E8%B3%87%E6%96%99%E6%B9%96%E6%B3%8A%E8%88%87%E8%B3%87%E6%96%99%E5%80%89%E5%84%B2%E4%BB%8B%E7%B4%B9%E8%88%87%E6%AF%94%E8%BC%83%EF%BC%9A%E5%85%A9%E8%80%85%E7%9A%84%205%20%E5%A4%A7%E5%B7%AE%E7%95%B0"
    },
    {
        from: "/zh-hant/cloudmile-gcp-multi-cdn-solution/",
        to: "/zh/resources/blog/28/%E5%AE%85%E7%B6%93%E6%BF%9F%E5%8A%A0%E9%80%9F%E5%85%A8%E7%90%83%20CDN%20%E9%9C%80%E6%B1%82%E6%88%90%E9%95%B7%EF%BC%81%E5%A6%82%E4%BD%95%E6%89%93%E9%80%A0%E6%B5%81%E6%9A%A2%E4%B8%8D%E6%96%B7%E7%B7%9A%E7%9A%84%E7%94%A8%E6%88%B6%E9%AB%94%E9%A9%97%EF%BC%9F"
    },
    {
        from: "/zh-hant/thebeginnerguideforai/",
        to: "/zh/resources/blog/29/%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E3%80%81%E6%A9%9F%E5%99%A8%E5%AD%B8%E7%BF%92%E5%92%8C%E6%B7%B1%E5%BA%A6%E5%AD%B8%E7%BF%92%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F"
    },
    {
        from: "/zh-hant/remote-working-with-g-suite/",
        to: "/zh/resources/blog/30/Google%20Meet%E3%80%81Microsoft%20Teams%20%E5%92%8C%20Zoom%EF%BC%8C3%20%E6%AC%BE%E8%A6%96%E8%A8%8A%E8%BB%9F%E9%AB%94%E5%93%AA%E5%80%8B%E5%A5%BD%EF%BC%9F%E9%97%9C%E9%8D%B5%E5%8A%9F%E8%83%BD%E4%B8%80%E6%AC%A1%E6%95%B4%E7%90%86"
    },
    {
        from: "/zh-hant/open-banking-google-cloud-apigee/",
        to: "/zh/resources/blog/31/%E9%96%8B%E6%94%BE%E9%8A%80%E8%A1%8C%E6%AD%A3%E5%A4%AF%EF%BC%81%E9%87%91%E8%9E%8D%E6%A5%AD%E6%BA%96%E5%82%99%E5%A5%BD%E8%B6%85%E5%89%8D%E9%83%A8%E7%BD%B2%E4%BA%86%E5%97%8E%EF%BC%9F"
    },
    {
        from: "/zh-hant/modernize-applications-with-anthos/",
        to: "/zh/resources/blog/32/%E9%80%8F%E9%81%8E%E5%A4%9A%E9%9B%B2%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0%20Anthos%EF%BC%8C%E5%AF%A6%E7%8F%BE%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F%E7%8F%BE%E4%BB%A3%E5%8C%96"
    },
    {
        from: "/zh-hant/bigquery_zone_assignments/",
        to: "/zh/resources/blog/33/BigQuery%20%E5%8D%80%E5%9F%9F%E6%8C%87%E6%B4%BE%20(Zone%20Assignments)%20%E7%9A%84%E9%81%8B%E4%BD%9C%E6%96%B9%E5%BC%8F%20"
    },
    {
        from: "/zh-hant/smart-manufacturing-ai-cloud-adoption-program/",
        to: "/zh/resources/blog/34/%E7%96%AB%E6%83%85%E5%8A%A0%E9%80%9F%E6%99%BA%E6%85%A7%E8%A3%BD%E9%80%A0%E9%9C%80%E6%B1%82%EF%BC%81AI%20%E5%8A%A0%E4%B9%98%E9%9B%B2%E7%AB%AF%E8%B6%85%E5%89%8D%E9%83%A8%E7%BD%B2"
    },
    {
        from: "/zh-hant/gsuite-business-calculator/",
        to: "/zh/resources/blog/35/%E4%BD%BF%E7%94%A8%20Business%20Value%20Calculator%EF%BC%81G%20Suite%20%E5%B9%AB%E4%BD%A0%E8%A9%95%E4%BC%B0%E7%94%9F%E7%94%A2%E5%8A%9B%E5%B7%A5%E5%85%B7%E7%9A%84%E6%8A%95%E8%B3%87%E6%95%88%E7%9B%8A%20"
    },
    {
        from: "/zh-hant/cardinal-group-drive-and-g-suite-collaboration/",
        to: "/zh/resources/blog/207/%E6%96%87%E4%BB%B6%E7%89%88%E6%9C%AC%E5%A5%BD%E5%A4%9A%E5%A5%BD%E9%A0%AD%E7%97%9B%EF%BC%9F%E7%9C%8B%E7%BE%8E%E5%9C%8B%E9%A1%A7%E5%95%8F%E5%85%AC%E5%8F%B8%E7%94%A8%20Google%20%E9%9B%B2%E7%AB%AF%E7%A1%AC%E7%A2%9F%E6%8F%90%E5%8D%87%E5%90%88%E4%BD%9C%E6%95%88%E7%8E%87"
    },
    {
        from: "/zh-hant/in-response-to-coronavirus-hangouts-meet-advanced-features-available-to-all-existing-g-suite-customers-through-july-1-2020/",
        to: "/zh/resources/blog/206/%E5%9B%A0%E6%87%89%E7%96%AB%E6%83%85%EF%BC%8C%E8%A6%96%E8%A8%8A%E6%9C%83%E8%AD%B0%E8%BB%9F%E9%AB%94%20Google%20Meet%20%E5%85%8D%E8%B2%BB%E4%BC%81%E6%A5%AD%E7%89%88%E5%BB%B6%E9%95%B7%E8%87%B39%E6%9C%88%E5%BA%95"
    },
    {
        from: "/zh-hant/how-artificial-intelligence-empower-the-retail-and-commerce-industry/",
        to: "/zh/resources/blog/205/AI%20%E5%A6%82%E4%BD%95%E5%8A%A9%E6%94%BB%E9%9B%B6%E5%94%AE%E9%9B%BB%E5%95%86%E6%A5%AD%EF%BC%9F%E4%B8%89%E5%A4%A7%E5%84%AA%E5%8B%A2%E6%90%B6%E5%85%88%E7%9C%8B"
    },
    {
        from: "/zh-hant/3-key-elements-to-adopting-artificial-intelligence-in-your-business/",
        to: "/zh/resources/blog/204/%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B%E5%89%8D%E5%93%A8%E7%AB%99%EF%BC%81%E4%BC%81%E6%A5%AD%E5%B0%8E%E5%85%A5%20AI%20%E4%B8%89%E5%80%8B%E9%97%9C%E9%8D%B5%E8%A6%81%E7%B4%A0"
    },
    {
        from: "/zh-hant/review-g-suite-2019/",
        to: "/zh/resources/blog/203/G%20Suite%202019%20%E5%9B%9E%E9%A1%A7%E8%88%87%E5%B1%95%E6%9C%9B%202020"
    },
    {
        from: "/zh-hant/ai-company-cloudmile-recruit-2019/",
        to: "/zh/resources/blog/198/CLOUDMILE%20%E6%8F%AD%E7%A7%98%EF%BC%81%E6%8B%9B%E5%8B%9F%20AI%20%E4%BA%BA%E6%89%8D%E7%9C%8B%E9%87%8D%E7%9A%84%203%20%E9%A0%85%E9%97%9C%E9%8D%B5%E7%89%B9%E8%B3%AA"
    },
    {
        from: "/zh-hant/5-reasons-your-legacy-data-warehouse-wont-cut-it/",
        to: "/zh/resources/blog/202/%E7%82%BA%E4%BB%80%E9%BA%BC%E5%82%B3%E7%B5%B1%E7%9A%84%E8%B3%87%E6%96%99%E5%80%89%E5%84%B2%E4%B8%8D%E5%86%8D%E9%81%A9%E7%94%A8%E7%9A%84%205%20%E5%80%8B%E5%8E%9F%E5%9B%A0%EF%BC%9F"
    },
    {
        from: "/zh-hant/google-cloud-maps-platform-digital-transformation-automotive-industry/",
        to: "/zh/resources/blog/201/%E6%8F%9B%E6%AA%94%E8%A1%9D%E5%88%BA%EF%BC%9A%E9%9B%B2%E7%AB%AF%E6%9C%8D%E5%8B%99%E5%A6%82%E4%BD%95%E9%A9%85%E5%8B%95%E6%B1%BD%E8%BB%8A%E7%94%A2%E6%A5%AD%E6%95%B8%E4%BD%8D%E8%BD%89%E5%9E%8B"
    },
    {
        from: "/zh-hant/cloudmile-ec-retail-double-eleven-solution/",
        to: "/zh/resources/blog/200/%E9%9B%9911%E6%B5%81%E9%87%8F%E6%95%B8%E6%93%9A%E4%B9%8B%E6%88%B0%EF%BC%81%E9%9B%BB%E5%95%86%E9%9B%B6%E5%94%AE%E6%A5%AD%E5%A6%82%E4%BD%95%E6%97%A5%E6%96%B0%E5%8F%88%E6%96%B0%EF%BC%9F"
    },
    {
        from: "/zh-hant/the-truth-about-black-friday-and-cyber-monday/",
        to: "/zh/resources/blog/199/%E9%97%9C%E6%96%BC%E9%BB%91%E8%89%B2%E6%98%9F%E6%9C%9F%E4%BA%94%E5%92%8C%E7%B6%B2%E8%B7%AF%E6%98%9F%E6%9C%9F%E4%B8%80%E7%9A%84%E6%B5%81%E9%87%8F%E7%9C%9F%E7%9B%B8"
    },
    {
        from: "/zh-hant/data-warehouse-migration-challenges-and-how-to-meet-them/",
        to: "/zh/resources/blog/197/%E4%B8%80%E6%AC%A1%E4%BA%86%E8%A7%A3%E9%81%B7%E7%A7%BB%E8%B3%87%E6%96%99%E5%80%89%E5%84%B2%E6%99%82%EF%BC%8C%E4%BC%81%E6%A5%AD%E9%9D%A2%E8%87%A8%E7%9A%84%E6%8C%91%E6%88%B0%E5%8F%8A%E5%B0%8D%E7%AD%96"
    },
    {
        from: "/zh-hant/2019-google-cloud-summit-taipei-cloudmile-session/",
        to: "/zh/resources/blog/196/%E8%A7%A3%E6%9E%90%E4%BC%81%E6%A5%AD%E8%BD%89%E5%9E%8B%E6%88%90%E6%95%97%E4%B8%89%E5%A4%A7%E9%97%9C%E9%8D%B5%EF%BC%812019%20Cloud%20Summit%20Taipei%20CloudMile%20%E6%BC%94%E8%AC%9B%E7%B2%BE%E8%8F%AF"
    },
    {
        from: "/zh-hant/google-maps-platform-best-practices-restricting-api-keys/",
        to: "/zh/resources/blog/195/Google%20Maps%20Platform%20%E7%9A%84%E6%9C%80%E4%BD%B3%E5%81%9A%E6%B3%95%EF%BC%9A%E9%99%90%E5%88%B6%20API%20%E9%87%91%E9%91%B0%20"
    },
    {
        from: "/zh-hant/google-maps-platform%E6%94%B9%E7%89%88%E4%BC%81%E6%A5%AD%E8%83%BD%E5%BE%9E%E4%B8%AD%E7%8D%B2%E5%BE%97%E4%BB%80%E9%BA%BC%E6%96%B0%E7%89%88%E5%85%A5%E9%96%80%E7%AF%87/",
        to: "/zh/resources/blog/194/Google%20Maps%20Platform%E6%94%B9%E7%89%88%EF%BC%8C%E4%BC%81%E6%A5%AD%E8%83%BD%E5%BE%9E%E4%B8%AD%E7%8D%B2%E5%BE%97%E4%BB%80%E9%BA%BC%EF%BC%9F%E3%80%90%E6%96%B0%E7%89%88%E5%85%A5%E9%96%80%E7%AF%87%E3%80%91"
    },
    {
        from: "/zh-hant/new-protections-for-users-data-and-apps-in-the-cloud/",
        to: "/zh/resources/blog/193/Google%20Cloud%20%E5%B0%8D%E9%9B%B2%E7%AB%AF%E7%94%A8%E6%88%B6%E3%80%81%E8%B3%87%E6%96%99%E5%8F%8A%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F%E7%9A%84%E6%96%B0%E4%BF%9D%E8%AD%B7%E6%8E%AA%E6%96%BD"
    },
    {
        from: "/zh-hant/beyond-the-map-how-we-build-the-maps-that-power-your-apps-and-business/",
        to: "/zh/resources/blog/192/%E7%B5%90%E5%90%88%20AI%20%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%EF%BC%81Google%20Maps%20%E7%82%BA%E4%BC%81%E6%A5%AD%E6%89%93%E9%80%A0%E5%BC%B7%E5%A4%A7%E5%9C%B0%E5%9C%96%E6%87%89%E7%94%A8"
    },
    {
        from: "/zh-hant/workplace-faq/",
        to: "/zh/resources/blog/191/Workplace%20by%20Facebook%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9FWorkplace%20%E4%BB%8B%E7%B4%B9%E8%88%87%20FAQ%20"
    },
    {
        from: "/zh-hant/migration-to-gcp-getting-started-1/",
        to: "/zh/resources/blog/190/%E6%90%AC%E9%81%B7%E8%87%B3Google%20Cloud%20Platform%EF%BC%88GCP%EF%BC%89%EF%BC%9A%E6%BA%96%E5%82%99%E5%B7%A5%E4%BD%9C"
    },
    {
        from: "/zh-hant/power-outage-taiwan/",
        to: "/zh/resources/blog/189/%E6%96%B7%E9%9B%BB%E6%98%AF%E5%90%A6%E5%B0%B1%E7%AD%89%E6%96%BC%E6%96%B7%E7%B6%B2%EF%BC%9F%E5%BE%9E815%E5%85%A8%E5%8F%B0%E5%A4%A7%E5%81%9C%E9%9B%BB%E7%9C%8B%E7%B6%B2%E8%B7%AF%E9%80%A3%E7%B7%9A%E6%9C%8D%E5%8B%99"
    },
    {
        from: "/zh-hant/g-suite-faq/",
        to: "/zh/resources/blog/188/G%20Suite%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9FG%20Suite%E5%B8%B8%E8%A6%8B%E5%95%8F%E9%A1%8C%EF%BC%88FAQ%EF%BC%89%E6%87%B6%E4%BA%BA%E5%8C%85%E6%95%B4%E7%90%86"
    },
    {
        from: "/zh-hant/what-is-blockchain/",
        to: "/zh/resources/blog/187/%E3%80%8C%E5%8D%80%E5%A1%8A%E9%8F%88%E3%80%8D%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E5%B0%88%E6%A5%AD%E6%87%B6%E4%BA%BA%E5%8C%85%E5%9C%A8%E9%80%99%E8%A3%A1"
    },
    {
        from: "/zh-hant/fintech-is-the-future-of-global-financial-company/",
        to: "/zh/resources/blog/186/%E9%A1%9B%E8%A6%86%E5%82%B3%E7%B5%B1%E9%87%91%E8%9E%8D%E6%A5%AD%EF%BC%81Fintech%E4%B8%89%E5%A4%A7%E6%8A%80%E8%A1%93%E5%B9%AB%E4%BD%A0%E4%BF%9D%E4%BD%8F%E9%A3%AF%E7%A2%97"
    },
    {
        from: "/zh-hant/cloud-comparison/",
        to: "/zh/resources/blog/185/%E9%9B%B2%E7%AB%AF%E5%B9%B3%E5%8F%B0%E5%A4%A7%E6%AF%94%E6%8B%BC%EF%BC%9AGoogle%20vs.%20Amazon%20vs.%20Microsoft%20"
    },
    {
        from: "/zh-hant/do-you-really-know-machine-learning/",
        to: "/zh/resources/blog/184/%E7%82%BA%E4%BB%80%E9%BA%BC%E6%A9%9F%E5%99%A8%E5%AD%B8%E7%BF%92%EF%BC%88Machine%20Learning%EF%BC%89%E6%9C%83%E5%A4%AF%E7%BF%BB%E5%A4%A9%EF%BC%9F%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BA%86%E8%A7%A3%E5%AE%83%E7%9A%84%E9%81%8B%E4%BD%9C%E6%96%B9%E5%BC%8F%E5%97%8E%EF%BC%9F"
    },
    {
        from: "/zh-hant/cloud-scheduler/",
        to: "/zh/resources/blog/183/Cloud%20Scheduler%EF%BC%8C%E4%BE%86%E8%87%AAGoogle%20Cloud%E7%9A%84%E5%85%A8%E4%BB%A3%E7%AE%A1%E4%BC%81%E6%A5%AD%E7%B4%9A%20Cron%20%E5%B7%A5%E4%BD%9C%E6%8E%92%E7%A8%8B%E5%99%A8"
    },
    {
        from: "/zh-hant/whats-next-for-google-maps-platform/",
        to: "/zh/resources/blog/182/Google%20Maps%20Platform%20%E7%9A%84%E4%B8%8B%E4%B8%80%E6%AD%A5%EF%BC%9F"
    },
    {
        from: "/zh-hant/%E6%B7%B1%E5%85%A5google-cloud-%E7%B6%B2%E8%B7%AFcloud-dns%E7%9A%84%E6%96%B0%E5%8A%9F%E8%83%BD/",
        to: "/zh/resources/blog/181/%E6%B7%B1%E5%85%A5Google%20Cloud%20%E7%B6%B2%E8%B7%AF%EF%BC%9ACloud%20DNS%E7%9A%84%E6%96%B0%E5%8A%9F%E8%83%BD"
    },
    {
        from: "/zh-hant/gcp-faq/",
        to: "/zh/resources/blog/180/GCP%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9FGoogle%20Cloud%20Platform%20%E5%B8%B8%E8%A6%8B%E5%95%8F%E9%A1%8C%EF%BC%88FAQ%EF%BC%89%E6%87%B6%E4%BA%BA%E5%8C%85"
    },
    {
        from: "/zh-hant/colgate-palmolive-empowers-their-workforce-by-migrating-to-google-cloud/",
        to: "/zh/resources/blog/178/%E9%AB%98%E9%9C%B2%E6%BD%94%20-%20%E6%A3%95%E6%AC%96%EF%BC%88Colgate-Palmolive%EF%BC%89%EF%BC%9A%E9%80%8F%E9%81%8EG%20Suite%E5%8A%A0%E5%BC%B7%E5%85%A8%E7%90%83%E5%90%88%E4%BD%9C%EF%BC%8C%E4%BB%A5%E6%9B%B4%E5%A5%BD%E5%9C%B0%E7%82%BA%E5%85%A8%E7%90%83%E6%95%B8%E7%99%BE%E8%90%AC%E5%AE%B6%E5%BA%AD%E6%8F%90%E4%BE%9B%E6%9C%8D%E5%8B%99"
    },
    {
        from: "/zh-hant/helping-businesses-work-faster/",
        to: "/zh/resources/blog/177/%E9%80%8F%E9%81%8EG%20Suite%E8%AE%93%E4%BC%81%E6%A5%AD%E4%BB%A5%E6%9B%B4%E5%8A%A0%E5%BF%AB%E9%80%9F%E3%80%81%E6%99%BA%E6%85%A7%E4%B8%94%E5%8D%94%E4%BD%9C%E7%9A%84%E6%96%B9%E5%BC%8F%E9%81%8B%E7%87%9F"
    },
    {
        from: "/zh-hant/making-game-development-more-flexible-and-open-with-google-cloud/",
        to: "/zh/resources/blog/176/%E6%83%B3%E9%80%B2%E8%BB%8D%E5%85%A8%E7%90%83%E9%81%8A%E6%88%B2%E5%B8%82%E5%A0%B4%EF%BC%9F2020%20%E5%B9%B4%E9%81%8A%E6%88%B2%E5%B8%82%E5%A0%B4%E9%97%9C%E9%8D%B5%E6%8A%80%E8%A1%93%E4%BD%88%E5%B1%80%E8%A7%A3%E6%9E%90"
    },
    {
        from: "/zh-hant/unlocking-the-power-of-ai/",
        to: "/zh/resources/blog/175/%E9%87%8B%E6%94%BEAI%E7%9A%84%E5%8A%9B%E9%87%8F%EF%BC%9A%E7%82%BA%E6%AF%8F%E5%80%8B%E4%BC%81%E6%A5%AD%E8%A8%AD%E8%A8%88%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%A1%88"
    },
    {
        from: "/zh-hant/google-cloud-partnership-with-massive-entertainment/",
        to: "/zh/resources/blog/174/Massive%20%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%94%9C%E6%89%8BGCP%20%E7%82%BA%E3%80%8A%E6%B9%AF%E5%A7%86%E5%85%8B%E8%98%AD%E8%A5%BF%EF%BC%9A%E5%85%A8%E5%A2%83%E5%B0%81%E9%8E%962%E3%80%8B%E6%89%93%E9%80%A0%E7%B5%95%E4%BD%B3%E9%81%8A%E6%88%B2%E9%AB%94%E9%A9%97"
    },
    {
        from: "/zh-hant/google-maps-platform-new-places-sdks/",
        to: "/zh/resources/blog/173/Google%20Maps%20Platform%20Places%20SDKs%202019%E5%B9%B4%E9%87%8D%E5%A4%A7%E6%9B%B4%E6%96%B0"
    },
    {
        from: "/zh-hant/trends-in-security-safety-that-we-need-to-focus-in-2019-and-beyond/",
        to: "/zh/resources/blog/172/%E6%94%BE%E7%9C%BC2019%E5%B9%B4%E5%8F%8A%E6%9C%AA%E4%BE%86%EF%BC%9A%E6%88%91%E5%80%91%E9%9C%80%E8%A6%81%E9%97%9C%E6%B3%A8%E7%9A%84%E8%B3%87%E5%AE%89%E8%B6%A8%E5%8B%A2"
    },
    {
        from: "/zh-hant/new-pricing-for-g-suite-basic-and-business-editions/",
        to: "/zh/resources/blog/171/G%20SUITE%204%2F2%E5%B0%87%E6%BC%B2%E5%83%B9%20%E5%B0%88%E6%A5%AD%E7%89%88%E8%88%87%E9%80%B2%E9%9A%8E%E7%89%88%E7%94%A8%E6%88%B6%E7%BA%8C%E5%B9%B4%E7%B4%84%E8%B6%81%E7%8F%BE%E5%9C%A8"
    },
    {
        from: "/zh-hant/5-key-points-financial-industry-using-cloud-in-2019/",
        to: "/zh/resources/blog/170/%E8%AE%93%E6%A5%AD%E7%B8%BE%E9%A8%B0%E9%9B%B2%E9%A7%95%E9%9C%A7%EF%BC%812019%E5%B9%B4%E9%87%91%E8%9E%8D%E6%A5%AD%E9%81%8B%E7%94%A8%E9%9B%B2%E7%AB%AF%E7%9A%845%E5%80%8B%E9%87%8D%E9%BB%9E"
    },
    {
        from: "/zh-hant/hand-in-hand-teaching-you-how-to-set-gcp-budget-and-news/",
        to: "/zh/resources/blog/169/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E8%A8%AD%E5%AE%9AGCP%E9%A0%90%E7%AE%97%E8%88%87%E5%BF%AB%E8%A8%8A"
    },
    {
        from: "/zh-hant/five-secrets-to-protect-enterprises-cloud-information-security/",
        to: "/zh/resources/blog/168/5%E5%80%8B%E7%A7%98%E8%A8%A3%E9%98%B2%E8%AD%B7%E4%BC%81%E6%A5%AD%E9%9B%B2%E7%AB%AF%E8%B3%87%E5%AE%89"
    },
    {
        from: "/zh-hant/%E8%AA%B0%E6%98%AFnetflixuber%E9%AB%98%E7%9B%9B%E6%95%B8%E6%93%9A%E5%95%86%E6%A9%9F%E5%B9%95%E5%BE%8C%E7%9A%84%E6%8E%A8%E6%89%8B/",
        to: "/zh/resources/blog/209/%E8%AA%B0%E6%98%AFNetflix%E3%80%81Uber%E3%80%81%E9%AB%98%E7%9B%9B%E6%95%B8%E6%93%9A%E5%95%86%E6%A9%9F%E5%B9%95%E5%BE%8C%E7%9A%84%E6%8E%A8%E6%89%8B%EF%BC%9F"
    },
    {
        from: "/zh-hant/%E5%BF%AB%E4%BE%86%E8%AA%8D%E8%AD%98ubernetflix%E9%83%BD%E6%84%9B%E7%94%A8%E7%9A%84%E4%BC%81%E6%A5%AD%E6%95%B8%E6%93%9A%E6%90%9C%E5%B0%8B%E5%88%A9%E5%99%A8-elastic/",
        to: "/zh/resources/blog/167/%E5%BF%AB%E4%BE%86%E8%AA%8D%E8%AD%98Uber%E3%80%81Netflix%E9%83%BD%E6%84%9B%E7%94%A8%E7%9A%84%E4%BC%81%E6%A5%AD%E6%95%B8%E6%93%9A%E6%90%9C%E5%B0%8B%E5%88%A9%E5%99%A8%20Elastic%20"
    },
    {
        from: "/zh-hant/bigquery%E8%90%BD%E5%9C%B0%E5%8F%B0%E7%81%A3%E8%B3%87%E6%96%99%E4%B8%8D%E5%87%BA%E5%A2%83%E6%90%B6%E5%BE%97%E5%95%86%E6%A9%9F%E5%B0%B1%E9%9D%A0%E9%80%99%E4%B8%80%E6%AD%A5/",
        to: "/zh/resources/blog/166/BigQuery%20%E8%90%BD%E5%9C%B0%E5%8F%B0%E7%81%A3%EF%BC%8C%E8%B3%87%E6%96%99%E4%B8%8D%E5%87%BA%E5%A2%83%E3%80%81%E6%90%B6%E5%BE%97%E5%95%86%E6%A9%9F%E5%B0%B1%E9%9D%A0%E9%80%99%E4%B8%80%E6%AD%A5%EF%BC%81"
    },
    {
        from: "/zh-hant/%E7%82%BA%E6%82%A8%E4%BB%8B%E7%B4%B9-cloudflare-registrar-%E6%B7%B1%E5%BE%97%E4%BA%BA%E5%BF%83%E7%9A%84%E7%B6%B2%E5%9F%9F%E8%A8%BB%E5%86%8A%E6%9C%8D%E5%8B%99/",
        to: "/zh/resources/blog/165/%E7%82%BA%E6%82%A8%E4%BB%8B%E7%B4%B9%20Cloudflare%20Registrar%3A%20%E6%B7%B1%E5%BE%97%E4%BA%BA%E5%BF%83%E7%9A%84%E7%B6%B2%E5%9F%9F%E8%A8%BB%E5%86%8A%E6%9C%8D%E5%8B%99"
    },
    {
        from: "/zh-hant/%E8%AC%9B%E5%BA%A7%E5%88%86%E4%BA%AB-cloudmile-x-cloudflare%E9%9B%B2%E7%AB%AF%E6%99%82%E4%BB%A3%E7%9A%84%E8%B3%87%E8%A8%8A%E5%AE%89%E5%85%A8%E5%85%A5%E9%96%80%E8%AA%B2-2/",
        to: "/zh/resources/blog/164/%E3%80%90%20%E8%AC%9B%E5%BA%A7%E5%88%86%E4%BA%AB%20%E3%80%91CloudMile%20X%20Cloudflare%EF%BC%9A%E9%9B%B2%E7%AB%AF%E6%99%82%E4%BB%A3%E7%9A%84%E8%B3%87%E8%A8%8A%E5%AE%89%E5%85%A8%E5%85%A5%E9%96%80%E8%AA%B2-%E4%B8%8B%E9%9B%86%20"
    },
    {
        from: "/zh-hant/data-analysis-introduction/",
        to: "/zh/resources/blog/163/%E6%95%B8%E6%93%9A%E5%88%86%E6%9E%90%E5%85%A5%E9%96%80%E8%AA%B2%EF%BC%9A%E6%A6%82%E5%BF%B5%E8%A6%81%E6%87%82%EF%BC%8C%E5%B7%A5%E5%85%B7%E8%A6%81%E6%9C%89"
    },
    {
        from: "/zh-hant/financial-cloud-policy/",
        to: "/zh/resources/blog/162/%E9%87%91%E7%AE%A1%E6%9C%83%E4%B8%8B%E4%BB%A4%E9%8A%80%E8%A1%8C%E9%9B%B2%E7%AB%AF%E4%BC%BA%E6%9C%8D%E5%99%A8%E8%A6%81%E5%9C%A8%E5%8F%B0%E7%81%A3%EF%BC%8CGCP%20%E6%9C%89%E8%A7%A3%20%E6%96%B9%EF%BC%81%20"
    },
    {
        from: "/zh-hant/growing-the-cloudflare-apps-ecosystem/",
        to: "/zh/resources/blog/161/%E7%99%BC%E5%B1%95%20Cloudflare%20%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F%E7%94%9F%E6%85%8B%E7%B3%BB%E7%B5%B1"
    },
    {
        from: "/zh-hant/deep-learning-tensorflow/",
        to: "/zh/resources/blog/63/%E4%BB%80%E9%BA%BC%E6%98%AF%E6%8E%A8%E8%96%A6%E7%B3%BB%E7%B5%B1%EF%BC%9F%E5%A6%82%E4%BD%95%E6%87%89%E7%94%A8%E6%B7%B1%E5%BA%A6%E5%AD%B8%E7%BF%92%20TensorFlow%20%E4%BE%86%E6%8F%90%E5%8D%87%E6%88%B0%E9%AC%A5%E5%8A%9B"
    },
    {
        from: "/zh-hant/cloudmile-hermin-textile-use-machine-learning/",
        to: "/zh/resources/blog/62/%E5%82%B3%E7%94%A2%E5%B0%8E%E5%85%A5%20AI%20%EF%BC%8CCloudMile%20%E5%8D%94%E5%8A%A9%E5%92%8C%E6%98%8E%E7%B4%A1%E7%B9%94%E5%B8%83%E6%96%99%E8%BE%A8%E8%AD%98%EF%BC%8C%E5%8A%A0%E9%80%9F%E7%94%9F%E7%94%A2%E6%95%88%E7%8E%87"
    },
    {
        from: "/zh-hant/does-ico-mean-new-business-to-taiwan-market/",
        to: "/zh/resources/blog/61/%E4%BD%A0%E8%81%BD%E9%81%8E%20ICO%20%E5%97%8E%EF%BC%9F%E6%96%B0%E5%89%B5%E4%BC%81%E6%A5%AD%E5%BF%AB%E9%80%9F%E8%9E%8D%E8%B3%87%E7%9A%84%E6%96%B0%E9%A1%AF%E5%AD%B8"
    },
    {
        from: "/zh-hant/introduction-to-google-api/",
        to: "/zh/resources/blog/60/%E4%B8%80%E6%AC%A1%E6%90%9E%E6%87%82%E4%BA%94%E7%A8%AE%20Google%20API%EF%BC%8C%E8%81%BD%E8%AA%AA%E8%AE%80%E5%AF%AB%E6%A8%A3%E6%A8%A3%E9%80%9A"
    },
    {
        from: "/zh-hant/what-is-cloud-service/",
        to: "/zh/resources/blog/59/%E5%88%A5%E8%AE%93%E6%99%82%E4%BB%A3%E6%BD%AE%E6%B5%81%E6%8A%8A%E4%BD%A0%E6%8B%8B%E4%B8%8B%EF%BC%8C%20%E9%9B%B2%E7%AB%AF%E6%AD%A3%E5%85%A8%E9%9D%A2%E6%94%BB%E4%BD%94%E6%97%A5%E5%B8%B8%E7%94%9F%E6%B4%BB%E5%9C%88%EF%BC%81"
    },
    {
        from: "/zh-hant/deploying-container-on-google-compute-engine/",
        to: "/zh/resources/blog/57/%5B%20%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E5%AD%B8%E6%96%87%20%5D%20%E4%B8%89%E5%88%86%E9%90%98%E5%9C%A8%20GCE%20%E4%B8%8A%E9%83%A8%E7%BD%B2%20Container"
    },
    {
        from: "/zh-hant/google-cloud-platform-infrastructure/",
        to: "/zh/resources/blog/56/%E9%9B%B2%E7%AB%AF%E4%BA%94%E5%9B%9B%E4%B8%89%EF%BC%9A%E6%8C%81%E7%BA%8C%E5%BC%B7%E5%8C%96%E7%9A%84%20GCP%20%E5%9F%BA%E7%A4%8E%E6%9E%B6%E6%A7%8B"
    },
    {
        from: "/zh-hant/google-neural-machine-translation-now-generally-available/",
        to: "/zh/resources/blog/55/%E3%80%8C%20Google%20%E7%BF%BB%E8%AD%AF%20%E3%80%8D%E5%B0%8E%E5%85%A5%E6%A9%9F%E5%99%A8%E5%AD%B8%E7%BF%92%E6%8A%80%E8%A1%93%EF%BC%8C%E7%BF%BB%E8%AD%AF%E5%B0%8F%E5%A7%90%E6%88%B0%E5%8A%9B%E5%86%8D%E6%8F%90%E5%8D%87%EF%BC%81"
    },
    {
        from: "/zh-hant/single-postai-for-image-identification/",
        to: "/zh/resources/blog/54/%E6%95%99%E9%9B%BB%E8%85%A6%E3%80%8C%E7%9C%8B%E3%80%8D%E4%B8%96%E7%95%8C%EF%BC%81%E6%9C%AA%E4%BE%86%E4%B8%BB%E6%B5%81%20AI%20%E6%87%89%E7%94%A8%EF%BC%9A%E5%9C%96%E5%83%8F%E8%BE%A8%E8%AD%98"
    },
    {
        from: "/zh-hant/single-postgoogle-cloud-video-intelligence-api-and-cloudmile-product/",
        to: "/zh/resources/blog/53/CloudMile%E3%80%8C%E4%BA%BA%E8%87%89%E8%BE%A8%E8%AD%98%E3%80%8D%E8%83%8C%E5%BE%8C%E7%9A%84%E7%A7%98%E5%AF%86%E6%AD%A6%E5%99%A8%EF%BC%9A%E9%9B%B2%E8%A6%96%E8%A6%BAAPI"
    },
    {
        from: "/zh-hant/single-post5-ways-ml-has-influenced-the-modern-cloud/",
        to: "/zh/resources/blog/52/%E7%95%B6%E9%9B%B2%E7%AB%AF%E9%81%87%E4%B8%8A%E6%A9%9F%E5%99%A8%E5%AD%B8%E7%BF%92"
    },
    {
        from: "/zh-hant/how-to-use-machine-learning-to-improve-customer-service/",
        to: "/zh/resources/blog/51/%E4%BC%81%E6%A5%AD%E5%A6%82%E4%BD%95%E9%81%8B%E7%94%A8%E3%80%8C%E6%A9%9F%E5%99%A8%E5%AD%B8%E7%BF%92%E3%80%8D%E6%8F%90%E5%8D%87%E5%AE%A2%E6%88%B6%E6%9C%8D%E5%8B%99%EF%BC%9F"
    },
    {
        from: "/zh-hant/ford-aims-to-use-googles-prediction-api-to-bolster-analytics/",
        to: "/zh/resources/blog/50/%E7%A6%8F%E7%89%B9%E6%89%93%E9%80%A0%E6%99%BA%E6%85%A7%E6%B1%BD%E8%BB%8A%E7%9A%84%E6%AE%BA%E6%89%8B%E9%90%A7%EF%BC%9F%E3%80%8C%E9%A0%90%E6%B8%AC%E5%88%86%E6%9E%90%E3%80%8D%E6%98%AF%E6%9C%AA%E4%BE%86%E4%BC%81%E6%A5%AD%E6%8F%90%E5%8D%87%E7%AB%B6%E7%88%AD%E5%84%AA%E5%8B%A2%E7%9A%84%E5%88%A9%E5%99%A8"
    },
    {
        from: "/zh-hant/getting-started-2-tensorflow/",
        to: "/zh/resources/blog/49/%5B%20%E5%8B%95%E6%89%8B%E7%8E%A9%E7%B3%BB%E5%88%97%20%232%5D%20TensorFlow%20%E5%B8%B6%E4%BD%A0%E7%84%A1%E5%B8%AB%E8%87%AA%E9%80%9A%E6%88%90%E7%82%BA%E6%A4%8D%E7%89%A9%E5%AD%B8%E5%AE%B6"
    },
    {
        from: "/zh-hant/gartner-top-10-strategic-technology-trends-for2018/",
        to: "/zh/resources/blog/48/Gartner%20%E7%99%BC%E8%A1%A8%202018%20%E5%B9%B4%E5%8D%81%E5%A4%A7%E7%A7%91%E6%8A%80%E7%99%BC%E5%B1%95%E8%B6%A8%E5%8B%A2%EF%BC%8C%E9%80%A3%E7%BA%8C%E5%85%A9%E5%B9%B4%E9%BB%9E%E5%90%8D%E5%8D%80%E5%A1%8A%E9%8F%88%E7%A7%91%E6%8A%80"
    },
    {
        from: "/zh-hant/google-research-algorithm-watermark-removal-photo-protection/",
        to: "/zh/resources/blog/47/%E7%9B%B8%E7%89%87%E6%B5%AE%E6%B0%B4%E5%8D%B0%E5%8E%BB%E4%B8%8D%E6%8E%89%EF%BC%9FGoogle%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%B7%B2%E7%B6%93%E5%AD%B8%E6%9C%83%E8%87%AA%E5%8B%95%E7%A7%BB%E9%99%A4%E6%B0%B4%E5%8D%B0%E4%BA%86%EF%BC%81"
    },
    {
        from: "/zh-hant/drive-file-stream-update/",
        to: "/zh/resources/blog/46/%E7%9C%9F%E7%9A%84%E5%81%87%E7%9A%84%EF%BC%9FGoogle%20Drive%20%E6%A1%8C%E9%9D%A2%E7%89%88%E8%A6%81%E9%80%80%E5%BD%B9%E4%BA%86%EF%BC%9F"
    },
    {
        from: "/zh-hant/jumbo-on-google-cloud-platform/",
        to: "/zh/resources/blog/45/%E5%85%A8%E7%90%83%E7%B6%B2%E8%B7%AF%E5%8D%9A%E5%A5%95%E9%81%8A%E6%88%B2%E5%95%86%E6%A9%9F%E9%80%BE%E5%85%86%EF%BC%81%E5%B0%8A%E5%8D%9A%E7%A7%91%E6%8A%80%E7%99%BB%E4%B8%8A%E9%9B%B2%E7%AB%AF%E6%90%B6%E6%94%BB%E4%BA%9E%E6%B4%B2%E5%B8%82%E5%A0%B4"
    },
    {
        from: "/zh-hant/gcp-the-most-cost-effective/",
        to: "/zh/resources/blog/44/%E7%94%A8%E5%9F%BA%E7%A4%8E%E9%9B%B2%E7%AB%AF%E6%A6%82%E5%BF%B5%E4%BE%86%E4%BA%86%E8%A7%A3%20GCP%20%E7%9A%84%E5%A5%BD"
    },
    {
        from: "/zh-hant/google-cloud-vision-api/",
        to: "/zh/resources/blog/43/%E5%8B%95%E6%89%8B%E7%8E%A9%E7%8E%A9%20Google%20Cloud%20Vision%20API%20"
    },
    {
        from: "/zh-hant/speech-api/",
        to: "/zh/resources/blog/42/%E6%99%BA%E8%83%BD%E8%AA%9E%E9%9F%B3%E6%87%89%E7%94%A8%E5%88%A9%E5%99%A8%EF%BC%9AGoogle%20Speech%20API"
    },
    {
        from: "/zh-hant/block-chain-technology/",
        to: "/zh/resources/blog/41/%E4%B8%8D%E5%8F%AA%E9%87%91%E8%9E%8D%E6%A5%AD%E5%8F%AF%E7%94%A8%EF%BC%81%E5%8D%80%E5%A1%8A%E9%8F%88%E5%9C%A8%E5%90%84%E9%A0%85%E7%94%A2%E6%A5%AD%E7%9A%84%E6%87%89%E7%94%A8"
    },
    {
        from: "/zh-hant/gcp-top-data-security/",
        to: "/zh/resources/blog/40/%E6%AF%94%E8%87%AA%E5%BB%BA%E4%BC%BA%E6%9C%8D%E5%99%A8%E6%9B%B4%E5%AE%89%E5%85%A8%EF%BC%81Google%20Cloud%20Platform%20%E7%B5%A6%E4%BD%A0%E6%9C%80%E9%AB%98%E7%AD%89%E7%B4%9A%E5%AE%89%E5%85%A8%E6%80%A7"
    },
    {
        from: "/zh-hant/face-detection-for-future/",
        to: "/zh/resources/blog/39/%20%E8%87%89%E9%83%A8%E5%81%B5%E6%B8%AC%E6%8A%80%E8%A1%93%E7%95%B6%E9%81%93%E3%80%80%E5%B0%87%E5%BE%AE%E8%A1%A8%E6%83%85%E9%87%8F%E5%8C%96%E7%82%BA%E5%A4%A7%E6%95%B8%E6%93%9A"
    },
    {
        from: "/zh-hant/google-cloud-香港機房上線你應該要知道的三件事/",
        to: "/zh/resources/blog/38/Google%20Cloud%20%E9%A6%99%E6%B8%AF%E6%A9%9F%E6%88%BF%E4%B8%8A%E7%B7%9A%EF%BC%8C%E4%BD%A0%E6%87%89%E8%A9%B2%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E4%B8%89%E4%BB%B6%E4%BA%8B%EF%BC%81"
    },
    {
        from: "/zh-hant/tensorflow-lite/",
        to: "/zh/resources/blog/37/Google%20%E6%A9%9F%E5%99%A8%E5%AD%B8%E7%BF%92%E7%B3%BB%E7%B5%B1%20TensorFlow%20Lite%20%E9%9B%A2%E7%B7%9A%E8%BE%A8%E8%AD%98%E5%9C%96%E7%89%87%E6%95%88%E7%8E%87%E5%A4%A7%E5%A2%9E"
    },
    {
        from: "/zh-hant/tcp-bbr-congestion-control-comes-to-gcp/",
        to: "/zh/resources/blog/36/GCP%20%E6%8E%A1%E7%94%A8%E6%96%B0%E6%BC%94%E7%AE%97%E6%B3%95%20TCP%20BBR%20%E5%82%B3%E8%BC%B8%E7%8E%87%E5%B0%87%E6%8F%90%E9%AB%982700%E5%80%8D%EF%BC%81"
    },
    {
        from: "/zh-hant/google-fund-local-news-automation-service/",
        to: "/zh/resources/blog/3/%E7%9C%9F%E4%BA%BA%E8%A8%98%E8%80%85%E7%9A%84%E8%81%B7%E6%A5%AD%E6%9C%AB%E6%97%A5%EF%BC%9FGoogle%20%E6%A9%9F%E5%99%A8%E4%BA%BA%E6%AF%8F%E6%9C%88%E8%87%AA%E5%8B%95%E7%94%A2%E8%A3%BD3%E8%90%AC%E5%89%87%E6%96%B0%E8%81%9E"
    },
    {
        from: "/zh-hant/google-analytics-and-bigquery/",
        to: "/zh/resources/blog/2/%E8%A1%8C%E9%8A%B7%E4%BA%BA%E6%AD%A4%E7%94%9F%E4%B8%8D%E8%83%BD%E6%B2%92%E6%9C%89%E4%BD%A0%EF%BC%81%E6%95%B8%E4%BD%8D%E5%BB%A3%E5%91%8A%E9%9B%99%E7%A5%9E%E5%99%A8%EF%BC%9AGoogle%20Analytics%20and%20BigQuery%20"
    },
    {
        from: "/zh-hant/google-cloud-natural-language-api-read-every-secret/",
        to: "/zh/resources/blog/1/%E6%96%87%E7%AB%A0%E8%A3%A1%E5%A4%A7%E6%9C%89%E7%8E%84%E6%A9%9F%EF%BC%9FGoogle%20Cloud%20Natural%20Language%20API%20%E8%AE%80%E9%81%8D%E5%AD%97%E8%A3%A1%E8%A1%8C%E9%96%93%E7%9A%84%E7%A7%98%E5%AF%86"
    },
    {
        from: "/cdn-fastly/",
        to: "/resources/blog/238/MILECDN%20COOPERATES%20WITH%20FASTLY%20BRING%20USERS%20A%20MODERN%20CDN%20EXPERIENCE"
    },
    {
        from: "/resources/blog/first-step-of-digital-transformation-build-data-journey/",
        to: "/resources/blog/237/THE%20FIRST%20STEP%20OF%20YOUR%20DIGITAL%20TRANSFORMATION%3A%20DATA%20JOURNEY"
    },
    {
        from: "/resources/blog/gsuite-increase-your-productivity/",
        to: "/resources/blog/236/G%20SUITE%3A%20YOUR%20BUSINESS%E2%80%98S%20SHIELD%20AGAINST%20CORONAVIRUS%E2%80%99S%20DEADLY%20IMPACT"
    },
    {
        from: "/resources/blog/embracing-digital-transformation/",
        to: "/resources/blog/235/EMBRACING%20DIGITAL%20TRANSFORMATION%3A%20IT%20IS%20ALL%20OR%20NOTHING%3F"
    },
    {
        from: "/resources/blog/hybrid-cloud-is-suitable-for-your-business/",
        to: "/resources/blog/234/WHICH%20ONE%20IS%20SUITABLE%20FOR%20YOUR%20BUSINESS%3A%20PRIVATE%20VS.%20PUBLIC%20VS.%20HYBRID%20VS.%20MULTI-CLOUD%3F"
    },
    {
        from: "/bigquery-how-data-redesign-our-world/",
        to: "/resources/blog/233/PREVENTING%20COVID-19%20PANDEMIC%20USING%20BIG%20DATA"
    },
    {
        from: "/resources/blog/gmaps-socash-case-study/",
        to: "/resources/blog/232/SOCASH%3A%20CONNECTING%20ASIA%E2%80%99S%20CONSUMERS%20TO%20MOBILE-DRIVEN%20CASH%20SERVICES%20THROUGH%20GOOGLE%20MAPS%20PLATFORM"
    },
    {
        from: "/resources/blog/data-lake-and-data-warehouse/",
        to: "/resources/blog/231/DATA%20LAKE%20VS.%20DATA%20WAREHOUSE%3A%205%20DIFFERENCES"
    },
    {
        from: "/cloudmile-gcp-multi-cdn-solution/",
        to: "/resources/blog/230/HOW%20TO%20IMPROVE%20USER%20EXPERIENCES%20OF%20YOUR%20WEBSITE%20WITH%20MULTI%20CDN%3F"
    },
    {
        from: "/thebeginnerguideforai/",
        to: "/resources/blog/229/ARE%20AI%2C%20MACHINE%20LEARNING%2C%20AND%20DEEP%20LEARNING%20ALL%20THE%20SAME%3F"
    },
    {
        from: "/open-banking-google-cloud-apigee/",
        to: "/resources/blog/227/Open%20banking%20is%20currently%20trending!%20Are%20financial%20industries%20ready%20for%20advanced%20deployment%3F"
    },
    {
        from: "/smart-manufacturing-ai-cloud-adoption-program/",
        to: "/resources/blog/226/Increased%20demand%20for%20smart%20manufacturing%20due%20to%20epidemic!"
    },
    {
        from: "/how-artificial-intelligence-empower-the-retail-and-commerce-industry/",
        to: "/resources/blog/225/3%20Ways%20How%20AI%20Can%20Benefit%20Your%20E-commerce%20Business"
    },
    {
        from: "/3-key-elements-to-adopting-artificial-intelligence-in-your-business/",
        to: "/resources/blog/224/The%203%20Key%20Elements%20of%20AI%20Technology%20Implementation%20in%20Businesses"
    },
    {
        from: "/ai-company-cloudmile-recruit-2019/",
        to: "/resources/blog/223/The%20Secret%20of%20CloudMile!%203%20Essential%20Traits%20Companies%20Look%20For%20in%20AI%20Specialists%20Recruitment%20"
    },
    {
        from: "/cloudmile-ec-retail-double-eleven-solution/",
        to: "/resources/blog/216/Singles'%20Day%20sales%3A%20The%20Battle%20of%20Data%20Traffic!%20How%20E-commerce%20Companies%20and%20Retailers%20Stay%20Ahead%20of%20the%20Game%3F"
    },
    {
        from: "/growing-the-cloudflare-apps-ecosystem/",
        to: "/resources/blog/214/Growing%20the%20Cloudflare%20Apps%20Ecosystem"
    },
    {
        from: "/traditional-industries-evolve-implementing-machine-learning/",
        to: "/resources/blog/213/Traditional%20Industries%20Evolve%20Implementing%20Machine%20Learning"
    },
    {
        from: "/gcp/cloudmile-hermin-textile-use-machine-learning/",
        to: "/resources/blog/210/HerMin%20Textile%20Enhances%20Competitiveness%20with%20Google's%20Cloud%20"
    },
    {
        from: "/gcp/deploying-container-on-google-compute-engine/",
        to: "/resources/blog/212/%5B%20Getting%20Started%20%5D%20Deploying%20Container%20on%20GCE%20"
    },
    {
        from: "/gcp/5-ways-ml-has-influenced-the-modern-cloud/",
        to: "/resources/blog/211/When%20Cloud%20Meets%20Machine%20Learning%20"
    }
];
// Others
// ========================================================================
const otherRedirects = [
    {
        from: "/gcp/blog/",
        to: "/resources/blog"
    },
    {
        from: "/zh-hant/gcp/blog/chinese/",
        to: "/zh/resources/blog"
    },
    {
        from: "/showcases/",
        to: "/resources/case-study"
    },
    {
        from: "/zh-hant/showcases/",
        to: "/zh/resources/case-study"
    },
    {
        from: "/latest-news/",
        to: "/resources/media-center"
    },
    {
        from: "/zh-hant/latest-news/",
        to: "/zh/resources/media-center"
    },
    {
        from: "/whitepapers/cloudflare/ddos_attack_whitepaper.pdf",
        to: "https://drive.google.com/file/d/1MjCm1UFC7sE6KqaTnEevcrVLtf6k3Z-p/view?usp=sharing"
    },
    {
        from: "/whitepapers/gcp/modernize-applications-with-anthos.pdf",
        to: "https://drive.google.com/file/d/1QWbosG522mxb2AAFpdIkxuFXQ67-er5j/view?usp=sharing"
    },
    {
        from: "/whitepapers/gcp/bigquery_zone_assignments.pdf",
        to: "https://drive.google.com/file/d/1NVmXmFWCSlNelP8D1rY4DQ2wHeVP71fd/view?usp=sharing"
    },
    {
        from: "/whitepapers/google-workspace-faq.pdf",
        to: "https://drive.google.com/file/d/1UuAKh09pQ2elB8hCeZeBbD9GOb_VX1n0/view?usp=sharing"
    },
    {
        from: "/overview/milecdn/solution-introduction.pdf",
        to: "https://drive.google.com/file/d/1-A4Y_a8evM4EbIJ4UGqAgj0BBTvXPe3z/view?usp=sharing"
    }
];
// ========================================================================

export const redirects = <RedirectType[]>[
    ...mediaRedirects,
    ...eventRedirects,
    ...caseRedirects,
    ...blogRedirects,
    ...otherRedirects
];