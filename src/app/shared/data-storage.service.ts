import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService) {
    }

    saveData(){
        return this.http.put('https://recipes-3f8ca.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getData(){
        return this.http.get('https://recipes-3f8ca.firebaseio.com/recipes.json')
        .pipe(
            map((response: Response) =>{
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            })
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}