import { makeStyles, Theme } from "@material-ui/core/styles";

const useLinkStyles = makeStyles((theme: Theme) => ({
    link: {
        position: "relative",
        display: "inline-block",
        width: "auto",
        zIndex: 1,
        textDecoration: "none",
    },
    contactLink: {
        // margin: "0 20px",
        padding: "8px 20px",
        borderRadius: "99em",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: theme.palette.common.white,
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.common.black,
        transition: theme.transitions.create(["color", "borderColor"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard,
        }),
        "&:hover,&.active": {
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
        },
    },
    drawLine: {
        whiteSpace: "nowrap",
        "&:hover,&.active": {
            "& $linkText": {
                "&::after": {
                    width: "100%",
                },
            },
        },
    },
    linkText: {
        display: "inline-block",
        position: "relative",
        width: "auto",
        "&::after": {
            position: "absolute",
            display: "block",
            content: '""',
            width: 0,
            height: "3px",
            bottom: "1px",
            backgroundColor: theme.palette.secondary.main,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.standard,
            }),
        },
    },
    iconEffect: {
        overflow: "hidde",
        "&:hover": {
            color: theme.palette.secondary.main,
            "& svg": {
                animation: `$IconForward 0.7s ${theme.transitions.easing.easeOut}`,
            },
        },
    },
    "@keyframes IconForward": {
        "0%": {
            transform: "translate(0, 0)",
        },
        "30%": {
            transform: "translate(100%, 0)",
        },
        "51%": {
            transform: "translate(100%, 0)",
        },
        "52%": {
            transform: "translate(-100%, 0)",
        },
        "100%": {
            transform: "translate(0, 0)",
        },
    },
}));
export default useLinkStyles;
