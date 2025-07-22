import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-form',
  imports: [],
  templateUrl: './blog-form.html',
  styleUrl: './blog-form.scss'
})
export class BlogForm {
  title: string = '';
  content: string = '';

  @Output() newPost = new EventEmitter<{ title: string; content: string }>();

  submitPost() {
    if (this.title && this.content) {
      this.newPost.emit({ title: this.title, content: this.content });
      this.title = '';
      this.content = '';
  }
}
}
