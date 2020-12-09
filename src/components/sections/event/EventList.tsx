import React, {useEffect, useState} from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import EventListItem from "./EventListItem";
import MoreButton from "../../buttons/MoreButton";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
    postData: any[];
    isLoading: boolean;
    disabledMore: boolean;
    moreHandler: React.MouseEventHandler;
}

const EventList = ({postData, disabledMore, isLoading, moreHandler}: Props) => {
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const [listData, setListData] = useState([]);
    useEffect(() => {
        setListData(postData);
    }, [postData]);
    return (
        <SectionContainer>
            <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}}>
                <Grid container spacing={smUp ? 4 : 4}>
                    {
                        listData.map((item: any, index: number) => {
                            if (index === 0) return;
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <EventListItem itemData={item}/>
                                </Grid>
                            )
                        })
                    }
                    {
                        (!disabledMore)
                            ?
                            <Grid item xs={12}>
                                <MoreButton disabled={isLoading} clickHandler={moreHandler}/>
                            </Grid>
                            :
                            null
                    }
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default EventList;
