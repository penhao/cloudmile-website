import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Theme, makeStyles } from '@material-ui/core/styles';
import IconMinus from "../icons/IconMinus";
import IconPlus from "../icons/IconPlus";
import JobSubAccordion from "./JobSubAccordion";
import useTranslation from "next-translate/useTranslation";


interface Props {
    title: string;
    data: any[]
}

const useStyles = makeStyles((theme: Theme) => ({
    expansion: {
        width: '100%',
        margin: '0 !important',
        boxShadow: 'none !important',
        borderRadius: '0 !important'
    },
    summary: {
        justifyContent: 'flex-start',
        minHeight: 'auto !important',
        padding: '8px 0',
        borderBottom: `1px solid ${theme.palette.common.black}`,
        '& .MuiAccordionSummary-content': {
            margin: '0 !important',
            [theme.breakpoints.up('md')]: {
                flex: '0 1 auto'
            }
        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 0 20px 0'
    }
}));
const JobAccordion = ({ title, data }: Props) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState<boolean>(false);
    const [fixTitle, setFixTitle] = useState('');

    const getTitle = () => {
        if (title === 'sg') {
            return 'Singapore';
        } else if (title === 'hk') {
            return 'Hong Kong';
        } else if (title === 'tw') {
            return 'Taiwan';
        } else {
            return '';
        }
    };
    useEffect(() => {
        setFixTitle(getTitle());
    }, []);
    return (
        <Accordion expanded={expanded}
            onChange={() => setExpanded((expanded) => !expanded)}
            className={classes.expansion}>
            <AccordionSummary expandIcon={expanded ? <IconMinus /> : <IconPlus />}
                className={classes.summary}>
                <Typography variant={"h5"} color={"primary"}>
                    {t(`career:${fixTitle}`)}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                {
                    (data && data.length)
                        ?
                        data.map((job: any, index: number) => {
                            return (
                                <JobSubAccordion job={job} key={index} />
                            )
                        })
                        :
                        null
                }
            </AccordionDetails>
        </Accordion>
    );
};
export default JobAccordion;
