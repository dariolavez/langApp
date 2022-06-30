import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Palavra } from './Palavra';

const httpOtions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit{

  constructor(private http:HttpClient) {}

  palabras:any =[]

ngOnInit(): void {
  this.next()
  this.getItems().subscribe((data)=>{this.palabras=data; this.next()})  
}

  apiURL:string = "http://localhost:3000/getwords"

  getItems(): Observable<Palavra[]>{
    return this.http.get<Palavra[]>(this.apiURL)     
  }


  next(){
    if(this.palabras.length!=0){
      let number = Math.floor(Math.random() * this.palabras.length)
      this.wordEsp = this.palabras[number].espanol
      this.wordRus = this.palabras[number].ruso
    }
  }

  espanol:boolean=true;

//para el value de los inputs
  palabra = {
    enespanol:"",
    enruso:"",
  }

  wordEsp:string=""
  wordRus:string=""

  apiURL2:string = "http://localhost:3000/addword"

  addWord():any{
    if(!this.palabra.enespanol || !this.palabra.enruso)return
    return this.http.post<Palavra>(this.apiURL2, this.palabra, httpOtions) 
  }

  callAddWord(){
    this.addWord().subscribe((res)=>{
      if(res.status==200){
        this.palabras.push({espanol:this.palabra.enespanol, ruso:this.palabra.enruso}); 
        this.palabra.enespanol="";
        this.palabra.enruso="";
      }
    })
  }


/* 
  addWord(){

    if(!this.palabra.enespanol || !this.palabra.enruso)return
    this.palabras.push({espanol:this.palabra.enespanol, ruso:this.palabra.enruso})
    this.palabra.enespanol="";
    this.palabra.enruso="";

  }

 */




}
