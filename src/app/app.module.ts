import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { MainComponent } from './layouts/main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { SettingsComponent } from './settings/settings.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { DetailComponent } from './detail/detail.component';
import { UsersComponent } from './users/users.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoriesComponent,
    DiscussionsComponent,
    SettingsComponent,
    BookmarksComponent,
    DetailComponent,
    UsersComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
