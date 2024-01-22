import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  profileNames: string[] = ["Tommy", "Joe", "Pascal", "Max"];
  profileImages: string[] = [
    "assets/imgs/profiles/profile1.jpg",
    "assets/imgs/profiles/profile2.jpg",
    "assets/imgs/profiles/profile3.jpg",
    "assets/imgs/profiles/profile4.jpg"
  ];
}