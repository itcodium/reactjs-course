import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Product from './product';
import menuData from '../../admin/menu/data';
import MenuCustom from '../../admin/menu/menu';

const ProductList = ({ products }) => (
    <div>
        <MenuCustom menu={menuData}></MenuCustom>
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
    </div>
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