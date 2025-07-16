import { ChangeDetectorRef, Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewpatient',
  standalone: false,
  templateUrl: './viewpatient.html',
  styleUrl: './viewpatient.css'
})

export class Viewpatient {
  id:number=0;
  patient: Patient = new Patient();

  constructor(
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      console.log(data);
      this.patient = data;
      this.cdr.detectChanges();
    })
  }

  // getPatientByID(id: number) {
  //   return this.patientService.getPatientById(id).subscribe(value => {
  //     console.log(value);
  //     this.patient = value;
  //   })
  // }

  logout() {
    this.router.navigate(['/'])
  }
}
