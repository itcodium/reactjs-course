import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function CopyRight({ data }) {
    return (
        <>
            <Typography variant="body2" color="textSecondary">
                {'Copyright © '}
                <Link color="inherit" href={data.url} target="_blank">
                    {data.website}
                </Link>
                {new Date().getFullYear()}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {data.createdby.text}
                <Link color="inherit" href={data.createdby.url} target="_blank">
                    {data.createdby.name}
                </Link>
            </Typography>
        </>
    );
}

export default CopyRight;
