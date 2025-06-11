import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpatient',
  standalone: false,
  templateUrl: './createpatient.html',
  styleUrl: './createpatient.css'
})
export class Createpatient {
  constructor(
    private patientService:PatientService,
    private router: Router
  ){}

  patient:Patient=new Patient();

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(value=>{
      this.goToDashboard();
    });
    
  }

  onSubmit(){
    this.savePatient();
  }

  goToDashboard(){
    this.router.navigate(['/doctordashboard']);
  }
}
