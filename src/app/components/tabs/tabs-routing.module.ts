import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistModule } from '../../checklist/checklist.module';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path:'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>import('../../home/home.module').then(m=>m.HomePageModule)
      },
      {
        path: 'checklist',
        loadChildren: () => import('../../checklist/checklist.module').then(m=>ChecklistModule)
      },
      {
        path:'',
        redirectTo:'/tabs/home',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/home',
    pathMatch:'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})


export class TabsComponentRoutingModule { }

