import React, { useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';


import mainLogo from '../../assets/logo.png';
import categories from "../../data/categories.json";
import { CartWidget } from '../../modules/e-commerce/index';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import RmMenu from '../RmMenu/RmMenu';

const userLogout = {
    title: "Logout",
    id_menu: 11,
    url: "/logout",
    enabled: 1,
    visible: 1,
}
const userLogin ={
    title: "Login",
    id_menu: 11,
    url: "/login",
    enabled: 1,
    visible: 1,
};

const menuList = {
    title: "Admin",
    depth: 0,
    id_menu: 6,
    icon: "",
    action: "",
    url: "",
    enabled: 1,
    visible: 1,
    class: "menu-icon icon-folder",
    items: []
};

const NavBar = ({ user, languages }) => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (open) => () => {
        setOpen(open)
    };

    menuList.items = [];
    menuList.title = user?.usuario || '';
    menuList.items.push(user ? userLogout :  userLogin)

    const getCategories = (display) => {
        return <MenuList sx={{ display }}> {
            categories.map((item, i) => (
                <MenuItem key={i} >
                    <Link to={"/" + item.id} className='link' >
                        <Typography variant="button">{item.name}</Typography>
                    </Link>
                </MenuItem>
            ))
        }</MenuList>
    }
    const getLogo = () => {
        return <Link to={"/"} >
            <img width='140' alt="" flex='1' align="center" src={mainLogo}></img>
        </Link>
    }
    return <AppBar position="static" sx={{ mb: 2 }} color="transparent">
        <Hidden mdUp>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Box sx={{ textAlign: 'center', p: 1 }}>
                        {getLogo()}
                    </Box>
                    <Divider />
                    {getCategories('block')}
                </Box>

            </Drawer>
        </Hidden>

        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {getLogo()}
            <Hidden mdDown>
                <Box>
                    {getCategories('flex')}
                </Box>
            </Hidden>
            <Box>
                <LanguageSelector languages={languages}></LanguageSelector>
                <CartWidget />
                <Hidden mdDown>
                    <RmMenu list= { menuList }></RmMenu>
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={toggleDrawer(true)} sx={{ pl: 2 }} color="inherit" aria-label="SideBarMenu">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Box>
        </Toolbar>
    </AppBar >
}
export default NavBar;


/*
<IconButton sx={{ pl: 2 }} color="inherit" aria-label="SideBarMenu">
                        <AccountCircleIcon />
                    </IconButton>
*/