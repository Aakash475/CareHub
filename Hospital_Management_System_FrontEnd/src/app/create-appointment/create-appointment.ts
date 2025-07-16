import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { Appointments } from '../appointment';
import { AdminAuthService } from '../adminauth.service';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.html',
  styleUrl: './create-appointment.css'
})
export class CreateAppointment {

  appointment:Appointments=new Appointments();

  constructor(
    private appointmentService:AppointmentService, 
    private router: Router,
    private adminAuthService: AdminAuthService
  ){}

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(value=>{
      this.goToAppointment();
    })
  }
  onSubmit(){
    this.saveAppointment();
  }
  goToAppointment(){
    this.router.navigate(['/appointmentlist'])
  }
  logout(){
    this.adminAuthService.logout();
    this.router.navigate(['/'])
  }
}
