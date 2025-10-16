/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
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
    const newPost = { ...post, createdAt: new Date(), updatedAt: new Date() };
    posts.push(newPost);
    return newPost;
  }
  //method to get a single post by slug
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    const post = posts.find(post => post.slug === slug);
    if (!post) {
      throw new NotFoundException(`Blog post with slug ${slug} not found`);
    }
  return post;
  }
}