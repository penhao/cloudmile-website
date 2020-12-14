import React, {Fragment, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import Container from "../../components/containers/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import clsx from "clsx";
import {fetchListByKeyword} from "../../services/ApiServices";
import useTranslation from "next-translate/useTranslation";
import SearchCategoryList from "../../components/sections/search/SearchCategoryList";
import {siteRoutes} from "../../../public/config.json";
import {getRoute} from "../../utils/Utils";

const useStyles = makeStyles((theme: Theme) => ({
    head: {
        margin: '35px 0 40px 0',
    },
    keyword: {
        display: 'inline-block',
        width: '100%',
        padding: '20px',
        border: `1px solid ${theme.palette.common.black}`,
        margin: '10px 0 20px 0',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
            margin: '10px 0'
        }
    },
    total: {
        fontSize: theme.typography.pxToRem(20)
    },
    filterList: {
        marginBottom: '40px'
    },
    filter: {
        minWidth: 'auto',
        padding: 0,
        fontSize: theme.typography.pxToRem(20),
        lineHeight: 1.35,
        fontWeight: 600,
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent',
        '&:hover, &.active': {
            backgroundColor: 'transparent',
            textDecoration: 'underline'
        }
    },
}));
const SearchPage = ({postData}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const {lang} = useTranslation();
    const currentRoute = getRoute('Home', siteRoutes)[0];
    const router = useRouter();
    const classes = useStyles();
    const [searchList, setSearchList] = useState<any | null>(null);
    const [keyword, setKeyword] = useState('');
    const [postList, setPostList] = useState([]);
    const [filterKey, setFilterKey] = useState('');
    const [startCount, setStartCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [disabledMore, setDisabledMore] = useState(true);
    const getDataTotal = () => {
        let total = 0;
        Object.keys(postData.data).map((key: string) => {
            total += postData.data[key].total;
        });
        return total;
    };
    const getApiTypeByFilter = () => {
        switch (filterKey) {
            case 'blog':
                return 1;
            case 'event':
                return 2;
            case 'case':
                return 3;
            case 'video':
                return 4;
            case 'news':
                return 5;
            default:
                return null;
        }
    };
    const getFilterName = (currentKey: string) => {
        switch (currentKey) {
            case 'blog':
                return 'Blog';
            case 'event':
                return 'Event';
            case 'case':
                return 'Case Study';
            case 'video':
                return 'Video';
            case 'news':
                return 'Media Center';
            default:
                return '';
        }
    };
    const getPageName = () => {
        switch (filterKey) {
            case 'blog':
                return 'blog';
            case 'event':
                return 'event';
            case 'case':
                return 'case-study';
            case 'video':
                return 'video';
            case 'news':
                return 'media-center';
            default:
                return '';
        }
    };
    const handleFilterChange = (filter: string) => {
        setFilterKey(filter);
        setPostList(searchList[filter].rows);
        setStartCount(searchList[filter]['rows'].length + 1);
        setDisabledMore(searchList[filter]['rows'].length >= searchList[filter].total);
    };
    const updatePostData = async () => {
        return await fetchListByKeyword(lang, keyword, startCount + 1, 10, getApiTypeByFilter());
    };
    const handleMore = (even: React.MouseEvent) => {
        even.stopPropagation();
        setIsLoading(true);
        updatePostData().then((response: any) => {
            if (response.status) {
                const newList = {...searchList};
                newList[filterKey]['rows'] = [
                    ...newList[filterKey]['rows'],
                    ...response.data[filterKey]['rows']
                ];
                setSearchList(newList);
                setPostList(newList[filterKey].rows);
                setStartCount(newList[filterKey]['rows'].length);
                setDisabledMore(newList[filterKey]['rows'].length >= newList[filterKey].total);
            }
            setIsLoading(false);
        });
    };
    useEffect(() => {
        setSearchList(postData.data);
        setKeyword(router?.query.name ? router.query.name.toString() : '');
        const initFilterKey = Object.keys(postData.data).find((currentKey: string) => {
            return postData.data[currentKey]['rows'].length;
        });
        if (initFilterKey) {
            setFilterKey(initFilterKey);
            setPostList(postData.data[initFilterKey].rows);
            setStartCount(postData.data[initFilterKey].rows.length);
            setDisabledMore(postData.data[initFilterKey].rows.length >= postData.data[initFilterKey].total);
        }
    }, [router, postData]);

    return (
        <Layout metadata={{
            ...currentRoute['metadata'][lang], href: currentRoute['href']
        }}>
            <Container maxWidth={{md: 1280}}>
                <div className={classes.head}>
                    <Typography variant={"h6"} component={'div'} className={classes.total}>
                        Search Results for
                    </Typography>
                    <Typography variant={"h2"} className={classes.keyword}>
                        {router.query.name}
                    </Typography>
                    <Typography variant={"h6"} component={'div'} className={classes.total}>
                        {`All ${getDataTotal()} articles`}
                    </Typography>
                </div>
                <Grid container spacing={4} className={classes.filterList}>
                    {
                        (searchList)
                            ?
                            Object.keys(searchList).map((currentKey: string, index: number) => {
                                return (
                                    <Fragment key={index}>
                                        {
                                            (searchList[currentKey]['rows'].length)
                                                ?
                                                <Grid item>
                                                    <Button onClick={() => handleFilterChange(currentKey)}
                                                            className={
                                                                clsx(classes.filter, (filterKey === currentKey) ? 'active' : null)
                                                            }>
                                                        {getFilterName(currentKey)}
                                                    </Button>
                                                </Grid>
                                                :
                                                null
                                        }
                                    </Fragment>
                                );
                            })
                            :
                            null
                    }
                </Grid>
            </Container>
            <SearchCategoryList
                currentPage={getPageName()}
                list={postList}
                disabledMore={disabledMore}
                isLoading={isLoading}
                moreHandler={handleMore}/>
        </Layout>
    );
};
export const getServerSideProps: GetServerSideProps = async ({locale, query}: GetServerSidePropsContext) => {

    const keyword = (query && query.name) ? query.name.toString() : '';
    //1:blog 2:event 3:case study 4:video 5: 新聞管理
    const postData = await fetchListByKeyword(locale, keyword, 1, 10, null);
    return {
        props: {
            postData
        }
    }
};
export default SearchPage;