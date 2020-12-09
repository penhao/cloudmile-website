import React from 'react';
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import CaseStudyListItem from "../resources/CaseStudyListItem";
import MoreButton from "../../buttons/MoreButton";
import SectionContainer from "../../containers/SectionContainer";


interface Props {
    postData: any[];
    isLoading: boolean;
    disabledMore: boolean;
    parentPage: string;
    moreHandler: React.MouseEventHandler;
}

const CaseStudyList = ({parentPage, postData = [], disabledMore = true, isLoading = false, moreHandler}: Props) => {
    return (
        <SectionContainer>
            <Container maxWidth={{md: 1280}}>
                <Grid container spacing={4} component={'ul'}>
                    {
                        (postData?.length)
                            ?
                            postData.map((item: any, index: number) => {
                                return (
                                    <Grid item xs={12} sm={4} md={3} component={'li'} key={index}>
                                        <CaseStudyListItem data={item}/>
                                    </Grid>
                                );
                            })
                            :
                            null
                    }
                    {
                        (!disabledMore)
                            ?
                            <Grid item xs={12} component={'li'}>
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
export default CaseStudyList;
