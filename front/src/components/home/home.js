
import { useState, useEffect } from 'react';
import compose from 'recompose/compose';
import { connect, useDispatch } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from '../../App.styles';
import PRODUCTS from '../../redux/actions/products'
import productsData from '../../data/products'
import ProductList from '../../modules/shopping/user/products/productList.js'

function Home(props) {
    const { classes, state } = props;
    console.log('state: ', state);
    let [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PRODUCTS.get())
        setProducts([])
    }, [setProducts])

    return (
        <div className={classes.container}>
            <Typography variant="h4" gutterBottom>Catalogo de productos</Typography>

            <ProductList products={products} ></ProductList>
            {state.loading ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>LOADING</Typography> : null}

        </div>
    );
}

const mapStateToProps = state => {
    console.log('state: ', state);
    return { state: state.products };
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(Home);