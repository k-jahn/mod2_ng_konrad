import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ParamMap } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'members/:congress/:chamber', component: MembersComponent},
  { path: 'members', redirectTo: '/members/115/senate'},
  { path: 'loyalty/:congress/:chamber', component: LoyaltyComponent},
  { path: 'loyalty', redirectTo: '/loyalty/115/senate'},
  { path: 'attendance/:congress/:chamber', component: AttendanceComponent},
  { path: 'attendance', redirectTo: '/attendance/115/senate'},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
