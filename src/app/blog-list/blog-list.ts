import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlogPost } from '../models/post';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss'
})
export class BlogList {
  @Input() posts: BlogPost[] = [];
  ;
}
