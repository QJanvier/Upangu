import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { BlogPost } from '../../models/post';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
    <div *ngIf="post$ | async as post">
      <h2>{{ post.title }}</h2>
      <markdown [content]="post.content"></markdown>
    </div>
  `,
})
export default class BlogPostPage {
  post$ = injectContent<BlogPost>();
}
//MarkdownComponent is not working, trying to define the error