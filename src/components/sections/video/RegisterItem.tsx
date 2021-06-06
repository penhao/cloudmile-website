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
    data: any;
}
const RegisterItem = ({ data }: IProps) => {
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [salesforceData, setSalesforceData] = useState<SalesforcePostParams | null>(null);

    useEffect(() => {
        const urlParams = removeParam('category', window.location.search);
        const domainPath = `${process.env.DOMAIN_PATH}${lang === "en" ? "" : "/" + lang}`
        const redirectUrl = (data.type === 2)
            ? `${domainPath}/resources/video/live-stream/${data.id}/${encodeURIComponent(data.title)}${urlParams}`
            : `${domainPath}/resources/video/${data.id}/${encodeURIComponent(data.title)}${urlParams}`;
        setSalesforceData({
            utmSource: data.utm_source,
            utmMedium: data.utm_medium,
            utmCampaign: data.utm_campaign,
            leadSource: data.lead_source,
            campaignId: data.salesforce_id,
            redirectUrl: redirectUrl,
            country: data.country
        })
    }, []);
    return (
        <Grid container spacing={smUp ? 4 : 2}>
            <Grid item xs={12}>
                <SectionTitleLabel color={"warning"}>
                    {t('video:Register to Watch')}
                </SectionTitleLabel>
                <SectionTitle>
                    {data.title}
                </SectionTitle>
            </Grid>
            <Grid item xs={12}>
                <RegisterForm salesforceData={salesforceData} />
            </Grid>
        </Grid>
    );
}
export default RegisterItem;