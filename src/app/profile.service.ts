import { Injectable } from '@angular/core';
// Kind-Komponente will Daten mit Eltern-Komponente austauschen (Dependency Injection)
@Injectable({
  providedIn: 'root' // Daten auf App Ebene verfügbar
})
export class ProfileService {
  constructor() { }
  private profileNames: string[] = ["Tommy", "Joe", "Pascal", "Max"];
  private profileAges: number[] = [20, 26, 23, 29];
  private profileImages: string[] = [
    "assets/imgs/profiles/profile1.jpg",
    "assets/imgs/profiles/profile2.jpg",
    "assets/imgs/profiles/profile3.jpg",
    "assets/imgs/profiles/profile4.jpg"
  ];

  getProfileNames() {
    return this.profileNames;
  }
  getProfileImages() {
    return this.profileImages;
  }
  getProfileAges() {
    return this.profileAges;
  }
}
