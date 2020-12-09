import React from 'react';
import SectionContainer from "../../containers/SectionContainer";
import Grid from "@material-ui/core/Grid";
import ShiftContainer from "../../containers/ShiftContainer";
import Container from "../../containers/Container";
import RatioContainer from "../../containers/RatioContainer";
import ResponseImage from "../../Images/ResponseImage";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import SectionTitleLabel from "../SectionTitleLabel";
import SectionTitle from "../SectionTitle";
import Hidden from "@material-ui/core/Hidden";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme: Theme) => ({
    coverWrapper: {
        [theme.breakpoints.up('sm')]: {
            width: '2000px',
            height: '600px',
            left: '50%',
            transform: 'translateX(-55%)',
            overflow: 'hidden'
        },
        [theme.breakpoints.up('md')]: {
            width: '1920px',
            height: 'auto',
            left: '50%',
            transform: 'translateX(-50%)',
        }
    },
    cover: {
        [theme.breakpoints.only('sm')]: {
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)'
        }
    },
    content: {
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            top: '56px'
        },
        [theme.breakpoints.up('md')]: {
            top: '142px',
        }
    },
    list: {
        marginTop: '40px',
        '& li': {
            position: 'relative',
            fontSize: '18px',
            lineHeight: 1.5,
            color: theme.palette.common.black,
            paddingLeft: '24px',
            marginBottom: '20px',
            '&:last-child': {
                marginBottom: 0
            },
            '&::before': {
                display: 'block',
                content: '"●"',
                position: 'absolute',
                fontSize: '12px',
                left: 0,
                top: '7px',
                color: theme.palette.primary.main
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: '20px',
                color: theme.palette.common.white,
            }
        }
    }
}));
const CloudMilers = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <SectionContainer>
            <Hidden xsDown>
                <Container paddingX={false} className={classes.coverWrapper}>
                    <RatioContainer ratio={{xs: (200 / 320), sm: (473 / 1200), md: (420 / 1100)}}
                                    customClass={classes.cover}>
                        <ResponseImage imageUrl={'/career/what-cloudmilers-do.jpg'}
                                       alt={t('career:alt.A close office view')}/>
                    </RatioContainer>
                </Container>
            </Hidden>
            <Container className={classes.content}>
                <Grid container spacing={4}>
                    <Hidden smDown>
                        <Grid item xs={12} md={6}/>
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <ShiftContainer shiftX={{md: -160}} growX={{md: 160}}>
                            <Container maxWidth={{xs: 'none', sm: 600, md: 'none'}} paddingX={false}>
                                <SectionTitleLabel color={'warning'}/>
                                <SectionTitle>
                                    {t('career:What CloudMilers do')}
                                </SectionTitle>
                                <ul className={classes.list}>
                                    <li>{t('career:Agile Team Work')}</li>
                                    <li>{t('career:Always learn from each other')}</li>
                                    <li>{t('career:Work hard, party harder')}</li>
                                    <li>{t('career:Enjoy unlimited coffee, tea and other drinks as well as snacks')}</li>
                                    <li>{t('career:Believe in Honesty, Accountability and Trust')}</li>
                                    <li>{t('career:Strive for the Best')}</li>
                                </ul>
                            </Container>
                        </ShiftContainer>
                    </Grid>
                </Grid>
            </Container>
        </SectionContainer>
    );
};

export default CloudMilers;
