import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/blog/blog.page').then(m => m.default),
        title: 'Upangu',
    },
    {
        path: 'blog/:slug',
        loadComponent: () => import('./pages/slug/[slug].page').then(m => m.default),
        title: 'Blog Post',
    }
];
