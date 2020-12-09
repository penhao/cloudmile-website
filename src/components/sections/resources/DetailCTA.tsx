import React, {Fragment} from 'react';
import Container from "../../containers/Container";
import {makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BackgroundImage from "../../Images/BackgroundImage";
import ShiftContainer from "../../containers/ShiftContainer";
import {useButtonStyles} from "../../buttons/ButtonStyles";
import {isValueEmpty} from "../../../utils/Utils";

interface Props {
    imageUrl?: string;
    title?: string;
    desc?: string;
    buttonText?: string;
    launchUrl?: string;
    onlyButton?: boolean;
    clickHandler?: React.MouseEventHandler
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        marginBottom: '40px',
        [theme.breakpoints.only('sm')]: {},
        [theme.breakpoints.only('md')]: {
            paddingLeft: '160px'
        }
    },
    container: {
        position: 'relative',
        padding: '40px 20px',
        zIndex: 1,
        [theme.breakpoints.up('sm')]: {},
        [theme.breakpoints.up('md')]: {
            padding: '40px 36px',
        },
    },
    title: {
        marginBottom: '20px'
    },
    desc: {
        marginBottom: '20px',
        color: theme.palette.common.white
    },
    cover: {
        position: 'absolute',
        top: 0,
        left: 0,
        '&::after': {
            display: 'block',
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'linear-gradient(to right, rgba(10,27,46,1) 0%, rgba(10,27,46,0) 100%);',
        }
    }
}));
const DetailCTA = (
    {
        imageUrl = '',
        title = '',
        desc = '',
        buttonText = 'Contact Us',
        launchUrl = '',
        onlyButton = false,
        clickHandler
    }: Props
) => {

    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const getButton = () => {
        return (
            (isValueEmpty(launchUrl))
                ? <Button variant="contained"
                          color={"primary"}
                          disableElevation
                          onClick={clickHandler}
                          className={buttonClasses.roundedButton}>
                    {buttonText}
                </Button>
                :
                <Button href={launchUrl} target={'_blank'}
                        variant="contained"
                        color={"primary"}
                        disableElevation
                        className={buttonClasses.roundedButton}>
                    {buttonText}
                </Button>
        )
    };
    const getGrid = () => {
        return (
            <ShiftContainer shiftX={{xs: -20, sm: -20, md: 0}} growX={{xs: 40, sm: 40, md: 0}}>
                <BackgroundImage imgUrl={imageUrl} detectRetina={false} customClass={classes.cover}/>
                <Container maxWidth={{xs: 'none', sm: '65%', md: '50%'}} paddingX={false} centerX={false}
                           className={classes.container}>
                    <Typography variant={"h5"} color={"primary"} className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant={"body1"} className={classes.desc}>
                        {desc}
                    </Typography>
                    {
                        getButton()
                    }
                </Container>
            </ShiftContainer>
        );
    };
    return (
        <Container maxWidth={{xs: 'none', sm: 'none', md: 1280}}>
            <Container maxWidth={{xs: 'none', sm: 'none', md: 1080}} paddingX={false} centerX={false}>
                <div className={classes.root}>
                    {
                        (onlyButton) ? getButton() : getGrid()
                    }
                </div>
            </Container>
        </Container>
    );
};
export default DetailCTA;
