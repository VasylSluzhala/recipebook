import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRouts: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'recipe', loadChildren: './recipes/recipe.module#RecipeModule'},
    { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouts, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouteModule {

}