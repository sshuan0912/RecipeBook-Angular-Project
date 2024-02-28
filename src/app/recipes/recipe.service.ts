import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    constructor(private shoppingListService: ShoppingListService){};

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Kung Pao Chicken', 
            'A traditional Sichuan spicy dish',
            'https://resource02.ulifestyle.com.hk/ulcms/content/article/thumbnail/1280x720/uf/2930000/2932878/100.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Cucumber', 2),
                new Ingredient('Pepper', 3)]),
        new Recipe(
            'Guo Bao Rou', 
            'a meat dish from Northeast of China with sweet and sour taste',
            'https://media-cdn.tripadvisor.com/media/photo-s/13/bd/b8/7a/guo-bao-rou.jpg',
            [
                new Ingredient('Pork', 1),
                new Ingredient('Vinegar', 0.5),
                new Ingredient('Starch', 0.5)
            ]
            )
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}