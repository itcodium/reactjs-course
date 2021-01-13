import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import mainLogo from '../../assets/logo.png';
import styles from './Footer.style.js';
import AplicationText from '../app.text';

import CopyRight from '../CopyRight/CopyRight.js';
import Social from '../Social/Social.js';
import FooterSiteLink from '../FooterSiteLink/FooterSiteLink.js';

function Footer(props) {
    let features;
    const { classes } = props;
    const getFeatureWith = (data) => {
        if (data.length === 1) {
            return 12
        }
        if (props.width === "xs") {
            return 12;
        }
        if (props.width === "sm") {
            if (data.length === 2) {
                return 6;
            }
            if (data.length === 3) {
                return 4;
            }
            if (data.length > 3) {
                return 6;
            }
        }
        if (props.width === "md" || props.width === "lg") {
            if (data.length === 2) {
                return 6;
            }
            if (data.length === 3) {
                return 4;
            }
            if (data.length === 5 || data.length === 6) {
                return 4;
            }
        }
        return 3;
    };

    if (AplicationText.footer.links.length <= 20) {
        features = (
            AplicationText.footer.links.map((linkItem, i, data) => (
                <Grid key={i} item xs={getFeatureWith(data)} md={getFeatureWith(data)} align="center" className={classes.p5}>
                    <FooterSiteLink urls={linkItem.urls} styles={classes} title={linkItem.title} ></FooterSiteLink>
                </Grid>
            ))
        )
    }
    const { user } = useSelector(state => state.login.payload)

    if (!user) {
        return null;
    } else {
        return <Grid container className={classes.footer}>
            <Grid item xs={12} sm={12} md={12} align="center" className={classes.p5}>
                <a href="/#">
                    <img className={classes.logo} width='140' alt="" flex='1' src={mainLogo}></img></a>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.p5}>
                <Typography variant="h6" align="center" gutterBottom>
                    FOOTER CONTENT INFO
                        </Typography>
                <Typography align="center">
                    Here you can use rows and columns here to organize your footer
                    content.
                        </Typography>
            </Grid>

            <Grid item xs={12}>
                <Grid container>{
                    features
                }
                </Grid>
            </Grid>
            <Social social={AplicationText.social}></Social>
            <Grid container align="center">
                <Grid item xs={12}>
                    <CopyRight data={AplicationText.copyright} />
                </Grid>
            </Grid>
        </Grid>


    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
};

export default compose(
    withStyles(styles),
    withWidth(),
)(Footer);