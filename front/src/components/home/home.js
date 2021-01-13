import { useEffect } from 'react';
import compose from 'recompose/compose';
import { connect, useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from '../../App.styles';
import PRODUCTS from '../../redux/actions/products'
import ProductList from '../../modules/shopping/user/products/productList.js'

function Home(props) {
    const { classes } = props;
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status)
    const products = useSelector(state => state.products.products)
    useEffect(() => {
        if (status === 'idle') {
            dispatch(PRODUCTS.get())
        }
    }, [status, dispatch])


    return (
        <div className={classes.container}>
            <Typography variant="h4" gutterBottom>Catalogo de productos</Typography>
            {status === "succeeded" ? <ProductList products={products} ></ProductList> : null}
            {status === "loading" ? <div className={classes.wrapper}><CircularProgress className={classes.spinnerContainer} /> </div> : null}
            {status === "failed" ? <Typography className={classes.error} variant="overline" display="block" gutterBottom>{""}</Typography> : null}
        </div>
    );
}

const mapStateToProps = state => {
    return { products: state.products.payload };
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(Home);