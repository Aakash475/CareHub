import { ChangeDetectorRef, Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { DoctorAuthService } from '../doctorauth.service';

@Component({
  selector: 'app-doctordash',
  standalone: false,
  templateUrl: './doctordash.html',
  styleUrl: './doctordash.css'
})
export class Doctordash {
  constructor(
    private patientServices: PatientService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private doctorAuthService: DoctorAuthService
  ) { }

  patients: Patient[] = [];

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients() {
    this.patientServices.getPatientList().subscribe(value => {
      this.patients = value;
      this.cdr.detectChanges();
    })
  }

  update(id: number) {
    this.router.navigate(['/updatepatient', id]);
  }

  delete(id: number) {
    this.patientServices.delete(id).subscribe(value => {
      this.getPatients();
    })
  }

  view(id:number){
    this.router.navigate(['/viewpatient',id]);
  }

  logout(){
    this.doctorAuthService.logout();
    this.router.navigate(['/'])
  }
}
