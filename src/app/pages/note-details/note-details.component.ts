import { NotesService } from './../../shared/notes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  title:string;
  body:string;
  constructor(private notesService:NotesService,private router:Router) { }

  ngOnInit(): void {
  }
  cancel(){
    this.router.navigateByUrl('/');
  }
  postData(){
    this.notesService.postNote(this.title,this.body).subscribe((data)=>{
      console.log("post",data);
      this.router.navigateByUrl('/');
    })
  }
}
