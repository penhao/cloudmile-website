import React, {useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {Theme, makeStyles} from '@material-ui/core/styles';
import Container from "../../containers/Container";
import IconMinus from "../../icons/IconMinus";
import IconPlus from "../../icons/IconPlus";

interface Props {
    title: string
    desc: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: '100%',
        marginBottom: '40px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '160px',
        },
    },
    expansion: {
        width: '100%',
        margin: '0 !important',
        boxShadow: 'none !important',
        backgroundColor: theme.palette.grey["100"],
        borderRadius: '0 !important'
    },
    summary: {
        justifyContent: 'flex-start',
        minHeight: 'auto !important',
        padding: '20px',
        '& .MuiAccordionSummary-content': {
            margin: '0 !important'
        },
        [theme.breakpoints.up('sm')]: {
            padding: '20px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '20px 50px',
        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 20px 20px 20px',
        [theme.breakpoints.up('md')]: {
            padding: '0 50px 30px 50px',
        }
    },
    desc: {
        '& h1,h2,h3,h4,h5,h6': {
            fontSize: theme.typography.pxToRem(15),
            lineHeight: 1.33,
            letterSpacing: 'normal',
            marginBottom: '20px',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(20)
            }
        },
        '& p': {
            fontSize: theme.typography.pxToRem(14),
            lineHeight: 1.63,
            letterSpacing: 'normal',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(16)
            }
        },
        '& a': {
            color: theme.palette.secondary.main,
            textDecoration: 'underline'
        },
        '& ul': {
            listStyleType: 'unset',
        },
        '& ol': {
            listStyleType: 'decimal',
        },
        '& ol,ul': {
            listStylePosition: 'outside',
            paddingLeft: '20px',
            [theme.breakpoints.up('sm')]: {
                paddingLeft: '20px',
            },
            '& li': {
                fontSize: theme.typography.pxToRem(14),
                lineHeight: 1.63,
                letterSpacing: 'normal',
                marginBottom: '5px',
                '&:last-child': {
                    marginBottom: 0,
                },
                [theme.breakpoints.up('sm')]: {
                    fontSize: theme.typography.pxToRem(16)
                },
                '& strong': {
                    fontWeight: 700
                }
            }
        },
    }
}));
const DetailExpansion = ({title, desc}: Props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState<boolean>(false);
    return (
        <Container maxWidth={{md: 1280}}>
            <Container maxWidth={{sm: 920, md: 920}} paddingX={false} centerX={false}>
                <div className={classes.container}>
                    <Accordion expanded={expanded}
                               onChange={() => setExpanded((expanded) => !expanded)}
                               className={classes.expansion}>
                        <AccordionSummary expandIcon={expanded ? <IconMinus/> : <IconPlus/>}
                                          className={classes.summary}>
                            <Typography variant={"h5"} color={"primary"}>
                                {title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.details}>
                            <div dangerouslySetInnerHTML={{__html: desc}} className={classes.desc}/>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container>
        </Container>
    );
};
export default DetailExpansion;
