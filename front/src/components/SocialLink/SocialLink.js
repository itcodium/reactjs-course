import React from 'react';
// import { Link } from "react-router-dom";
import Link from '@mui/material/Link';
import { grey } from '@mui/material/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const styles = {
    social: {
        '& > svg': {
            margin: 1,
            color: grey[800],
        },
    },
    iconHover: {
        '&:hover': {
            color: grey[600],
        },
    },
};

function SocialLink({ icon, url }) {
    const getSocialIcon = () => {
        switch (icon.toLowerCase()) {
            case 'facebook':
                return <Link className='link' sx={styles.social} href={url} target="_blank" rel="noreferrer">
                    <FacebookIcon sx={styles.iconHover} fontSize="large"></FacebookIcon></Link>
            case 'instagram':
                return <Link className='link' sx={styles.social} href={url} target="_blank" rel="noreferrer">
                    <InstagramIcon sx={styles.iconHover} fontSize="large"></InstagramIcon></Link>
            case 'twitter':
                return <Link className='link' sx={styles.social} href={url} target="_blank" rel="noreferrer">
                    <TwitterIcon sx={styles.iconHover} fontSize="large"></TwitterIcon></Link>
            case 'youtube':
                return <Link className='link' sx={styles.social} href={url} target="_blank" rel="noreferrer">
                    <YouTubeIcon sx={styles.iconHover} fontSize="large"></YouTubeIcon></Link>
            case 'pinterest':
                return <Link className='link' sx={styles.social} href={url} target="_blank" rel="noreferrer">
                    <PinterestIcon sx={styles.iconHover} fontSize="large"></PinterestIcon></Link>
            case 'Linkedin':
                return <Link className='link' sx={styles.social} href={url} target="_blank" rel="noreferrer">
                    <LinkedInIcon sx={styles.iconHover} fontSize="large"></LinkedInIcon></Link>
            default:
                return <span></span>

        }
    }
    return getSocialIcon();
}

export default SocialLink;