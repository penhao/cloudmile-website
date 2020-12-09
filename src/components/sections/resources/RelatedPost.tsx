import React, {Fragment} from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import useTheme from "@material-ui/core/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BlogTopicItem from "./BlogTopicItem";
import Typography from "@material-ui/core/Typography";
import {Theme} from "@material-ui/core";

interface Props {
    title: string;
    postData: any[];
    parentPage: string;
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
const RelatedPost = ({postData, title, parentPage}: Props) => {
    const classes = useStyles();
    return (
        <Fragment>
            {
                (postData?.length)
                    ?
                    <SectionContainer backgroundColor={useTheme().palette.grey["300"]}>
                        <Container maxWidth={{md: 1280}} className={classes.container}>
                            <Typography variant={"body1"} color={"secondary"} className={classes.title}>
                                {title}
                            </Typography>
                            <Grid container spacing={4}>
                                {
                                    postData.map((item: any, index: number) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={3} key={index}>
                                                <BlogTopicItem parentPage={parentPage} itemData={item}/>
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
export default RelatedPost;
