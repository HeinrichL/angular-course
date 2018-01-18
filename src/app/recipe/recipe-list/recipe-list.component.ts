import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: []
})
export class RecipeListComponent implements OnInit {
  recipe = new Recipe("Enchilada", "lecker", "https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/b/800/beef-enchiladas.ashx?vd=20171018T134025Z&hash=739AF040A2F3E0DF060F34B207B6344921E1ADCA")
  
  selectedRecipe : Recipe;

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe)
  }
}
