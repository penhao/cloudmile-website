import {useEffect, useState} from "react";

const useFormatDate = (date: string) => {
    const [formatDate, setFormatDate] = useState('');
    useEffect(() => {
        const month = new Date(date).toLocaleString('default', {month: 'long'}
        );
        setFormatDate(`${month} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`);
    }, []);
    return formatDate;
};
export default useFormatDate;