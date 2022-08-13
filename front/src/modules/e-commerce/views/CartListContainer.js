import React from 'react';
import Box from '@mui/material/Box';
import Cart from '../components/Cart';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { init } from '../reducers/orders';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const CartListContainer = () => {
    const cart = useSelector(state => state.cart.data);
    const order = useSelector(state => state.orders.data.order) || {};
    const user = useSelector(state => state.user.data);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            if (order && order.id) {
                dispatch(init());
            }
        }
    }, [])
    return (<>
        <Box>
            {!order.id && <Cart user={user} items={cart}></Cart>}
            {order.id && <Alert sx={{ mt: 2, textAlign: "center" }} severity="success">Your order number is: <strong>{order.id}</strong>
            </Alert>}
        </Box>
        {order.id && <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button sx={{ ml: 2 }} size="small" variant="outlined" href="/">Ver otros productos</Button>
            </Box>
        }

    </>)
}

export default CartListContainer;
