import React, { useEffect, useRef, useState } from 'react';
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../../containers/SectionContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "../../containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import CaseSliderItem from "../../sliders/items/CaseSliderItem";
import { Theme } from "@material-ui/core";
import VariableWidthSlider from "../../sliders/VariableWidthSlider";

interface Props {
    label?: string;
    title?: string;
    sliderData: any[];
    onlySlider?: boolean;
}

interface StyleProps {
    onlySlider: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    sectionInner: {
        width: '100%',
        paddingTop: ({ onlySlider }: StyleProps) => onlySlider ? '40px' : '40px',
        paddingBottom: ({ onlySlider }: StyleProps) => onlySlider ? '20px' : '40px',
    },
    sectionInfo: {
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: 0
        }
    },
    sliderContainer: {
        marginTop: 0,
        [theme.breakpoints.up('sm')]: {
            marginTop: ({ onlySlider }: StyleProps) => onlySlider ? 0 : '-40px'
        }
    }
}));
const SectionCases = ({ title, label, sliderData, onlySlider = false }: Props) => {
    const theme = useTheme();
    const classes = useStyles({ onlySlider });
    const [sliderId, setSliderId] = useState(0);
    const [postData, setPostData] = useState([]);
    const handleChange = (id: number) => {
        setSliderId(id);
    };
    useEffect(() => {
        setPostData(sliderData);
    }, [sliderData]);
    return (
        <SectionContainer backgroundColor={theme.palette.grey["200"]}>
            <Container className={classes.sectionInner}>
                <Grid container spacing={4} className={classes.sectionInfo}>
                    {
                        !onlySlider
                            ?
                            <Grid item xs={12} md={6}>
                                <Container maxWidth={{ xs: 'none', sm: 600, md: 600 }} paddingX={false} centerX={false}>
                                    <SectionTitleLabel color={'warning'}>
                                        {label}
                                    </SectionTitleLabel>
                                    <SectionTitle>
                                        {title}
                                    </SectionTitle>
                                </Container>
                            </Grid>
                            :
                            null
                    }
                    {
                        (postData && postData.length)
                            ?
                            <Grid item xs={12}>
                                <div className={classes.sliderContainer}>
                                    <VariableWidthSlider changePoint={theme.breakpoints.values.md}
                                        changeHandler={handleChange}>
                                        {
                                            postData.map((item: any, index: number) => {
                                                return (
                                                    <div key={index}>
                                                        <CaseSliderItem itemData={item} active={index === sliderId} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </VariableWidthSlider>
                                </div>
                            </Grid>
                            :
                            null
                    }
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default SectionCases;
