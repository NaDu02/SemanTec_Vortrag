import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [ProfileComponent, CommonModule],
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
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
