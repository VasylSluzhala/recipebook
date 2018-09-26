import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRouts: Route[] = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    { 
        path: 'recipe', 
        component: RecipesComponent, 
        children: [
            {path: '', component:NoRecipeSelectedComponent, pathMatch:'full' },
            {path: ':id', component: RecipeDetailComponent}
        ] 
    },
    { path: 'shopping-list', component: ShoppingListComponent }
    //{ path: '**', redirectTo: 'recipe'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouts)
]
})
export class AppRouteModule {

}