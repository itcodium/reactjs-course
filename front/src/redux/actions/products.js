import PRODUCTS from '../types/products';

const get = (payload) => ({
    type: PRODUCTS.FETCH,
    payload: payload
})

const Products = {
    get: get
};
export default Products;

