import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  select: string;
  chamber = 'house';
  congress: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  changeSelect(): void {
    console.log(this.route);
    this.router.navigate(['../../113/house'], { relativeTo: this.route });
  }

  ngOnInit() {
    // this.route.paramMap.subscribe((p) => {
    //   this.congress = +p.get('congress');
    //   this.chamber = p.get('chamber');
    // });
  }


}
