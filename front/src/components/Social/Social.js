import React from 'react';
import Box from '@mui/material/Box';
import SocialLink from '../SocialLink/SocialLink.js';

function Social({ social }) {
    return (
        <Box sx={{ justifyContent: 'center', display: 'flex', flex: 1 }}>
            {
                social.map((item) => (
                    <SocialLink key={item.name} icon={item.name} url={item.url} ></SocialLink>
                ))
            }
        </Box>
    );
}

export default Social;