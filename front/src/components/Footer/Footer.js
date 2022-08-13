import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import mainLogo from '../../assets/logo.png';
import CopyRight from '../CopyRight/CopyRight.js';
import Social from '../Social/Social.js';
import FooterSiteLink from '../FooterSiteLink/FooterSiteLink.js';

function Footer({ sections, social, copyright }) {
    let features;

    const getFeatureSM = (data) => {
        if (data.length === 2) {
            return 6;
        }
        if (data.length === 3) {
            return 12;
        }
        if (data.length === 4) {
            return 6;
        }
        if (data.length > 4) {
            return 6;
        }
    }
    const getFeatureMD = (data) => {
        if (data.length === 1) {
            return 12;
        }
        if (data.length === 2) {
            return 6;
        }
        if (data.length === 3 || data.length === 9) {
            return 4;
        }
        if (data.length === 4 || data.length >= 8) {
            return 3;
        }

        if (data.length >= 5) {
            return 4;
        }
    }

    if (sections.links.length <= 20) {
        features = (<Grid container rowSpacing={0} >
            {sections.links.map((linkItem, i, data) => (
                <Grid item key={i} xs={12} sm={getFeatureSM(data)} md={getFeatureMD(data)} sx={{ mb: 1 }}>
                    <FooterSiteLink urls={linkItem.urls} title={linkItem.title}  ></FooterSiteLink>
                </Grid>
            ))}
        </Grid>)
    }

    return <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12} sm={12} md={12} align="center" sx={{ mb: 2 }}>
            <a href="/#">
                <img width='140' alt="" flex='1' src={mainLogo}></img></a>
        </Grid>

        <Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
                FOOTER CONTENT INFO
            </Typography>
            <Typography align="center">
                Here you can use rows and columns here to organize your footer
                content.
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Grid container>{features}
            </Grid>
        </Grid>

        <Social social={social}></Social>
        <Grid container align="center">
            <Grid item xs={12}>
                <CopyRight data={copyright} />
            </Grid>
        </Grid>
    </Grid>
}

export default Footer;
