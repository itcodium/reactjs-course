import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import styles from './SocialLink.style.js';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class SocialLink extends React.Component {
    getSocialIcon = function (type, url, classes) {
        switch (type.toLowerCase()) {
            case 'facebook':
                return <Link className={ classes.social } href={ url } target="_blank" rel="noreferrer">
                    <FacebookIcon className={ classes.iconHover } fontSize="large"></FacebookIcon></Link>
            case 'instagram':
                return <Link className={ classes.social } href={ url } target="_blank" rel="noreferrer">
                    <InstagramIcon className={ classes.iconHover } fontSize="large"></InstagramIcon></Link>
            case 'twitter':
                return <Link className={ classes.social } href={ url } target="_blank" rel="noreferrer">
                    <TwitterIcon className={ classes.iconHover } fontSize="large"></TwitterIcon></Link>
            case 'youtube':
                return <Link className={ classes.social } href={ url } target="_blank" rel="noreferrer">
                    <YouTubeIcon className={ classes.iconHover } fontSize="large"></YouTubeIcon></Link>
            case 'pinterest':
                return <Link className={ classes.social } href={ url } target="_blank" rel="noreferrer">
                    <PinterestIcon className={ classes.iconHover } fontSize="large"></PinterestIcon></Link>
            case 'linkedin':
                return <Link className={ classes.social } href={ url } target="_blank" rel="noreferrer">
                    <LinkedInIcon className={ classes.iconHover } fontSize="large"></LinkedInIcon></Link>
            default:
                return <span></span>

        }
    }
    render () {
        const { classes } = this.props;
        return (
            <div>
                { this.getSocialIcon(this.props.type, this.props.url, classes) }
            </div>
        );
    }
}


SocialLink.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SocialLink);
