import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogPost } from './blog.controller';

@Injectable()
export class BlogService {
  private posts: BlogPost[] = [];

  findAll(): BlogPost[] {
    return this.posts;
  }

  findOne(slug: string): BlogPost {
    const post = this.posts.find(post => post.slug === slug);
    if (!post) {
      throw new NotFoundException(`Blog post with slug "${slug}" not found`);
    }
    return post;
  }

  create(post: BlogPost): BlogPost {
    const newPost = {
      ...post,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.posts.push(newPost);
    return newPost;
  }
}