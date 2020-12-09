import React, {useState} from 'react';
import useTheme from "@material-ui/core/styles/useTheme";
import SectionContainer from "../../containers/SectionContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "../../containers/Container";
import VariableWidthSlider from "../../sliders/VariableWidthSlider";
import CaseSliderItem from "../../sliders/items/CaseSliderItem";
import {Theme} from "@material-ui/core";

interface Props {
    list: any[] | null;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        padding: '40px 0'
    },
    info: {
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: 0
        }
    },
    wrapper: {
        marginTop: '40px',
        [theme.breakpoints.up('sm')]: {
            marginTop: 0
        }
    }
}));


const CaseCollection = ({list}: Props) => {
    const theme = useTheme();
    const classes = useStyles();
    const [sliderId, setSliderId] = useState(0);
    const handleChange = (id: number) => {
        setSliderId(id);
    };
    const getSlider = () => {
        return (list && list.length)
            ?
            <VariableWidthSlider changePoint={theme.breakpoints.values.md} changeHandler={handleChange}>
                {
                    list.map((item: any, index: number) => {
                        // image_icon image_icon_gif
                        return (
                            <div key={index}>
                                <CaseSliderItem itemData={item} active={index === sliderId}/>
                            </div>
                        );
                    })
                }
            </VariableWidthSlider>
            :
            null
    };

    return (
        <SectionContainer backgroundColor={theme.palette.grey["200"]}>
            <div className={classes.root}>
                <Container>
                    {
                        getSlider()
                    }
                </Container>
            </div>
        </SectionContainer>
    );
};

export default CaseCollection;
