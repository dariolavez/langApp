import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { RouteView, StackEvent } from '@ionic/angular/directives/navigation/stack-utils';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  @ViewChild(IonTabs) tabs:IonTabs;


  imagen="../../../assets/icon/Flag_of_Russia.svg.webp"

  constructor() { }

  ngOnInit() {}

  selectedTabHome:boolean=false;
  selectedTabChecklist:boolean=false;


  sss(){

    let selected = this.tabs.getSelected()
    console.log(selected)
    if(selected=='home'){
      this.selectedTabHome=true;
      this.selectedTabChecklist=false
    }
      else if(selected=='checklist'){
        this.selectedTabHome=false;
        this.selectedTabChecklist=true;
      }

  }

  

}