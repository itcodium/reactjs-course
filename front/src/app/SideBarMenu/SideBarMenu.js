import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import styles from './SideBarMenu.style';

class SideBarMenu extends React.Component {
    render() {
        const { classes } = this.props;
        return (

            <div className={classes.fullList}>
                <List >
                    <ListItem>
                        <NavLink className={classes.menuLink} to={this.props.menu.url}>
                            <Typography className={classes.menuSubLinkText} > {this.props.menu.text}</Typography>
                        </NavLink>
                    </ListItem>
                </List>
                <List className={classes.fullList}>{
                    this.props.menu.items.map((sub, indexSub) => (
                        <ListItem key={indexSub}>
                            <NavLink className={classes.menuSubLink} to={sub.url}>
                                <Typography className={classes.menuSubLinkText} >{sub.text}</Typography>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </div>

        );
    }
}
SideBarMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBarMenu);