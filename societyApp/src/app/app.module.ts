import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManageUsersModule } from './manage-users/manage-users.module';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BannerComponent } from './banner/banner.component';
import { ManageUsersService } from './manage-users/manage-users.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import {DataTablesModule} from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    BannerComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManageUsersModule,
    HttpClientModule,
    DataTablesModule

  ],
  providers: [ManageUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
