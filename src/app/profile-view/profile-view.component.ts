import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {
  profileNames: string[] = ["Tommy", "Joe", "Pascal", "Max"];
  profileImages: string[] = [
    "assets/imgs/profiles/profile1.jpg",
    "assets/imgs/profiles/profile2.jpg",
    "assets/imgs/profiles/profile3.jpg",
    "assets/imgs/profiles/profile4.jpg"
  ];
}
