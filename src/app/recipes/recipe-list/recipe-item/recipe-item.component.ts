import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipeItem: any
  @Output() recipeDetailEvent = new EventEmitter<void>()

  onRecipeClick() {
    this.recipeDetailEvent.emit() 
  }
}