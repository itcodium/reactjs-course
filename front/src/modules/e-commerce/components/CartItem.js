import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { add, isInCart, removeItem } from '../reducers/cart';
import Counter from '../components/Counter'

const CartItem = ({ product, category }) => {
    const dispatch = useDispatch();
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

    return <Box>
        <Hidden mdDown>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <img width="100" alt="" src={product.imageUrl} />

                <Box sx={{ pl: 1, alignItems: 'left', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        <Link sx={{ textDecoration: 'undeline white' }} to={"/productDetail/" + product.id}>
                            <Typography sx={{ color: '#000' }} gutterBottom variant="subtitle1" component="div">
                                {product.title}
                            </Typography>
                        </Link>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {product.description}
                        </Typography>
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }} disableSpacing>
                    <Box sx={{ width: '100%' }}>
                        <Chip label={category.name} size="medium" />
                        </Box>
                        <Box sx={{ width: '100%' }}>
                        <Counter
                        
                            stock={product.stock}
                            initial={cartProduct && cartProduct.units ? cartProduct.units : 0}
                            onAdd={addTocart}></Counter>
                            </Box>
                        <Typography component="p" variant="button" sx={{width: '100%', textAlign:'right'}}>
                            $ {product.price * cartProduct.units}
                        </Typography>

                    </Box>
                </Box>
                <Box sx={{ pl: 4, pr: 4, alignItems: 'center', display: 'flex' }}>
                    <IconButton aria-label="Delete"
                        onClick={() => dispatch(removeItem(product))} component="span">
                        <DeleteIcon />
                    </IconButton>

                </Box>
            </Box>
        </Hidden>
        <Hidden mdUp>

            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link sx={{ textDecoration: 'undeline white' }} to={"/productDetail/" + product.id}>
                        <Typography sx={{ color: '#000' }} gutterBottom variant="subtitle1" component="div">
                            {product.title}
                        </Typography>
                    </Link>
                    <Box sx={{ display: 'flex' }}>         <IconButton aria-label="Delete"
                        onClick={() => dispatch(removeItem(product))} >
                        <DeleteIcon />
                    </IconButton>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 1 }}  >
                    <Box>
                        <img width="100" alt="" src={product.imageUrl} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flex: 1, pl: 1
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} disableSpacing>
                            <Chip label={category.name} size="medium" />

                            <Typography component="p" variant="button">
                                $ {product.price * cartProduct.units}
                            </Typography>

                        </Box>
                        <Counter
                            stock={product.stock}
                            initial={cartProduct && cartProduct.units ? cartProduct.units : 0}
                            onAdd={addTocart}></Counter>
                    </Box>
                </Box>
            </Box>
        </Hidden>
    </Box>
}
export default CartItem;