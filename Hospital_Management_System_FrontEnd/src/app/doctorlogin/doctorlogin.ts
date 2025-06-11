import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorAuthService } from '../doctorauth.service';

@Component({
  selector: 'app-doctorlogin',
  standalone: false,
  templateUrl: './doctorlogin.html',
  styleUrl: './doctorlogin.css'
})
export class Doctorlogin {
  username: string = '';
  password: string = '';
  invalidLoginCredentials = false;

  constructor(
    private router: Router,
    private doctorAuth: DoctorAuthService
  ) { }

  checkLogin() {
    if (this.doctorAuth.authenticate(this.username, this.password)) {
      this.router.navigate(['/doctordashboard'])
      this.invalidLoginCredentials = false
    } else {
      alert("Please Provide Correct Credentials")
      this.router.navigate(['/'])
      this.invalidLoginCredentials = true
    }
  }
}
