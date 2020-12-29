import RECIPES from '../types/recipes'

const recipesReducer = (recipes, action) => {

    switch (action.type) {
        case RECIPES.ADD:
            return recipes.concat({
                name: action.payload.name,
                description: action.payload.description
            });
        default: {
            return recipes;
        }
    }
};

function reducer(state = [], action) {

    switch (action.type) {
        case RECIPES.FETCH: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case RECIPES.SUCCESS: {
            return Object.assign({}, state, {
                recipes: action.payload.recipes,
                error: false,
                loading: false,
            });
        }
        case RECIPES.ERROR: {
            return Object.assign({}, state, {
                error: true,
                loading: false,
                payload: action.payload

            });
        }
        case RECIPES.ADD: {
            return Object.assign({}, state, {
                recipes: recipesReducer(state.recipes, action)
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;