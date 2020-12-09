import {useEffect, useState} from "react";


const useScrollPercentage = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.scrollY;
            let docHeight = document.body.offsetHeight;
            let winHeight = window.innerHeight;
            let scrollPercent = scrollTop / (docHeight - winHeight);
            setPercentage(Math.round(scrollPercent * 100));
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return percentage;
};
export default useScrollPercentage;