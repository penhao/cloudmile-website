import React, { Fragment } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "../../../containers/Container";
import Box from "@material-ui/core/Box";
import IconArrow from "../../../icons/IconArrow";
import NavLink from "../../../links/NavLink";
import { isValueEmpty } from "../../../../utils/Utils";
import { useLinkStyles } from "../../../links/LinkStyles";

interface Props {
    title: string;
    subTitle: string;
    startDate: string;
    endDate: string;
    categoryData: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        // paddingTop: '40px',
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            // paddingTop: '60px',
            marginBottom: '60px',
        }
    },
    data: {
        marginBottom: '10px',
        '& svg': {
            width: '20px',
            margin: '0 15px',
            [theme.breakpoints.up('sm')]: {
                width: '28px',
            }
        }
    },
    title: {
        marginBottom: '10px',
    },
    caption: {
        marginBottom: '20px',
        color: theme.palette.warning.main
    },
    tagLabel: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 1.63,
        letterSpacing: 'normal',
        color: theme.palette.primary.main
    },
    tagList: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '20px',
        '& li': {
            display: 'flex',
            alignItems: 'center',
            '&::after': {
                display: 'block',
                content: '"/"',
                fontWeight: 600,
                color: theme.palette.primary.main,
                margin: '0 5px'
            },
            '&:last-child': {
                '&::after': {
                    content: 'none'
                }
            }
        },
        '& a': {
            color: theme.palette.primary.main,
            fontWeight: 600
        }
    },
}));
const EventDetailHead = ({ title, subTitle, startDate, endDate = '', categoryData = [] }: Props) => {
    const classes = useStyles();
    const linkClasses = useLinkStyles();
    return (
        <Container maxWidth={{ md: 1280 }} className={classes.container}>
            <Container maxWidth={{ md: 1080 }} paddingX={false} centerX={false}>
                <Box display={'flex'} flexWrap={'nowrap'} alignItems={'center'} className={classes.data}>
                    <Typography variant={'h6'} component={'div'}>
                        {startDate}
                    </Typography>
                    {
                        (!isValueEmpty(endDate))
                            ?
                            <Fragment>
                                <IconArrow color={'black'} isForward />
                                <Typography variant={'h6'} component={'div'}>
                                    {endDate}
                                </Typography>
                            </Fragment>
                            :
                            null
                    }
                </Box>
                <Typography variant={"h2"} component={"h1"} className={classes.title}>
                    {title}
                </Typography>
                <Typography variant={'h6'} className={classes.caption}>
                    {subTitle}
                </Typography>
                {
                    (categoryData?.length)
                        ?
                        <ul className={classes.tagList}>
                            {
                                categoryData.map((tag: any, index: number) => {
                                    return (
                                        <li key={index}>
                                            {
                                                index === 0
                                                    ? <span className={classes.tagLabel}>#</span>
                                                    : null
                                            }
                                            <NavLink hrefPath={`/resources/category/event/[id]`}
                                                asPath={`/resources/category/event/${tag.id}`}
                                                classNames={linkClasses.textLink}>
                                                {tag.title}
                                            </NavLink>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        :
                        null
                }
            </Container>
        </Container>
    );
};
export default EventDetailHead;
