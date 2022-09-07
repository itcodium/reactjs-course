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
                    <Box sx={{ pt: 1 }}>
                        {
                            !user  && <Link className='link' to="login" >
                                <Typography sx={{ pl: 2 }} variant="button"> Login</Typography>
                            </Link>}
                        { user && !menu.length && <Link to={"/logout"} >
                                <Typography sx={{ pl: 2 }} variant="button">Logout</Typography>
                            </Link>
                        }
                    </Box>
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
                <Hidden mdDown >
                    {!user && <Link className='link' to="login" >
                        <Typography sx={{ pr: 2 }} variant="button"> Login</Typography>
                    </Link>}
                     {user && !menu.length && <Link className='link' to={"/logout"} >
                                <Typography sx={{ pr: 2 }} variant="button">Logout</Typography>
                            </Link>
                    }
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
