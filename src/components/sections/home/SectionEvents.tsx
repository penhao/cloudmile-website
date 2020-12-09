import React from 'react';
import Container from "../../containers/Container";
import SectionContainer from "../../containers/SectionContainer";
import Grid from "@material-ui/core/Grid";
import GridItem480 from "../items/GridItem480";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import NavLink from "../../links/NavLink";
import IconLaunch from "../../icons/IconLaunch";
import makeStyles from "@material-ui/core/styles/makeStyles";
// import NormalSlider from "../../sliders/NormalSlider";
// import {IEventItem} from "../../../api/useEventList";
import EventSliderItem from "../../sliders/items/EventSliderItem";
import useTranslation from "next-translate/useTranslation";
import BannerSlider from "../../sliders/BannerSlider";
import {useLinkStyles} from "../../links/LinkStyles";

interface Props {
    sliderData: any[]
}

const useStyles = makeStyles(() => ({
    sliderContainer: {},
    item: {
        padding: '0 20px'
    },
    linkWrapper: {
        textAlign: 'right',
        marginTop: '20px'
    }
}));
const SectionEvents = ({sliderData}: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    const {t} = useTranslation();
    return (
        <SectionContainer>
            <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} container spacing={4}>
                        <GridItem480>
                            <Container maxWidth={{xs: 'none', sm: 440, md: 440}} paddingX={false} centerX={false}>
                                <SectionTitleLabel color={'warning'}>
                                    {t('home:CloudMile Event')}
                                </SectionTitleLabel>
                                <SectionTitle>
                                    {t('home:Read the Latest CloudMile News & Events')}
                                </SectionTitle>
                                <div className={classes.linkWrapper}>
                                    <NavLink hrefPath={''} classNames={linkClasses.iconLink}>
                                        <IconLaunch/>
                                    </NavLink>
                                </div>
                            </Container>
                        </GridItem480>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.sliderContainer}>
                            {
                                sliderData.length
                                    ?
                                    <BannerSlider sliderTotal={sliderData.length} itemDistance={20}>
                                        {
                                            sliderData.map((data: any, index: number) => {
                                                console.log(data);
                                                return (
                                                    <div key={index}>
                                                        <EventSliderItem itemData={data}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </BannerSlider>
                                    :
                                    null
                            }
                            {/*<NormalSlider itemPadding={20}>
                                {
                                    (list && list.length)
                                        ?
                                        list.map((item: IEventItem, index: number) => {
                                            return (
                                                <div className={classes.item} key={index}>
                                                    <EventSliderItem itemData={item}/>
                                                </div>
                                            )
                                        })
                                        :
                                        null
                                }
                            </NormalSlider>*/}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default SectionEvents;
