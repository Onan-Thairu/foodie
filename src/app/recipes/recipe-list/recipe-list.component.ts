import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() chosenRecipeEvent = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe("Meat", "Meat Recipe", "https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg"),
    new Recipe("Chinese Rice", "Rice Recipe", "https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg")
  ]

  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.chosenRecipeEvent.emit(recipe)
  }

  ngOnInit() {
  }
}
