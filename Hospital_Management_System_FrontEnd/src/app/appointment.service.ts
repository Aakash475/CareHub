import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Appointments } from "./appointment";

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {
    constructor(private httpClient: HttpClient) {}
    private getUrl = "http://localhost:7302/appointment/findAllAppointments"
    private postUrl = "http://localhost:7302/appointment/register"
    private deleteUrl = "http://localhost:7302/appointment/remove"
    getAllAppointments():Observable<Appointments[]>{
        return this.httpClient.get<Appointments[]>(`${this.getUrl}`);
    }
    createAppointment(appointment:Appointments):Observable<Appointments>{
        return this.httpClient.post<Appointments>(`${this.postUrl}`,appointment);
    }
    deleteAppointment(id:number):Observable<object>{
        return this.httpClient.delete(`${this.deleteUrl}/${id}`);
    }
}