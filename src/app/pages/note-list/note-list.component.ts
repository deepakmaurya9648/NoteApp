import { NotesService } from './../../shared/notes.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  value:any;
  constructor(private notesService:NotesService) { }
  

  ngOnInit(): void {
    this.getNoteData();
  }
  
  getNoteData(){
    this.notesService.getNote().subscribe((data)=>{
      this.value=data;
      console.log(this.value);
    });
  }

  delete(j){
  
   this.notesService.deleteNote(j).subscribe(data=>{
     console.log(data);
     this.getNoteData();
 
   });
  }
  
}
