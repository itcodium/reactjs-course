import { useEffect } from 'react';
import compose from 'recompose/compose';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import { useDispatch } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import styles from './home.style';
import slides from './slider.data.js'
import Slider from '../../app/Slider/slider';


function Home(props) {
    const { classes } = props;
    const dispatch = useDispatch();
    useEffect(() => {
    }, [])

    return (
        <div>
            <Slider slides={slides} />
            <div className={classes.container}  >
                <Hidden only={['xl', 'lg', 'md', 'sm']}>
                    <Grid container spacing={0} >
                        <Typography variant="h4" gutterBottom>Catalogo FULL</Typography>
                    </Grid>
                </Hidden>

                <Hidden only={['xs']}>
                    <Grid container spacing={40} >
                        <Typography variant="h4" gutterBottom>Catalogo XS</Typography>
                    </Grid>
                </Hidden>
            </div>
        </div>
    );
}

export default compose(
    withStyles(styles)
)(Home);