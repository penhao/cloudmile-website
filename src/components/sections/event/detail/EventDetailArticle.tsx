import React from 'react';
import SectionContainer from "../../../containers/SectionContainer";
import HtmlEditor from "../../resources/HtmlEditor";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Button, Theme } from "@material-ui/core";
import Container from "../../../containers/Container";
import { useButtonStyles } from "../../../buttons/ButtonStyles";
import clsx from "clsx";
import { useTranslation } from 'next-translate';

interface Props {
    imgUrl: string;
    contents: string;
    scrollHandler: React.MouseEventHandler;
}

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        marginBottom: '40px'
    },
    cover: {
        width: '100%',
        maxWidth: '760px',
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {}
    },
    registerButton: {
        marginBottom: '40px',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '400px',
        }
    }
}));
const EventDetailArticle = ({ imgUrl, contents, scrollHandler }: Props) => {
    const { t } = useTranslation()
    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    return (
        <SectionContainer className={classes.section}>
            <Container maxWidth={{ md: 1280 }}>
                <img src={imgUrl} alt="" className={classes.cover} />
                <Button variant={"contained"} color={"primary"} fullWidth onClick={scrollHandler}
                    className={clsx(classes.registerButton, buttonClasses.roundedButton)}>
                    {t("common:Register")}
                </Button>
            </Container>
            <HtmlEditor content={contents} />
        </SectionContainer>
    );
};
export default EventDetailArticle;
