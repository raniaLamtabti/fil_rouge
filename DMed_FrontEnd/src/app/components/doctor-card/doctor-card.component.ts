import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
