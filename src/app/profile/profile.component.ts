import { Component } from '@angular/core';  // decorater

@Component({
  selector: 'app-profile',  // css selector for <courses> (we extend html with our own tags)
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  //register Component in Module
  firstBtnClicked() {
    console.log("First button clicked!");
  }
}
