import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';

const appRouts: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'recipe', loadChildren: './recipes/recipe.module#RecipeModule'},
    { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouts)
    ]
})
export class AppRouteModule {

}