import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function CopyRight(props) {
    const { data } = props;
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © '}
            <Link color="inherit" href={data.link}>
                {data.website}
            </Link>{' '}
            { new Date().getFullYear()}
            <br></br>
            { data.createdby.text}
            <Link color="inherit" href={data.createdby.link}>
                {data.createdby.name}
            </Link>
        </Typography>
    );
}

export default CopyRight;