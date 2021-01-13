import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styles from './MenuToggle.style';


import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

function MenuToggle(props) {
    const { classes, menu } = props;
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
            return <ArrowForwardIosIcon className={classes.arrowIcon} ></ArrowForwardIosIcon>;
        }
    }
    const getMenu = () => {
        if (menu.items.length) {
            return <Button className={classes.menuButton} aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true" onClick={handleClick}>
                {!menu.icon ? getArrowIcon(menu.items.length, classes) : null}
                {menuLink(menu, classes)}
            </Button>
        } else {
            return menuItem(menu, classes);
        }
    }
    const menuItem = (menu) => {
        if (menu.icon) {
            return <NavLink className={classes.menuLink} to={menu.url}>
                {menuLink(menu)}
            </NavLink>
        } else {
            return <MenuItem key={menu.text}>
                {menuLink(menu)}
            </MenuItem>
        }
    }

    const menuLink = (menu) => {
        if (menu.icon) {
            return <IconButton
                className={classes.menuLink}
                aria-haspopup="true">
                <AccountCircle />
            </IconButton>
        } else {
            return <NavLink className={classes.menuLink} to={menu.url}>
                {menu.text}
            </NavLink>
        }
    }

    return (
        <Toolbar className={classes.toolbarSecondary} >
            <div>
                {getMenu()
                }
                <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={clickAway}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        {menu.items.map((subItem, subIndex) => (
                                            <MenuItem key={subItem.text} onClick={handleClose}>
                                                <NavLink className={classes.menuLink} to={subItem.url}>
                                                    {subItem.text}
                                                </NavLink>
                                            </MenuItem>
                                        ))}
                                    </MenuList>

                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

            </div >
        </Toolbar>
    );

}
MenuToggle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuToggle);


