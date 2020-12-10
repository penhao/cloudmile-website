import React, {useEffect, useState} from 'react';
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
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        setEventList(sliderData);
    }, [sliderData]);
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
                                    <NavLink hrefPath={'/resources/event'} classNames={linkClasses.iconLink}>
                                        <IconLaunch/>
                                    </NavLink>
                                </div>
                            </Container>
                        </GridItem480>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.sliderContainer}>
                            {
                                eventList.length
                                    ?
                                    <BannerSlider sliderTotal={eventList.length} itemDistance={20}>
                                        {
                                            eventList.map((data: any, index: number) => {
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
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default SectionEvents;
