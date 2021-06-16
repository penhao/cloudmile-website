import React, { useEffect, useState } from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import SectionTitle from "../SectionTitle";
import SectionTitleLabel from "../SectionTitleLabel";
import { removeParam } from "../../../utils/Utils";
import { useTranslation } from "next-translate";
import { SalesforcePostParams } from "../../useUrlParams";
import RegisterForm from "../../forms/RegisterForm";
import LinesEllipsis from 'react-lines-ellipsis';

interface IProps {
    postData: any;
}
const RegisterItem = ({ postData }: IProps) => {
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [salesforceData, setSalesforceData] = useState<SalesforcePostParams | null>(null);


    useEffect(() => {
        const urlParams = removeParam('category', window.location.search);
        const domainPath = `${process.env.DOMAIN_PATH}${lang === "en" ? "" : "/" + lang}`
        const redirectUrl = (postData.type === 2)
            ? `${domainPath}/resources/video/live-stream/${postData.id}/${encodeURIComponent(postData.title)}${urlParams}`
            : `${domainPath}/resources/video/${postData.id}/${encodeURIComponent(postData.title)}${urlParams}`;
        setSalesforceData({
            utmSource: postData.utm_source,
            utmMedium: postData.utm_medium,
            utmCampaign: postData.utm_campaign,
            leadSource: postData.lead_source,
            campaignId: postData.salesforce_id,
            redirectUrl: redirectUrl,
            country: postData.country
        });
    }, [postData]);
    return (
        <Grid container spacing={smUp ? 4 : 2}>
            <Grid item xs={12}>
                <SectionTitleLabel color={"warning"}>
                    {t('video:Register to Watch')}
                </SectionTitleLabel>
                <SectionTitle>
                    {postData.title}
                </SectionTitle>
            </Grid>
            <Grid item xs={12}>
                <RegisterForm salesforceData={salesforceData} />
            </Grid>
        </Grid>
    );
}
export default RegisterItem;