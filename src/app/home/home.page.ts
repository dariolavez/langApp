import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}




  previous(){
    console.log("previous")
  }

  next(){

    let number = Math.floor(Math.random() * this.palabras.length)
    this.word = this.palabras[number].espanol


  }

  palabra = {
    enespanol:"",
    enruso:"",
  }

  word:string=""
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
