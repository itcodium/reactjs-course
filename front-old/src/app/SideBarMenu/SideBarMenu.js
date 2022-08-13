import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import styles from './SideBarMenu.style';

function SideBarMenu(props) {
    const { classes, menu, logout } = props;

    const getSubList = (menu) => {
        return <List>{
            menu.items.map((sub, indexSub) => (
                <ListItem key={indexSub}>
                    {getLink(sub)}
                </ListItem>
            ))}
        </List>
    }

    const getLink = (menu) => {
        let eventClick = null;
        if (menu.action === "logout") {
            eventClick = logout;
        }

        if (menu.url) {
            return <NavLink onClick={eventClick} to={menu.url} className={classes.menuSubLink}>
                <ListItemText primary={menu.title} />
                {getSubList(menu)}
            </NavLink>
        } else {
            return <Typography onClick={eventClick} className={menu.action ? classes.menuSubLinkPinter : classes.menuSubLink}>
                <ListItemText primary={menu.title} />
                {getSubList(menu)}
            </Typography >
        }
    }

    return (
        <div className={classes.fullList}>
            <List>{
                menu.map((sub, indexSub) => (
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