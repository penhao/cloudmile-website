import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faBriefcase,
    faEnvelope,
    faPhone,
    faBell,
    faCommentDots,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import NavLink from "../links/NavLink";
import useTranslation from "next-translate/useTranslation";
import useUrlParams from "../useUrlParams";
import usePhoneCountryCode from "./usePhoneCountryCode";
import { useFormStyles } from "./FormStyles";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const formClasses = useFormStyles();
    const { t, lang } = useTranslation();
    const countryCode = usePhoneCountryCode();
    const [phone, setPhone] = useState(countryCode);
    const [inquiry, setInquiry] = useState(t("form:Digital Transformation"));
    const [redirectUrl, setRedirectUrl] = useState('');
    const urlParams = useUrlParams({
        utmSource: 'officialsite',
        utmMedium: 'organic',
        utmCampaign: `contactus_${(lang === 'zh') ? 'zh' : lang}`,
        leadSource: `Official Site_${(lang === 'zh') ? 'zh' : lang}`,
        campaignId: ''
    });
    useEffect(() => {
        setPhone(countryCode);
        setRedirectUrl(`${window.location.origin}${lang === 'en' ? '' : ('/' + lang)}/thanks`);
    }, [countryCode]);

    return (
        <form action={'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'}
            method={'POST'}
            autoComplete={'off'}
            ref={formRef}>
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
                    <Grid item xs={12}>
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
                    {/* Inquiry */}
                    <Grid item xs={12}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <FontAwesomeIcon icon={faBell} className={formClasses.icon} />
                            <FormControl fullWidth>
                                <InputLabel id="inquiryLabel">{t('form:Reason for Inquiry')}</InputLabel>
                                <Select labelId="inquiryLabel"
                                    name="00N7F00000Rd7ld"
                                    value={inquiry}
                                    onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                                        setInquiry(event.target.value as string)
                                    }}
                                    MenuProps={{
                                        disableScrollLock: true
                                    }}>
                                    <MenuItem
                                        value={t("form:Digital Transformation")}>{t("form:Digital Transformation")}</MenuItem>
                                    <MenuItem value={t("form:IT Modernization")}>{t("form:IT Modernization")}</MenuItem>
                                    <MenuItem
                                        value={t("form:Data Driven Business")}>{t("form:Data Driven Business")}</MenuItem>
                                    <MenuItem
                                        value={t("form:Cloud Management Platform")}>{t("form:Cloud Management Platform")}</MenuItem>
                                    <MenuItem
                                        value={t("form:Multi-CDN Platform")}>{t("form:Multi-CDN Platform")}</MenuItem>
                                    <MenuItem
                                        value={t("form:Business Productivity")}>{t("form:Business Productivity")}</MenuItem>
                                    <MenuItem
                                        value={t("form:All Cloud Services")}>{t("form:All Cloud Services")}</MenuItem>
                                    <MenuItem value={t("form:AI Services")}>{t("form:AI Services")}</MenuItem>
                                    <MenuItem
                                        value={t("form:Ainotam")}>{t("form:Ainotam")}</MenuItem>
                                    <MenuItem
                                        value={t("form:Other Partnership")}>{t("form:Other Partnership")}</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    {/* Message */}
                    <Grid item xs={12}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <FontAwesomeIcon icon={faCommentDots} className={formClasses.icon} />
                            <TextField
                                id="00N7F00000Rd3yE"
                                name="00N7F00000Rd3yE"
                                label={t('form:Message')}
                                multiline
                                rowsMax={4}
                                defaultValue={""}
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
                <input type="hidden" name="oid" value="00D7F000001xkaZ" />
                <input type="hidden" name="retURL" value={redirectUrl} />

                {/* Utm */}
                <input type="hidden"
                    id="00N7F00000STwKY"
                    name="00N7F00000STwKY"
                    size={20}
                    maxLength={50}
                    value={urlParams.utmSource} />
                <input type="hidden"
                    id="00N7F00000STwKd"
                    name="00N7F00000STwKd"
                    size={20}
                    maxLength={50}
                    value={urlParams.utmMedium} />
                <input type="hidden"
                    id="00N7F00000STwKi"
                    name="00N7F00000STwKi"
                    size={20}
                    maxLength={50}
                    value={urlParams.utmCampaign} />

                {/* BU */}
                <input type="hidden"
                    id="00N7F00000SsAIL"
                    name="00N7F00000SsAIL"
                    size={20}
                    maxLength={50}
                    value={'CloudMile'} />


                {/* Campaign ID */}
                <input type="hidden"
                    id="Campaign_ID"
                    name="Campaign_ID"
                    size={20}
                    maxLength={50}
                    value={urlParams.campaignId} />

                {/* Lead Source */}
                <input type="hidden"
                    id="00N7F00000RPD3a"
                    name="00N7F00000RPD3a"
                    size={20}
                    maxLength={50}
                    value={urlParams.leadSource} />
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
                        endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                        className={formClasses.submit}>
                        {t("common:Send")}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ContactForm;
