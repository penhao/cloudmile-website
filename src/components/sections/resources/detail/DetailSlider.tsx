import React, {Fragment, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import IconArrow from "../../../icons/IconArrow";
import Slider from "react-slick";
import RatioContainer from "../../../containers/RatioContainer";
import Container from "../../../containers/Container";
import BackgroundImage from "../../../Images/BackgroundImage";
import Typography from "@material-ui/core/Typography";
import ShiftContainer from "../../../containers/ShiftContainer";

interface Props {
    imageList: any[];
}
const useStyles = makeStyles((theme: Theme) => ({
    sliderContainer: {
        marginBottom: '40px',
    },
    sliderItem: {
        backgroundColor: theme.palette.grey["100"]
    },
    prevButton: {
        right: '60px',
    },
    nextButton: {
        right: 0
    },
    controlButton: {
        position: 'absolute',
        width: '60px',
        minWidth: 'auto',
        height: '60px',
        padding: 0,
        bottom: '5px',
        borderRadius: 0,
        backgroundColor: theme.palette.common.black,
        zIndex: 1,
        '&:hover': {
            backgroundColor: theme.palette.common.black
        },
        '& .MuiTouchRipple-child': {
            backgroundColor: theme.palette.common.white
        }
    },
    desc: {
        color: theme.palette.grey['800'],
        padding: '0 20px',
        marginTop: '10px',
        [theme.breakpoints.up('sm')]: {
            padding: 0
        }
    }
}));
const DetailSlider = ({imageList}: Props) => {

    const classes = useStyles();
    const [sliderIndex, setSliderIndex] = useState(0);
    const PrevArrow = (props: any) => {
        const {onClick} = props;
        return (
            <Button onClick={onClick} className={clsx(classes.controlButton, classes.prevButton)}>
                <IconArrow color={"white"} isForward={false}/>
            </Button>
        );
    };
    const NextArrow = (props: any) => {
        const {onClick} = props;
        return (
            <Button onClick={onClick} className={clsx(classes.controlButton, classes.nextButton)}>
                <IconArrow color={"white"} isForward={true}/>
            </Button>
        );
    };

    const getSlider = () => {
        const settings = {
            dots: false,
            infinite: true,
            arrows: (imageList && imageList.length > 1),
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevArrow/>,
            nextArrow: <NextArrow/>,
            beforeChange: (_current: number, next: number) => {
                setSliderIndex(next);
            }
        };
        return (
            <Slider {...settings}>
                {
                    imageList.map((image: any, index: number) => {
                        return (
                            <div key={index} className={classes.sliderItem}>
                                <RatioContainer ratio={{xs: 390 / 758, sm: 390 / 758, md: 390 / 758}}>
                                    <BackgroundImage imgUrl={image.image_url}
                                                     alt={image.image_alt}
                                                     title={image.image_title}
                                                     detectRetina={false}
                                                     backgroundSize={"contain"}
                                                     backgroundPosition={'left top'}/>
                                </RatioContainer>
                            </div>
                        )
                    })
                }
            </Slider>
        );
    };
    const getImageDesc = () => {
        const currentItem = imageList.find((_item: any, index: number) => {
            return index === sliderIndex;
        });
        return (
            <Typography variant={"caption"} component={'div'} className={classes.desc}>
                {currentItem.image_memo}
            </Typography>
        )
    };

    return (
        <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}}>
            <Container maxWidth={{xs: 'none', sm: 740, md: 760}} paddingX={false} centerX={false} className={classes.sliderContainer}>
                <ShiftContainer shiftX={{xs: -20, sm: 0, md: 0}} growX={{xs: 40, sm: 20, md: 0}}>
                    {
                        (imageList && imageList.length)
                            ?
                            <Fragment>
                                {
                                    getSlider()
                                }
                                {
                                    getImageDesc()
                                }
                            </Fragment>
                            :
                            null
                    }
                </ShiftContainer>
            </Container>
        </Container>
    );
};
export default DetailSlider;
