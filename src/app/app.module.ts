import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/admin/admin.component';
import { FooterComponent } from './modules/admin/layout/footer/footer.component';
import { HeaderComponent } from './modules/admin/layout/header/header.component';
import { MainComponent } from './modules/admin/layout/main/main.component';
import { SideBarComponent } from './modules/admin/layout/side-bar/side-bar.component';
import {AdminModule} from './modules/admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AdminModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
