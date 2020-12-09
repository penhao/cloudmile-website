import React, {Fragment} from 'react';
import Container from "../../../containers/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SectionTitleLabel from "../../SectionTitleLabel";
import SectionTitle from "../../SectionTitle";
import NavLink from "../../../links/NavLink";
import IconLaunch from "../../../icons/IconLaunch";
import CaseStudyListItem from "../../resources/CaseStudyListItem";
import SectionContainer from "../../../containers/SectionContainer";
import useTheme from "@material-ui/core/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import useTranslation from "next-translate/useTranslation";
import {useLinkStyles} from "../../../links/LinkStyles";

interface Props {
    postData: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
    related: {},
    inner: {
        height: '100%',
        paddingTop: '40px',
        paddingBottom: '40px',
        '& > .MuiGrid-container': {
            height: '100%',
            '& .MuiBox-root': {
                height: '100%'
            }
        }
    },
    link: {
        textAlign: 'right',
        marginTop: '20px',
        [theme.breakpoints.up('md')]: {
            marginTop: 'auto',
        }
    }
}));
const CaseDetailRelatedPost = ({postData = []}: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const theme = useTheme();
    const {t} = useTranslation();
    return (
        <SectionContainer backgroundColor={theme.palette.grey["200"]} className={classes.related}>
            <Container maxWidth={{md: 1280}} fullHeight={true} className={classes.inner}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Container maxWidth={{sm: 600, md: 600}} paddingX={false} centerX={false} fullHeight={true}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <SectionTitleLabel color={'warning'}>
                                    {t('case-study:Explore More Success Stories')}
                                </SectionTitleLabel>
                                <SectionTitle>
                                    {t('case-study:No Matter What Your Business Is, We Know What You Need')}
                                </SectionTitle>
                                <div className={classes.link}>
                                    <NavLink hrefPath={'/resources/case-study'} classNames={linkClasses.iconLink}>
                                        <IconLaunch/>
                                    </NavLink>
                                </div>
                            </Box>
                        </Container>
                    </Grid>
                    {
                        postData?.length
                            ?
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={4}>
                                    {
                                        postData.map((item: any, index: number) => {
                                            if (index > 1) return;
                                            return (
                                                <Fragment key={index}>
                                                    {
                                                        (index > 0)
                                                            ?
                                                            <Hidden xsDown>
                                                                <Grid item xs={12} sm={6}>
                                                                    <CaseStudyListItem data={item}/>
                                                                </Grid>
                                                            </Hidden>
                                                            :
                                                            <Grid item xs={12} sm={6}>
                                                                <CaseStudyListItem data={item}/>
                                                            </Grid>
                                                    }
                                                </Fragment>
                                            );
                                        })
                                    }
                                </Grid>
                            </Grid>
                            :
                            null
                    }
                </Grid>
            </Container>
        </SectionContainer>
    );
};
export default CaseDetailRelatedPost;
