import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  constructor(private http:HttpClient) { }
   
  getNote(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization' : 'Token  '+localStorage.getItem('token')
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get("http://127.0.0.1:8000/getNote",requestOptions);
 }
  postNote(title:string,body:string){
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization' : 'Token  '+localStorage.getItem('token')
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.post("http://127.0.0.1:8000/postNote",{title:title,body:body},requestOptions);
  }
  deleteNote(id){
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization' : 'Token  '+localStorage.getItem('token')
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.delete("http://127.0.0.1:8000/deleteNote/"+id+"/",requestOptions);
  }
  signupNote(first_name:string,last_name:string,username:string,email:EmailValidator,password:string){
    return this.http.post("http://127.0.0.1:8000/register",{first_name:first_name,last_name:last_name,username:username,email:email,password:password});
  }
  updateNote(id,title:string,body:string){
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization' : 'Token  '+localStorage.getItem('token')
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.patch("http://127.0.0.1:8000/updateNote/"+id+"/",{title:title,body:body},requestOptions)
  }
}
