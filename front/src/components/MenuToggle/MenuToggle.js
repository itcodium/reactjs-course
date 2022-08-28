import React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

const styles = {
    menuLink: {
        margin: 0,
        textDecoration: 'none',
        fontSize: '12px',
        color: '#2d496e'
    },
    menuButton: {
        textTransform: 'none',
        margin: 0,
        textDecoration: 'none',
        fontSize: '12px',
        fontWeight: "bold",
        color: '#2d496e',
    },
    arrowIcon: { fontSize: 10, marginRight: 1 }
};

function MenuToggle({ menu }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const clickAway = (event) => {
        if (anchorEl.contains(event.target)) {
            return;
        }
        setOpen(false);
    }
    const handleClick = (event) => {
        setOpen(!open);
        setAnchorEl(event.currentTarget);
    }
    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            this.handleClose();
        }
    }
    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
    }
    const getArrowIcon = (size) => {
        if (size) {
            return <ArrowForwardIosIcon sx={styles.arrowIcon} ></ArrowForwardIosIcon>;
        }
    }

    const menuItem = (menu) => {
        if (menu.icon) {
            return <NavLink sx={styles.menuLink} to={menu.url}>
                {menuLink(menu)}
            </NavLink>
        } else {
            return <MenuItem key={menu.title}>
                {menuLink(menu)}
            </MenuItem>
        }
    }

    const getMenu = () => {
        if (menu && menu.items?.length) {
            return <Button sx={styles.menuButton}
                aria-haspopup="true" onClick={handleClick}>
                {!menu.icon ? getArrowIcon(menu.items.length) : null}
                {menuLink(menu)}
            </Button>
        }else {
            return menuItem(menu);
        }
    }

    const menuLink = (menu) => {
        if (!menu.visible) {
            return;
        }
        if (menu.icon) {
            return <AccountCircleIcon />

        } else {
            if (menu.url) {
                return <Link  className='link' to={menu.url} >
                    <Typography sx={styles.menuLink} variant="caption">{menu.title}</Typography>
                </Link>
            } else {
                return menu.title
            }
        }
    }

    return <>
        {getMenu()
        }
        <Popper id={'transition-popper'} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={clickAway}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                {menu.items.map((subItem, subIndex) => (
                                    <MenuItem key={subItem.title} onClick={handleClose}>
                                        {menuLink(subItem)}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    </>
}

export default MenuToggle;