import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";

import { environment } from '../environments/environment';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';


import { CarouselModule } from "ngx-owl-carousel-o";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

import { SharedModule } from "./cyptolanding/shared/shared.module";

import { ExtrapagesModule } from "./extrapages/extrapages.module";

import { LayoutsModule } from "./layouts/layouts.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { initFirebaseBackend } from "./authUtils";
import { CyptolandingComponent } from "./cyptolanding/cyptolanding.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { ErrorInterceptor } from "./core/helpers/error.interceptor";
import { JwtInterceptor } from "./core/helpers/jwt.interceptor";
import { FakeBackendInterceptor } from "./core/helpers/fake-backend";
import { ToastrModule } from "ngx-toastr";
import { StageetudiantComponent } from "./pages/stageetudiant/stageetudiant.component";
import { ProcessusstageetudiantComponent } from './pages/processusstageetudiant/processusstageetudiant.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {NgStepperModule} from 'angular-ng-stepper';




import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthenticationInterceptor } from './helpers_User/authentication.interceptor';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SendingMailComponent } from './forget-password/sending-mail/sending-mail.component';
import { ChangePasswordComponent } from './forget-password/change-password/change-password.component';

import { StageListComponent } from './stage-list/stage-list.component';
import { NourComponent } from './pages/nour/nour.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OffreComponent } from './pages/offrestage/offrestage.component';
import { ListeoffreencadrantComponent } from './pages/listeoffreencadrant/listeoffreencadrant.component';
import { ListeoffreetudiantComponent } from './pages/listeoffreetudiant/listeoffreetudiant.component';
import { DemandeListComponent } from './pages/demande-list/demande-list.component';
import { DemandeDetailsComponent } from './pages/demande-details/demande-details.component';
import { DemandeFormComponent } from './pages/demande-form/demande-form.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgApexchartsModule } from 'ng-apexcharts';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventSchedulerComponent } from './pages/event-scheduler/event-scheduler.component';
import { CalendarModule } from 'primeng/calendar';
import { AddEventDialogComponent } from './add-event-dialog/add-event-dialog.component'; // Import MatDialogModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecaptchaModule } from 'ng-recaptcha';
import { RxStomp } from '@stomp/rx-stomp';


import SockJS from "sockjs-client"
import { Stomp } from "@stomp/stompjs";

if (environment.defaultauth === "firebase") {
  initFirebaseBackend(environment.firebaseConfig);
} else {
  // tslint:disable-next-line: no-unused-expression
  FakeBackendInterceptor;
}

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    CyptolandingComponent,
    ForgetPasswordComponent,
    SendingMailComponent,
    ChangePasswordComponent,
    CyptolandingComponent,
    AppComponent, CyptolandingComponent, StageetudiantComponent, ProcessusstageetudiantComponent,
  UserListComponent,
  AddEventDialogComponent,
    StageListComponent,
        NourComponent,
        //StageListtComponent,
       // ReasonModalComponent
    ListeoffreetudiantComponent,
    OffreComponent,
    DemandeListComponent,
    DemandeDetailsComponent,
    DemandeFormComponent,
    EventSchedulerComponent
  ],

  imports: [
    CdkStepperModule,
    NgStepperModule,
    FormsModule,
    ToastrModule.forRoot(), // Ajoutez ToastrModule.forRoot() dans les imports
    MatDialogModule,
    RouterModule,
    FormsModule,
    
    RecaptchaModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    BrowserModule,
    CdkStepperModule,
    NgStepperModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxPaginationModule,
    NgApexchartsModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    LayoutsModule,
    MatFormFieldModule,
    AppRoutingModule,
    ExtrapagesModule,
    FormsModule,
    CarouselModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    SharedModule,
    ScrollToModule.forRoot(),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FullCalendarModule,
    JwtModule.forRoot({
      config: {

        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8081"]
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true
    },
    // LoaderService,
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  ],
})
export class AppModule {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
  
 }

 export function tokenGetter() {
  return localStorage.getItem("token");
}