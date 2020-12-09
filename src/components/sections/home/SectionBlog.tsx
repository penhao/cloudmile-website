import React from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "../../containers/Container";
import GridItem480 from "../items/GridItem480";
import GridItemFlexible from "../items/GridItemFlexible";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import IconLaunch from "../../icons/IconLaunch";
import NavLink from "../../links/NavLink";
import InsightSliderItem from "../../sliders/items/InsightSliderItem";
// import VariableWidthSlider from "../../sliders/VariableWidthSlider";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useTranslation from "next-translate/useTranslation";
import VariableWidthSlider from "../../sliders/VariableWidthSlider";
import {useLinkStyles} from "../../links/LinkStyles";

interface Props {
    sliderData: any[] | null;
}

const useStyles = makeStyles(() => ({
    linkWrapper: {
        textAlign: 'right',
        marginTop: '20px'
    }
}));
const SectionBlog = ({sliderData}: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const {t} = useTranslation();
    const theme = useTheme();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={mdUp ? 4 : smUp ? 2 : 4} wrap={mdUp ? 'nowrap' : 'wrap'}>
                    <GridItem480>
                        <Container maxWidth={{xs: 'none', sm: 440, md: 440}} paddingX={false} centerX={false}>
                            <SectionTitleLabel color={'warning'}>
                                {t('home:Technical Insights')}
                            </SectionTitleLabel>
                            <SectionTitle>
                                {t('home:Stay up-to-date with cloud and AI trends')}
                            </SectionTitle>
                            <div className={classes.linkWrapper}>
                                <NavLink hrefPath={'/resources/blog'} classNames={linkClasses.iconLink}>
                                    <IconLaunch/>
                                </NavLink>
                            </div>
                        </Container>
                    </GridItem480>
                    <GridItemFlexible>
                        <VariableWidthSlider changePoint={theme.breakpoints.values.sm}>
                            {
                                (sliderData && sliderData.length)
                                    ?
                                    sliderData.map((item: any, index: number) => {
                                        return (
                                            <InsightSliderItem
                                                imgUrl={{desktop: item.image_pc, mobile: item.image_mobile}}
                                                alt={''}
                                                href={`/resources/blog/${item.id}`}
                                                desc={item.title}
                                                key={index}/>
                                        )
                                    })
                                    : null
                            }
                        </VariableWidthSlider>
                    </GridItemFlexible>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default SectionBlog;
