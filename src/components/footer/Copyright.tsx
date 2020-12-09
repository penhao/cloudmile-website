import React from 'react';
import Typography from "@material-ui/core/Typography";
const Copyright = () => {
    return (
        <Typography variant={"body1"} component={'div'}>
            {`@ Copyright – CloudMile Inc. ${new Date().getFullYear()}`}
        </Typography>
    );
};

export default Copyright;
