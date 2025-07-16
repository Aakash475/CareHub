import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DoctorAuthService {
    constructor() { }

    authenticate(username: string, password: string) {
        if (username == "doctor" && password == "mbbs") {
            sessionStorage.setItem('username', username);
            return true;
        } else {
            return false;
        }
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('username')
        return !(user==null)
    }

    logout(){
        sessionStorage.removeItem('username')
    }
}