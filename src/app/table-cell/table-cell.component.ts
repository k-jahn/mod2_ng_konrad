import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})

export class TableCellComponent implements OnInit {
  @Input() val: string;
  @Input() format: string;
  @Input() formatPars: string[];

  constructor() { }

  ngOnInit() {
  }

}
