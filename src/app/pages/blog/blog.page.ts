import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogList } from "../../blog-list/blog-list";
import { BlogForm } from "../../blog-form/blog-form";
import { BlogPost } from '../../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  standalone: true,
  imports: [RouterOutlet, BlogList, BlogForm],
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.scss',
  selector: 'app-blog-page'
})
export class BlogPage {
  posts: BlogPost[] = [];
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
//method to load posts from the server
  loadPosts() {
    this.http.get<BlogPost[]>('/api/blog').subscribe(data => {
      this.posts = data;
    });
  }
//method to add a new post
  addPost(post: BlogPost) {
    this.http.post<BlogPost>('/api/blog', post).subscribe(newPost => {
      this.posts.push(newPost);
    });
  }
}
