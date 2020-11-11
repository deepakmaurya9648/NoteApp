import { AuthService } from './shared/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService:AuthService,private router:Router){}
  canActivate():boolean{
    if(this.authService.loggedIn()){
      return true
    } else{
      this.router.navigateByUrl('/login')
      return false
    }
  }
}
