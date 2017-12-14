import { Component, OnInit, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';


@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})

export class TableCellComponent implements OnInit {
  @Input() val: string;
  @Input() format: string;
  @Input() formatPars: string[];
  party: string;
  url: string;



  setVals(): void {
    switch (this.format) {
      case 'party':
        switch (this.val) {
          case 'R':
            this.party = 'Republican';
            this.url = 'assets/images/republican.png';
            break;
          case 'D':
            this.party = 'Democrat';
            this.url = 'assets/images/democrat.png';
            break;
          case 'R':
            this.party = 'Independent';
            this.url = 'assets/images/independent.png';
            break;
        }
        break;


    }
  }

  constructor() { }

  ngOnInit() {
    this.setVals();
  }

}
