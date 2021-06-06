import React, { useContext } from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import VideoListItem from "./VideoListItem";
import MoreButton from "../../buttons/MoreButton";
import useTheme from "@material-ui/core/styles/useTheme";
import { VideoContextStore } from '../../../@share/context/VideoContext';

interface Props {
    postData: any[];
    isLoading: boolean;
    disabledMore: boolean;
    moreHandler: React.MouseEventHandler;
}

const VideoList = ({ postData, isLoading, disabledMore, moreHandler }: Props) => {
    const categoryId = useContext(VideoContextStore);
    console.log("postData", postData);
    return (
        <SectionContainer>
            <Container maxWidth={{ md: 1280 }}>
                <Grid container spacing={4}>
                    {
                        postData.map((item: any, index: number) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <VideoListItem category={categoryId} type={Number(item.video_type)} itemData={item} />
                                </Grid>
                            )
                        })
                    }
                    {
                        /* MoreButton */
                        (!disabledMore)
                            ?
                            <Grid item xs={12}>
                                <MoreButton color={useTheme().palette.common.white}
                                    disabled={isLoading}
                                    clickHandler={moreHandler} />
                            </Grid>
                            :
                            null
                    }
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default VideoList;
