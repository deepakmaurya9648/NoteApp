import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  
  token:any;
  constructor(private authService:AuthService,private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void { 
  }
  showToastr(){
    
    positionClass: 'toast-top-center'
    this.toastr.error('oye chutiye ! ,username aur password correct fill kr.');
  }
  login(){

    this.authService.loginNote(this.username,this.password).subscribe(data=>{
      this.token=data;
      if(this.token.Token)
      { 
        console.log("token",this.token);
        localStorage.setItem('token',this.token.Token);
        this.route.navigateByUrl('/');
      }
     else{
        this.showToastr();
        this.route.navigateByUrl('/login');
     }
    });
  }
  
  }

