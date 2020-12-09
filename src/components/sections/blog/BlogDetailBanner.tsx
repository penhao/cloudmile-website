import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import BackgroundImage from "../../Images/BackgroundImage";

interface Props {
    imgUrl: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    banner: {
        width: '100%',
        height: '250px',
        marginTop: '-5px',
        marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            height: '300px',
            marginBottom: '40px'
        }
    }
}));

const BlogDetailBanner = ({imgUrl}: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <BackgroundImage imgUrl={imgUrl} detectRetina={false}/>
        </div>
    );
};
export default BlogDetailBanner;
