import React, { useEffect, useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PostListItem from "./PostListItem";
import PostListVideoItem from "./PostListVideoItem";

interface Props {
    currentPage: string;
    list: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        '& li': {
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
            '&:first-child': {
                borderTop: `1px solid ${theme.palette.secondary.main}`
            },
            '&:last-child': {
                borderBottom: 'none'
            }
        }
    }
}));
const PostList = ({ currentPage, list }: Props) => {
    const classes = useStyles();
    const [postData, setPostData] = useState([]);
    useEffect(() => {
        setPostData(list);
    }, [list]);
    return (
        <Grid container component={'ul'} className={classes.list}>
            {
                (postData && postData.length)
                    ?
                    postData.map((item: any, index: number) => {
                        return (
                            <Grid item xs={12} component={'li'} key={index}>
                                {
                                    (currentPage === 'video')
                                        ? <PostListVideoItem currentPage={currentPage} data={item} />
                                        : <PostListItem currentPage={currentPage} data={item} />
                                }
                            </Grid>
                        );
                    })
                    :
                    null
            }
        </Grid>
    );
};
export default PostList;
