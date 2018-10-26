import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  editMode=false;
  editItemIndex:number;
  editItem: Ingredient;

  @ViewChild('f') slForm: NgForm;

  constructor(private slService: ShoppingListService, private store: Store<{shoppingList:{ingredients:Ingredient[]}}>) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
      );
  }

  onAddItem(form: NgForm){
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editItemIndex, ingredient);
    }
    else{
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
