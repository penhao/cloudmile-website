import React from 'react'
import Container from "../../components/containers/Container";
import SectionTitleLabel from "../../components/sections/SectionTitleLabel";
import SectionTitle from "../../components/sections/SectionTitle";
import { makeStyles, Theme, Box, useTheme, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'next-translate';
import RelatedPost from "../../components/sections/resources/RelatedPost";
import NavLink from "../links/NavLink";
import clsx from "clsx";
import IconLaunch from "../icons/IconLaunch";
import { useLinkStyles } from "../links/LinkStyles";

interface Props {
    data: any;
    categoryId: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        [theme.breakpoints.up('sm')]: {
            marginBottom: '40px',
        }
    },
    link: {
        marginTop: '20px',
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            marginTop: 0,
            marginBottom: 0,
        }
    }
}));

function RelatedSection({ data, categoryId }: Props) {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const { t } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <React.Fragment>
            {
                data && data.length
                    ?
                    <React.Fragment>
                        <Container maxWidth={{ md: 1280 }}>
                            <Container maxWidth={{ xs: 'none', sm: 'none', md: 1280 }} paddingX={false} centerX={false}>
                                <Box
                                    display={'flex'}
                                    flexDirection={smUp ? 'row' : 'column'}
                                    alignItems={smUp ? 'center' : 'flex-start'}
                                    justifyContent={smUp ? 'space-between' : 'flex-start'}>
                                    <div>
                                        <SectionTitleLabel color={'warning'} />
                                        <SectionTitle className={classes.title}>
                                            {t('google-workspace:Feature Articles')}
                                        </SectionTitle>
                                    </div>
                                    <NavLink hrefPath={`/resources/category/blog/${categoryId}`}
                                        classNames={clsx(classes.link, linkClasses.iconLink)}>
                                        <IconLaunch />
                                    </NavLink>
                                </Box>
                            </Container>
                        </Container>
                        <RelatedPost parentPage={'blog'}
                            postData={data}
                            title={'Related Articles'} />
                    </React.Fragment>
                    : null
            }
        </React.Fragment>
    )
}

export default RelatedSection
