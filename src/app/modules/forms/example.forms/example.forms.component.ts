import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { BitDropdownModule, BitFormService, BitFormsModule, BitSeparatorComponent } from 'bitblocks';
import { Observable, of } from 'rxjs';
import {
    BitDropdownModule,
    BitFormService,
    BitFormsModule,
    BitSeparatorComponent,
} from '../../../../../projects/bitblocks/src/public-api';
import { CodeSnippetComponent } from '../../../core/shared/code-snippet/code-snippet.component';
import { Form } from './form.model';

@Component({
    selector: 'app-example-forms',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgOptimizedImage,
        BitFormsModule,
        CommonModule,
        CodeSnippetComponent,
        BitDropdownModule,
        BitSeparatorComponent,
    ],
    templateUrl: './example.forms.component.html',
    styleUrl: './example.forms.component.css',
})
export class ExampleFormsComponent {
    _bitHelper = inject(BitFormService);

    formModel = Form;

    BitRegExpression = {
        AlphabetsOnly: /^[A-Za-z ]+$/,
        Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    };

    categories = ['Fruits', 'Vegetables', 'Grains', 'Dairy', 'Meat', 'Seafood', 'Beverages'];

    users$: Observable<any> = of([
        {
            id: 1,
            name: 'Aarav Sharma',
            email: 'aarav.sharma@example.com',
            age: 28,
            country: 'India',
        },
        {
            id: 2,
            name: 'Emma Johnson',
            email: 'emma.johnson@example.com',
            age: 32,
            country: 'USA',
        },
        {
            id: 3,
            name: 'Liam Smith',
            email: 'liam.smith@example.com',
            age: 25,
            country: 'UK',
        },
        {
            id: 4,
            name: 'Sophia Lee',
            email: 'sophia.lee@example.com',
            age: 29,
            country: 'Canada',
        },
        {
            id: 5,
            name: 'Ethan Brown',
            email: 'ethan.brown@example.com',
            age: 35,
            country: 'Australia',
        },
        {
            id: 6,
            name: 'Isabella Garcia',
            email: 'isabella.garcia@example.com',
            age: 27,
            country: 'Spain',
        },
        {
            id: 7,
            name: 'Noah Kim',
            email: 'noah.kim@example.com',
            age: 31,
            country: 'South Korea',
        },
        {
            id: 8,
            name: 'Mia Wang',
            email: 'mia.wang@example.com',
            age: 26,
            country: 'China',
        },
        {
            id: 9,
            name: 'Olivia Rossi',
            email: 'lucas.martinez@example.com',
            age: 30,
            country: 'Mexico',
        },
        {
            id: 10,
            name: 'Olivia Rossi',
            email: 'olivia.rossi@example.com',
            age: 33,
            country: 'Italy',
        },
    ]);
    constructor() {

    }
}
