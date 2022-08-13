import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Hidden from '@mui/material/Hidden';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { add, isInCart, removeItem } from '../reducers/cart';
import Counter from '../components/Counter';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";

const ProductDetail = ({ product }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.data);
    let cartProduct = isInCart(cart, product.id);
    const addTocart = (units) => {
        if (units) {
            dispatch(add({ ...product, units }));
        } else {
            if (units === 0) {
                dispatch(removeItem(product))
            }
        }
    }
   
    const getActions = (product) => {
        return <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} disableSpacing>
            <Typography variant="h6" component="p">
                $ {product.price}
            </Typography>
            <Button  disabled={!cartProduct} variant="outlined" >
                <NavLink disabled={!cartProduct} className={'link'} to="/cart">
                    Comprar
                </NavLink>
            </Button>
        </Box>
    }
    return <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card sx={{p:1}} >
            <Typography variant="h6" gutterBottom>{product.title}</Typography>
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ flex: 1 }}>
                    <img width="100%" alt="" src={product.imageUrl} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1, ml:1
                }}>
                    <Box elevation={0}>
                        <Typography variant="p" color="text.secondary">
                            {product.description}
                        </Typography>
                        {product.stock === 0 && <Alert sx={{ mt: 2 }} severity="warning">Sin stock</Alert>}
                        {product.stock > 0 && <Box sx={{ pt: 2 }} >
                            <Counter sx={{ m: 0, align: 'right' }} stock={product.stock} initial={cartProduct && cartProduct.units ? cartProduct.units : 0} onAdd={addTocart}></Counter>
                        </Box>}
                    </Box>
                    <Hidden mdDown>
                        {getActions(product)}
                    </Hidden>
                </Box>

            </CardContent>
            <Hidden mdUp>
                {getActions(product)}
            </Hidden>
        </Card>
    </Grid>
}

export default ProductDetail;