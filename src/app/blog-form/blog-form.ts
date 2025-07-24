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
  title: string = '';
  content: string = '';
  slug: string = "";

  @Output() newPost = new EventEmitter<BlogPost>();

  submitPost() {
    if (this.title && this.content) {
      this.newPost.emit({ title: this.title, slug: this.slug ,content: this.content });
      this.title = '';
      this.content = '';
  }
}
}
