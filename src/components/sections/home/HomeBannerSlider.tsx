import React, {Fragment} from 'react';
import SliderImage from "../../Images/SliderImage";
import NavLink from "../../links/NavLink";
import BannerSlider from "../../sliders/BannerSlider";
import RatioContainer from "../../containers/RatioContainer";

interface Props {
    sliderData: any[];
}

const HomeBannerSlider = ({sliderData}: Props) => {
    return (
        <Fragment>
            {
                <BannerSlider sliderTotal={sliderData.length}
                              paginationDistance={true}
                >
                    {
                        sliderData.length
                            ?
                            sliderData.map((data: any, index: number) => {
                                return (
                                    <div key={index}>
                                        <RatioContainer ratio={{xs: 1200 / 1280, sm: 1200 / 1280, md: 900 / 1920}}>
                                            <NavLink hrefPath={data.click_url}
                                                     isLaunch={true} fullWidth={true} fullHeight={true}>
                                                <SliderImage
                                                    imgUrl={{
                                                        desktop: data.image_pc,
                                                        mobile: data.image_mobile
                                                    }}
                                                    alt={data.title}
                                                    title={data.title}/>
                                            </NavLink>
                                        </RatioContainer>
                                    </div>
                                )
                            })
                            : null
                    }
                </BannerSlider>
            }
        </Fragment>
    );
};
export default HomeBannerSlider;
