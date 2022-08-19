import React from 'react';
import Menu from '@mui/material/Menu';
import { Link, NavLink } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function RmMenu({ list }) {
    let selectedIndex = 0;
    const [anchorEl, setAnchorEl] = React.useState(0);

    const handleMenuItemClick = (event, index) => {
        selectedIndex = index;
        setAnchorEl(null);
    };

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuLink = (menu) => {
        if (!menu.visible) {
            return;
        }
        if (menu.icon) {
            return <IconButton
                aria-haspopup="true">
                <AccountCircle />
            </IconButton>
        } else {
            if (menu.url) {
                return <Link className='link' to={menu.url} >
                    <Typography variant="button"> {menu.title}</Typography>
                </Link>
            } else {
                return menu.title
            }
        }
    }

    const getList = () => {

        return <Menu id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >

            {list.items.map((option, index) => (
                <MenuItem
                    key={index}
                    selected={index === selectedIndex}
                    onClick={event => handleMenuItemClick(event, index)}
                >
                    {menuLink(option)}
                </MenuItem>
            ))}
        </Menu>
    }
    return (
        <>
            <Tooltip title={list.title}>
                <IconButton onClick={handleClick} sx={{ pl: 2 }} color="inherit" aria-label="SideBarMenu">
                    <AccountCircleIcon />
                </IconButton>
            </Tooltip>
            {getList()}
        </>
    );
}

export default RmMenu;

