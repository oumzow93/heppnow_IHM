import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-home',
  templateUrl: './first-home.component.html',
  styleUrls: ['./first-home.component.scss']
})
export class FirstHomeComponent implements OnInit  {
  
  _nom!:string;
  _prix!:string;
  _date!:Date;
  _descritption!:string;
  _urlImage!:string;

  ngOnInit(){
    this._nom = "Ordinateur HP";
    this._prix= "450.99";
    this._date = new Date();
    this._urlImage ="https://media.carrefour.fr/medias/4810db2f5c453177932274e2880bcd58/p_540x540/0195697601934-photosite-20210921-164808-1.jpg"

  }

}
