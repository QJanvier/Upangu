import { MarkdownModule } from 'ngx-markdown';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog-service';
import { BlogPost } from '../../models/post';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [MarkdownModule, NgIf, AsyncPipe],
  templateUrl: './[slug].page.html',
  styleUrl: './[slug].page.scss',
})
export class BlogPostPage implements OnInit {
  post$!: Observable<BlogPost>;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.post$ = this.blogService.getPost(slug);
    });
  }
}