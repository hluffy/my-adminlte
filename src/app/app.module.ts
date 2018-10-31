import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/content/index/index.component';
import { Index2Component } from './components/content/index2/index2.component';
import { DataComponent } from './components/content/tables/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    IndexComponent,
    Index2Component,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
