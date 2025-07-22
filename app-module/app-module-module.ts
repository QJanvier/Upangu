import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from '../src/app/app';
import { BlogForm } from '../src/app/blog-form/blog-form';
import { BlogList } from '../src/app/blog-list/blog-list';
import { BlogPage } from '../src/app/pages/blog/blog.page';



@NgModule({
  declarations: [
    App,
    BlogForm,
    BlogList,
    BlogPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
