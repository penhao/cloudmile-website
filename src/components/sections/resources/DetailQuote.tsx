import React from 'react';
import Container from "../../containers/Container";
import IconQuote from "../../icons/IconQuote";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";

interface Props {
    desc: string
    author: string;
}
interface StyleProps {
    lang: string
}
const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: '40px 0',
        marginBottom: '40px',
        backgroundColor: theme.palette.grey["300"]
    },
    containerInner: {
        [theme.breakpoints.only('sm')]: {
            paddingLeft: '60px'
        },
        [theme.breakpoints.only('md')]: {
            paddingLeft: '160px'
        }
    },
    desc: {
        fontWeight: 600,
        fontStyle: ({lang}: StyleProps) => (lang === 'en') ? 'italic' : 'normal'
    },
    author: {
        marginTop: '30px'
    }
}));
const DetailQuote = ({desc, author}: Props) => {
    const {lang} = useTranslation();
    const classes = useStyles({lang});
    return (
        <div className={classes.container}>
            <Container maxWidth={{md: 1280}}>
                <Container maxWidth={{md: 1080}} paddingX={false} centerX={false}>
                    <div className={classes.containerInner}>
                        <IconQuote lang={lang}/>
                        <Typography variant={"h4"} component={'p'} className={classes.desc}>
                            {desc}
                        </Typography>
                        <Typography variant={"body1"} align={"right"} className={classes.author}>
                            {author}
                        </Typography>
                    </div>
                </Container>
            </Container>
        </div>
    );
};
export default DetailQuote;
