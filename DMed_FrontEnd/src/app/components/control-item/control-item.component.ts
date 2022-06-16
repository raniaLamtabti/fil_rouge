import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-item',
  templateUrl: './control-item.component.html',
  styleUrls: ['./control-item.component.css']
})
export class ControlItemComponent implements OnInit {
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
