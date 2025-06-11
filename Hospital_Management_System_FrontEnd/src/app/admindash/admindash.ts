import { ChangeDetectorRef, Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminAuthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.html',
  styleUrls: ['./admindash.css']
})
export class Admindash {

  patients: Patient[] = [];
  constructor(
    private patientService: PatientService,
    private cdr: ChangeDetectorRef,
    private adminauthService: AdminAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientList().subscribe(value => {
      this.patients = value;
      this.cdr.detectChanges();
    });
  }

  delete(id:number) {
    this.patientService.delete(id).subscribe(value=>{
      this.getPatients();
    })
  }

  logout(){
    this.adminauthService.logout();
    this.router.navigate(['/'])
  }
}
