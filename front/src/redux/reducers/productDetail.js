import PRODUCT_DETAIL from '../types/productDetail'
const initialState = {
    product: {},
    status: 'idle',
    loading: false,
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_DETAIL.FETCH: {
            return Object.assign({}, state, {
                status: "loading"
            });
        }
        case PRODUCT_DETAIL.SUCCESS: {
            const products = Object.assign({}, state, {
                product: action.payload.data,
                status: "succeeded"
            });
            return products;
        }
        case PRODUCT_DETAIL.ERROR: {
            return Object.assign({}, state, {
                error: action.payload,
                status: "failed"
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;