import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import es from './es.svg';
import en from './en.svg';

const DEFAULT_LANG = "es";
const LANG_IMAGES = { "es": es, "en": en };
let selectedIndex = 0;

function LanguageSelector({ languages }) {
    const [anchorEl, setAnchorEl] = React.useState(0);
    const [lang, setLang] = React.useState(DEFAULT_LANG);

    const handleMenuItemClick = (event, index) => {
        selectedIndex = index;
        setLang(languages[index]);
        localStorage.setItem("lang", languages[index])
        setAnchorEl(null);
    };

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getLanguageList = () => {
        if (!languages || !languages.length ) {
            return;
        }
        return <Menu id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {languages.map((option, index) => (
                <MenuItem
                    key={option}
                    disabled={index === selectedIndex}
                    selected={index === selectedIndex}
                    onClick={event => handleMenuItemClick(event, index)}
                >
                    <img width="24" alt="" src={LANG_IMAGES[option]}></img>
                </MenuItem>
            ))}
        </Menu>
    }
    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
            >
                <img width="20" alt="" src={LANG_IMAGES[lang]}></img> 
            </IconButton>
            {getLanguageList()}
        </>

    );
}

export default LanguageSelector;