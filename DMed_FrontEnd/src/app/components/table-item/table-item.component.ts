import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  showModalTwo = false;
  toggleModalTwo(){
    this.showModalTwo = !this.showModalTwo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
