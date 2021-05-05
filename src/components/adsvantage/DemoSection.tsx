import React, { useEffect, useState } from "react";
import Container from "../containers/Container";
import { makeStyles, Theme, Typography, Box, Hidden } from "@material-ui/core";
import Step1 from "./demo/Step1";
import Step2 from "./demo/Step2";
import Catch from "./demo/Catch";
import { useTranslation } from "next-translate";
import { useInView } from 'react-hook-inview';


interface Props {
    scrollChangeHadler: (target: string | null) => void;
}
const useStyles = makeStyles((theme: Theme) => ({
    section: {
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '65px'
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: '80px'
        }
    },
    stepCon: {
        position: 'relative',
        width: '100%',
    },
    stepPaper: {
        position: 'relative',
        width: '100%',
        minHeight: '700px',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 2px 14px 0 rgba(137, 174, 255, 0.2)',
        backgroundColor: '#f8fbff'
    },
    stepTitle: {
        fontSize: '26px',
        fontWeight: 600,
        lineHeight: 'normal',
        letterSpacing: 'normal',
        marginBottom: '20px'
    },
    titleCon: {
        padding: '0 40px',
        marginBottom: '48px',
        '& $title': {
            marginBottom: '20px',
            '&:last-child': {
                marginBottom: 0,
            }
        }
    },
    bgLeft: {
        position: 'absolute',
        width: '700px',
        left: '-430px',
        top: '-65px'
    },
    bgRight: {
        position: 'absolute',
        width: '436px',
        right: '-75px',
        bottom: '-75px',
    }
}));

const DemoSection = ({ scrollChangeHadler }: Props) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [ref, inView] = useInView(
        {
            onEnter: () => scrollChangeHadler('demo'),
            onLeave: () => scrollChangeHadler(null)
        },
    )
    const [step, setStep] = useState('Step1');
    const getStep = () => {
        switch (step) {
            case 'Step1':
                return <Step1 changeStepHandler={changeStep} />;
            case 'Step2':
                return <Step2 />;
            default:
                return <Step1 changeStepHandler={changeStep} />;
        }
    };
    const changeStep = (step: string) => {
        setStep(step);
    };
    useEffect(() => {
        changeStep('Step1');
    }, []);
    return (
        <section ref={ref} className={classes.section}>
            <Container maxWidth={{ md: 1280 }}>
                <Container maxWidth={{ md: 1024 }} paddingX={false}>
                    <Catch />
                    <Hidden smDown>
                        <div className={classes.stepCon}>
                            <img src="/images/md/adsvantage/demo/demo-bg-left.svg" alt="" className={classes.bgLeft} />
                            <img src="/images/md/adsvantage/demo/demo-bg-right.svg" alt="" className={classes.bgRight} />
                            <div className={classes.stepPaper}>
                                <Typography variant={"h5"} className={classes.stepTitle}>
                                    {t('adsvantage:AI Copy Generator')}
                                </Typography>
                                {getStep()}
                            </div>
                        </div>
                    </Hidden>
                </Container>
            </Container>
        </section>
    )
};
export default DemoSection;