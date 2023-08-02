import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({ 
  providedIn: 'root' 
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe("Meat", "Meat Recipe", "https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg"),
    new Recipe("Chinese Rice", "Rice Recipe", "https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg")
  ]

  getRecipes() {
    return this.recipes
  }
}