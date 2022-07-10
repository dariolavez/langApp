import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Palavra } from './Palavra';
import { environment } from 'src/environments/environment.prod';
//import { environment } from 'src/environments/environment';
import { ClService } from '../services/cl.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{

  subscription:Subscription

  constructor(private http:HttpClient, private cl:ClService) {
    this.subscription = this.cl.onToggle().subscribe((data)=>{
      
      this.categorias = this.cl.getCategories()

    })
  }

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
    this.categorias = this.cl.getCategories()



  }//ngOnInit

  getItems(): Observable<Palavra[]>{
    return this.http.get<Palavra[]>(environment.getwords)     
  }
 
  
  word:any="";//muestra la palabra en espanol y ruso en el card
  wordindex:number;//
  arrCounter = []
  counter:number=0
  next(){
    //si el array no esta vacio y sin-repeticiones esta apagado
    if(this.palabras.length!=0 && this.aleatorio==false){
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
    //si se activa "sin repeticiones"
    else if (this.aleatorio==true){
      
      if(this.palabras.length == this.palabrasrandom.length) this.reset()
      let number;
      let encontrao;
      do{
        number = Math.floor(Math.random() * this.palabras.length)
        encontrao = this.palabrasrandom.find(el=>el===this.palabras[number])
        if(encontrao==undefined){
          this.palabrasrandom.push(this.palabras[number]); 
          this.word=this.palabras[number]; 
          this.wrongselected = this.palabras[number].wrong      
          this.correctselected = this.palabras[number].correct
          console.log(this.palabrasrandom)}
        
      }while(encontrao!=undefined)

      
 




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
    else if(this.aleatorio==false){this.red++;this.wrongselected=true;this.palabras[number].wrong=true}
    else {{this.red++;this.wrongselected=true;}}
  }

  //para el class de correct selected
  correctselected:boolean=false
  votecorrect(number:number){
    if(this.wrongselected){this.wrongselected=false; this.palabras[number].wrong=false; this.red--}
    if(this.correctselected){this.green--;this.correctselected=false; this.palabras[number].correct=false;}
    else if(this.aleatorio==false){this.green++;this.correctselected=true;this.palabras[number].correct=true}
    else {{this.green++;this.correctselected=true;}}
  }



categorias = []
  
sliderConfigMovie = {
  slidesPerView: 2.7      
}


reset(){
  this.correctselected=false;
  this.wrongselected=false;
  this.green=0;
  this.red=0
  this.counter = 1
  this.palabrasrandom = []
  for (let index in this.palabras){
    this.palabras[index].correct=false;
    this.palabras[index].worng=false;    
  }
}


selectsec(obj){
  let index = this.categorias.indexOf(obj)
  this.categorias[index].selected = !this.categorias[index].selected 
}





aleatorio:boolean=false
palabrasrandom = []
toggleAleatorio(){
  this.aleatorio = !this.aleatorio  
  this.reset()
  if(this.palabras.length!=0 && this.aleatorio==true){
   
/*
    this.palabrasrandom=[]
    let coun = 0 
/* no funciona no se por que
    do{     
      let number = Math.floor(Math.random() * this.palabras.length)      
      let pal = this.palabras[number]     
      let el = this.palabrasrandom.find((element)=>{        
        return element===this.palabras[number]        
        })
  
     if(el==undefined){this.palabrasrandom.push(pal); coun++}    
    console.log(coun) 
    }while(coun<=this.palabras.length)
 */
/* 
  this.palabrasrandom = []
  let number;
  let count = 0
  do{
    number = Math.floor(Math.random() * this.palabras.length)
    let encontrao = this.palabrasrandom.find(el=>el===this.palabras[number])
    if(encontrao==undefined){this.palabrasrandom.push(this.palabras[number]); }
    count++
    }while(this.palabrasrandom.length!=this.palabras.length)

     */
}//if


}


}//class
