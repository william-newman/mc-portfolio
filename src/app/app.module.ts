import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { BioComponent } from './main/bio/bio.component';
import { HomeComponent } from './main/home/home.component';
import { ContactComponent } from './main/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import {SlideshowModule} from 'ng-simple-slideshow';
import { VersionComponent } from './main/version/version.component';
import { AdminPageComponent } from './auth/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    BioComponent,
    HomeComponent,
    ContactComponent,
    VersionComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
