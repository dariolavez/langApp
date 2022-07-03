import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Palavra } from './Palavra';
import { environment } from 'src/environments/environment.prod';
//import { environment } from 'src/environments/environment';



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
  this.getItems().subscribe((data)=>{

    let obj={}

    for (let index in data){
      obj=Object.assign({},data[index], {correct:false, wrong:false})
      this.palabras.push(obj)
    }

    console.log(this.palabras)
    

    this.next()
  
  })  
}


  getItems(): Observable<Palavra[]>{
    return this.http.get<Palavra[]>(environment.getwords)     
  }

  word:string=""
  wordindex:number
  next(){
    if(this.palabras.length!=0){
      let number = Math.floor(Math.random() * this.palabras.length)
      this.word = this.palabras[number]
      this.wordindex = number
      this.wrongselected = this.palabras[number].wrong      
      this.correctselected = this.palabras[number].correct
    }
  }

  espanol:boolean=true;

//para el value de los inputs
  palabra = {
    enespanol:"",
    enruso:"",
  }




  addWord():any{
    if(!this.palabra.enespanol || !this.palabra.enruso)return
    return this.http.post<Palavra>(environment.addword, this.palabra, httpOtions) 
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



  wrongselected:boolean=false
  votewrong(number:number){
    
    if(this.correctselected)this.correctselected=false;
    this.wrongselected=!this.wrongselected;
    this.palabras[number].wrong=!this.palabras[number].wrong
  }
  correctselected:boolean=false
  votecorrect(number:number){
    if(this.wrongselected)this.wrongselected=false;
    this.correctselected=!this.correctselected;
    this.palabras[number].correct=!this.palabras[number].correct
    console.log(this.palabras[number].correct)
    
  }


}
