import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core";
import RatioContainer from "../containers/RatioContainer";
import ResponseImage from "../Images/ResponseImage";

export interface IItemProps {
    imgUrl: string
    alt?: string
    title: string
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        position: 'relative',
        width: '195px',
        zIndex: 1
    },
    icon: {
        position: 'relative',
        width: '60px',
        height: '60px',
        marginBottom: '15px',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '60px',
            height: '60px',
        }
    },
    title: {
        marginTop: '20px',
        fontWeight: 400
        /*,
        lineHeight: 1.25*/
    }
}));
const PhotoItem = ({ imgUrl, alt = '', title }: IItemProps) => {
    const classes = useStyles();
    return (
        <div className={classes.item}>
            <RatioContainer ratio={{ xs: 1, sm: 1, md: 1 }}>
                <ResponseImage imageUrl={imgUrl} alt={alt} />
            </RatioContainer>
            <Typography variant={"h6"} align={"center"} className={classes.title}>
                {title}
            </Typography>
        </div>
    );
};
export default PhotoItem;
