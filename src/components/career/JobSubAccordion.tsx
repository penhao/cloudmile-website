import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Theme, makeStyles } from '@material-ui/core/styles';
import IconMinus from "../icons/IconMinus";
import IconPlus from "../icons/IconPlus";
import { isValueEmpty } from "../../utils/Utils";


interface Props {
    job: any
}

const useStyles = makeStyles((theme: Theme) => ({
    expansion: {
        width: '100%',
        margin: '0 !important',
        boxShadow: 'none !important',
        borderRadius: '0 !important',
        borderBottom: `1px solid ${theme.palette.grey["300"]}`
    },
    summary: {
        justifyContent: 'flex-start',
        minHeight: 'auto !important',
        padding: '8px 0',
        '& .MuiAccordionSummary-content': {
            margin: '0 !important',
            [theme.breakpoints.up('sm')]: {
                flex: '0 1 auto',
                padding: '0 20px'
            }
        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 0 20px 0',
        [theme.breakpoints.up('sm')]: {
            padding: '0 0 20px 20px',
        }
    },
    info: {
        marginBottom: '28px',
        '& ul': {
            '& li': {
                position: 'relative',
                paddingLeft: '20px',
                marginBottom: '3px',
                '&::before': {
                    display: 'block',
                    content: '"✦"',
                    position: 'absolute',
                    top: 0,
                    left: 0
                },
                '&:last-child': {
                    marginBottom: 0
                }
            }
        },
        '& h6': {
            fontWeight: 400,
            marginBottom: '20px'
        },
        '& a': {
            color: theme.palette.secondary.main,
            textDecoration: 'underline'
        }
    },
    subGroup: {
        marginBottom: '20px',
        '&:last-child': {
            marginBottom: 0
        }
    },
    subTitle: {
        marginBottom: '5px'
    }
}));
const JobSubAccordion = ({ job }: Props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState<boolean>(false);
    return (
        <Accordion expanded={expanded}
            onChange={() => setExpanded((expanded) => !expanded)}
            className={classes.expansion}>
            <AccordionSummary expandIcon={expanded ? <IconMinus /> : <IconPlus />}
                className={classes.summary}>
                <Typography variant={"body1"} color={"secondary"}>
                    {job.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                {
                    (job && !isValueEmpty(job.respons_text))
                        ?
                        <div className={classes.info}>
                            <Typography variant={"h6"}>Responsibilities</Typography>
                            <Typography variant={"body1"} component={'div'} dangerouslySetInnerHTML={{
                                __html: job.respons_text
                            }} />
                        </div>
                        :
                        null
                }
                {
                    (job)
                        ?
                        <div className={classes.info}>
                            <Typography variant={"h6"}>Qualifications</Typography>
                            {
                                (!isValueEmpty(job.quali_mini))
                                    ?
                                    <div className={classes.subGroup}>
                                        <Typography variant={"body1"} className={classes.subTitle}>
                                            Minimum Qualification
                                        </Typography>
                                        <Typography variant={"body1"} component={'div'} dangerouslySetInnerHTML={{
                                            __html: job.quali_mini
                                        }} />
                                    </div>
                                    : null
                            }
                            {
                                (!isValueEmpty(job.quali_prefer))
                                    ?
                                    <div className={classes.subGroup}>
                                        <Typography variant={"body1"} className={classes.subTitle}>
                                            Preferred Qualification
                                        </Typography>
                                        <Typography variant={"body1"} component={'div'} dangerouslySetInnerHTML={{
                                            __html: job.quali_prefer
                                        }} />
                                    </div>
                                    : null
                            }
                        </div>
                        :
                        null
                }
                {
                    (job && !isValueEmpty(job.notice))
                        ?
                        <div className={classes.info}>
                            <Typography variant={"h6"}>Note</Typography>
                            <Typography variant={"body1"} component={'div'} dangerouslySetInnerHTML={{
                                __html: job.notice
                            }} />
                        </div>
                        :
                        null
                }
            </AccordionDetails>
        </Accordion>
    );
};
export default JobSubAccordion;
