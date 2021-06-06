import React from 'react';
import SectionContainer from "../containers/SectionContainer";
import Container from "../containers/Container";
import Grid from "@material-ui/core/Grid";
import RatioContainer from "../containers/RatioContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import ResponseImage from "../Images/ResponseImage";
import ParallaxEffect from "../effects/ParallaxEffect";
import PostList from "../sections/resources/PostList";
import BlogTopicItem from "../sections/resources/BlogTopicItem";
import MoreButton from "../buttons/MoreButton";


interface Props {
    parentPage: string;
    coverUrl: string;
    postData: any[];
    isLoading: boolean;
    disabledMore: boolean;
    moreHandler: React.MouseEventHandler;
}

const useStyles = makeStyles((theme: Theme) => ({
    cover: {
        position: 'relative',
        width: '100%',
        margin: '60px 0'
    },
    list: {
        borderTop: `1px solid ${theme.palette.secondary.main}`,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        '& .MuiGrid-item': {
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
            '&:last-child': {
                borderBottom: 'none',
            }
        }
    },
    more: {
        fontSize: '20px',
        fontWeight: 600,
        marginTop: '40px',
        color: theme.palette.primary.main,
        '& .MuiButton-endIcon': {
            marginLeft: 0
        }
    }
}));

const BlogPostList = (
    { parentPage, coverUrl = '', postData = [], disabledMore, isLoading, moreHandler }: Props
) => {

    const classes = useStyles();
    const getTopicList = () => {
        return (postData && postData.length)
            ?
            postData.filter((_item: any, index: number) => {
                return index <= 4;
            })
            : null;
    };
    const getNormalList = () => {
        return (postData && postData.length)
            ?
            postData.filter((_item: any, index: number) => {
                return index > 4;
            })
            : null;
    };
    const topicList = getTopicList();
    const normalList = getNormalList();

    return (
        <SectionContainer>
            {
                /* TopicList */
                (topicList?.length)
                    ?
                    <Container maxWidth={{ xs: 'none', sm: 'none', md: 1280 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <BlogTopicItem parentPage={parentPage} itemData={topicList[0]} isTopic={true} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={4}>
                                    {
                                        topicList.map((item: any, index: number) => {
                                            if (index === 0) return;
                                            return (
                                                <Grid item xs={12} sm={6} key={index}>
                                                    <BlogTopicItem parentPage={parentPage} itemData={item} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                    :
                    null
            }
            {
                /* Cover */
                <div className={classes.cover}>
                    <RatioContainer ratio={{ xs: 200 / 320, sm: 380 / 640, md: 380 / 1280 }}>
                        <ParallaxEffect>
                            <ResponseImage imageUrl={coverUrl} />
                        </ParallaxEffect>
                    </RatioContainer>
                </div>
            }
            {
                /* NormalList */
                (normalList?.length)
                    ?
                    <Container maxWidth={{ sm: 680, md: 680 }} paddingX={false}>
                        <PostList currentPage={parentPage} list={normalList} />
                        {
                            (!disabledMore)
                                ?
                                <MoreButton disabled={isLoading} clickHandler={moreHandler} />
                                :
                                null
                        }
                    </Container>
                    :
                    null
            }

        </SectionContainer>
    );
};
export default BlogPostList;
