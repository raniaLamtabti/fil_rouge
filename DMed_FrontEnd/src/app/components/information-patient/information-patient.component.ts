import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-patient',
  templateUrl: './information-patient.component.html',
  styleUrls: ['./information-patient.component.css']
})
export class InformationPatientComponent implements OnInit {
  isList = false;
  openTab = 1;
  subList = 3;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
