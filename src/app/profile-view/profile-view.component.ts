import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [ProfileComponent, CommonModule],
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
  profileNames: string[];
  profileAges: number[];
  profileImages: string[];

  constructor(private profileService: ProfileService) {
    this.profileNames = this.profileService.getProfileNames();
    this.profileImages = this.profileService.getProfileImages();
    this.profileAges = this.profileService.getProfileAges();
  }
}
