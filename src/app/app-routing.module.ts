import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from 'src/app/components/content/index/index.component';
import { Index2Component } from 'src/app/components/content/index2/index2.component';
import {DataComponent} from 'src/app/components/content/tables/data/data.component';


const routes: Routes = [
  { path: 'my-adminlte', redirectTo: '/my-adminlte/dashboard/index', pathMatch: 'full' },
  {path: 'my-adminlte/dashboard', children: [
    {
      path: '', component: IndexComponent
    },
    {
      path: 'index', component: IndexComponent
    },
    {
      path: 'index2', component: Index2Component
    }
  ]},
  {
    path: 'my-adminlte/tables', children: [
      {
        path: '', component: DataComponent
      },
      {
        path: 'data', component: DataComponent
      }      
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}