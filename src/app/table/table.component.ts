import { Component, OnInit, Input } from '@angular/core';

import { Member } from '../member';
import { MembersService } from '../members.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() congress: number;
  @Input() chamber: string;


  constructor(
    private membersService: MembersService
  ) {}

  members: Member[];

  ngOnInit() {
    this.membersService.getMembers(this.congress, this.chamber).subscribe(members => this.members = members);
  }

}
