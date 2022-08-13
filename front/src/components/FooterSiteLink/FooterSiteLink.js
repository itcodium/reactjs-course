import React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

function FooterSiteLink({ urls, title }) {
    return (
        <Box>
            <Typography variant="h6" gutterBottom align="center">
                {title}
            </Typography>
            <MenuList sx={{ m: 0, p: 0 }} dense={true}>
                {urls.map(url => (
                    <MenuItem key={url.text} sx={{ m: 0, display: 'block', textAlign: 'center'}}>
                        <Link to={url.href} className='link'>
                            <Typography >  {url.text}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </MenuList>
        </Box>
    );
}

export default FooterSiteLink;