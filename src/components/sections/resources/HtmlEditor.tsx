import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Container from "../../containers/Container";

interface Props {
    content: string
}

const useStyles = makeStyles((theme: Theme) => ({
    htmlEditor: {
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '60px',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '160px',
        },
        '& a': {
            display: 'inline',
            color: theme.palette.secondary.main,
            textDecoration: 'underline'
        },
        '& h3': {
            fontSize: theme.typography.pxToRem(20),
            color: theme.palette.primary.main,
            textAlign: 'left !important',
            fontWeight: 700,
            marginBottom: '20px',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(24),
                marginLeft: '-60px',
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: '-160px',
            }
        },
        '& h4': {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.common.black,
            textAlign: 'left !important',
            fontWeight: 700,
            marginBottom: '16px',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(20)
            }
        },
        '& p': {
            fontSize: theme.typography.pxToRem(14),
            lineHeight: theme.typography.pxToRem(22),
            textAlign: 'left !important',
            marginBottom: '40px',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(16),
                lineHeight: theme.typography.pxToRem(26)
            },
            '& a': {
                display: 'inline',
            },
            '& strong': {
                position: 'relative',
                fontWeight: `400 !important`,
                borderBottom: `2px solid ${theme.palette.primary.main}`
            }
        },
        '& table': {
            tableLayout: 'fixed !important',
            border: 'none !important',
            textAlign: 'left !important',
            borderColor: `${theme.palette.common.white} !important`,
            '& tbody': {
                '& tr': {
                    '&:first-child': {
                        '& td': {
                            backgroundColor: `${theme.palette.grey["300"]} !important`,
                        }
                    },
                    '&:nth-child(even):not(:first-child)': {
                        backgroundColor: `${theme.palette.grey["100"]} !important`,
                    },
                    '& td': {
                        fontSize: theme.typography.pxToRem(14),
                        lineHeight: theme.typography.pxToRem(22),
                        fontWeight: 400,
                        width: '250px',
                        minWidth: '250px',
                        padding: '10px !important',
                        [theme.breakpoints.up('sm')]: {
                            fontSize: theme.typography.pxToRem(16),
                            lineHeight: theme.typography.pxToRem(26)
                        },
                        '& strong': {
                            fontSize: theme.typography.pxToRem(14),
                            lineHeight: theme.typography.pxToRem(22),
                            fontWeight: 700,
                            [theme.breakpoints.up('sm')]: {
                                fontSize: theme.typography.pxToRem(16),
                                lineHeight: theme.typography.pxToRem(26)
                            }
                        }
                    }
                }
            }
        },
        '& ol,ul': {
            listStylePosition: 'outside',
            paddingLeft: '22px',
            fontSize: theme.typography.pxToRem(15),
            [theme.breakpoints.up('sm')]: {
                paddingLeft: '30px',
            },
            '& li': {
                fontSize: theme.typography.pxToRem(14),
                lineHeight: theme.typography.pxToRem(22),
                fontWeight: 400,
                marginBottom: '40px',
                [theme.breakpoints.up('sm')]: {
                    fontSize: theme.typography.pxToRem(16),
                    lineHeight: theme.typography.pxToRem(26)
                },
                '& strong': {
                    fontWeight: 700
                },
                '& $tableWrapper': {
                    marginTop: '40px'
                }
            }
        },
        '& > *': {
            '&:last-child': {
                marginBottom: 0
            }
        },
        '& ul': {
            listStyleType: 'unset',
        },
        '& ol': {
            listStyleType: 'decimal',
        }
    },
    tableContainer: {
        width: '100%',
        overflow: 'hidden',
        overflowX: 'auto'
    }
}));
const HtmlEditor = ({content}: Props) => {
    const classes = useStyles();
    const replaceTable = (content: string) => {
        return content.replace('<table', `<div class=${classes.tableContainer}><table`)
            .replace('</table>', '</table></div>')
    };
    return (
        <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}}>
            <Container maxWidth={{xs: 'none', sm: 'none', md: 920}} paddingX={false} centerX={false}>
                <article className={classes.htmlEditor} dangerouslySetInnerHTML={{
                    __html: replaceTable(content)
                }}/>
            </Container>
        </Container>
    );
};
export default HtmlEditor;
