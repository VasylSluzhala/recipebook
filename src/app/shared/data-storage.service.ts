import { RecipeService } from './../recipes/recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {
    }

    saveData() {
        const token = this.authService.getToken();
        return this.httpClient.put('https://recipes-3f8ca.firebaseio.com/recipes.json', 
        this.recipeService.getRecipes(), {
                params: new HttpParams().set('auth', token)
            });
    }

    getData() {
        const token = this.authService.getToken();
        return this.httpClient.get<Recipe[]>('https://recipes-3f8ca.firebaseio.com/recipes.json?auth=' + token, {
            observe: 'body',
            responseType: 'json'
        })
            .pipe(
                map(
                    (recipes) => {
                        for (let recipe of recipes) {
                            if (!recipe['ingredients']) {
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