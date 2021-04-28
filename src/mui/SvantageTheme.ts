import {createMuiTheme} from "@material-ui/core";
import GlobalTheme from "./GlobalTheme";

const SvantageTheme = createMuiTheme({
    ...GlobalTheme,
    palette: {
        ...GlobalTheme.palette,
        common: {
            black: '#0a2f5c',
            white: '#ffffff'
        },
        primary: {
            main: '#8c6df0',
        },
        secondary: {
            main: '#02d6b6',
            light: '#96eade'
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#d8d8d8',
            300: '#d3d3d3',
            400: '#c0c0c0',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#555555',
            900: '#212121'
        },
    }
});
export default SvantageTheme;