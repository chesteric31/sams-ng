import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { CategoryComponent } from './category/category.component';
import {CategoryService} from './category/category.service';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';
import { StrengthComponent } from './strength/strength.component';
import {StrengthService} from './strength/strength.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NavComponent,
    FootComponent,
    HomeComponent,
    StrengthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CategoryService,
    StrengthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
