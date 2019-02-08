import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './helpers/fakebackend';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GlobalsModule } from './components/globals/globals.module';
import { NotImplementedComponent } from './components/globals/not-implemented/not-implemented.component';
import { MaterialModule } from './components/material/material.module';
import { UsersComponent } from './pages/users/users.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { NavigationService } from './services/navigation.service';
import { UserService } from './services/user.service';
import { CatalogService } from './services/catalog.service';
import { AlertService } from './services/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CatalogsComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    GlobalsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    NotImplementedComponent
  ],
  providers: [
    AlertService,
    NavigationService,
    UserService,
    CatalogService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
