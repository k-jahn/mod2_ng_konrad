import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import { MembersService } from '../members.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor(
    private membersService: MembersService
  ) { }

  members: Member[];

  ngOnInit() {
    this.membersService.getMembers().subscribe(members => this.members = members);
  }

}
