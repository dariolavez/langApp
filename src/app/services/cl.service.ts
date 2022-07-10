import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClService {

  private subscrition:Subscription

  constructor() { }

  private subject = new Subject<any>()//list



  vocabulario = [
    {section:'saludos', selected:false},
    {section:'despedidas',selected:false},
    {section:'frases', selected:false},
    {section:'restaurante', selected:false},
    {section:'telefono', selected:false},
  ]
  verbos = [
    {section:'regulares', selected:false},
    {section:'irregulares',selected:false},
  ]

  lista = [
    {label: 'Vocabulario', checked: true, category:this.vocabulario},
    {label: 'Verbos', checked: false, category: this.verbos},
    {label: 'Adjetivos', checked: false},
    {label: 'Sustantivos',checked: false},
    {label: 'Dichos', checked: false},
    {label: 'Gramatica', checked: false}    
  ]


getList(){
  return this.lista;
}
toggleOption(position:number, check:boolean){
  console.log(position, check)
  this.lista[position].checked = check
  this.subject.next(this.lista)
}
onToggle():Observable<any>{
  return this.subject.asObservable()
}




getCategories(){
  let arr = this.lista.filter(element => element.checked==true)
  let categorias = []
  for (let cat in arr)
    for (let i in arr[cat].category)
    categorias.push(arr[cat].category[i])
    return categorias;
}














}//service
