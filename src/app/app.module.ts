import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';

import { AuthenticationService } from './authentication.service';
import { UserGuardService } from './user-guard.service';

import { Idea } from './idea';

import { VoteDatabaseService } from './vote-database.service';


export const FirebaseConfig = {
    apiKey: "-get-from-Firebase-",
    authDomain: "-get-from-Firebase-",
    databaseURL: "-get-from-Firebase-",
    storageBucket: "-get-from-Firebase-",
    messagingSenderId: "-get-from-Firebase-"
};

export const AppRoutes = [
  { path: 'user', component: UserPageComponent, canActivate: [UserGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '/user' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPageComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [AuthenticationService, UserGuardService, VoteDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
