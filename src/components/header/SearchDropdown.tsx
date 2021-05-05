import React, { useState } from 'react';
import { Button, Theme } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/styles";
import Collapse from "@material-ui/core/Collapse/Collapse";
import SearchForm from "../forms/SearchForm";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginLeft: '10px'
    },
    toggle: {
        padding: '10px',
        minWidth: 'initial',
        color: theme.palette.common.white,
        zIndex: 1,
        '& .MuiButton-label': {
            '& svg': {
                color: theme.palette.common.white
            }
        },
        '&:hover': {
            '& .MuiButton-label': {
                '& svg': {
                    color: theme.palette.secondary.main
                }
            }
        }
    },
    icon: {
        display: 'block',
        width: '20px !important',
        padding: 0,
        fontSize: '20px',

    },
    collapse: {
        position: 'absolute',
        width: '280px',
        right: 0,
        top: 0,
        paddingTop: '60px'
    },
    collapseInner: {
        padding: '10px 20px',
        backgroundColor: theme.palette.grey["300"],
        // pointerEvents: 'none'
    }
}));
const SearchDropdown = () => {

    const classes = useStyles();
    const [active, setActive] = useState(false);
    const handlerEnter = () => setActive(true);
    const handlerLeave = () => setActive(false);

    return (
        <div onMouseLeave={handlerLeave} className={classes.root}>
            <Button onMouseEnter={handlerEnter} className={classes.toggle}>
                <FontAwesomeIcon icon={faSearch} className={classes.icon} />
            </Button>
            <Collapse in={active} timeout={'auto'} className={classes.collapse}>
                <div className={classes.collapseInner}>
                    <SearchForm />
                </div>
            </Collapse>
        </div>
    );
};
export default SearchDropdown;
