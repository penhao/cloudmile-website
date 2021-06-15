import React from 'react';
import { Theme, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

// import {IStyleValue} from "../types/Types";

interface IResponseImage {
    imageUrl: string
    alt?: string
    maxWidth?: { xs: number | 'none', sm: number | 'none', md: number | 'none' }
    customClass?: string | null
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'block',
        position: 'relative'
    },
    image: {
        display: 'block',
        width: '100%',
        maxWidth: ({ maxWidth }: IResponseImage) => {
            return (maxWidth && maxWidth.xs)
                ?
                Number(maxWidth.xs)
                    ? `${maxWidth.xs}px`
                    : maxWidth.xs
                :
                'auto';
        },
        height: 'auto',
        [theme.breakpoints.up('sm')]: {
            maxWidth: ({ maxWidth }: IResponseImage) => {
                return (maxWidth && maxWidth.sm)
                    ?
                    Number(maxWidth.sm)
                        ? `${maxWidth.sm}px`
                        : maxWidth.sm
                    :
                    'none';

            }
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: ({ maxWidth }: IResponseImage) => {
                return (maxWidth && maxWidth.md)
                    ?
                    Number(maxWidth.md)
                        ? `${maxWidth.md}px`
                        : maxWidth.md
                    :
                    'none';

            }
        }
    }
}));
const ResponseImage = (
    {
        imageUrl,
        maxWidth = { xs: 'none', sm: 'none', md: 'none' },
        alt = '',
        customClass = null
    }: IResponseImage
) => {

    const theme = useTheme();
    const classes = useStyles({ imageUrl, maxWidth });

    const getPrefixUrl = (url: string, query: string) => {
        const split = url.split('.');
        return `/images/${query}${url} 1x, /images/${query}${split[0]}@2x.${split[1]} 2x`;
    };

    return (
        <figure className={classes.root}>
            <picture>
                <source media={`(min-width: ${theme.breakpoints.values['md']}px)`}
                    srcSet={getPrefixUrl(imageUrl, 'md')} />
                <source media={`(min-width: ${theme.breakpoints.values['sm']}px)`}
                    srcSet={getPrefixUrl(imageUrl, 'sm')} />
                <img src={`/images/xs${imageUrl}`}
                    srcSet={getPrefixUrl(imageUrl, 'xs')}
                    alt={alt}
                    className={
                        clsx(classes.image, customClass)
                    } />
            </picture>
        </figure>
    );
};
export default ResponseImage;