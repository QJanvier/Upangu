import { Component, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule],
  templateUrl: './blog-form.html',
  styleUrl: './blog-form.scss'
})
export class BlogForm {
  _title: string = '';
  content: string = '';
  slug: string = "";

  @Output() newPost = new EventEmitter<BlogPost>();

  get title() {
    return this.title;
  }
  set title(value: string) {
    this._title = value;
    this.slug = value
      .toLowerCase()
      .replace(/ /g, '-')//replace spaces with hyphens
      .replace(/[^\w-]+/g, '') //remove non-word characters except hyphens
      .replace(/[^\w-]+/g, '');
  }

  resetForm() {
    this.title = '';
    this.content = '';
    this.slug = '';
  }
  
  submitPost() {
    if (this.title && this.content) {
      this.newPost.emit({ title: this.title, slug: this.slug ,content: this.content });
      this.title = '';
      this.content = '';
      this.resetForm();
  }
}
}
