import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import CartItem from './CartItem';
import { getTotal } from '../reducers/cart';
import { fetch, post } from '../reducers/orders';
import STATUS from '../../../store/status';
import categories from "../../../data/categories.json";

const Cart = ({ items, user }) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.orders.status);
    const error = useSelector(state => state.orders.error);
    useEffect(() => {
        dispatch(fetch(items));
    }, [])

    const list = [];
    categories.forEach((category) => {
        const byCategory = items.filter(item => item.category === category.id);
        list.push({
            ...category,
            subTotal: getTotal(byCategory),
            products: byCategory
        });
    })
    const total = getTotal(items);
    const sendOrder = () => {
        dispatch(post({ customer: user, total, items }));
    }

    return <>
        {
            list.map((category, index) => (
                category.products.length > 0 && (
                    <Grid key={index} item>
                        {
                            category.products.map((product, ixp) => (
                                <CartItem key={ixp} category={category} product={product}></CartItem>
                            ))
                        }
                        <Divider sx={{ mb: 1 }} />
                    </Grid>)
            ))
        }
        <Container maxWidth="xs" sx={{ m: '0 auto', mb: 1 }}>
            <Grid container>{
                list.filter(item => item.subTotal > 0).map((item, ixp) => (
                    <React.Fragment key={item.name}>
                        <Grid item xs={6}>
                            <Typography sx={{ m: 0, p: 0 }} variant="overline" gutterBottom>{item.name}</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="overline" gutterBottom>$ {item.subTotal}</Typography>
                        </Grid>
                    </React.Fragment>
                ))}
                {total > 0 && <React.Fragment >
                    <Grid item xs={6}>
                        <Typography variant="button" gutterBottom>Total</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'right' }}>
                        <Typography variant="button" gutterBottom>$ {total}</Typography>
                    </Grid>
                </React.Fragment>
                }
            </Grid>
        </Container>
        {
            items.length > 0 && <Box sx={{ textAlign: 'center' }} >
                <Divider sx={{ mb: 1 }} />
                <Button variant="contained" disabled={status === STATUS.LOADING} onClick={() => { sendOrder() }} >
                    Enviar Orden
                </Button>
            </Box>
        }

        {items.length === 0 && <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ mb: 3 }} component="h2" variant="h5"> Cart is empty </Typography>
            <Button variant="outlined" >
                <Link to='/' >
                    <Typography sx={{ textDecoration: 'underline white', color:"#1769aa" }} >Buscar</Typography>
                </Link>
            </Button>
        </Box>}
        {status === STATUS.SUCCESS && null}
        {status === STATUS.LOADING && <Box sx={{ p: 3, display: 'block', textAlign: 'center', }}><CircularProgress /> </Box>}
        {status === STATUS.ERROR && <Typography color="error" variant="overline" display="block" gutterBottom>{error.message}</Typography>}
    </>
}
export default Cart;