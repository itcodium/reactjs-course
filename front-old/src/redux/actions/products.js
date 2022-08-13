import PRODUCTS from '../types/products';
import PRODUCT_DETAIL from '../types/productDetail';


const get = (payload) => ({
    type: PRODUCTS.FETCH,
    payload: payload
})
const getDetail = (payload) => {
    return {
        type: PRODUCT_DETAIL.FETCH,
        payload: payload
    }
}


const Products = {
    get: get,
    getDetail: getDetail
};
export default Products;

