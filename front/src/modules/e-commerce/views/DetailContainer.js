import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import ProductDetail from '../components/Detail'
import { STATUS } from '../../../App.exports';
import Categories from '../components/Categories';
import { fetch } from '../reducers/detail';

const ProductsDetailContainer = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.productsDetail.status);
    const error = useSelector(state => state.productsDetail.error);
    const product = useSelector(state => state.productsDetail.data);
    let { id } = useParams();
    useEffect(() => {
        console.log("id", id)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        dispatch(fetch({ id: id }));

    }, [])
    return (
        <>
            <Categories></Categories>
          {status === STATUS.SUCCESS ?
                <ProductDetail product={product} ></ProductDetail>
                : null}
            {status === STATUS.LOADING ? <Box sx={{ p: 3, display: 'block', textAlign: 'center', }}><CircularProgress /> </Box> : null}
            {status === STATUS.ERROR ? <Typography color="error" variant="overline" display="block" gutterBottom>{error.message}</Typography> : null}
        </>
    )
}
export default ProductsDetailContainer;