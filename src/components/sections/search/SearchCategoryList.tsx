import React from 'react';
import SectionContainer from "../../containers/SectionContainer";
import PostList from "../resources/PostList";
import Container from "../../containers/Container";
import MoreButton from "../../buttons/MoreButton";

interface Props {
    currentPage: string;
    list: any[] | null;
    isLoading: boolean;
    disabledMore: boolean;
    moreHandler: React.MouseEventHandler;
}

const SearchCategoryList = (
    {list, disabledMore, isLoading, moreHandler, currentPage}: Props
) => {
    return (
        <SectionContainer>
            <Container maxWidth={{sm: 680, md: 680}} paddingX={false}>
                {
                    (list && list.length)
                        ?
                        <PostList currentPage={currentPage} list={list}/>
                        :
                        null
                }
                {
                    (!disabledMore)
                        ?
                        <MoreButton disabled={isLoading} clickHandler={moreHandler}/>
                        :
                        null
                }
            </Container>
        </SectionContainer>
    );
};
export default SearchCategoryList;
