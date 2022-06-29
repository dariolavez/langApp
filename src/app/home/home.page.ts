import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

ngOnInit(): void {
  this.next()
}


  previous(){
    console.log("previous")
  }

  next(){
    if(this.palabras.length!=0){
      let number = Math.floor(Math.random() * this.palabras.length)
      this.wordEsp = this.palabras[number].espanol
      this.wordRus = this.palabras[number].ruso
    }

  }

  espanol:boolean=true;

  palabra = {
    enespanol:"",
    enruso:"",
  }

  wordEsp:string=""
  wordRus:string=""

  palabras = [
    {espanol:'oso', ruso:'bear'},
    {espanol:'uva', ruso:'grape'},
    {espanol:'conejo', ruso:'bunny'},
    {espanol:'dog', ruso:'perro'},
    {espanol:'bestia', ruso:'beast'},
  ]

  add(){
    if(!this.palabra.enespanol || !this.palabra.enruso)return
    this.palabras.push({espanol:this.palabra.enespanol, ruso:this.palabra.enruso})
    this.palabra.enespanol="";
    this.palabra.enruso="";
  }






}
