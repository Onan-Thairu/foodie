import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipeItem!: Recipe
  @Output() recipeDetailEvent = new EventEmitter<void>()

  constructor(private recipeService: RecipeService) {}

  onRecipeClick() {
    this.recipeService.recipeSelected.emit(this.recipeItem)
  }
}