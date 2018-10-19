import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRouts: Route[] = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    {
        path: 'recipe',
        component: RecipesComponent,
        children: [
            { path: '', component: NoRecipeSelectedComponent, pathMatch: 'full' },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
    //{ path: '**', redirectTo: 'recipe'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouts)
    ]
})
export class AppRouteModule {

}