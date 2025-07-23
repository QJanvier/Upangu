import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogList } from "../../blog-list/blog-list";
import { BlogForm } from "../../blog-form/blog-form";
import { BlogPost } from '../../models/post';
@Component({
  standalone: true,
  imports: [RouterOutlet, BlogList, BlogForm],
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.scss',
  selector: 'app-blog-page'
})
export class BlogPage {
  posts: BlogPost[] = [
    { title: 'First Post', slug: 'first-post', content: 'This is the content of the first post.' },
    { title: 'Second Post', slug: 'second-post', content: 'This is the content of the second post.' },
    { title: 'Third Post', slug: 'third-post', content: 'This is the content of the third post.' }
  ];
  addPost(post: BlogPost) {
    this.posts.push(post);
  }
}
