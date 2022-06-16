import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { TableItemComponent } from './components/table-item/table-item.component';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { TableItemTestComponent } from './components/table-item-test/table-item-test.component';
import { InformationComponent } from './pages/information/information.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { MaladiesComponent } from './pages/maladies/maladies.component';
import { MaladieItemComponent } from './components/maladie-item/maladie-item.component';
import { MaladieHeadComponent } from './components/maladie-head/maladie-head.component';
import { MedicamentsComponent } from './pages/medicaments/medicaments.component';
import { ControlsComponent } from './pages/controls/controls.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { MaladieItemTestComponent } from './components/maladie-item-test/maladie-item-test.component';
import { ControlItemTestComponent } from './components/control-item-test/control-item-test.component';
import { ControlItemComponent } from './components/control-item/control-item.component';
import { ControlHeadComponent } from './components/control-head/control-head.component';
import { AnalyseHeadComponent } from './components/analyse-head/analyse-head.component';
import { AnalyseItemComponent } from './components/analyse-item/analyse-item.component';
import { AnalyseItemTestComponent } from './components/analyse-item-test/analyse-item-test.component';
import { DashboardPatientComponent } from './components/dashboard-patient/dashboard-patient.component';
import { DashboardDoctorComponent } from './components/dashboard-doctor/dashboard-doctor.component';
import { SidebarPatientComponent } from './components/sidebar-patient/sidebar-patient.component';
import { SidebarDoctorComponent } from './components/sidebar-doctor/sidebar-doctor.component';
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { MedicamentHeadComponent } from './components/medicament-head/medicament-head.component';
import { MedicamentItemComponent } from './components/medicament-item/medicament-item.component';
import { MedicamentItemTestComponent } from './components/medicament-item-test/medicament-item-test.component';
import { InformationPatientComponent } from './components/information-patient/information-patient.component';
import { InformationDoctorComponent } from './components/information-doctor/information-doctor.component';
import { PatientInformationComponent } from './pages/patient-information/patient-information.component';
import { CardPatientComponent } from './components/card-patient/card-patient.component';
import { CardPatientStatisticComponent } from './components/card-patient-statistic/card-patient-statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    CardDashboardComponent,
    TableItemComponent,
    TableHeadComponent,
    TableItemTestComponent,
    InformationComponent,
    AppointmentsComponent,
    DoctorsComponent,
    DoctorCardComponent,
    MaladiesComponent,
    MaladieItemComponent,
    MaladieHeadComponent,
    MedicamentsComponent,
    ControlsComponent,
    AnalysisComponent,
    MaladieItemTestComponent,
    ControlItemTestComponent,
    ControlItemComponent,
    ControlHeadComponent,
    AnalyseHeadComponent,
    AnalyseItemComponent,
    AnalyseItemTestComponent,
    DashboardPatientComponent,
    DashboardDoctorComponent,
    SidebarPatientComponent,
    SidebarDoctorComponent,
    PatientCardComponent,
    PatientsComponent,
    MedicamentHeadComponent,
    MedicamentItemComponent,
    MedicamentItemTestComponent,
    InformationPatientComponent,
    InformationDoctorComponent,
    PatientInformationComponent,
    CardPatientComponent,
    CardPatientStatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
