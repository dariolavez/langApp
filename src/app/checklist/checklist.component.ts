import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  opciones = [
    {
      label: 'Vocabulario',
      checked: false
    },
    {
      label: 'Verbos',
      checked: false
    },
    {
      label: 'Adjetivos',
      checked: false
    },
    {
      label: 'Sustantivos',
      checked: false
    },
    {
      label: 'Dichos',
      checked: false
    },
    {
      label: 'Gramatica',
      checked: false
    }    
  ]










}
