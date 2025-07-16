import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Admindash } from './admindash/admindash';
import { HttpClientModule } from '@angular/common/http';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    App,
    Admindash,
    Appointment,
    CreateAppointment,
    Homedashboard,
    Doctordash,
    Createpatient,
    Medicinelist,
    Createmedicine,
    Updatepatient,
    Viewpatient,
    Updatemedicine,
    Doctorlogin,
    Adminlogin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
