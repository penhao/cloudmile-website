import React from 'react';
import Container from "../containers/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ColorGraphic from "../sections/ColorGraphic";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography";

interface Props {
    title: string;
    caption: string;
    parentPage: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    banner: {
        width: '100%',
        padding: '20px 0 40px 0',
        [theme.breakpoints.up('sm')]: {
            padding: '50px 0 20px 0'
        },
        [theme.breakpoints.up('md')]: {
            padding: '50px 0 20px 0'
        }
    },
    bannerInner: {
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
        height: '200px',
        zIndex: 1,
        [theme.breakpoints.up('sm')]: {
            height: '250px'
        },
        '& h5': {
            marginBottom: '5px'
        },
        '& h1': {
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(60),
                lineHeight: 1.2
            }
        }
    },
    colorGraphic: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    }
}));
const BlogBanner = ({ title, caption, parentPage }: Props) => {
    const classes = useStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <div className={classes.banner}>
            <Container maxWidth={{ md: 1280 }}>
                <Box display={'inline-flex'} flexDirection={'column'} justifyContent={'center'} className={classes.bannerInner}>
                    <Typography variant={"h5"}>
                        {caption}
                    </Typography>
                    <Typography variant={"h1"}>
                        {title}
                    </Typography>
                    <ColorGraphic type={"dot"}
                        size={smUp ? 250 : 200}
                        color={parentPage === 'blog' ? 'secondary' : 'error'}
                        customClass={classes.colorGraphic} />
                </Box>
            </Container>
        </div>
    );
};
export default BlogBanner;
