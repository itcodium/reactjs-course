import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";

import AplicationText from '../app.text';
import styles from './MenuToolbar.style';


class MenuToolbar extends React.Component {
    render () {
        const { classes } = this.props;
        return (
            <Toolbar className={ classes.toolbarSecondary } >
                { AplicationText.menu.map(item => (
                    <NavLink className={ classes.menuSubLink } to={ item.url }>
                        <Typography className={ classes.menuSubLinkText } variant="button" gutterBottom>{ item.text.toUpperCase() } </Typography>
                    </NavLink>
                )) }
            </Toolbar>
        );
    }
}
MenuToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuToolbar);