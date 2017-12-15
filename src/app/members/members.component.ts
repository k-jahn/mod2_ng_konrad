import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  congress: number;
  chamber: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  setPars(params: ParamMap): void {
    this.congress = Number(params.get('congress'));
    this.chamber = params.get('chamber');
    console.log(this.congress, this.chamber);
  }
  ngOnInit() {
    this.route.paramMap.subscribe((p) => this.setPars(p));
  }

}
