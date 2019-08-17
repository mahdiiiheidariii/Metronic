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
import { DetailsComponent } from './modules/admin/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
