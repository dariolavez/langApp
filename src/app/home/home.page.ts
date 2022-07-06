import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Palavra } from './Palavra';
import { environment } from 'src/environments/environment.prod';
//import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{

  constructor(private http:HttpClient) {}

  palabras:any =[]
  ngOnInit(): void {
    this.getItems().subscribe((data)=>{

      let obj={}
      let wen = {correct:false, wrong:false}

      for (let index in data){
        obj=Object.assign({},data[index], wen)
        this.palabras.push(obj)
      }

      console.log(this.palabras)
      
      this.next()
    
    })  
  }

  getItems(): Observable<Palavra[]>{
    return this.http.get<Palavra[]>(environment.getwords)     
  }

  
  word:any="";
  wordindex:number;
  arrCounter = []
  counter:number=0
  next(){
    if(this.palabras.length!=0){
      let number = Math.floor(Math.random() * this.palabras.length)
      this.word = this.palabras[number]
      this.wordindex = number
      this.wrongselected = this.palabras[number].wrong      
      this.correctselected = this.palabras[number].correct

        let el = this.arrCounter.find(element=>element===this.palabras[number])
        if(el)return;
        this.arrCounter.push(this.palabras[number])
        this.counter++
        console.log(this.counter, this.palabras[number].espanol)
    }
  }

  //en true empieza en espanol, en false empieza en ruso
  espanol:boolean=true;


  green:number=0;
  red:number=0;

  wrongselected:boolean=false
  votewrong(number:number){
    //si el verde esta prendido, apagalo de la vista, del objeto, y restale 1 pto
    if(this.correctselected){this.correctselected=false; this.palabras[number].correct=false; this.green--}
    //si el rojo esta prendido, apagalo de la vista, del objeto, y restale 1 pto
    if(this.wrongselected){this.red--;this.wrongselected=false;this.palabras[number].wrong=false;}
    //sino, prendelo en la vista, en el objeto, y sumale 1 pto
    else{this.red++;this.wrongselected=true;this.palabras[number].wrong=true}
    
    
  }
  correctselected:boolean=false
  votecorrect(number:number){
    if(this.wrongselected){this.wrongselected=false; this.palabras[number].wrong=false; this.red--}
    if(this.correctselected){this.green--;this.correctselected=false; this.palabras[number].correct=false;}
    else{this.green++;this.correctselected=true;this.palabras[number].correct=true}
  }


}
