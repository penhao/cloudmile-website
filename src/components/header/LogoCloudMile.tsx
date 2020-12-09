import React from 'react';
import {useTheme, useMediaQuery} from "@material-ui/core/";
import NavLink from "../links/NavLink";

const LogoCloudMile = () => {
    const imgXs = '/images/logos/cloudmile-mobile.svg';
    const imgMd = '/images/logos/cloudmile.svg';
    return (
        <NavLink hrefPath={'/'}>
            <img src={useMediaQuery(useTheme().breakpoints.up('sm')) ? imgMd : imgXs}
                 alt='Cloudmile Logo'/>
        </NavLink>
    );
};
export default LogoCloudMile;
