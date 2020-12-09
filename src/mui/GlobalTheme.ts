import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
// Create a theme instance.
const GlobalTheme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1200,
            lg: 1920,
            xl: 2400
        }
    },
    palette: {
        background: {
            default: '#ffffff'
        },
        common: {
            black: '#0a1b2e',
            white: '#ffffff'
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#d8d8d8',
            300: '#d3d3d3',
            400: '#a9a9a9',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#555555',
            900: '#212121'
        },
        primary: {
            main: '#0b6dd7'
        },
        secondary: {
            main: '#f2800b'
        },
        error: {
            main: '#cb1090'
        },
        warning: {
            main: '#eab107'
        }
    },
    spacing: factor => `${10 * factor}px`,
    typography: {
        htmlFontSize: 16,
        button: {
            textTransform: 'none',
            letterSpacing: 'normal'
        },
        fontWeightLight: 200,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700
    },
    transitions: {
        easing: {
            easeOut: 'cubic-bezier(.17, .67, .53, .99)',
        },
        duration: {
            standard: 300,
            complex: 1200
        }
    },
    zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
    }
});

GlobalTheme.typography.h1 = {
    fontSize: GlobalTheme.typography.pxToRem(36),
    lineHeight: 1,
    letterSpacing: 'normal',
    [GlobalTheme.breakpoints.up('sm')]: {
        fontSize: GlobalTheme.typography.pxToRem(60)
    },
    [GlobalTheme.breakpoints.up('md')]: {
        fontSize: GlobalTheme.typography.pxToRem(90)
    }
};
GlobalTheme.typography.h2 = {
    fontSize: GlobalTheme.typography.pxToRem(32),
    lineHeight: 1.33,
    letterSpacing: 'normal',
    [GlobalTheme.breakpoints.up('sm')]: {
        fontSize: GlobalTheme.typography.pxToRem(48)
    }
};
GlobalTheme.typography.h3 = {
    fontSize: GlobalTheme.typography.pxToRem(26),
    lineHeight: 1.33,
    letterSpacing: 'normal',
    fontWeight: 400,
    [GlobalTheme.breakpoints.up('sm')]: {
        fontSize: GlobalTheme.typography.pxToRem(30)
    }
};
GlobalTheme.typography.h4 = {
    fontSize: GlobalTheme.typography.pxToRem(20),
    lineHeight: 'normal',
    letterSpacing: 'normal',
    [GlobalTheme.breakpoints.up('sm')]: {
        fontSize: GlobalTheme.typography.pxToRem(28)
    }
};
GlobalTheme.typography.h5 = {
    fontSize: GlobalTheme.typography.pxToRem(18),
    lineHeight: 1.33,
    letterSpacing: 'normal',
    [GlobalTheme.breakpoints.up('sm')]: {
        fontSize: GlobalTheme.typography.pxToRem(24)
    }
};
GlobalTheme.typography.h6 = {
    fontSize: GlobalTheme.typography.pxToRem(15),
    lineHeight: 1.33,
    letterSpacing: 'normal',
    [GlobalTheme.breakpoints.up('sm')]: {
        fontSize: GlobalTheme.typography.pxToRem(20)
    }
};
GlobalTheme.typography.body1 = {
    fontSize: GlobalTheme.typography.pxToRem(14),
    lineHeight: 1.63,
    letterSpacing: 'normal',
    [GlobalTheme.breakpoints.up('sm')]: {
        fontSize: GlobalTheme.typography.pxToRem(16)

    }
};
GlobalTheme.typography.body2 = {
    fontSize: GlobalTheme.typography.pxToRem(14),
    lineHeight: 1.25,
    letterSpacing: 'normal',
    [GlobalTheme.breakpoints.up('sm')]: {
        fontSize: GlobalTheme.typography.pxToRem(16)

    }
};
GlobalTheme.typography.caption = {
    fontSize: GlobalTheme.typography.pxToRem(12),
    lineHeight: 2.17,
    fontWeight: 400
};
export default GlobalTheme;