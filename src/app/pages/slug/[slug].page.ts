import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { BlogPost } from '../../models/post';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  templateUrl: `./[slug].page.html`,
})
export default class BlogPostPage {
  post$ = injectContent<BlogPost>();
}