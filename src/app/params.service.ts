import { Injectable } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class ParamsService {
  congress: number;
  chamber: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  setPars(params: ParamMap): void {
    this.congress = Number(params.get('congress'));
    this.chamber = params.get('chamber');
  }
  ngOnInit() {
    this.route.paramMap.subscribe((p) => this.setPars(p));
  }

}
