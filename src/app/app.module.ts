import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {UsersService} from "./users/users.service";

export const firebaseConfig =  {
    apiKey: "AIzaSyA4IYWhVwblEMaW6CMdhwAZqK7NT4_zPRs",
        authDomain: "test-project-ng4.firebaseapp.com",
        databaseURL: "https://test-project-ng4.firebaseio.com",
        projectId: "test-project-ng4",
        storageBucket: "test-project-ng4.appspot.com",
        messagingSenderId: "1063977215784"
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
