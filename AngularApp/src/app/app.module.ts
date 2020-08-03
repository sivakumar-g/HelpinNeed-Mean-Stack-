import { DataService } from './services/data.service';
import { HelpService } from './services/help.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AgmDirectionModule} from 'agm-direction'; // agm-direction
import { AgmCoreModule } from '@agm/core';



// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { GoogleMapsComponent } from './Components/google-maps/google-maps.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HelpComponent } from './Components/help/help.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './Components/navigation/navigation.component';



const appRoutes: Routes =  [
  {path: '', component: HomeComponent},
 { path: 'help', component: HelpComponent},
 { path: 'dashboard', component: DashboardComponent},
 { path: 'navigate', component: NavigationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GoogleMapsComponent,
    DashboardComponent,
    HelpComponent,
    NavigationComponent
  ],
entryComponents: [GoogleMapsComponent,
  DashboardComponent, NavigationComponent ],

imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(appRoutes , {preloadingStrategy: PreloadAllModules}),
    FormsModule,
    HttpClientModule,
    NgbModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AImaSyDmr3BtoLBuB87gP-tAcuSqPgTMwVodk4E',// 'AIzaSyDmr3BtoLBuB87gP-tAcuSqPgTMwVodk4E',
      libraries: ['places']
    })



  ],
  providers: [HelpService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
