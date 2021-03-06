import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Product from './product';

const ProductList = ({ products }) => (
    <Grid container spacing={2}>
        {
            products.map((product, index) => (
                <Product
                    key={index}
                    product={product}
                >
                </Product>
            ))
        }
    </Grid>
)

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id_product: PropTypes.string.isRequired,
            price: PropTypes.string.price,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
};



export default ProductList;