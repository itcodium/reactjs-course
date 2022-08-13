const asyncActionType = (type) => ({
    INIT: `${type}_INIT`,
    FETCH: `${type}_FETCH`,
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
    DELETE: `${type}_DELETE`,
    PUT: `${type}_PUT`,
    POST: `${type}_POST`,
});

export const LOGIN = asyncActionType('LOGIN');
export const USER = asyncActionType('USER');
export const PRODUCTS = asyncActionType('PRODUCTS');
export const PRODUCT_DETAIL = asyncActionType('PRODUCT_DETAIL');
export const MENU = asyncActionType('MENU');
export const MODULE = asyncActionType('MODULE');
export const PERFIL = asyncActionType('PERFIL');



