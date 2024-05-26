import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ProductListComponent } from '@nx-test/products';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ProductListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inventory';
}
