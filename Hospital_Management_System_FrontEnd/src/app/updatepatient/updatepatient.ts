import { ChangeDetectorRef, Component } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-updatepatient',
  standalone: false,
  templateUrl: './updatepatient.html',
  styleUrl: './updatepatient.css'
})
export class Updatepatient {

  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  patient: Patient = new Patient();

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
      this.cdr.detectChanges();
    })
  }
  onSubmit() {
    this.patientService.updatePatient(this.id, this.patient).subscribe(data => {
      this.goToDocDash();
    })
  }

  goToDocDash() {
    this.router.navigate(['/doctordashboard']);
  }

  logout(){
    this.router.navigate(['/'])
  }
}
