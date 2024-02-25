import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Kung Pao Chicken', 'a test','https://resource02.ulifestyle.com.hk/ulcms/content/article/thumbnail/1280x720/uf/2930000/2932878/100.jpg'),
    new Recipe('Guo Bao Rou', 'a test','https://media-cdn.tripadvisor.com/media/photo-s/13/bd/b8/7a/guo-bao-rou.jpg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }
}



