import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogList } from "../../blog-list/blog-list";
import { BlogForm } from "../../blog-form/blog-form";
import { BlogPost } from '../../models/post';
import { BlogService } from '../../services/blog-service';
@Component({
  standalone: true,
  imports: [RouterOutlet, BlogList, BlogForm],
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.scss',
  selector: 'app-blog-page'
})
export class BlogPage {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {
    this.loadPosts();
  }
//method to load posts from the server
  loadPosts() {
    this.blogService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
//method to add a new post
  addPost(post: BlogPost) {
    this.blogService.createPost(post).subscribe(newPost => {
      this.posts.push(newPost);
    });
  }
}
