import {useEffect, useState} from "react";
import {useTheme} from "@material-ui/core";

export interface ColorProps {
    color: string;
}
const useThemeColor = ({color}: ColorProps) => {
    const theme = useTheme();
    const [themeColor, setThemeColor] = useState('transplant');
    const getColor = () => {
        switch (color) {
            case 'black':
                return theme.palette.common.black;
            case 'white':
                return theme.palette.common.white;
            case 'primary':
                return theme.palette.primary.main;
            case 'secondary':
                return theme.palette.secondary.main;
            case 'secondary.light':
                return theme.palette.secondary.light;
            case 'warning':
                return theme.palette.warning.main;
            case 'error':
                return theme.palette.error.main;
            default:
                return 'transplant';
        }
    };
    useEffect(() => {
        setThemeColor(getColor())
    }, [color]);
    return themeColor;
};
export default useThemeColor;