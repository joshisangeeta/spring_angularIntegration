import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookMasterComponent}from './book-master/book-master.component';
import {BookDetalComponent} from './book-detal/book-detal.component'
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/dashboard',pathMatch:'full' },
    {path:'dashboard',component:DashboardComponent},
    {path:'master',component:BookMasterComponent},
    {path:'addbook',component:AddComponent},
    {path:'details/:id',component:BookDetalComponent},
    {path:'edit/:id',component:EditComponent}
    //{path:'delete/:id',component:DeleteComponent},
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
