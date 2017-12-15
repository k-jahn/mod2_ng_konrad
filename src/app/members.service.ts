import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

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

  getMembers(congress, chamber): Observable<Member[]> {
    const membersUrl  = `./assets/data/proPublica/${congress}/${chamber}.json`;
    window.console.log('getting members');
    return this.http.get<ApiResponse>(membersUrl)
    .pipe(
        map(r => r.results[0].members.map(m => new Member(m))),
        tap(r => window.console.log('fetched members', r))
      );
  }
}
