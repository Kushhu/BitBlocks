import { Routes } from '@angular/router';
import { FormsComponent } from './modules/forms/forms.component';
import { TableComponent } from './modules/table/table.component';
import { HomeComponent } from './modules/home/home.component';
import { TabsComponent } from './modules/tabs/tabs.component';
import { ButtonsComponent } from './modules/buttons/buttons.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/layout/minimal/minimal.component').then(c => c.MinimalComponent),
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'forms', component: FormsComponent },
            { path: 'table', component: TableComponent },
            { path: 'tabs', component: TabsComponent },
            { path: 'buttons', component: ButtonsComponent },
        ]
    }
];
