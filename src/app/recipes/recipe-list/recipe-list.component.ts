import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() chosenRecipeEvent = new EventEmitter<Recipe>()

  recipes!: Recipe[]

  constructor(private recipeService: RecipeService) {}

  onRecipeSelected(recipe: Recipe) {
    this.chosenRecipeEvent.emit(recipe)
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }
}
