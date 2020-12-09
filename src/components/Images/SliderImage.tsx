import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";


interface Props {
    imgUrl: { desktop: string, mobile: string }
    alt?: string
    title?: string
}

interface StyleProps {
    imgUrl: { desktop: string, mobile: string }
}

const useStyles = makeStyles((theme: Theme) => ({
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '&:hover': {
            '& $image': {
                transform: 'scale(1.05)',
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
        backgroundImage: ({imgUrl}: StyleProps) => `url(${(imgUrl.mobile) ? imgUrl.mobile : ''})`,
        [theme.breakpoints.up('md')]: {
            backgroundImage: ({imgUrl}: StyleProps) => `url(${(imgUrl.desktop) ? imgUrl.desktop : ''})`,
        }
    }
}));
const SliderImage = ({imgUrl = {desktop: '', mobile: ''}, alt = '', title = ''}: Props) => {

    const classes = useStyles({imgUrl});
    return (
        <div className={classes.imageContainer}>
            <span role="img" aria-label={alt}/>
            <figure className={classes.image} title={title}/>
        </div>
    );
};
export default SliderImage;
