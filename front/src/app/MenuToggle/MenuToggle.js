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

class MenuToggle extends React.Component {
    state = {
        anchorEl: React.createRef(null),
        open: false
    }
    clickAway = (event) => {
        if (this.state.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    }
    handleClick = (event) => {
        this.setState({ open: !this.state.open, anchorEl: event.currentTarget });
    }
    handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            this.handleClose();
        }
    }
    handleClose = (event) => {
        this.setState({ open: false, anchorEl: null });
    }
    getArrowIcon = (size, classes) => {
        if (size) {
            return <ArrowForwardIosIcon className={classes.arrowIcon} ></ArrowForwardIosIcon>;
        }
    }
    getMenu = (props, classes) => {
        if (props.menu.items.length) {
            return <Button className={classes.menuButton} aria-controls={this.state.open ? 'menu-list-grow' : undefined}
                aria-haspopup="true" onClick={this.handleClick}>
                {this.getArrowIcon(props.menu.items.length, classes)}
                {props.menu.text}
            </Button>
        } else {
            if (props.menu.icon) {
                return <NavLink className={classes.menuLink} to={props.menu.url}>
                    <IconButton
                        className={classes.menuLink}
                        aria-haspopup="true">
                        <AccountCircle />
                    </IconButton>
                </NavLink>
            } else {
                return <MenuItem key={props.menu.text}>
                    <NavLink className={classes.menuLink} to={props.menu.url}>
                        {props.menu.text}
                    </NavLink>
                </MenuItem>
            }
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <Toolbar className={classes.toolbarSecondary} >
                <div>
                    {this.getMenu(this.props, classes)
                    }
                    <Popper open={this.state.open} anchorEl={this.state.anchorEl} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.clickAway}>
                                        <MenuList autoFocusItem={this.state.open} id="menu-list-grow" onKeyDown={this.handleListKeyDown}>
                                            {this.props.menu.items.map((subItem, subIndex) => (
                                                <MenuItem key={subItem.text} onClick={this.handleClose}>
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
}
MenuToggle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuToggle);


