import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MembersService } from '../members.service';
import { Member } from '../member';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  congress: number;
  chamber: string;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private membersService: MembersService
  ) {}

  members: {};

  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      this.congress = +p.get('congress');
      this.chamber = p.get('chamber');
      this.membersService.getMembers(this.congress, this.chamber).subscribe(members => this.members = members);
    });
  }

}
