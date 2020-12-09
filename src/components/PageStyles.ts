import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";


interface StyleProps {
    bgColor?: string;
}

export const usePageStyles = makeStyles((theme: Theme) => ({
    layout: {
        backgroundColor: ({bgColor}: StyleProps) => {
            return bgColor === 'light' ? theme.palette.common.white : theme.palette.grey["800"]
        },
        '& *': {
            fontFamily: '"Open Sans", "Arial", sans-serif !important'
        }
    },
    main: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        zIndex: 1
    }
}));

export const useFormStyles = makeStyles(() => ({}));