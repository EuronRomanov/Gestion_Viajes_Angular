import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ShowUsersComponent } from './show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
