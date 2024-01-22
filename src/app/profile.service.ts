import { Injectable } from '@angular/core';
// Kind-Komponente will Daten mit Eltern-Komponente austauschen (Dependency Injection)
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor() { }
  profileNames: string[] = ["Tommy", "Joe", "Pascal", "Max"];
  profileImages: string[] = [
    "assets/imgs/profiles/profile1.jpg",
    "assets/imgs/profiles/profile2.jpg",
    "assets/imgs/profiles/profile3.jpg",
    "assets/imgs/profiles/profile4.jpg"
  ];
}
