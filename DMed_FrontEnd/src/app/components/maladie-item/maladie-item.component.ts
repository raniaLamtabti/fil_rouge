import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maladie-item',
  templateUrl: './maladie-item.component.html',
  styleUrls: ['./maladie-item.component.css']
})
export class MaladieItemComponent implements OnInit {
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
