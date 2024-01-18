import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search">
        <button type="submit">Search</button>
      </form>
    </section>
    <section class="results">
    </section>
  `,
  styleUrl: './searchBar.component.css'
})
export class searchBarComponent {

}
