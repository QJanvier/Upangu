import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogList } from "../../blog-list/blog-list";
@Component({
  standalone: true,
  imports: [RouterOutlet, BlogList],
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.scss',
  selector: 'app-blog-page'
})
export  class BlogPage {}
