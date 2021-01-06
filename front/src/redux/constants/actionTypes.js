const asyncActionType = (type) => ({
    FETCH: `${type}_FETCH`,
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
});

export const LOGIN = asyncActionType('LOGIN');
export const USER = asyncActionType('USER');
export const PRODUCTS = asyncActionType('PRODUCTS');
export const PRODUCT_DETAIL = asyncActionType('PRODUCT_DETAIL');


