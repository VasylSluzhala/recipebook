import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is the simple test', 'https://photo2.foodgawker.com/wp-content/uploads/2017/10/3096288.jpg'),
    new Recipe('Test Recipe', 'This is the simple test', 'https://photo2.foodgawker.com/wp-content/uploads/2017/10/3096288.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
