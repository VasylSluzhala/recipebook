import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'This is the simple test', 
            'https://photo2.foodgawker.com/wp-content/uploads/2017/10/3096288.jpg',
            [
                new Ingredient("Meet", 1),
                new Ingredient("Bread", 2)
            ]),
        new Recipe(
            'Test Recipe Another', 
            'This is the simple test', 
            'https://photo2.foodgawker.com/wp-content/uploads/2017/10/3096288.jpg',
            [
                new Ingredient("Sault", 1),
                new Ingredient("Onion", 5)
            ]
            )
      ];

    constructor(private slService: ShoppingListService) {}
    
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
} 