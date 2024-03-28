import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css'
})
export class ProductDescriptionComponent {
  pArray: any[] = new Array(4);
    constructor(){
    }
}
