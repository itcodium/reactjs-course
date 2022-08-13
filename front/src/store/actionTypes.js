const asyncActionType = (type) => ({
    INIT: `${type}/init`,
    FETCH: `${type}/fetch`,
    SUCCESS: `${type}/success`,
    FETCH_BY_ID: `${type}/fetchById`,
    FETCH_BY_ID_SUCCESS: `${type}/fetchByIdSuccess`,
    LOADING: `${type}/loading`,
    ERROR: `${type}/error`,
    DELETE: `${type}/delete`,
    PUT: `${type}/put`,
    POST: `${type}/post`,
});

export const PRODUCTS = asyncActionType('products');
