import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createmedicine',
  standalone: false,
  templateUrl: './createmedicine.html',
  styleUrl: './createmedicine.css'
})
export class Createmedicine {

  medicine:Medicine=new Medicine();

  constructor(
    private medicineService: MedicineService,
    private router: Router
  ){}

  saveMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(value=>{
      console.log(value);
      this.goToMedicineList()
    });
  }

  onSubmit(){
    this.saveMedicine();
  }

  goToMedicineList(){
    this.router.navigate(['/medicinelist'])
  }
}
