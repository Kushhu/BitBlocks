import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CodeSnippetComponent } from '@shared/code-snippet/code-snippet.component';
import { TableOfContentComponent } from '@shared/table-of-content/table-of-content.component';
import { BitSeparatorComponent, BitTableModule, BitTabsModule } from '../../../../projects/bitblocks/src/public-api';
// import { BitSeparatorComponent, BitTableModule } from 'bitblocks';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    BitTableModule,
    BitTabsModule,
    TableOfContentComponent,
    CurrencyPipe,
    BitSeparatorComponent,
    CodeSnippetComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  products = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      currency: 'INR',
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      // image: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      rating: 3.9,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      currency: 'USN',
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      // image: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      rating: 4.1,
    },
    {

      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      currency: 'INR',
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      category: "men's clothing",
      // image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      rating: 4.7,
    },
    {

      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      currency: 'AED',
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      category: "men's clothing",
      // image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      rating: 2.1,
    },
    {

      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      currency: 'CAD',
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: 'jewelery',
      // image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      rating: 4.6,
    },
    {
      id: 6,
      title: 'Solid Gold Petite Micropave ',
      price: 168,
      currency: 'CAD',
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      category: 'jewelery',
      // image: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      rating: 3.9,
    },
    {
      id: 7,
      title: 'White Gold Plated Princess',
      price: 9.99,
      currency: 'INR',
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: 'jewelery',
      // image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      rating: 3,
    },
  ];;

  // constructor() {
  //   setTimeout(() => {
  //     this.products = [
  //       {
  //         attribute: 1,
  //         id: 1,
  //         title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //         price: 109.95,
  //         currency: 'INR',
  //         description:
  //           'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //         category: "men's clothing",
  //         // image: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
  //         rating: 3.9,
  //       },
  //       {
  //         attribute: 2,
  //         id: 2,
  //         title: 'Mens Casual Premium Slim Fit T-Shirts ',
  //         price: 22.3,
  //         currency: 'USN',
  //         description:
  //           'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
  //         category: "men's clothing",
  //         // image: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
  //         rating: 4.1,
  //       },
  //       {
  //         attribute: 3,

  //         id: 3,
  //         title: 'Mens Cotton Jacket',
  //         price: 55.99,
  //         currency: 'INR',
  //         description:
  //           'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
  //         category: "men's clothing",
  //         // image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  //         rating: 4.7,
  //       },
  //       {
  //         attribute: 4,

  //         id: 4,
  //         title: 'Mens Casual Slim Fit',
  //         price: 15.99,
  //         currency: 'AED',
  //         description:
  //           'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
  //         category: "men's clothing",
  //         // image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  //         rating: 2.1,
  //       },
  //       {
  //         attribute: 5,

  //         id: 5,
  //         title:
  //           "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //         price: 695,
  //         currency: 'CAD',
  //         description:
  //           "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  //         category: 'jewelery',
  //         // image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  //         rating: 4.6,
  //       },
  //       {
  //         id: 6,
  //         attribute: 6,
  //         title: 'Solid Gold Petite Micropave ',
  //         price: 168,
  //         currency: 'CAD',
  //         description:
  //           'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
  //         category: 'jewelery',
  //         // image: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
  //         rating: 3.9,
  //       },
  //       {
  //         id: 7,
  //         attribute: 7,
  //         title: 'White Gold Plated Princess',
  //         price: 9.99,
  //         currency: 'INR',
  //         description:
  //           "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  //         category: 'jewelery',
  //         // image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  //         rating: 3,
  //       },
  //     ];
  //   }, 2000);
  // }

  snippet = {
    customTable: `<bit-table [data]="products">

  // strictly use respective column name and row content

  <ng-template #bitHeader> 
      <th> Id </th>
      <th> Product </th>              
      <th> Price </th>                
  </ng-template>                      
                                      
  <ng-template #bitRow let-row>       
      <td> {{row.id}} </td>
      <td> {{row.title}} </td>
      <td> {{row.price | currency : row.currency}} </td>
  </ng-template>
  
</bit-table>`,
    basic:
      `<bit-table [columns]="['Id','Product','Price']">
      
  <bit-table-row>
      <bit-table-cell> AX902 </bit-table-cell>
      <bit-table-cell> Electric Bike </bit-table-cell>
      <bit-table-cell> 30,000 </bit-table-cell>
  </bit-table-row>

  <bit-table-row>
      <bit-table-cell> AX903 </bit-table-cell>
      <bit-table-cell> Electric Car </bit-table-cell>
      <bit-table-cell> 2,25,000 </bit-table-cell>
  </bit-table-row>

</bit-table>`,
    customCard: `<bit-table [data]="products" view="cards">

    <ng-template #bitCard let-row>

        <div class="bit-card">
            <div class="flex space-between">
                <h3 class="bit-table-cell">{{row.title}}</h3>
                <p>{{row.price | currency:row.currency}}</p>
            </div>
            <bit-separator></bit-separator>
            <p class="bit-table-cell">{{row.description}}</p>
        </div>
        
    </ng-template>

</bit-table>
`
  }

}
