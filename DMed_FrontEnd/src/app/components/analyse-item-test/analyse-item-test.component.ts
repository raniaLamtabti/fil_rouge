import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyse-item-test',
  templateUrl: './analyse-item-test.component.html',
  styleUrls: ['./analyse-item-test.component.css']
})
export class AnalyseItemTestComponent implements OnInit {
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
