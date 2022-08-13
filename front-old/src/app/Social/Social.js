import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import styles from './Social.style.js';
import SocialLink from '../SocialLink/SocialLink.js';

function Social(props) {
    const { classes } = props;
    return (
        <Grid container justify="center" >
            <Grid item xs={12} className={classes.social} container justify="center" alignItems="center">
                {
                    props.social.map((socialItem) => (
                        <SocialLink key={socialItem.name} type={socialItem.name} url={socialItem.url} ></SocialLink>
                    ))
                }
            </Grid>
        </Grid>
    );
}

Social.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
};

export default compose(
    withStyles(styles),
    withWidth(),
)(Social);