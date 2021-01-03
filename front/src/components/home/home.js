import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from '../../App.styles';
import productsData from '../../data/products'
import ProductList from '../../modules/shopping/user/products/productList.js'

function Home(props) {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Typography variant="h4" gutterBottom>Catalogo de productos</Typography>

            <ProductList products={productsData} ></ProductList>

        </div>
    );
}
export default (withStyles(styles)(Home))
