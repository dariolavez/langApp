import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit {

  constructor() { }

  op1:boolean=false;
  op2:boolean=false;
  op3:boolean=false;
  op4:boolean=false;
  op5:boolean=false;
  op6:boolean=false;

  ngOnInit() {}

}
