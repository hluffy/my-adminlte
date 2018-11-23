import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// 国际化
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/content/index/index.component';
import { Index2Component } from './components/content/index2/index2.component';
import { DataComponent } from './components/content/tables/data/data.component';
import { WidgetsComponent } from './components/content/widgets/widgets.component';
import { ChartsComponent } from './components/content/charts/charts.component';
import { ChartjsComponent } from './components/content/charts/chartjs/chartjs.component';
import { MorrisComponent } from './components/content/charts/morris/morris.component';
import { FlotComponent } from './components/content/charts/flot/flot.component';
import { InlineComponent } from './components/content/charts/inline/inline.component';
import { UielementsComponent } from './components/content/uielements/uielements.component';
import { GeneralComponent } from './components/content/uielements/general/general.component';
import { IconsComponent } from './components/content/uielements/icons/icons.component';
import { ButtonsComponent } from './components/content/uielements/buttons/buttons.component';
import { SlidersComponent } from './components/content/uielements/sliders/sliders.component';
import { TimelineComponent } from './components/content/uielements/timeline/timeline.component';
import { ModalsComponent } from './components/content/uielements/modals/modals.component';
import { FormsComponent } from './components/content/forms/forms.component';
import { AdvancedComponent } from './components/content/forms/advanced/advanced.component';
import { EditorsComponent } from './components/content/forms/editors/editors.component';
import { GeneralComponent as fGeneralComponent} from './components/content/forms/general/general.component';
import { SimpleComponent } from './components/content/tables/simple/simple.component';
import { CalendarComponent } from './components/content/calendar/calendar.component';
import { ExamplesComponent } from './components/content/examples/examples.component';
import { InvoiceComponent } from './components/content/examples/invoice/invoice.component';
import { ProfileComponent } from './components/content/examples/profile/profile.component';
import { LoginComponent } from './components/content/examples/login/login.component';
import { RegisterComponent } from './components/content/examples/register/register.component';
import { LockscreenComponent } from './components/content/examples/lockscreen/lockscreen.component';
import { Error404Component } from './components/content/examples/error404/error404.component';
import { Error500Component } from './components/content/examples/error500/error500.component';
import { BlankpageComponent } from './components/content/examples/blankpage/blankpage.component';
import { PacepageComponent } from './components/content/examples/pacepage/pacepage.component';

// 导出加载函数
export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    IndexComponent,
    Index2Component,
    DataComponent,
    WidgetsComponent,
    ChartsComponent,
    ChartjsComponent,
    MorrisComponent,
    FlotComponent,
    InlineComponent,
    UielementsComponent,
    GeneralComponent,
    IconsComponent,
    ButtonsComponent,
    SlidersComponent,
    TimelineComponent,
    ModalsComponent,
    FormsComponent,
    AdvancedComponent,
    EditorsComponent,
    fGeneralComponent,
    SimpleComponent,
    CalendarComponent,
    ExamplesComponent,
    InvoiceComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    LockscreenComponent,
    Error404Component,
    Error500Component,
    BlankpageComponent,
    PacepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateHttpLoader),
          deps: [ HttpClient ]
      }
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
