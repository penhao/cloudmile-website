import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faBriefcase, faEnvelope, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import NavLink from "../links/NavLink";
import useTranslation from "next-translate/useTranslation";
import useUrlParams, {SalesforcePostParams} from "../useUrlParams";
import {useFormStyles} from "./FormStyles";
import {isValueEmpty} from "../../utils/Utils";
import ReCAPTCHA from "react-google-recaptcha";
import {reCAPTCHAKey} from "../../../public/config.json";

interface Props {
    salesforceData?: SalesforcePostParams | null;
}

const NewsLetterForm = ({salesforceData = null}: Props) => {

    const formClasses = useFormStyles();
    const {t, lang} = useTranslation();
    const [redirectUrl, setRedirectUrl] = useState('');
    const urlParams = useUrlParams({
        utmSource: 'officialsite',
        utmMedium: 'Newsletter',
        utmCampaign: 'Newsletter',
        leadSource: `Newsletter_${(lang === 'zh') ? 'zh' : lang}`,
        campaignId: ''
    });
    useEffect(() => {
        const redirectUrl =
            (salesforceData && salesforceData.redirectUrl && !isValueEmpty(salesforceData?.redirectUrl))
                ? salesforceData.redirectUrl
                : `${window.location.origin}${lang === 'en' ? '' : ('/' + lang)}/thanks`;
        setRedirectUrl(redirectUrl);
    }, []);

    return (
        <form action={'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'}
              method={'POST'}
              autoComplete={'off'}>
            <div className={formClasses.formInner}>
                <Grid container spacing={2}>
                    {/* First Name */}
                    <Grid item xs={12} sm={6}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <FontAwesomeIcon icon={faUser} className={formClasses.icon}/>
                            <TextField required
                                       name="first_name"
                                       type="text"
                                       label={t('form:First Name')}
                                       defaultValue=""
                                       className={formClasses.input}/>
                        </Box>
                    </Grid>
                    {/* Last Name */}
                    <Grid item xs={12} sm={6}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <Hidden smUp>
                                <span className={formClasses.fixArea}/>
                            </Hidden>
                            <TextField required
                                       name="last_name"
                                       type="text"
                                       label={t('form:Last Name')}
                                       defaultValue=""
                                       className={formClasses.input}/>
                        </Box>
                    </Grid>
                    {/* Company */}
                    <Grid item xs={12}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <FontAwesomeIcon icon={faBriefcase} className={formClasses.icon}/>
                            <TextField required
                                       name="company"
                                       type="text"
                                       label={t('form:Company Name')}
                                       defaultValue=""
                                       className={formClasses.input}/>
                        </Box>
                    </Grid>
                    {/* Email */}
                    <Grid item xs={12}>
                        <Box display={'flex'} flexWrap={'nowrap'}>
                            <FontAwesomeIcon icon={faEnvelope} className={formClasses.icon}/>
                            <TextField required
                                       name="email"
                                       type="email"
                                       label={t('form:Email Address')}
                                       defaultValue={''}
                                       className={formClasses.input}/>
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
                <input type="hidden" name="oid" value="00D7F000001xkaZ"/>
                <input type="hidden" name="retURL" value={redirectUrl}/>

                {/* Utm */}
                <input type="hidden"
                       id="00N7F00000STwKY"
                       name="00N7F00000STwKY"
                       size={20}
                       maxLength={50}
                       value={
                           (salesforceData && !isValueEmpty(salesforceData?.utmSource))
                               ? salesforceData.utmSource : urlParams.utmSource
                       }/>
                <input type="hidden"
                       id="00N7F00000STwKd"
                       name="00N7F00000STwKd"
                       size={20}
                       maxLength={50}
                       value={
                           (salesforceData && !isValueEmpty(salesforceData?.utmMedium))
                               ? salesforceData.utmMedium : urlParams.utmMedium
                       }/>
                <input type="hidden"
                       id="00N7F00000STwKi"
                       name="00N7F00000STwKi"
                       size={20}
                       maxLength={50}
                       value={
                           (salesforceData && !isValueEmpty(salesforceData?.utmCampaign))
                               ? salesforceData.utmCampaign : urlParams.utmCampaign
                       }/>

                {/* BU */}
                <input type="hidden"
                       id="00N7F00000SsAIL"
                       name="00N7F00000SsAIL"
                       size={20}
                       maxLength={50}
                       value={'CloudMile'}/>


                {/* Campaign ID */}
                <input type="hidden"
                       id="Campaign_ID"
                       name="Campaign_ID"
                       size={20}
                       maxLength={50}
                       value={
                           (salesforceData && !isValueEmpty(salesforceData?.campaignId))
                               ? salesforceData.campaignId : urlParams.campaignId
                       }/>

                {/* Lead Source */}
                <input type="hidden"
                       id="00N7F00000RPD3a"
                       name="00N7F00000RPD3a"
                       size={20}
                       maxLength={50}
                       value={
                           (salesforceData && !isValueEmpty(salesforceData?.leadSource))
                               ? salesforceData.leadSource : urlParams.leadSource
                       }/>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className={formClasses.recaptcha}>
                        <ReCAPTCHA sitekey={reCAPTCHAKey}/>
                    </div>
                    <div className={formClasses.privacy}>
                        <Typography variant={"caption"}>
                            <span>
                                {`${t('form:By clicking the “Send” button, you are agreeing to the CloudMile')}`}&nbsp;&nbsp;
                            </span>
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
                                <FontAwesomeIcon icon={faPaperPlane}/>
                            }
                            className={formClasses.submit}>
                        Send
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default NewsLetterForm;
