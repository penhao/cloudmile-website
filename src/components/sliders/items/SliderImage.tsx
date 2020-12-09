import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";

type IImageUrl = {
    desktop?: string | null,
    mobile?: string | null
};

interface ISliderImage {
    imgUrl: IImageUrl
    alt?: string
    title?: string
}

interface IStyleProps {
    imgUrl: IImageUrl
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '&:hover': {
            '& $image': {
                transform: 'scale(1.1)',
            }
        }
    },
    image: {
        position: 'relative',
        width: '100%',
        height: '100%',
        transformOrigin: 'center center',
        transform: 'scale(1)',
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.easeOut,
            duration: '1.2s'
        }),
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: ({imgUrl}: IStyleProps) => `url(${(imgUrl && imgUrl.mobile) ? imgUrl.mobile : ''})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: ({imgUrl}: IStyleProps) => `url(${(imgUrl && imgUrl.mobile) ? imgUrl.mobile : ''})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: ({imgUrl}: IStyleProps) => `url(${(imgUrl && imgUrl.desktop) ? imgUrl.desktop : ''})`,
        }
    }
}));
const SliderImage = (
    {imgUrl = {desktop: null, mobile: null}, alt = '', title = ''}: ISliderImage
) => {

    const classes = useStyles({imgUrl});
    return (
        <div className={classes.root}>
            <span role="img" aria-label={alt}/>
            <figure className={classes.image} title={title}/>
        </div>
    );
};
export default SliderImage;
