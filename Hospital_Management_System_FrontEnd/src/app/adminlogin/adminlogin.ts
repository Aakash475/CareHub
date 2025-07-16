import { Component } from '@angular/core';
import { AdminAuthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: false,
  templateUrl: './adminlogin.html',
  styleUrl: './adminlogin.css'
})
export class Adminlogin {

  username:string=''
  password:string=''
  inInvalidCredentials=false

  constructor(
    private adminAuthService: AdminAuthService,
    private router: Router
  ){}

  checkLogin(){
    if(this.adminAuthService.authenticate(this.username,this.password)){
      this.router.navigate(['/admin'])
      this.inInvalidCredentials=false
    } else {
      this.inInvalidCredentials=true
      alert("Please Provide Correct Credentials")
      this.router.navigate(['/'])
    }
  }
}
