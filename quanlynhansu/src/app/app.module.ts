import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Service Imports
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SettingsService } from './services/settings.service';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent /*, canActivate:[AuthGuard]*/},
  { path: 'register', component: RegisterComponent},
  { path: 'add-client', component: AddClientComponent},
  { path: 'login', component: LoginComponent},
  { path: 'client/:id', component: ClientDetailsComponent},
  { path: 'edit-client/:id', component: EditClientComponent},
  { path: 'settings', component: SettingsComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyBtnGEIw7L3Gunw_S31ktykXd0c7S1B-bI",
  authDomain: "ttcmcnm.firebaseapp.com",
  databaseURL: "https://ttcmcnm.firebaseio.com",
  projectId: "ttcmcnm",
  storageBucket: "ttcmcnm.appspot.com",
  messagingSenderId: "665193420731"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule,FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthGuard,SettingsService,
    ClientService,
    FlashMessagesService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
