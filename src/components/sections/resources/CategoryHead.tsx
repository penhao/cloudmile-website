import React from 'react';
import NavLink from "../../links/NavLink";
import IconArrow from "../../icons/IconArrow";
import Container from "../../containers/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

type RedirectData = { url: string, title: string };

interface IProps {
    title: string;
    total: number;
    redirect: RedirectData
}

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        paddingTop: '40px',
        marginBottom: '40px',
    },
    backLink: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: theme.typography.pxToRem(20),
        fontWeight: 600,
        color: theme.palette.secondary.main,
        marginBottom: '20px',
        '& svg': {
            marginRight: '15px'
        }
    },
    title: {
        display: 'inline-block',
        width: '100%',
        padding: '20px',
        border: `1px solid ${theme.palette.common.black}`,
        marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
            marginBottom: '10px'
        }
    },
    total: {
        fontSize: theme.typography.pxToRem(20)
    }
}));
const CategoryHead = ({title, total = 0, redirect = null}: IProps) => {
    const classes = useStyles();
    console.log(redirect);
    return (
        <div className={classes.wrapper}>
            <Container maxWidth={{md: 1280}}>
                {
                    (redirect)
                        ?
                        <NavLink hrefPath={redirect.url}
                                 underline={true}
                                 classNames={classes.backLink}>
                            <IconArrow isForward={false} color={"black"}/>
                            {redirect.title}
                        </NavLink>
                        :
                        null
                }
                <div>
                    <Typography variant={"h2"} className={classes.title}>
                        {`#${title}`}
                    </Typography>
                </div>
                <Typography variant={"h6"} component={'div'} className={classes.total}>
                    {`All ${total} articles`}
                </Typography>
            </Container>
        </div>
    );
};
export default CategoryHead;
