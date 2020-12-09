import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "../../../containers/Container";
import VideoCategory from "../VideoCategory";

interface Props {
    tagList: any[];
    title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    head: {
        paddingTop: '40px',
        marginBottom: '20px'
    },
    tagList: {
        marginBottom: '20px'
    },
    tag: {
        padding: '6px 15px',
        fontSize: theme.typography.pxToRem(12),
        fontWeight: 700,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none !important',
        borderRadius: '99em',
        '&:hover': {
            color: theme.palette.common.white
        }
    },
    title: {
        color: theme.palette.common.white,
        marginTop: '20px'
    }
}));
const VideoDetailHead = ({title, tagList}: Props) => {
    const classes = useStyles();

    return (
        <Container maxWidth={{md: 1280}}>
            <div className={classes.head}>
                {
                    (tagList && tagList.length)
                        ?
                        <VideoCategory categoryData={tagList}/>
                        :
                        null
                }
                <Typography variant={"h5"} className={classes.title}>
                    {title}
                </Typography>
            </div>
        </Container>
    );
};
export default VideoDetailHead;
