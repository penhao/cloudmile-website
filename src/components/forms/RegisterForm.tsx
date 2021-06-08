import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faBriefcase,
    faEnvelope,
    faPaperPlane, faPhone
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import NavLink from "../links/NavLink";
import useTranslation from "next-translate/useTranslation";
import useUrlParams, { SalesforcePostParams } from "../useUrlParams";
import usePhoneCountryCode from "./usePhoneCountryCode";
import { useFormStyles } from "./FormStyles";
import { isValueEmpty, removeParam } from "../../utils/Utils";
import { SalesforceDataType } from "./FormTypes";
import ReCAPTCHA from "react-google-recaptcha";


interface Props {
    salesforceData: SalesforcePostParams | null;
}

const RegisterForm = ({ salesforceData = null }: Props) => {

    const formClasses = useFormStyles();
    const { t, lang } = useTranslation();
    const countryCode = usePhoneCountryCode();
    const [phone, setPhone] = useState(countryCode);
    const [redirectUrl, setRedirectUrl] = useState('');
    const urlParams = useUrlParams({
        utmSource: 'officialsite',
        utmMedium: 'organic',
        utmCampaign: '',
        leadSource: '',
        campaignId: '',
        country: ''
    });
    useEffect(() => {
        const pathOrigin = window.location.origin;
        const mediaParams = removeParam('category', window.location.search);
        const fixLang = lang === 'en' ? '' : ('/' + lang);
        const redirectUrl = (salesforceData && salesforceData.redirectUrl && !isValueEmpty(salesforceData?.redirectUrl))
            ? `${salesforceData.redirectUrl}`
            : `${pathOrigin}${fixLang}/thanks${mediaParams}`;
        setRedirectUrl(redirectUrl);
        setPhone(countryCode);
    }, [countryCode]);

    return (
        <form action={'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'}
            method={'POST'}
            autoComplete={'off'}>
            <div className={formClasses.formInner}>
                <Grid container spacing={2}>
                    {/* First Name */}
                    <Grid item xs={12} sm={6}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <FontAwesomeIcon icon={faUser} className={formClasses.icon} />
                            <TextField required
                                name="first_name"
                                type="text"
                                label={t('form:First Name')}
                                defaultValue=""
                                className={formClasses.input} />
                        </Box>
                    </Grid>
                    {/* Last Name */}
                    <Grid item xs={12} sm={6}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <Hidden smUp>
                                <span className={formClasses.fixArea} />
                            </Hidden>
                            <TextField required
                                name="last_name"
                                type="text"
                                label={t('form:Last Name')}
                                defaultValue=""
                                className={formClasses.input} />
                        </Box>
                    </Grid>
                    {/* Company */}
                    <Grid item xs={12} sm={6}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <FontAwesomeIcon icon={faBriefcase} className={formClasses.icon} />
                            <TextField required
                                name="company"
                                type="text"
                                label={t('form:Company Name')}
                                defaultValue=""
                                className={formClasses.input} />
                        </Box>
                    </Grid>
                    {/* Title */}
                    <Grid item xs={12} sm={6}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <Hidden smUp>
                                <span className={formClasses.fixArea} />
                            </Hidden>
                            <TextField required
                                name="title"
                                type="text"
                                label={t('form:Title')}
                                defaultValue=""
                                className={formClasses.input} />
                        </Box>
                    </Grid>
                    {/* Phone */}
                    <Grid item xs={12}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <FontAwesomeIcon icon={faPhone} className={formClasses.icon} />
                            <TextField required
                                name="phone"
                                type="tel"
                                label={t('form:Phone Number')}
                                className={formClasses.input}
                                value={phone}
                                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                                    setPhone(event.target.value as string);
                                }} />
                        </Box>
                    </Grid>
                    {/* Email */}
                    <Grid item xs={12}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <FontAwesomeIcon icon={faEnvelope} className={formClasses.icon} />
                            <TextField required
                                name="email"
                                type="email"
                                label={t('form:Email Address')}
                                defaultValue={''}
                                className={formClasses.input} />
                        </Box>
                    </Grid>
                </Grid>
            </div>
            {/* Hidden Value */}
            <div>
                {/* Debug */}
                {/*<input type="hidden" name="debug" value="1"/>
                <input type="hidden" name="debugEmail" value="eileen.chen@mile.cloud"/>*/}

                {/* Redirect */}
                <input type="hidden" name="oid" defaultValue="00D7F000001xkaZ" />
                <input type="hidden" name="retURL" defaultValue={redirectUrl} />

                {/* Utm */}
                <input type="hidden"
                    id="00N7F00000STwKY"
                    name="00N7F00000STwKY"
                    size={20}
                    maxLength={50}
                    defaultValue={
                        (urlParams && !isValueEmpty(urlParams?.utmSource))
                            ? urlParams.utmSource
                            : (salesforceData?.utmSource) ? salesforceData.utmSource : urlParams.utmSource
                    } />
                <input type="hidden"
                    id="00N7F00000STwKd"
                    name="00N7F00000STwKd"
                    size={20}
                    maxLength={50}
                    defaultValue={
                        (urlParams && !isValueEmpty(urlParams?.utmMedium))
                            ? urlParams.utmMedium
                            : (salesforceData?.utmMedium) ? salesforceData.utmMedium : urlParams.utmMedium
                    } />
                <input type="hidden"
                    id="00N7F00000STwKi"
                    name="00N7F00000STwKi"
                    size={20}
                    maxLength={50}
                    defaultValue={
                        (urlParams && !isValueEmpty(urlParams?.utmCampaign))
                            ? urlParams.utmCampaign
                            : (salesforceData?.utmCampaign) ? salesforceData.utmCampaign : urlParams.utmCampaign
                    } />

                {/* BU */}
                <input type="hidden"
                    id="00N7F00000SsAIL"
                    name="00N7F00000SsAIL"
                    size={20}
                    maxLength={50}
                    defaultValue={'CloudMile'} />


                {/* Campaign ID */}
                <input type="hidden"
                    id="Campaign_ID"
                    name="Campaign_ID"
                    size={20}
                    maxLength={50}
                    defaultValue={
                        (salesforceData && !isValueEmpty(salesforceData?.campaignId))
                            ? salesforceData.campaignId : urlParams.campaignId
                    } />

                {/* Lead Source */}
                <input type="hidden"
                    id="00N7F00000RPD3a"
                    name="00N7F00000RPD3a"
                    size={20}
                    maxLength={50}
                    defaultValue={
                        (salesforceData && !isValueEmpty(salesforceData?.leadSource))
                            ? salesforceData.leadSource : urlParams.leadSource
                    } />
                {/* Country */}
                <input type="hidden"
                    id="00N7F00000RdAkx"
                    name="00N7F00000RdAkx"
                    size={20}
                    maxLength={50}
                    defaultValue={
                        (salesforceData && !isValueEmpty(salesforceData?.country))
                            ? salesforceData.country : urlParams.country
                    } />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className={formClasses.recaptcha}>
                        <ReCAPTCHA sitekey={process.env.RECAPTCHAKEY} />
                    </div>
                    <div className={formClasses.privacy}>
                        <Typography variant={"caption"}>
                            <span>{t('form:By clicking the “Send” button, you are agreeing to the CloudMile')}&nbsp;&nbsp;</span>
                            <NavLink hrefPath={'/privacy'} classNames={formClasses.privacyLink}>
                                {t('form:Privacy Policy')}
                            </NavLink>
                            <span>.</span>
                        </Typography>
                    </div>
                    <Button variant="contained"
                        fullWidth
                        disableElevation
                        type={'submit'}
                        color={"primary"}
                        endIcon={
                            <FontAwesomeIcon icon={faPaperPlane} />
                        }
                        className={formClasses.submit}>
                        Send
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default RegisterForm;
