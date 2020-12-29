import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import productsData from '../../data/products.js'
import styles from './productDetail.style';


function ProductDetail(props) {
    const { classes } = props;
    const { match: { params } } = props;
    const product = productsData.find(product => {
        return product.id === parseInt(params.id)
    })

    if (product) {
        return (
            <Card>
                <CardContent>
                    <Typography component="h4" variant="h4" className={classes.title}>
                        {product.title}
                    </Typography>
                    <div className={classes.box}>
                        <Grid container component="main" className={classes.item}>
                            <Grid item xs={12} sm={4} md={7} className={classes.image} >
                                <img src={product.image} alt="" title={product.imageTitle} />
                            </Grid>
                            <Grid item xs={12} sm={8} md={5} square>
                                <Typography variant="h3" className={classes.center}>
                                    $ {product.price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <Typography component="h5" varian="h5" color="textSecondary" >
                        {product.description}
                    </Typography>
                    <div className={classes.center} >
                        <Button variant="contained" size="large" color="primary">
                            Buy
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    } else {
        return <Grid item>
            <Typography variant="h4" gutterBottom>El producto no existe</Typography>
        </Grid>
    }
}

export default withStyles(styles)(ProductDetail);