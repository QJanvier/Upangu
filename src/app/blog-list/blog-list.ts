import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss'
})
export class BlogList {
  posts = [
    { title: 'First Post', slug: 'first-post' },
    { title: 'Second Post', slug: 'second-post' }
  ];
}
