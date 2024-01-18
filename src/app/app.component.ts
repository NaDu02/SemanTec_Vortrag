import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { searchBarComponent } from './searchBar/searchBar.component';

// Example of a component with a template and a stylesheet from Angular
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// Example from Linus (Angular video)
@Component({
  standalone: true, // standalone: true means that this component is not nested inside another component
  selector: 'app-root', // selector: 'app-root' means that this component can be used as a tag in the HTML
  template: `  
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="assets/images/logo.jpeg" alt="Logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,  // template: `...` is the HTML code for this component || main tag is the main content of the page
      //header tag is the header of the page || img tag is the logo of the page
  styleUrls: ['./app.component.css'], // styleUrls: ['./app.component.css'] is the CSS code for this component
  imports: [searchBarComponent] // imports: [searchBarComponent] means that this component uses the HomeComponent
})

export class AppComponent {
  title = 'SemanTec';
}
