// import from library
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import custom pipes
import { PercentPipe } from './pipes/percent.pipe';
import { YearsPipe } from './pipes/years.pipe';
import { NThPipe } from './pipes/n-th.pipe';

// import custom services
import { MembersService } from './members.service';

// import custom modules
import { AppRoutingModule } from './/app-routing.module';

// import components
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NavComponent } from './nav/nav.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavComponent,
    PercentPipe,
    YearsPipe,
    NThPipe,
    TableCellComponent,
    MembersComponent,
    HomeComponent,
    AttendanceComponent,
    LoyaltyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MembersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
