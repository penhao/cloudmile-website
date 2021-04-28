import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Keyword from "./Keyword";
import {useTranslation} from "next-translate";
import {makeStyles, Theme} from "@material-ui/core/styles";

interface IProps {
    active: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
    keywordList: {
        display: 'block',
        position: 'relative',
        width: '100%',
        minHeight: '38px',
        padding: '4px 12px',
        borderRadius: '5.5px',
        border: 'solid 1px #d8d8d8',
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.grey["100"],
        },
        '& ul': {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 -6px',
        },
        '& li': {
            display: 'inline-block',
            padding: '3px 6px'
        }
    },
    placeholder: {
        display: 'block',
        position: 'absolute',
        fontSize: '14px',
        letterSpacing: 'normal',
        lineHeight: 'normal',
        left: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: theme.palette.grey["400"]
    }
}));
const KeywordList = ({active}: IProps) => {
    const {t, lang} = useTranslation();
    const classes = useStyles();
    const [keywords, setKeywords] = useState<string[]>([
        '面膜推薦',
        '美白面膜',
        '保濕面膜推薦',
    ]);
    return (
        <div className={classes.keywordList}>
            {
                active
                    ?
                    <ul>
                        {
                            keywords && keywords.length
                                ?
                                keywords.map((keyword: string, index: number) => {
                                    return (
                                        <li key={uuidv4()}>
                                            <Keyword keyword={keyword} index={index} print={active}/>
                                        </li>
                                    )
                                })
                                : null
                        }
                    </ul>
                    :
                    <span className={classes.placeholder}>輸入關鍵字</span>
            }
        </div>
    );
};
export default KeywordList;
