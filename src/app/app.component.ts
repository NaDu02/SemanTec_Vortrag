import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { InfoBoxComponent } from './info-box/info-box.component';
import { ProfileComponent } from './profile/profile.component';
@Component({
  selector: 'app-root', // for index.html
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProfileViewComponent, InfoBoxComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}