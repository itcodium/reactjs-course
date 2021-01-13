import React from 'react';
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

class Footer extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    getFeatureWith = (data) => {

        if (data.length === 1) {
            return 12
        }

        if (this.props.width === "xs") {
            return 12;
        }
        if (this.props.width === "sm") {
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
        if (this.props.width === "md" || this.props.width === "lg") {
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

    getWith = (size, data) => {
        return this.props.width;
    };


    render() {
        const { classes } = this.props;
        let features;
        if (AplicationText.footer.links.length <= 20) {
            features = (
                AplicationText.footer.links.map((linkItem, i, data) => (
                    <Grid key={i} item xs={this.getFeatureWith(data)} md={this.getFeatureWith(data)} align="center" className={classes.p5}>
                        <FooterSiteLink urls={linkItem.urls} styles={classes} title={linkItem.title} ></FooterSiteLink>
                    </Grid>
                ))
            )
        }
        return (
            <div>
                <Grid container className={classes.footer}>
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
            </div>
        );
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