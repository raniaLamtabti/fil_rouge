import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InformationComponent } from './pages/information/information.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { MaladiesComponent } from './pages/maladies/maladies.component';
import { MedicamentsComponent } from './pages/medicaments/medicaments.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { ControlsComponent } from './pages/controls/controls.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { PatientInformationComponent } from './pages/patient-information/patient-information.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'maladies',
    component: MaladiesComponent
  },
  {
    path: 'controls',
    component: ControlsComponent
  },
  {
    path: 'analysis',
    component: AnalysisComponent
  },
  {
    path: 'medicaments',
    component: MedicamentsComponent
  },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'patient',
    component: PatientInformationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
