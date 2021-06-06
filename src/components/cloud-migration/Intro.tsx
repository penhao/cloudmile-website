import React, { useEffect, useState } from 'react';
import SectionContainer from "../containers/SectionContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import useTranslation from "next-translate/useTranslation";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import SectionDescWrapper from "../sections/SectionDescWrapper";
import ShiftContainer from "../containers/ShiftContainer";
import Container from "../containers/Container";
import IconItem from "../sections/IconItem";
import Typography from "@material-ui/core/Typography";

const Intro = () => {
    const { t, lang } = useTranslation();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    const mdUp = useMediaQuery(useTheme().breakpoints.up('md'));
    const [list, setList] = useState<any[] | null>(null);
    useEffect(() => {
        setList([
            {
                icon: '/images/icons/product/vm-migration.svg',
                iconAlt: '',
                title: t('cloud-migration:Virtual Machine (VM) Migration'),
                desc: t('cloud-migration:We use the ‘lift & shift’ strategy to__')
            },
            {
                icon: '/images/icons/product/data-warehouse-migration.svg',
                iconAlt: '',
                title: t('cloud-migration:Data Warehouse Migration'),
                desc: t('cloud-migration:We also help you complete a successful__')
            }
        ]);
    }, [lang]);
    return (
        <SectionContainer>
            <Container>
                <Grid container spacing={smUp ? 4 : 2} alignItems={"flex-end"}>
                    <Hidden smDown>
                        <Grid item xs={12} md={6} />
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Container paddingX={false} centerX={false} maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                            <ShiftContainer shiftX={{ md: -160 }} growX={{ md: true }}>
                                <SectionDescWrapper>
                                    <Typography variant={"body1"} dangerouslySetInnerHTML={
                                        { __html: t('cloud-migration:Reduce the cost and risks associated with__') }
                                    } />
                                </SectionDescWrapper>
                            </ShiftContainer>
                        </Container>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={12} md={6} />
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Container paddingX={false} centerX={false} maxWidth={{ xs: 'none', sm: 'none', md: 600 }}>
                            <ShiftContainer shiftX={{ md: -320 }} growX={{ md: true }}>
                                <SectionDescWrapper>
                                    <Grid container spacing={4}>
                                        {
                                            (list && list.length) ?
                                                list.map((item: any, index: number) => {

                                                    return (
                                                        <Grid item xs={12} md={6} key={index}>
                                                            <IconItem icon={item.icon}
                                                                iconAlt={item.iconAlt}
                                                                title={item.title}
                                                                desc={item.desc}
                                                                color={"primary"} />
                                                        </Grid>
                                                    )
                                                })
                                                : null
                                        }
                                    </Grid>
                                </SectionDescWrapper>
                            </ShiftContainer>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default Intro;