import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/blog.page').then(m => m.default),
        title: 'Blog',
    }
];
