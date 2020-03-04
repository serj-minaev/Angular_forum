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
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AddPostComponent} from './add-post/add-post.component';
import {AddUserComponent} from './add-user/add-user.component';

const catRoute: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddCategoryComponent
  }
];

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'categories', children: catRoute},
  {path: 'discussions', children: [
      {
        path: '',
        component: DiscussionsComponent,
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: AddPostComponent
      }
    ]},
  {path: 'detail', component: DetailComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'users', children: [
      {
        path: '',
        component: UsersComponent,
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: AddUserComponent
      }
    ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
