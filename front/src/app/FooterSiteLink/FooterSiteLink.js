import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import compose from 'recompose/compose';
import styles from './FooterSiteLink.style.js';

class FooterSiteLink extends React.Component {
    render () {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="h6" gutterBottom>
                    { this.props.title }
                </Typography>
                <ul className={ classes.ul } >
                    { this.props.urls.map(url => (
                        <li key={ url.text } className={ classes.li }>
                            <Link href={ url.href } variant="body1" color="textSecondary">
                                { url.text }
                            </Link>
                        </li>
                    )) }
                </ul>
            </div>
        );
    }
}

FooterSiteLink.propTypes = {
    classes: PropTypes.object.isRequired

};

export default compose(
    withStyles(styles),
)(FooterSiteLink);