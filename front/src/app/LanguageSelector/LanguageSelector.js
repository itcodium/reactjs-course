import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import AplicationText from '../app.text';
import es from './es.svg';
import en from './en.svg';

const default_language = "es";
const LANGUAGES = { "es": es, "en": en };
const customLang = [];
const appLanguages = [];
var alterIndex = 0;

function LanguageSelector () {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuItemClick = (event, index) => {
        alterIndex = index;
        localStorage.setItem("lang", appLanguages[alterIndex])
        setAnchorEl(null);
    };

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getLanguageList = () => {
        if (!AplicationText.lang || AplicationText.lang.length <= 1) {
            return;
        }
        return <Menu id="simple-menu"
            anchorEl={ anchorEl }
            keepMounted
            open={ Boolean(anchorEl) }
            onClose={ handleClose }
        >
            { customLang.map((option, index) => (
                <MenuItem
                    key={ option }
                    disabled={ index === alterIndex }
                    selected={ index === alterIndex }
                    onClick={ event => handleMenuItemClick(event, index) }
                >
                    <img width="24" alt="" src={ option }></img>
                </MenuItem>
            )) }
        </Menu>
    }

    const setLang = (lang) => {
        if (appLanguages.indexOf(lang) < 0) {
            customLang.push(LANGUAGES[lang]);
            appLanguages.push(lang)
        }
    };



    if (AplicationText.lang) {
        AplicationText.lang.forEach((lang) => {
            setLang(lang);
        });
    } else {
        setLang(default_language);
    }

    if (localStorage.getItem("lang")) {
        alterIndex = appLanguages.indexOf(localStorage.getItem("lang"))
    }

    return (
        <form autoComplete="off">
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={ handleClick }
            >
                <img width="20" alt="" src={ customLang[alterIndex] }></img>
            </IconButton>

            { getLanguageList() }
        </form>

    );
}

export default LanguageSelector;