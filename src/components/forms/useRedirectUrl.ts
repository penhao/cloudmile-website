import {useEffect, useState} from "react";

const useRedirectUrl = (lang: string) => {
    const [url, setUrl] = useState('');
    useEffect(() => {
        setUrl(`${window.location.origin}${lang === 'en' ? '' : ('/' + lang)}/thanks`)
    }, []);
    return url;
};
export default useRedirectUrl;