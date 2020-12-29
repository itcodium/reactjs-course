import RECIPES from '../types/recipes';

const get = () => ({
    type: RECIPES.FETCH,
    payload: {}
})

const add = (payload) => ({
    type: RECIPES.ADD,
    payload: payload
})

const recipes = {
    add: add,
    get: get,
};
export default recipes;

