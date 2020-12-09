import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import TrackVisibility from "react-on-screen";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";


interface IProps {
    isVisible?: boolean
    children?: React.ReactNode
}
const useStyles = makeStyles((theme: Theme) => ({
    journey: {
        '& li': {
            position: 'relative',
            '&::before': {
                position: 'absolute',
                display: 'block',
                content: '""',
                width: '18px',
                height: '18px',
                top: '3px',
                left: '2px',
                borderRadius: '99em',
                border: `4px solid ${theme.palette.grey["300"]}`,
                backgroundColor: theme.palette.error.main,
                opacity: 0,
                [theme.breakpoints.up('sm')]: {
                    top: '6px',
                },
                [theme.breakpoints.up('md')]: {
                    position: 'relative',
                    marginBottom: '10px',
                }
            },
            '&::after': {
                display: 'block',
                position: 'absolute',
                content: '""',
                width: '6px',
                height: 0,
                top: '30px',
                left: '8px',
                borderRadius: '99em',
                backgroundColor: theme.palette.grey["400"],
                marginBottom: '10px',
                opacity: 0,
                [theme.breakpoints.up('sm')]: {
                    top: '32px',
                    height: 0,
                },
                [theme.breakpoints.up('md')]: {
                    width: 0,
                    height: '6px',
                    top: '12px',
                    left: '32px',
                }
            },
            '&:last-child': {
                '&::after': {
                    content: 'none'
                },
                '& $journeyItem': {
                    paddingBottom: 0
                }
            }
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            transformOrigin: 'center top',
            transform: 'rotate(-45deg) translate(-40px, -76px)',
        }
    },
    journeyItem: {
        paddingLeft: '38px',
        paddingBottom: '60px',
        opacity: 0,
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '100px',
        },
        [theme.breakpoints.up('md')]: {
            width: '240px',
            transformOrigin: 'left top',
            transform: 'rotate(45deg)',
            paddingLeft: 0,
            paddingBottom: 0
        },
        '& h5': {
            marginBottom: '5px'
        }
    },
    active: {
        '& li': {
            '&::before': {
                opacity: 1
            },
            '&::after': {
                opacity: 1,
                width: '6px',
                height: 'calc(100% - 37px)',
                [theme.breakpoints.up('sm')]: {
                    width: '6px',
                    height: 'calc(100% - 34px)'
                },
                [theme.breakpoints.up('md')]: {
                    width: 'calc(100% - 42px)',
                    height: '6px'
                }
            },
            '& $journeyItem': {
                opacity: 1
            },
            '&:nth-child(1)': {
                '&::before': {
                    transition: `opacity 0.3s ease-out`
                },
                '&::after': {
                    transition: `all 0.5s ease-out`,
                    transitionDelay: '0.3s'
                },
                '& $journeyItem': {
                    transition: `opacity 0.3s ease-out`
                }
            },
            '&:nth-child(2)': {
                '&::before': {
                    transition: `opacity 0.3s ease-out`,
                    transitionDelay: '0.8s'
                },
                '&::after': {
                    transition: `all 0.5s ease-out`,
                    transitionDelay: '1.2s'
                },
                '& $journeyItem': {
                    transition: `opacity 0.3s ease-out`,
                    transitionDelay: '0.8s'
                }
            },
            '&:nth-child(3)': {
                '&::before': {
                    transition: `opacity 0.3s ease-out`,
                    transitionDelay: '1.6s'
                },
                '& $journeyItem': {
                    transition: `opacity 0.3s ease-out`,
                    transitionDelay: '1.6s'
                }
            }
        }
    },
}));
const TrackingChild = ({isVisible}: IProps) => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <ul className={clsx(classes.journey,(isVisible) ? classes.active : null)}>
            <li>
                <div className={classes.journeyItem}>
                    <Typography variant={"h5"}>
                        {t('home:IT Modernization')}
                    </Typography>
                    <Typography variant={"body1"}>
                        {t('home:Cloud Migration, Application Modernization__')}
                    </Typography>
                </div>
            </li>
            <li>
                <div className={classes.journeyItem}>
                    <Typography variant={"h5"}>
                        {t('home:Data-Driven Business')}
                    </Typography>
                    <Typography variant={"body1"}>
                        {t('home:Data Integration, Data Application__')}
                    </Typography>
                </div>
            </li>
            <li>
                <div className={classes.journeyItem}>
                    <Typography variant={"h5"}>
                        {t('home:AI for Business')}
                    </Typography>
                    <Typography variant={"body1"}>
                        {t('home:AI Services, Ainotam')}
                    </Typography>
                </div>
            </li>
        </ul>
    )
};
const JourneyList = () => {
    return (
        <TrackVisibility once={true}>
            <TrackingChild/>
        </TrackVisibility>
    );
};
export default JourneyList;
