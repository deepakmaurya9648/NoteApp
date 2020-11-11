import { NotesService } from './../../shared/notes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
  id:any;
  title:string;
  body:string;
  constructor(private route:ActivatedRoute,private noteService:NotesService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.title=this.route.snapshot.params['title']
    this.body=this.route.snapshot.params['body']
  
}
update(id){
  this.noteService.updateNote(id,this.title,this.body).subscribe(data=>{
    this.router.navigateByUrl('/')

  })
}

}