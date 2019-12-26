import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent} from './list/list.component';
import {ViewComponent} from './view/view.component';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';
import {AllComponent} from './all/all.component';


// const routes: Routes = [
//   {path:"list",component:ListComponent},
//   {path:"view",component:ViewComponent},
//   {path:"edit",component:EditComponent},
//   {path:"delete",component:DeleteComponent},
//   {path:"all",component:AllComponent}
// ];

const routes: Routes =[
{path:"storemaster",
children:[
  {path:"list",component:ListComponent},
  {path:"view",component:ViewComponent},
  {path:"edit",component:EditComponent},
  {path:"delete",component:DeleteComponent},
  {path:"all",component:AllComponent}
]
},
{
  path:"inventory",
  children:[
    {path:"list",component:ListComponent},
    {path:"view",component:ViewComponent},
    {path:"edit",component:EditComponent},
    {path:"delete",component:DeleteComponent},
    {path:"all",component:AllComponent}
  ]
},
  {
    path:"itemmaster",
    children:[
      {path:"list",component:ListComponent},
      {path:"view",component:ViewComponent},
      {path:"edit",component:EditComponent},
      {path:"delete",component:DeleteComponent},
      {path:"all",component:AllComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
