import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: []
})
export class RecipeComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}