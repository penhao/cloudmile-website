import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import Link from "next/link";
import { makeStyles, Theme } from '@material-ui/core';

interface IProps {
    breadcrumbData: any;
    color?: string;
}
interface IStyleProps {
    color: string;
}
const useStyles = makeStyles((theme: Theme) => ({
    breadcrumbs: {

        paddingTop: "20px",
        paddingBottom: "40px",
    },
    breadcrumb: {
        fontSize: "14px",
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 1.25,
        color: ({ color }: IStyleProps) => color,
        [theme.breakpoints.up("sm")]: {
            fontSize: "16px",
        }
    },
    breadcrumbLink: {
        "&:hover": {
            color: theme.palette.secondary.main
        }
    },
    iconSeparator: {
        width: "26px",
        height: "auto"
    }
}))
const Breadcrumb = ({ breadcrumbData, color = "#737373" }: IProps) => {
    const classes = useStyles({ color });
    const ellipsisName = (str: string) => {
        return str.length > 30 ? `${str.substring(0, 30)}...` : str
    }
    return (
        <Breadcrumbs
            separator={<img src={color === "white" ? "/images/icons/icon-breadcrumb-arrow-white.svg" : "/images/icons/icon-breadcrumb-arrow.svg"} alt="" className={classes.iconSeparator} />}
            aria-label="breadcrumb"
            className={classes.breadcrumbs}
        >
            {
                breadcrumbData.map((breadcrumb, index) => {
                    return (
                        index < breadcrumbData.length - 1
                            ?
                            <Link href={breadcrumb.path} key={uuidv4()}>
                                <a className={`${classes.breadcrumb} ${classes.breadcrumbLink}`}>
                                    {breadcrumb.breadcrumbName}
                                </a>
                            </Link>
                            :
                            <Typography className={classes.breadcrumb} key={uuidv4()}>
                                {ellipsisName(breadcrumb.breadcrumbName)}
                            </Typography>
                    )
                })
            }
        </Breadcrumbs>
    );
}
export default Breadcrumb;