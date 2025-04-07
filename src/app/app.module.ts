import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { GalleryComponent } from "./main/gallery/gallery.component";
import { BioComponent } from "./main/bio/bio.component";
import { HomeComponent } from "./main/home/home.component";
import { ContactComponent } from "./main/contact/contact.component";
import { AppRoutingModule } from "./app-routing.module";
import { SlideshowModule } from "ng-simple-slideshow";
import { VersionComponent } from "./main/version/version.component";
import { AdminPageComponent } from "./auth/admin-page/admin-page.component";
import { HttpClientModule } from "@angular/common/http";
import { AddImagesComponent } from './auth/admin-page/add-images/add-images.component';
import { MoveImagesComponent } from './auth/admin-page/move-images/move-images.component';
import { AdminComponent } from './auth/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    BioComponent,
    HomeComponent,
    ContactComponent,
    VersionComponent,
    AdminPageComponent,
    AddImagesComponent,
    MoveImagesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
