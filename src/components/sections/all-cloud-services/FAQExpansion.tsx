import React, {Fragment, useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import IconPlus from "../../icons/IconPlus";
import IconMinus from "../../icons/IconMinus";
import useTranslation from "next-translate/useTranslation";


const useStyles = makeStyles((theme: Theme) => ({
    panel: {
        margin: '0 !important',
        boxShadow: 'none !important'
    },
    panelSummary: {
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
    panelDetail: {
        flexDirection: 'column',
        padding: 0
    },
    subPanel: {
        width: '100%',
        margin: '0 !important',
        borderBottom: `1px solid ${theme.palette.grey["300"]}`,
        boxShadow: 'none !important'
    },
    subPanelSummary: {
        justifyContent: 'flex-start',
        minHeight: 'auto !important',
        padding: '8px 0',
        '& .MuiAccordionSummary-content': {
            margin: '0 !important',
            [theme.breakpoints.up('md')]: {
                flex: '0 1 auto'
            }
        },
        '& h6': {
            fontWeight: 400
        },
        [theme.breakpoints.up('sm')]: {
            padding: '8px 0 8px 20px',
        }
    },
    subPanelDetail: {
        padding: '8px 0 30px 0',
        [theme.breakpoints.up('sm')]: {
            padding: '8px 0 30px 20px',
        },
        '& a': {
            color: theme.palette.secondary.main,
            textDecoration: 'underline'
        },
        '& ul': {
            '& li': {
                display: 'block',
                position: 'relative',
                paddingLeft: '20px',
                '&::before': {
                    display: 'block',
                    position: 'absolute',
                    content: '"✦"',
                    top: 0,
                    left: 0
                }
            }
        }
    }
}));
const FAQExpansion = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const [commonSubExpanded, setCommonSubExpanded] = useState<string | false>('panel1');
    const [accountSubExpanded, setAccountSubExpanded] = useState<string | false>('panel1');
    const [trialSubExpanded, setTrialSubExpanded] = useState<string | false>('panel1');
    const handleChange = (panel: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleSubChange = (group: string, panel: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        switch (group) {
            case 'Common':
                setCommonSubExpanded(isExpanded ? panel : false);
            case 'Account':
                setAccountSubExpanded(isExpanded ? panel : false);
            case 'Trial':
                setTrialSubExpanded(isExpanded ? panel : false);
            default:
                return;
        }
    };
    return (
        <Fragment>
            {/* Common Questions */}
            <Accordion expanded={expanded === 'panel1'}
                       onChange={handleChange('panel1')}
                       className={classes.panel}>

                <AccordionSummary expandIcon={expanded === 'panel1' ? <IconMinus/> : <IconPlus/>}
                                  className={classes.panelSummary}>
                    <Typography variant={"h5"} color={"primary"}>
                        {t('faq:Common Questions')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.panelDetail}>

                    {/*1*/}
                    <Accordion expanded={commonSubExpanded === 'panel1'}
                               onChange={handleSubChange('Common', 'panel1')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={commonSubExpanded === 'panel1' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} component={'h6'} color={"secondary"}>
                                {t('faq:We are already using GCP__')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'}>
                                {t('faq:Of course you can still collaborate with__')}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/*2*/}
                    <Accordion expanded={commonSubExpanded === 'panel2'}
                               onChange={handleSubChange('Common', 'panel2')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={commonSubExpanded === 'panel2' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} component={'h6'} color={"secondary"}>
                                {t('faq:What are the differences to__')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'}>
                                {t('faq:For CloudMile’s service regions__')}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/*3*/}
                    <Accordion expanded={commonSubExpanded === 'panel3'}
                               onChange={handleSubChange('Common', 'panel3')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={commonSubExpanded === 'panel3' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} component={'h6'} color={"secondary"}>
                                {t('faq:What regions do CloudMile’s services cover?')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'}>
                                {t('faq:CloudMile’s services cover regions including__')}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/*4*/}
                    <Accordion expanded={commonSubExpanded === 'panel4'}
                               onChange={handleSubChange('Common', 'panel4')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={commonSubExpanded === 'panel4' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} component={'h6'} color={"secondary"}>
                                {t('faq:What is the process of collaborating with CloudMile?')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'} dangerouslySetInnerHTML={
                                {__html: t('faq:Please contact CloudMile at__')}
                            }/>
                        </AccordionDetails>
                    </Accordion>

                </AccordionDetails>
            </Accordion>
            {/* Billing Account Questions */}
            <Accordion expanded={expanded === 'panel2'}
                       onChange={handleChange('panel2')}
                       className={classes.panel}>
                <AccordionSummary expandIcon={expanded === 'panel2' ? <IconMinus/> : <IconPlus/>}
                                  className={classes.panelSummary}>
                    <Typography variant={"h5"} color={"primary"}>
                        {t('faq:Billing Account Questions')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.panelDetail}>

                    {/*1*/}
                    <Accordion expanded={accountSubExpanded === 'panel1'}
                               onChange={handleSubChange('Account', 'panel1')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={accountSubExpanded === 'panel1' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} color={"secondary"}>
                                {t('faq:What is a Billing Account?')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'} dangerouslySetInnerHTML={
                                {__html:t('faq:Billing Account is an account when you__')}
                            }/>
                        </AccordionDetails>
                    </Accordion>
                    {/*2*/}
                    <Accordion expanded={accountSubExpanded === 'panel2'}
                               onChange={handleSubChange('Account', 'panel2')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={accountSubExpanded === 'panel2' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} color={"secondary"}>
                                {t('faq:Will it affect my project files__')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'}>
                                {t('faq:Transferring your GCP Billing Account under__')}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/*3*/}
                    <Accordion expanded={accountSubExpanded === 'panel3'}
                               onChange={handleSubChange('Account', 'panel3')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={accountSubExpanded === 'panel3' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} color={"secondary"}>
                                {t('faq:According to our purchase procedure__')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'} dangerouslySetInnerHTML={
                                {__html:t('faq:CloudMile will provide a detailed quotation with__')}
                            }/>
                        </AccordionDetails>
                    </Accordion>


                </AccordionDetails>
            </Accordion>
            {/* Free Trial Questions */}
            <Accordion expanded={expanded === 'panel3'}
                       onChange={handleChange('panel3')}
                       className={classes.panel}>
                <AccordionSummary expandIcon={expanded === 'panel3' ? <IconMinus/> : <IconPlus/>}
                                  className={classes.panelSummary}>
                    <Typography variant={"h5"} color={"primary"}>
                        {t('faq:Free Trial Questions')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.panelDetail}>

                    {/*1*/}
                    <Accordion expanded={trialSubExpanded === 'panel1'}
                               onChange={handleSubChange('Trial', 'panel1')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={trialSubExpanded === 'panel1' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} color={"secondary"}>
                                {t('faq:How can we register for GCP Free Trial?')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'} dangerouslySetInnerHTML={{
                                __html:t('faq:You can register GCP for free here__')
                            }}/>
                        </AccordionDetails>
                    </Accordion>
                    {/*2*/}
                    <Accordion expanded={trialSubExpanded === 'panel2'}
                               onChange={handleSubChange('Trial', 'panel2')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={trialSubExpanded === 'panel2' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} color={"secondary"}>
                                {t('faq:Does GCP offer free credits?')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'} dangerouslySetInnerHTML={{
                                __html:t('faq:GCP offers USD300 free credit to__')
                            }}/>
                            {/*<Typography variant={"body1"} component={'p'}>
                                {t('faq:GCP offers USD300 free credit to__')}
                            </Typography>*/}
                        </AccordionDetails>
                    </Accordion>
                    {/*3*/}
                    <Accordion expanded={trialSubExpanded === 'panel3'}
                               onChange={handleSubChange('Trial', 'panel3')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={trialSubExpanded === 'panel3' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} color={"secondary"}>
                                {t('faq:How does “Upgraded Billing Account” work?')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'}>
                                {t('faq:After 12 months of GCP Free Trial__')}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/*4*/}
                    <Accordion expanded={trialSubExpanded === 'panel4'}
                               onChange={handleSubChange('Trial', 'panel4')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={trialSubExpanded === 'panel4' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} color={"secondary"}>
                                {t('faq:Does Free Trial include SLA (Service Level Agreement)?')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'p'}>
                                {t('faq:Free Trial can access 90% of__')}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/*5*/}
                    <Accordion expanded={trialSubExpanded === 'panel5'}
                               onChange={handleSubChange('Trial', 'panel5')}
                               className={classes.subPanel}>
                        <AccordionSummary expandIcon={trialSubExpanded === 'panel5' ? <IconMinus/> : <IconPlus/>}
                                          className={classes.subPanelSummary}>
                            <Typography variant={"body1"} color={"secondary"}>
                                {t('faq:What are the limitations for GCP Free Trial?')}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.subPanelDetail}>
                            <Typography variant={"body1"} component={'div'} dangerouslySetInnerHTML={{
                                __html:t('faq:There are limitation for GCP Tree Trial__')
                            }}/>
                        </AccordionDetails>
                    </Accordion>


                </AccordionDetails>
            </Accordion>
        </Fragment>
    );
};
export default FAQExpansion;
