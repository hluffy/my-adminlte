import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/content/index/index.component';
import { Index2Component } from './components/content/index2/index2.component';
import {DataComponent} from './components/content/tables/data/data.component';
import { SimpleComponent } from './components/content/tables/simple/simple.component';
import { WidgetsComponent } from './components/content/widgets/widgets.component';
import { ChartjsComponent } from './components/content/charts/chartjs/chartjs.component';
import { MorrisComponent } from './components/content/charts/morris/morris.component';
import { FlotComponent } from './components/content/charts/flot/flot.component';
import { InlineComponent } from './components/content/charts/inline/inline.component';
import { GeneralComponent } from './components/content/uielements/general/general.component';
import { IconsComponent } from './components/content/uielements/icons/icons.component';
import { ButtonsComponent } from './components/content/uielements/buttons/buttons.component';
import { SlidersComponent } from './components/content/uielements/sliders/sliders.component';
import { TimelineComponent } from './components/content/uielements/timeline/timeline.component';
import { ModalsComponent } from './components/content/uielements/modals/modals.component';
import { GeneralComponent as fGeneralComponent } from './components/content/forms/general/general.component';
import { AdvancedComponent } from './components/content/forms/advanced/advanced.component';
import { EditorsComponent } from './components/content/forms/editors/editors.component';
import { CalendarComponent } from './components/content/calendar/calendar.component';
import { InvoiceComponent } from './components/content/examples/invoice/invoice.component';
import { ProfileComponent } from './components/content/examples/profile/profile.component';
import { LoginComponent } from './components/content/examples/login/login.component';
import { RegisterComponent } from './components/content/examples/register/register.component';
import { LockscreenComponent } from './components/content/examples/lockscreen/lockscreen.component';
import { Error404Component } from './components/content/examples/error404/error404.component';
import { Error500Component } from './components/content/examples/error500/error500.component';
import { BlankpageComponent } from './components/content/examples/blankpage/blankpage.component';
import { PacepageComponent } from './components/content/examples/pacepage/pacepage.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard/index', pathMatch: 'full' },
  {path: 'dashboard', children: [
    {
      path: '', component: IndexComponent
    },
    {
      path: 'index', component: IndexComponent
    },
    {
      path: 'index2', component: Index2Component
    }
  ]},
  {
    path: 'tables', children: [
      {
        path: '', component: DataComponent
      },
      {
        path: 'data', component: DataComponent
      },
      {
        path: 'simple', component: SimpleComponent
      }]
  },
  {
    path: 'widgets', component: WidgetsComponent
  },
  {
    path: 'charts', children: [
      {
        path: '', component: ChartjsComponent
      },
      {
        path: 'chartjs', component: ChartjsComponent
      },
      {
        path: 'morris', component: MorrisComponent
      },
      {
        path: 'flot', component: FlotComponent
      },
      {
        path: 'inline', component: InlineComponent
      }
    ]
  },
  {
    path: 'uielements', children: [
      {
        path: '', component: GeneralComponent
      },
      {
        path: 'general', component: GeneralComponent
      },
      {
        path: 'icons', component: IconsComponent
      },
      {
        path: 'buttons', component: ButtonsComponent
      },
      {
        path: 'sliders', component: SlidersComponent
      },
      {
        path: 'timeline', component: TimelineComponent
      },
      {
        path: 'modals', component: ModalsComponent
      }
    ]
  },
  {
    path: 'forms', children: [
      {
        path: '', component: fGeneralComponent
      },
      {
        path: 'general', component: fGeneralComponent
      },
      {
        path: 'advanced', component: AdvancedComponent
      },
      {
        path: 'editors', component: EditorsComponent
      }
    ]
  },
  {
    path: 'calendar', component: CalendarComponent
  },
  {
    path: 'examples', children: [
      {
        path: 'invoice', component: InvoiceComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'lockscreen', component: LockscreenComponent
      },
      {
        path: 'error404', component: Error404Component
      },
      {
        path: 'error500', component: Error500Component
      },
      {
        path: 'blank', component: BlankpageComponent
      },
      {
        path: 'pace', component: PacepageComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
