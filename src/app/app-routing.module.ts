import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './layouts/main/main.component';
import {CategoriesComponent} from './categories/categories.component';
import {DiscussionsComponent} from './discussions/discussions.component';
import {DetailComponent} from './detail/detail.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {SettingsComponent} from './settings/settings.component';
import {UsersComponent} from './users/users.component';
import {AddCategoryComponent} from './add-category/add-category.component';

const catRoute: Routes = [
  {
    path: 'add',
    component: AddCategoryComponent
  }
];

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'categories', component: CategoriesComponent, children: catRoute},
  {path: 'discussions', component: DiscussionsComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
