import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Bread', 2)
    ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const oldIngredient = state.ingredients[action.payload.index];
            const newIngredient = {
                ...oldIngredient,
                ...action.payload.ingredient
            }
            const newIngredients = [...state.ingredients];
            newIngredients[action.payload.index] = newIngredient;
            return {
                ...state,
                ingredients: newIngredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(action.payload.index, 1);
            return {
                ...state,
                ingredients: oldIngredients
            }
        default:
            return state;
    }
}