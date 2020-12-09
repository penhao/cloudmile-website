import React from 'react';
import Grid from "@material-ui/core/Grid";
import RatioContainer from "../../../containers/RatioContainer";
import BackgroundImage from "../../../Images/BackgroundImage";
import Typography from "@material-ui/core/Typography";
import Container from "../../../containers/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

interface Props {
    logoUrl: string;
    title: string;
    intro: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    client: {
        padding: '20px',
        marginTop: '40px',
        backgroundColor: theme.palette.grey["100"],
        [theme.breakpoints.up('sm')]: {
            padding: '40px 20px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '40px'
        },
        '& .MuiGrid-container': {
            '& .MuiGrid-item': {
                '&:nth-child(1)': {
                    [theme.breakpoints.up('sm')]: {
                        flex: '0 0 160px'
                    }
                },
                '&:nth-child(2)': {
                    [theme.breakpoints.up('sm')]: {
                        flex: '1 1 calc(100% - 160px)'
                    }
                }
            }
        }
    },
    name: {
        marginBottom: '5px'
    }
}));
const CaseDetailClientInfo = ({logoUrl, title, intro}: Props) => {
    const classes = useStyles();
    const smUp = useMediaQuery(useTheme().breakpoints.up('sm'));
    return (
        <Container maxWidth={{xs: 'none', sm: 'none', md: 1000}} className={classes.client}>
            <div>
                <Grid container spacing={smUp ? 4 : 2}>
                    <Grid item xs={12} sm>
                        <RatioContainer ratio={{xs: 1, sm: 1, md: 1}} maxWidth={{xs: 120, sm: 120, md: 120}}>
                            <BackgroundImage imgUrl={logoUrl}
                                             detectRetina={false}
                                             backgroundPosition={'center center'}
                                             backgroundSize={'contain'}/>
                        </RatioContainer>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Typography variant={"body1"} color={"secondary"} className={classes.name}>
                            {title}
                        </Typography>
                        <Typography variant={"body1"} dangerouslySetInnerHTML={{__html: intro}}/>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};
export default CaseDetailClientInfo;
