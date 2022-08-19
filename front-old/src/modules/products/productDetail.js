import React, { useEffect } from 'react';
import compose from 'recompose/compose';
import { useSelector, useDispatch } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './productDetail.style';
import STATUS from '../../redux/constants/status'
import PRODUCTS from '../../redux/actions/products';

function ProductDetail(props) {
    const { classes } = props;
    const { match: { params } } = props;
    const dispatch = useDispatch();

    const status = useSelector(state => state.productDetail.status)
    const product = useSelector(state => state.productDetail.product)
    const error = useSelector(state => state.productDetail.error)

    useEffect(() => {
        dispatch(PRODUCTS.getDetail(params))
    }, [])

    return (
        <div>
            {
                status === STATUS.SUCCESS ?
                    <Card>
                        <CardContent>
                            <Typography component="h4" variant="h4" className={classes.title}>
                                {product.name}
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
                                <Button variant="contained" size="large" color="primary">Buy</Button>
                            </div>
                        </CardContent>
                    </Card>
                    : null
            }
            { status === STATUS.PENDING ? <div className={classes.wrapper}><CircularProgress className={classes.spinnerContainer} /> </div> : null}
            { status === STATUS.ERROR ? <Typography color="error" variant="overline" display="block" gutterBottom>{error.message}</Typography> : null}
        </div>);
}

export default compose(
    withStyles(styles)
)(ProductDetail);