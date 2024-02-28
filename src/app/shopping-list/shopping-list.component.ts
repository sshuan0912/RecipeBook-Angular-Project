import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];

  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }

  constructor(private shoppingListServie: ShoppingListService){}

  ingredients: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shoppingListServie.getIngredients();
    this.shoppingListServie.ingredientsChange
      .subscribe(
        (ingredients: Ingredient[])=>{
          this.ingredients = ingredients;
        }
      );
  }



}
