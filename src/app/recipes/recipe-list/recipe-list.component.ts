import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe ('A Test Recipe' , 'This is a Test' ,'https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg?width=910&height=512'),
    new Recipe ('A Test Recipe' , 'This is a Test' ,'https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg?width=910&height=512')
  ];

  constructor() { }

  ngOnInit() {
  }

}
