import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NavbarWidgetComponent } from './widgets/navbar-widget/navbar-widget.component';
import { GalleryViewComponent } from './views/gallery-view/gallery-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { FooterWidgetComponent } from './widgets/footer-widget/footer-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    NavbarWidgetComponent,
    GalleryViewComponent,
    AboutViewComponent,
    FooterWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
