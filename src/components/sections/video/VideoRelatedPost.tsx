import React, { Fragment } from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core";
import VideoListItem from "./VideoListItem";

// import VideoListItem from "./VideoListItem";

interface Props {
    title: string;
    list: any[] | null;
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    title: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 700,
        marginBottom: '20px'
    }
}));
const VideoRelatedPost = ({ list, title }: Props) => {
    const classes = useStyles();

    return (
        <Fragment>
            {
                (list && list.length)
                    ?
                    <SectionContainer backgroundColor={'#737373'} margin={false}>
                        <Container maxWidth={{ md: 1280 }} className={classes.container}>
                            <Typography variant={"body1"} component={"div"} color={"secondary"} className={classes.title}>
                                {title}
                            </Typography>
                            <Grid container spacing={4}>
                                {
                                    list.map((item: any, index: number) => {
                                        if (index >= 4) return;
                                        return (
                                            <Grid item xs={12} sm={6} md={3} key={index}>
                                                <VideoListItem type={Number(item.video_type)} itemData={item} />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Container>
                    </SectionContainer>
                    :
                    null
            }
        </Fragment>
    );
};
export default VideoRelatedPost;
