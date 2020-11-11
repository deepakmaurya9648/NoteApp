import { AuthService } from './shared/auth.service';
import { NotesService } from './shared/notes.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { ViewPageComponent } from './pages/view-page/view-page.component';



@NgModule({
  declarations: [
    AppComponent,
    
    MainLayoutComponent,
    NoteDetailsComponent,
    NoteListComponent,
    LoginComponent,
    SignupComponent,
    ViewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1000
    })

    
  ],
  providers: [NotesService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
