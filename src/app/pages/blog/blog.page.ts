import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.scss',
  selector: 'app-blog-page'
})
export  class BlogPage {}
