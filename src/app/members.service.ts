import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from './member';

interface ApiResponse {
  results: ApiResults[];
}
interface ApiResults {
  members: Array<Object>;
}

@Injectable()
export class MembersService {
  constructor(
    private http: HttpClient
  ) { }

  private membersUrl = './assets/data/ProPublica/113/house.json';

  getMembers(): Observable<Member[]> {
    return this.http.get<ApiResponse>(this.membersUrl)
      .pipe(
        map(r => r.results[0].members.map(m => new Member(m))),
        tap(re => window.console.log('fetched members', re))
      );
  }

}
