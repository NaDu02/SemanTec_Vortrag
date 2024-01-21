import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

// Example of a component with a template and a stylesheet from Angular
 @Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html', //Hier steht, zu welcher HTML-Datei das TypeScript, das die Logik implementiert, gehört.
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent]
})

export class AppComponent {
  title = 'SemanTec';
}
