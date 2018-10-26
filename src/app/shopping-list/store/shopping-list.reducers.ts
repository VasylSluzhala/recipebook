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
                ingredients: [...state.ingredients, action.payload]
            }
    }
    
    return state;
}