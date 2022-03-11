import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./template/footer/footer.component";
import { SecurityModule } from "./security/security.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./template/navbar/navbar.component";
import { HeroComponent } from "./template/hero/hero.component";
import { HomeComponent } from "./template/home/home.component";
import { PageNotFoundComponent } from "./general/page-not-found/page-not-found.component";
import {
  HttpClientModule,
  HttpHeaders,
  HttpClient,
} from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecurityModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
