import React from 'react'
import Container from "../../components/containers/Container";
import SectionTitleLabel from "../../components/sections/SectionTitleLabel";
import SectionTitle from "../../components/sections/SectionTitle";
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import GlobalTheme from "../../mui/GlobalTheme";
import { useTranslation } from 'next-translate';
import RelatedPost from "../../components/sections/resources/RelatedPost";

interface Props {
    data: any
}
const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: '40px'
    }
}))
function RelatedSection({ data }: Props) {
    const classes = useStyles()
    const { t } = useTranslation()
    return (
        <React.Fragment>
            {
                data && data.length
                    ?
                    <React.Fragment>
                        <Container maxWidth={{ md: 1280 }}>
                            <Container maxWidth={{ xs: 'none', sm: 'none', md: 1280 }} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'primary'} />
                                <SectionTitle className={classes.title}>
                                    {t('adsvantage:Useful resources')}
                                </SectionTitle>
                            </Container>
                        </Container>
                        <ThemeProvider theme={GlobalTheme}>
                            <RelatedPost parentPage={'blog'}
                                postData={data}
                                title={'Related Articles'} />
                        </ThemeProvider>
                    </React.Fragment>
                    : null
            }
        </React.Fragment>
    )
}
export default RelatedSection
