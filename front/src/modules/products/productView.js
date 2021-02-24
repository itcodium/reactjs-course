import { useEffect } from 'react';
import compose from 'recompose/compose';
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from '../../App.styles';
import PRODUCTS from '../../redux/actions/products'
import ProductList from '../products/productList.js'

function ProductView(props) {
    const { classes } = props;
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status)
    const products = useSelector(state => state.products.products)

    useEffect(() => {
        dispatch(PRODUCTS.get());
    }, [])

    return (
        <div>
            <Typography variant="h4" gutterBottom>Catalogo de productos(*)</Typography>
            {status === "succeeded" ? <ProductList products={products} ></ProductList> : null}
            {status === "loading" ? <div className={classes.wrapper}><CircularProgress className={classes.spinnerContainer} /> </div> : null}
            {status === "failed" ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{""}</Typography> : null}
        </div>
    );
}

export default compose(
    withStyles(styles)
)(ProductView);