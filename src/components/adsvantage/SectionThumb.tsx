import React from 'react';
import clsx from "clsx";
import {makeStyles, Theme, Button} from '@material-ui/core'
import useTranslation from "next-translate/useTranslation";

interface Props {
    scrollTarget: string | null;
    scrollHandler: (current: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    thumb: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        // height: 'calc(100vh - 10%)',
        maxWidth: '1920px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-30%)',
        pointerEvents: 'none',
        zIndex: 1,
        '& ul': {

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        }
    },
    dot: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        pointerEvents: 'all',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: 'normal',
        padding: '15px 20px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent',
        '&::after': {
            display: 'block',
            content: '""',
            width: '12px',
            height: '12px',
            borderRadius: '99em',
            backgroundColor: theme.palette.common.white,
            border: `2px solid ${theme.palette.primary.main}`,
            marginLeft: '6px'
        },
        '&:hover,&.active': {
            '&::after': {
                backgroundColor: theme.palette.primary.main,
            }
        }
    }
}))

function SectionThumb({scrollTarget, scrollHandler}: Props) {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <div className={classes.thumb}>
            <ul>
                <li>
                    <button
                        type={'button'}
                        onClick={() => scrollHandler('demo')}
                        className={clsx(
                            classes.dot,
                            scrollTarget === 'demo' ? 'active' : null
                        )}
                    >
                        {t('adsvantage:Demo')}
                    </button>
                </li>
                <li>
                    <button type={'button'} onClick={() => scrollHandler('price')} className={clsx(
                        classes.dot,
                        scrollTarget === 'price' ? 'active' : null
                    )}>
                        {t('adsvantage:Price')}
                    </button>
                </li>
                <li>
                    <button type={'button'} onClick={() => scrollHandler('contact')} className={clsx(
                        classes.dot,
                        scrollTarget === 'contact' ? 'active' : null
                    )}>
                        {t('adsvantage:Contact Us')}
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SectionThumb
