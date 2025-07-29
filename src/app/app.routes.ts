import { Routes } from '@angular/router';
import { FormsComponent } from './modules/forms/forms.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/layout/minimal/minimal.component').then(c => c.MinimalComponent),
        children: [
            { path: 'forms', component: FormsComponent }
        ]
    }
];
