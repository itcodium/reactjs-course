import React from 'react';
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import { useHistory } from "react-router-dom";

import compose from 'recompose/compose';
import { connect } from 'react-redux';
import styles from './header.styles';
import LOGIN from '../../redux/actions/login'
import LoginService from '../../services/LoginService'

function Header(props) {
    const { classes } = props;
    const service = LoginService;
    const location = useLocation().pathname;
    let history = useHistory();
    const dispatch = useDispatch();
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const logOut = (event) => {
        dispatch(LOGIN.out())
        history.push('#/Login')
        event.preventDefault();
    }

    const links = [{ path: "/Home", label: "Home", login: true },
    { path: "/SignUp", label: "SignUp", login: false, hide: true },
    { path: "/Login", label: "LogIn", login: false },
    { path: "", label: "LogOut", onClick: logOut, login: true }
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'primary-search-account-menu';
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const renderMenu = () => {
        const menu = links.filter(link => {
            return (service.isLoggedIn() === link.login && link.path !== location && !link.hide);
        });
        return <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {
                menu.map((link, index) => {
                    return <MenuItem><Link key={index} onClick={(e) => {
                        handleMenuClose();
                        if (link.onClick) {
                            link.onClick(e);
                        }

                    }} href={"#" + link.path}>{link.label}</Link></MenuItem>
                })
            }

        </Menu>
    };
    const menu = () => {
        if (!service.isLoggedIn()) {
            return;
        }
        return <AppBar position="static" color="transparent">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.home} href="#/">Store</Link>
                    </Typography>
                </IconButton>
                <Typography variant="h6" className={classes.title}></Typography>
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </MenuItem>
                <MenuItem edge="end" onClick={handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </MenuItem>

            </Toolbar>
            {renderMenu()}
        </AppBar>
    }
    return (<Typography className={classes.menu}>
        {menu()}
    </Typography>)
}

const mapStateToProps = state => {
    return { state: state.login };
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(Header);