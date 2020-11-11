import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private router:Router,public authService:AuthService) { }

  ngOnInit(): void {
    
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  
}
