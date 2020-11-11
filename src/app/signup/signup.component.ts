import { NotesService } from './../shared/notes.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  first_name:string;
  last_name:string;
  username:string;
  email:EmailValidator;
  password:string;
  constructor(private noteService:NotesService,private route:Router) { }

  ngOnInit(): void {
  }
signup(){
  this.noteService.signupNote(this.first_name,this.last_name,this.username,this.email,this.password).subscribe(data=>{
    console.log(data);
    this.route.navigateByUrl('/login');

  });
  
}
}
