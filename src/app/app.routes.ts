import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./layout/minimal/minimal.component").then(c => c.MinimalComponent)
    }
];
