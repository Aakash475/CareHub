import { ChangeDetectorRef, Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointments } from '../appointment';
import { Router } from '@angular/router';
import { AdminAuthService } from '../adminauth.service';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.html',
  styleUrl: './appointment.css'
})
export class Appointment {

  appointments: Appointments[] = [];

  constructor(
    private appointmentServices: AppointmentService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private adminAuthService: AdminAuthService
  ) { }

  ngOnInit():void{
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentServices.getAllAppointments().subscribe(value=>{
      this.appointments = value;
      this.cdr.detectChanges();
    });
  }

  delete(id:number) {
    this.appointmentServices.deleteAppointment(id).subscribe(value=>{
      this.getAppointments();
    })
  }

  logout(){
    this.adminAuthService.logout();
    this.router.navigate(['/'])
  }
}
