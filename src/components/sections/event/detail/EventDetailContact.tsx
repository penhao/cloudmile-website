import React from 'react';
import SectionContainer from "../../../containers/SectionContainer";
import Container from "../../../containers/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import RegisterForm from "../../../forms/RegisterForm";
import {SalesforcePostParams} from "../../../useUrlParams";

interface Props {
    title: string;
    salesforceData: SalesforcePostParams | null;
}

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        fontSize: theme.typography.pxToRem(20),
        color: theme.palette.primary.main,
        fontWeight: 700,
        marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.pxToRem(24)
        }
    }
}));
const EventDetailContact = ({title, salesforceData = null}: Props) => {
    const classes = useStyles();
    return (
        <SectionContainer>
            <Container maxWidth={{md: 1280}}>
                <Typography variant={"h3"} color={"primary"} className={classes.title}>
                    {title}
                </Typography>
                <Container maxWidth={{sm: 600, md: 600}} paddingX={false}>
                    <RegisterForm salesforceData={salesforceData}/>
                </Container>
            </Container>
        </SectionContainer>
    );
};
export default EventDetailContact;
