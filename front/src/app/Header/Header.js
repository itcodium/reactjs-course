import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Drawer from '@material-ui/core/Drawer';

import SideBarMenu from '../SideBarMenu/SideBarMenu';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import MenuToggle from '../MenuToggle/MenuToggle';
import AplicationText from '../app.text';
import styles from './header.style';
import mainLogo from '../../assets/logo.png';

function Header(props) {
    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (open) => () => {
        setOpen(open)
    };
    const getLogo = (align) => {
        return <Typography component="h2"
            variant="h5"
            color="inherit"
            align={align}
            noWrap
            className={classes.toolbarTitle}>
            <a href="/#">
                <img width='140' alt="" flex='1' align="center" src={mainLogo}></img></a>
        </Typography>
    }
    return (
        <div>
            <Hidden mdUp>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <Grid>
                        <Grid className={classes.TopHeader} item xs={12} container justify="center" alignItems="center">
                            <Typography component="h2"
                                variant="h5"
                                color="inherit"
                                align="left"
                                noWrap
                                className={classes.IconHeader}
                            >
                                <a href="/#">
                                    <img width='140' alt="" flex='1' align="center" src={mainLogo}></img></a>
                            </Typography>
                            <LanguageSelector></LanguageSelector>

                        </Grid>
                    </Grid>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}>
                        {
                            AplicationText.menu.map((item, i) => (
                                <SideBarMenu menu={item} key={i}></SideBarMenu>
                            ))
                        }
                    </div>
                </Drawer>
            </Hidden>
            <Toolbar className={classes.toolbarHeader}>

                <Hidden mdUp>
                    {getLogo("left")}
                </Hidden>
                <Hidden smDown>
                    {getLogo("left")}
                    {
                        AplicationText.menu.map((item, i) => (
                            <MenuToggle key={i} menu={item}></MenuToggle>
                        ))
                    }
                    <LanguageSelector></LanguageSelector>
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={toggleDrawer(true)} color="inherit" aria-label="SideBarMenu">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </div>
    );
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);
