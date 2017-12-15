import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ParamMap } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'members', component: MembersComponent},
  { path: 'loyalty', component: LoyaltyComponent},
  { path: 'attendance', component: AttendanceComponent},
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
