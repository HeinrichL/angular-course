import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: []
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    console.log("selected in listitem")
    this.recipeSelected.emit(this.recipe);
  }
}
