import { ChangeDetectorRef, Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  standalone: false,
  templateUrl: './medicinelist.html',
  styleUrl: './medicinelist.css'
})
export class Medicinelist {
  medicines: Medicine[] = [];

  constructor(
    private medicineService: MedicineService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMedicine();
  }

  getMedicine() {
    this.medicineService.getMedicine().subscribe(data => {
      this.medicines = data;
      this.cdr.detectChanges();
    })
  }

  update(id: number) {
    this.router.navigate(['updatemedicine', id]);
  }

  delete(id: number) {
    this.medicineService.delete(id).subscribe(value => {
      this.getMedicine();
    })
  }
}
