import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admindash } from './admindash/admindash';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { Homedashboard } from './homedashboard/homedashboard';
import { Doctordash } from './doctordash/doctordash';
import { Createpatient } from './createpatient/createpatient';
import { Medicinelist } from './medicinelist/medicinelist';
import { Createmedicine } from './createmedicine/createmedicine';
import { Updatepatient } from './updatepatient/updatepatient';
import { Viewpatient } from './viewpatient/viewpatient';
import { Updatemedicine } from './updatemedicine/updatemedicine';
import { Doctorlogin } from './doctorlogin/doctorlogin';
import { Adminlogin } from './adminlogin/adminlogin';
import { AdminAuthGuardService } from './adminauthguard.service';
import { DoctorAuthGuardService } from './doctorauthguard.service';

const routes: Routes = [
  {path:'admin',component:Admindash, canActivate:[AdminAuthGuardService]},
  {path:'appointmentlist',component:Appointment, canActivate:[AdminAuthGuardService]},
  {path:'create-appointment', component:CreateAppointment, canActivate:[AdminAuthGuardService]},
  {path:'', component:Homedashboard},
  {path:'doctordashboard', component:Doctordash, canActivate:[DoctorAuthGuardService]},
  {path:'createpatient',component:Createpatient, canActivate:[DoctorAuthGuardService]},
  {path:'medicinelist', component:Medicinelist, canActivate:[DoctorAuthGuardService]},
  {path:'createmedicine',component:Createmedicine, canActivate:[DoctorAuthGuardService]},
  {path:'updatepatient/:id',component:Updatepatient, canActivate:[DoctorAuthGuardService]},
  {path:'viewpatient/:id',component:Viewpatient, canActivate:[DoctorAuthGuardService]},
  {path:'updatemedicine/:id',component:Updatemedicine, canActivate:[DoctorAuthGuardService]},
  {path:'doctorlogin',component:Doctorlogin},
  {path:'adminlogin',component:Adminlogin}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
