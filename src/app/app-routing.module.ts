import { ViewPageComponent } from './pages/view-page/view-page.component';
import { LoginComponent } from './login/login.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',component:NoteListComponent,canActivate:[AuthGuard]},
    {path:'new',component:NoteDetailsComponent,canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'view/:id/:title/:body',component:ViewPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
