import {useEffect, useState} from "react";
import PhoneNumber from "awesome-phonenumber";
// @ts-ignore
import detectBrowserLanguage from 'detect-browser-language';

const usePhoneCountryCode = () => {
    const [countryCode, setCountryCode] = useState('');
    useEffect(() => {
        setCountryCode(`+${PhoneNumber.getCountryCodeForRegionCode(detectBrowserLanguage().split('-')[1])}`)
    }, []);
    return countryCode;
};
export default usePhoneCountryCode;