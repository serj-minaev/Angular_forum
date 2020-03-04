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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddCategoryComponent } from './add-category/add-category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddPostComponent } from './add-post/add-post.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {ServiceService} from './service.service';

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
    CardComponent,
    AddCategoryComponent,
    PageNotFoundComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    ReactiveFormsModule

  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
