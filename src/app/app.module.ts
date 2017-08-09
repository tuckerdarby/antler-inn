import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdToolbarModule, MdMenuModule, MdIconRegistry} from '@angular/material';
import {MdIconModule} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout';

import {NavComponent} from './layout/nav/nav.component';
import {CarouselComponent} from './home/carousel/carousel.component';
import {HomeNavComponent} from './home/home-nav/home-nav.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {EventsComponent} from './events/events.component';
import {GuideComponent} from './guide/guide.component';
import {ReservationsComponent} from './reservations/reservations.component';
import {FooterComponent} from './layout/footer/footer.component';
import {InfoBoxComponent} from './layout/info-box/info-box.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    HomeNavComponent,
    HomeComponent,
    ContactComponent,
    EventsComponent,
    GuideComponent,
    ReservationsComponent,
    FooterComponent,
    InfoBoxComponent
  ],
  imports: [
    FlexLayoutModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIconSet('/src/assets/images/ic_menu_black_24px.svg');
  }
}
