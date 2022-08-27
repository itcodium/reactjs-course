import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux'
import STATUS from '../../../store/status';
import ProductList from '../components/List'
import Categories from '../components/Categories'
import { fetch } from '../reducers/products'
import { useParams } from "react-router-dom";

const ProductsListContainer = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);
    const products = useSelector(state => state.products.data);
    let { id } = useParams();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        dispatch(fetch({ categoryId: id }));
    }, [id])
    return (
        <>
            <Categories></Categories>
            {status === STATUS.SUCCESS && <ProductList products={products} ></ProductList> }
            {status === STATUS.LOADING ? <Box sx={{ p: 3, display: 'block', textAlign: 'center', }}><CircularProgress /> </Box> : null}
            {status === STATUS.ERROR ? <Typography color="error" variant="overline" display="block" gutterBottom>{error.message}</Typography> : null}
        </>
    )
}

export default ProductsListContainer;