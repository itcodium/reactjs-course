import React from 'react';
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import mainLogo from '../../assets/logo.png';
import { CartWidget } from '../../modules/e-commerce/index';
import MenuToggle from '../MenuToggle/MenuToggle';
import SideBarMenu from '../SideBarMenu/SideBarMenu';

const NavBar = ({ user, menu }) => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (open) => () => {
        setOpen(open)
    };

    const getLogo = () => {
        return <Link to={"/"} >
            <img width='140' alt="" flex='1' align="center" src={mainLogo}></img>
        </Link>
    }

    const getLink = (to, label) => {
        return <Box sx={{ p: 1 }}>
            <Link  className='link' to={to} >
                <Typography variant="button">{label}</Typography>
            </Link>
        </Box>
    }
    const getLinkUser = (user) => {
        if(!user){
            return getLink('/login', 'Login');
        }
        return user.length && getLink('/logout', 'Logout');
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
                    <Box sx={{ textAlign: 'rigth', p: 1 }}>
                        {getLogo()}
                    </Box>
                    <Divider />
                    <SideBarMenu menu={menu}></SideBarMenu>
                    <Divider />
                    { getLinkUser(user)}
                </Box>
            </Drawer>
        </Hidden>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'right' }}>
            {getLogo()}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'right' }}>
                <Hidden mdDown>
                    {menu && menu.map((item, i) => (
                        <MenuToggle key={i} menu={item}></MenuToggle>
                    ))
                    }
                </Hidden>
                <Hidden mdDown>
                    { getLinkUser(user)}
                </Hidden>
                <CartWidget  />
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
