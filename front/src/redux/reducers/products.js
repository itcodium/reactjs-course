import PRODUCTS from '../types/products'

function reducer(state = {}, action) {
    switch (action.type) {
        case PRODUCTS.FETCH: {
            console.log('PRODUCTS action: ', action);
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case PRODUCTS.SUCCESS: {
            const products = Object.assign({}, state, {
                payload: action.payload,
                error: false,
                loading: false,
            });
            return products;
        }
        case PRODUCTS.ERROR: {
            return Object.assign({}, state, {
                error: true,
                loading: false,
                payload: action.payload
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;