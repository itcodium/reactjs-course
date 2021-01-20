import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import styles from './SideBarMenu.style';
function SideBarMenu(props) {
    const { classes, menu, logout } = props;

    const getLink = (menu) => {
        if (menu.action === "logout") {
            return <NavLink onClick={logout} className={classes.menuSubLink} to={menu.url}>
                <Typography className={classes.menuSubLinkText} >{menu.title}</Typography>
            </NavLink>
        }
        return <NavLink className={classes.menuSubLink} to={menu.url}>
            <Typography className={classes.menuSubLinkText} >{menu.title}</Typography>
        </NavLink>
    }
    return (
        <div className={classes.fullList}>
            <List >
                <ListItem>
                    <NavLink className={classes.menuLink} to={menu.url}>
                        <Typography className={classes.menuSubLinkText} > {menu.title}</Typography>
                    </NavLink>
                </ListItem>
            </List>
            <List className={classes.fullList}>{
                menu.items.map((sub, indexSub) => (
                    <ListItem key={indexSub}>
                        {getLink(sub)}
                    </ListItem>
                ))}
            </List>
        </div>

    );
}
SideBarMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBarMenu);