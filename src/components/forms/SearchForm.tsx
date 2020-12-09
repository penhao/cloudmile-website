import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Button, Theme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Router, {useRouter} from "next/router";
import {removeParam} from "../../utils/Utils";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '& > .MuiGrid-item': {
            '&:nth-child(1)': {
                flex: '1 1 auto'
            },
            '&:nth-child(2)': {
                flex: '0 0 auto'
            }
        }
    },
    input: {
        '& .MuiInput-root': {
            marginTop: 0
        }
    },
    submit: {
        padding: '10px',
        minWidth: 'initial',
        color: theme.palette.common.white,
        zIndex: 1,
        marginLeft: '10px',
        marginRight: '-10px',
        '& .MuiButton-label': {
            '& svg': {
                display: 'block',
                width: '20px !important',
                padding: 0,
                fontSize: '20px',
                color: theme.palette.common.black
            }
        },
        '&:hover': {
            '& .MuiButton-label': {
                '& svg': {
                    color: theme.palette.secondary.main
                }
            }
        }
    }
}));
const SearchForm = () => {
    const classes = useStyles();
    const router = useRouter();
    const [keyword, setKetWord] = useState('');
    const formEl = useRef<HTMLFormElement>(null);
    const [urlParams, setUrlParams] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKetWord(event.target.value);
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search/${keyword}${urlParams}`);
    };
    useEffect(() => {
        setUrlParams(removeParam('category', window.location.search));
    }, []);
    return (
        <form action={"#"} autoComplete={'off'} ref={formEl} onSubmit={handleSubmit}>
            <Grid container spacing={0} alignItems={"center"} wrap={"nowrap"} className={classes.root}>
                <Grid item xs>
                    <TextField required
                               name="keyword"
                               type="search"
                               fullWidth={true}
                               value={keyword}
                               onChange={handleChange}
                               className={classes.input}/>
                </Grid>
                <Grid item xs>
                    <Button type={'submit'} className={classes.submit}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
export default SearchForm;
