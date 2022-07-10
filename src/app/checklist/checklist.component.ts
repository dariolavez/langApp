import { Component, OnInit } from '@angular/core';
import { ClService } from '../services/cl.service';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit {

  subscription: Subscription;

  constructor(private cl:ClService) { 
    this.subscription = this.cl.onToggle().subscribe((data)=>{this.list=data})
  }

  ngOnInit() {
    this.list = this.cl.getList()
  }

list = []




toggleOption(index, op){
  this.cl.toggleOption(index, !op.checked)
}









}
