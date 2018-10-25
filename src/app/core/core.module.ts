import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { AppRouteModule } from "../app-route.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        SharedModule,
        AppRouteModule
    ],
    exports:[
        HeaderComponent,
        AppRouteModule
    ],
    providers:[ShoppingListService, DataStorageService, RecipeService, AuthService]
})
export class CoreModule{
}