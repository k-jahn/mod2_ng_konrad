import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MembersService } from './members.service';
import { TableComponent } from './table/table.component';
import { NavComponent } from './nav/nav.component';
import { InfoBoxComponent } from './info-box/info-box.component';
// import { PercentPipe } from './pipes/percent.pipe';
// import { PartyIconPipe } from './pipes/party-icon.pipe';
// import { YearsPipe } from './pipes/years.pipe';
// import { LinkPipe } from './pipes/link.pipe';
// import { PercentVotesToolTipPipe } from './pipes/percent-votes-tool-tip.pipe';
// import { NThPipe } from './pipes/n-th.pipe';
import { TableCellComponent } from './table-cell/table-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavComponent,
    InfoBoxComponent,
    // PercentPipe,
    // PartyIconPipe,
    // YearsPipe,
    // LinkPipe,
    // PercentVotesToolTipPipe,
    // NThPipe,
    TableCellComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
