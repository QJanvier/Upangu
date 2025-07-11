import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { BlogPost } from '../../models/post';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
    <div *ngIf="post$ | async as post">
      <h2>{{ post.attributes.title }}</h2>
      <analog-markdown [content]="post.content"></analog-markdown>
    </div>
  `,
})
export default class BlogPostPage {
  post$ = injectContent<BlogPost>();
}