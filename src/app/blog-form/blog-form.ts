import { Component, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../models/post';

@Component({
  selector: 'app-blog-form',
  imports: [],
  templateUrl: './blog-form.html',
  styleUrl: './blog-form.scss'
})
export class BlogForm {
  title: string = '';
  content: string = '';

  @Output() newPost = new EventEmitter<BlogPost>();

  submitPost() {
    if (this.title && this.content) {
      this.newPost.emit({ title: this.title, content: this.content });
      this.title = '';
      this.content = '';
  }
}
}
