import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/blog/blog.page').then(m => m.BlogPage),
        title: 'Upangu',
        children: [
            
        ],
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage),
        title: 'About Me',
    },
    {
        path: ':slug',
        loadComponent: () => import('./pages/slug/[slug].page').then(m => m.BlogPostPage),
        title: 'Blog Post',
    },
];
