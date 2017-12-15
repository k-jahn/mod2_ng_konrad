import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  congress: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      this.congress = Number(p.get('congress'));
      console.log(this.congress);
    });
  }
}
