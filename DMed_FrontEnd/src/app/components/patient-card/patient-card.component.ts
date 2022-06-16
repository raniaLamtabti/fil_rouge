import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
