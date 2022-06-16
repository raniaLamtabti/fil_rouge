import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicament-item',
  templateUrl: './medicament-item.component.html',
  styleUrls: ['./medicament-item.component.css']
})
export class MedicamentItemComponent implements OnInit {
  showModalMore = false;
  toggleModalMore(){
    this.showModalMore = !this.showModalMore;
  }
  showModalUpdate = false;
  toggleModalUpdate(){
    this.showModalUpdate = !this.showModalUpdate;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
