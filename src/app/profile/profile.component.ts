import { Component, Input } from '@angular/core';  // decorater, Input ist nicht TS sondern Angular

@Component({
  selector: 'profile',  // css selector for <courses> (we extend html with our own tags)
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  //register Component in Module if not standalone
  @Input() profileName: string = "";
  @Input() profileNumber: number = 0;
  @Input() profileImage: string = "";
  public firstBtnClicked(): void {
    console.log(`${this.profileNumber}. button clicked`);
  }
}
