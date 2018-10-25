import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { NoRecipeSelectedComponent } from "./no-recipe-selected/no-recipe-selected.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipeRoutes: Route[] = [{
    path: '',
    component: RecipesComponent,
    children: [
        { path: '', component: NoRecipeSelectedComponent, pathMatch: 'full' },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ]
}];

@NgModule({
    imports:[
        RouterModule.forChild(recipeRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class RecipeRouteModule{

}