import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicament-item-test',
  templateUrl: './medicament-item-test.component.html',
  styleUrls: ['./medicament-item-test.component.css']
})
export class MedicamentItemTestComponent implements OnInit {
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
