import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})

export class MedicineService {
    constructor(private httpClient: HttpClient) { }

    private getUrl = "http://localhost:7302/medicine/findAllMedicines"
    private postUrl = "http://localhost:7302/medicine/register"
    private getByIDUrl = "http://localhost:7302/medicine/findMedicine"
    private putUrl = "http://localhost:7302/medicine/updatemedicine"
    private deleteUrl = "http://localhost:7302/medicine/remove"
    
    getMedicine():Observable<Medicine[]>{
      return this.httpClient.get<Medicine[]>(`${this.getUrl}`);
    }

    createMedicine(medicine:Medicine):Observable<Medicine>{
      return this.httpClient.post<Medicine>(`${this.postUrl}`,medicine);
    }

    getMedicineById(id:number):Observable<Medicine>{
      return this.httpClient.get<Medicine>(`${this.getByIDUrl}/${id}`);
    }

    updateMedicine(id:number,medicine:Medicine):Observable<object>{
      return this.httpClient.put<Medicine>(`${this.putUrl}/${id}`,medicine);
    }

    delete(id:number):Observable<object>{
      return this.httpClient.delete(`${this.deleteUrl}/${id}`);
    }
}