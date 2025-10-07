/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

interface BlogPost {
  title: string;
  slug: string;
  content: string;
}

const posts: BlogPost[] = [
  { title: 'First Post', slug: 'first-post', content: 'This is the content of the first post.' },
  { title: 'Second Post', slug: 'second-post', content: 'This is the content of the second post.' },
  { title: 'Third Post', slug: 'third-post', content: 'This is the content of the third post.' }
];

@Controller('api/blog')
export class BlogController {
  @Get()
  findAll(): BlogPost[] {
    return posts;
  }

  @Post()
  create(@Body() post: BlogPost) {
    posts.push(post);
    return post;
  }
  //method to get a single post by slug
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
  return posts.find(post => post.slug === slug);
}
}