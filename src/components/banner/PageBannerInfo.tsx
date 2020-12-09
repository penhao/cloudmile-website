import React, {Fragment} from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import useThemeColor from "../../components/useThemeColor";
import Container from "../containers/Container";
import Hidden from "@material-ui/core/Hidden";


interface Props {
    title: string;
    caption: string;
    desc?: string | null;
    color: string;
}

interface StyleProps {
    themeColor: string
}

const useStyles = makeStyles(() => ({
    title: {
        color: ({themeColor}: StyleProps) => themeColor
    },
    caption: {
        color: ({themeColor}: StyleProps) => themeColor,
        marginBottom: '10px'
    },
    desc: {
        color: ({themeColor}: StyleProps) => themeColor,
        marginTop: '20px'
    }
}));
const PageBannerInfo = ({title, caption, desc, color = 'white'}: Props) => {
    const themeColor = useThemeColor({color});
    const classes = useStyles({themeColor});

    return (
        <Fragment>
            <Typography variant={'h5'}
                        align={'center'}
                        className={classes.caption}>
                {caption}
            </Typography>
            <Typography variant={'h1'}
                        align={'center'}
                        className={classes.title}>
                {title}
            </Typography>
            {
                (desc)
                    ?
                    <Hidden xsDown>
                        <Container maxWidth={{xs: 'none', sm: 560, md: 560}} paddingX={false}>
                            <Typography variant={'body1'}
                                        align={'center'}
                                        className={classes.desc}>
                                {desc}
                            </Typography>
                        </Container>
                    </Hidden>
                    :
                    null
            }
        </Fragment>
    );
};
export default PageBannerInfo;
