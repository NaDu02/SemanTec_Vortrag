import { Component, Input } from '@angular/core';  // decorater, Input ist nicht TS sondern Angular
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-profile',  // css selector for <courses> (we extend html with our own tags)
  standalone: true,  //register Component in Module if not standalone
  imports: [MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() profileName: string = "";
  @Input() profileNumber: number = 0;
  @Input() profileImage: string = "";
  public firstBtnClicked(): void {
    console.log(`${this.profileNumber}. button clicked`);
  }
}
