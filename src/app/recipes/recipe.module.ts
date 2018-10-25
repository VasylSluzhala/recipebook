import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { NoRecipeSelectedComponent } from "./no-recipe-selected/no-recipe-selected.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeRouteModule } from "./recipe-rote.module";
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "../auth/auth-guard.service";

@NgModule({
    declarations: [
        NoRecipeSelectedComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipesComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeRouteModule,
        SharedModule
    ],
    providers:[AuthGuard]
})
export class RecipeModule{

}