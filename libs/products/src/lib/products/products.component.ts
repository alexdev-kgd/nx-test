import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from '@nx-test/shared-ui';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
