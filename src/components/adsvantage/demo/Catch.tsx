import React, { useEffect, useRef, useState } from 'react';
import { Box, Theme, Grid, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import RetinaImage from "react-retina-image";
import Container from "../../containers/Container";
import { Picture } from 'react-responsive-picture';
import { useTranslation } from 'next-translate';

interface IStyleProps {
    lang: string
}
const useStyles = makeStyles((theme: Theme) => ({
    titleCon: {
        position: 'relative',
        marginBottom: '48px',
        zIndex: 1,
        '& $title': {
            marginBottom: '20px',
            '&:last-child': {
                marginBottom: 0,
            }
        }
    },
    catch: {
        position: 'relative',
        width: '100%',
    },
    catchRight: {
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            width: '477px'
        },
        [theme.breakpoints.up('md')]: {
            width: '739px'
        }
    },
}));
const Catch = () => {
    const rangeRef = useRef(null);
    const { lang } = useTranslation();
    const classes = useStyles({ lang });
    const [percent] = useState(50);
    const [duration, setDuration] = useState(0);
    const ease = useTheme().transitions.easing.easeOut;
    useEffect(() => {
        setDuration(window.innerHeight * 2);
    }, []);
    return (
        <Container maxWidth={{ sm: 1024, md: 1280 }} paddingX={false}>
            <div id="trigger" ref={rangeRef} className={classes.titleCon}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller>
                            <Scene duration={duration} triggerElement="#trigger" triggerHook={1} offset={0}>
                                {(progress) => (
                                    <Tween from={{
                                        xPercent: -1 * percent,
                                        ease: 'Circ.easeOutExpo',
                                    }} to={{
                                        xPercent: percent,
                                        ease: 'Circ.easeOutExpo',
                                    }} totalProgress={progress}
                                        paused>
                                        <Box display={'flex'} justifyContent={'flex-start'}>
                                            <Picture
                                                sources={[
                                                    {
                                                        srcSet: lang === 'en' ? "/images/xs/adsvantage/demo/catch-1-en.png, /images/xs/adsvantage/demo/catch-1-en@2x.png 2x" : "/images/xs/adsvantage/demo/catch-1-zh.png, /images/xs/adsvantage/demo/catch-1-zh@2x.png 2x",
                                                        media: `(max-width: 639px)`,
                                                    },
                                                    {
                                                        srcSet: lang === 'en' ? "/images/sm/adsvantage/demo/catch-1-en.png, /images/sm/adsvantage/demo/catch-1-en@2x.png 2x" : "/images/sm/adsvantage/demo/catch-1-zh.png, /images/sm/adsvantage/demo/catch-1-zh@2x.png 2x",
                                                        media: `(max-width: 1199px)`,
                                                    },
                                                    {
                                                        srcSet: lang === 'en' ? "/images/md/adsvantage/demo/catch-1-en.png, /images/md/adsvantage/demo/catch-1-en@2x.png 2x" : "/images/md/adsvantage/demo/catch-1-zh.png, /images/md/adsvantage/demo/catch-1-zh@2x.png 2x",
                                                    }
                                                ]}
                                                className={classes.catch}
                                            />
                                        </Box>
                                    </Tween>
                                )}
                            </Scene>
                        </Controller>
                    </Grid>
                    <Grid item xs={12}>
                        <Controller>
                            <Scene duration={duration} triggerElement="#trigger" triggerHook={1} offset={0}>
                                {(progress) => (
                                    <Tween from={{ xPercent: percent }} to={{ xPercent: -1 * percent }}
                                        totalProgress={progress}
                                        paused>
                                        <Box display={'flex'} justifyContent={'flex-end'}>
                                            <Picture
                                                sources={[
                                                    {
                                                        srcSet: lang === 'en' ? "/images/xs/adsvantage/demo/catch-2-en.png, /images/xs/adsvantage/demo/catch-2-en@2x.png 2x" : "/images/xs/adsvantage/demo/catch-2-zh.png, /images/xs/adsvantage/demo/catch-2-zh@2x.png 2x",
                                                        media: `(max-width: 639px)`,
                                                    },
                                                    {
                                                        srcSet: lang === 'en' ? "/images/sm/adsvantage/demo/catch-2-en.png, /images/sm/adsvantage/demo/catch-2-en@2x.png 2x" : "/images/sm/adsvantage/demo/catch-2-zh.png, /images/sm/adsvantage/demo/catch-2-zh@2x.png 2x",
                                                        media: `(max-width: 1199px)`,
                                                    },
                                                    {
                                                        srcSet: lang === 'en' ? "/images/md/adsvantage/demo/catch-2-en.png, /images/md/adsvantage/demo/catch-2-en@2x.png 2x" : "/images/md/adsvantage/demo/catch-2-zh.png, /images/md/adsvantage/demo/catch-2-zh@2x.png 2x",
                                                    }
                                                ]}
                                                className={classes.catch}
                                            />
                                        </Box>
                                    </Tween>
                                )}
                            </Scene>
                        </Controller>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};
export default Catch;
