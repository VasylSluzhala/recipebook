import { Subject } from "rxjs";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

export class RecipeService{

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Fish', 
            'This is the simple test', 
            'https://photo2.foodgawker.com/wp-content/uploads/2017/10/3096288.jpg',
            [
                new Ingredient("Meet", 1),
                new Ingredient("Bread", 2)
            ]),
        new Recipe(
            'Salat', 
            'This is the simple test', 
            'https://gotovim-doma.ru/images/recipe/4/62/46259738bf7d2b0f646e03b006740d54.jpg',
            [
                new Ingredient("Sault", 1),
                new Ingredient("Onion", 5)
            ]
            )
      ];
    
    getRecipe(index: number){
        return this.recipes[index];
    }

    getRecipes(){
        return this.recipes.slice();
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(newrecipes: Recipe[]){
        this.recipes = newrecipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
} 