import React from "react";
import { Theme, makeStyles, Typography, Box, Button, Link } from "@material-ui/core";
import Container from "../containers/Container";
import { useTranslation } from "next-translate";

interface StyleProps {
    lang: string
}

const useStyles = makeStyles((theme: Theme) => ({
    banner: {
        position: 'relative',
        width: '100%',
        height: '360px',
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            height: '550px',
            marginBottom: '50px'
        },
        [theme.breakpoints.up('md')]: {
            height: '600px',
            marginBottom: '55px'
        }
    },
    graphic: {
        position: 'absolute',
        width: '900px',
        left: '50%',
        bottom: 0,
        transform: 'translateX(-58%)',
        [theme.breakpoints.up('sm')]: {
            width: '1220px',
            transform: 'translateX(-55%)',
        },
        [theme.breakpoints.up('md')]: {
            width: '1280px',
            transform: 'translateX(-50%)',
        }
    },
    info: {
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        transform: `translate(-50%,-55%)`,
        color: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {
            transform: `translate(-50%,-60%)`,
        },
        [theme.breakpoints.up('md')]: {
            transform: `translate(-50%,-65%)`,
        },
    },
    logo: {
        width: '100%',
        marginBottom: '15px',
        '& > img': {
            width: '100%',
            maxWidth: '148px',
            [theme.breakpoints.up('sm')]: {
                maxWidth: '208px',
            },
        }
    },
    caption: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: ({ lang }: StyleProps) => lang === 'en' ? '1px' : '5.74px',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        [theme.breakpoints.up('sm')]: {
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: ({ lang }: StyleProps) => lang === 'en' ? '1px' : '8.2px',
            marginLeft: ({ lang }: StyleProps) => lang === 'en' ? 0 : '9.2px'
        },
    },
    title: {
        fontSize: '28px',
        lineHeight: ({ lang }: StyleProps) => lang === 'en' ? 1 : 'normal',
        fontWeight: ({ lang }: StyleProps) => lang === 'en' ? 700 : 'normal',
        letterSpacing: '1.17px',
        marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '56px',
            letterSpacing: '2.33px',
            marginBottom: '30px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '72px',
            letterSpacing: '3px',
        }
    },
    cta: {
        minWidth: '180px',
        backgroundColor: theme.palette.grey["100"],
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: 'normal',
        padding: '15px 20px',
        borderRadius: '99em',
        marginBottom: '20px',
        whiteSpace: 'nowrap',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '30px'
        }
    },
    link: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: theme.palette.secondary.main,
        transform: 'translateX(6px)'
    }
}));
const Banner = React.memo(() => {
    const { t, lang } = useTranslation();
    const classes = useStyles({ lang });
    return (
        <Container maxWidth={{ md: 1280 }}>
            <div className={classes.banner}>
                <img src="/images/md/adsvantage/banner-bg.svg" alt="" className={classes.graphic} />
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} className={classes.info}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} className={classes.logo}>
                        <img src="/images/md/adsvantage/adsvantage-logo.svg" alt="" />
                        <div className={classes.caption}>
                            {t('adsvantage:AI-driven Advertising Platform')}
                        </div>
                    </Box>
                    <Typography variant={'h1'} align={'center'} className={classes.title} >
                        <span dangerouslySetInnerHTML={
                            { __html: t('adsvantage:Empower Advertising with AI') }
                        } />
                    </Typography>
                    <Button href={'https://adsvantage.ainotam.com/authorization/signup?plan=standard'}
                        target={'_blank'}
                        variant={"contained"}
                        className={classes.cta}
                    >
                        {t('adsvantage:Start Your Free Trial')}
                    </Button>
                    <Link href="https://adsvantage.ainotam.com/authorization/login"
                        target={'_blank'}
                        className={classes.link}>
                        {t('adsvantage:login/sign up')}&nbsp;&gt;
                    </Link>
                </Box>
            </div>
        </Container>
    )
});
export default Banner;