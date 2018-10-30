import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Bread', 2)
      ];

    getShoppingList(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }
}