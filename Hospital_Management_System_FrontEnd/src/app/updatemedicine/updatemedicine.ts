import { ChangeDetectorRef, Component } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-updatemedicine',
  standalone: false,
  templateUrl: './updatemedicine.html',
  styleUrl: './updatemedicine.css'
})
export class Updatemedicine {
  medicine:Medicine=new Medicine();

  id:number=0;
  constructor(
    private route: ActivatedRoute,
    private medicineService: MedicineService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(value=>{
      this.medicine = value;
      this.cdr.detectChanges();
    })
  }

  onSubmit(){
    this.medicineService.updateMedicine(this.id,this.medicine).subscribe(value=>{
      this.goToMedicineList();
    })
  }

  goToMedicineList(){
    this.router.navigate(['/medicinelist'])
  }

  logout(){
    this.router.navigate(['/'])
  }
}
