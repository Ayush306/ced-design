import { Component } from '@angular/core';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { SelectSpaceComponent } from '../select-space/select-space.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    ProductDescriptionComponent,
    SelectSpaceComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

}
