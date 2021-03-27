import PRODUCTS from '../types/products'
import STATUS from '../constants/status'
const initialState = {
    products: [],
    status: 'idle',
    loading: false,
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS.FETCH: {
            return Object.assign({}, state, {
                loading: true,
                error: null,
                status: STATUS.PENDING
            });
        }
        case PRODUCTS.SUCCESS: {
            const products = Object.assign({}, state, {
                products: action.payload.data,
                error: null,
                loading: false,
                status: STATUS.SUCCESS
            });
            return products;
        }
        case PRODUCTS.ERROR: {
            return Object.assign({}, state, {
                error: action.payload,
                loading: false,
                status: STATUS.ERROR
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;