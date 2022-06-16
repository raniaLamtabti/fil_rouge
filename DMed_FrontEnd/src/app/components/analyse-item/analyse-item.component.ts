import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyse-item',
  templateUrl: './analyse-item.component.html',
  styleUrls: ['./analyse-item.component.css']
})
export class AnalyseItemComponent implements OnInit {
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
